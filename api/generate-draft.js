const MODEL = 'gemini-3.5-flash-lite';
const CATEGORIES = ['시설관리', '환경미화', '생활편의', '주차', '안전', '소음'];

function buildPrompt(draft) {
  return `당신은 아파트 단지 주민들이 남기는 생활 불편·제안 글을 다듬어주는 도우미입니다.
아래는 주민이 짧게 적은 메모입니다. 이 내용을 바탕으로 실제 민원 게시판에 올릴 수 있는
정중하고 명확한 글로 다듬어 주세요.

규칙:
- 메모에 없는 사실을 지어내지 말고, 메모 내용만 바탕으로 자연스럽게 풀어 쓰세요.
- 제목은 15자 내외 한 줄로, 무엇이 문제인지 바로 알 수 있게 쓰세요.
- 본문은 2~4문장, 정중한 문체로 쓰세요.
- 분야는 다음 중 하나만 정확히 골라 주세요: ${CATEGORIES.join(', ')}

주민이 적은 메모:
"""
${draft}
"""`;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const draft = (req.body?.draft ?? '').trim();
  console.log('DEBUG typeof req.body:', typeof req.body, 'draft:', JSON.stringify(draft));
  if (!draft) {
    res.status(400).json({ error: '짧게라도 내용을 적어주셔야 다듬을 수 있어요.' });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: '서버에 AI 키가 설정되어 있지 않아요.' });
    return;
  }

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: buildPrompt(draft) }] }],
          generationConfig: {
            responseMimeType: 'application/json',
            responseSchema: {
              type: 'OBJECT',
              properties: {
                title: { type: 'STRING' },
                content: { type: 'STRING' },
                category: { type: 'STRING', enum: CATEGORIES },
              },
              required: ['title', 'content', 'category'],
            },
          },
        }),
      }
    );

    if (!geminiRes.ok) {
      const detail = await geminiRes.text();
      console.error('Gemini API error:', geminiRes.status, detail);
      res.status(502).json({ error: 'AI 요청이 실패했어요. 잠시 후 다시 시도해 주세요.' });
      return;
    }

    const data = await geminiRes.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    const parsed = JSON.parse(text);

    res.status(200).json({
      title: String(parsed.title ?? '').trim(),
      content: String(parsed.content ?? '').trim(),
      category: CATEGORIES.includes(parsed.category) ? parsed.category : CATEGORIES[0],
    });
  } catch (err) {
    console.error('generate-draft error:', err);
    res.status(500).json({ error: 'AI 요청 중 문제가 생겼어요. 잠시 후 다시 시도해 주세요.' });
  }
}
