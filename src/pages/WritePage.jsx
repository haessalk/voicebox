import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhotoUpload from '../components/PhotoUpload';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../lib/AuthContext';
import { CATEGORIES } from '../data/posts';
import styles from './WritePage.module.css';

export default function WritePage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [photo, setPhoto] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState(null);

  function handlePhotoChange(file) {
    if (photo?.previewUrl) URL.revokeObjectURL(photo.previewUrl);
    setPhoto(file ? { file, previewUrl: URL.createObjectURL(file) } : null);
  }

  async function handleAiDraft() {
    if (!content.trim() || aiLoading) return;
    setAiLoading(true);
    setAiError(null);

    try {
      const res = await fetch('/api/generate-draft', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ draft: content }),
      });
      const data = await res.json();

      if (!res.ok) {
        setAiError(data.error || 'AI 작성도우미를 사용하지 못했어요.');
        return;
      }

      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
      setErrors({});
    } catch {
      setAiError('AI 작성도우미를 사용하지 못했어요. 잠시 후 다시 시도해 주세요.');
    } finally {
      setAiLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = {};
    if (!title.trim()) nextErrors.title = '제목을 입력해 주세요.';
    if (!content.trim()) nextErrors.content = '내용을 입력해 주세요.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError(null);

    let photoUrl = null;
    if (photo) {
      const ext = photo.file.name.split('.').pop();
      const path = `${crypto.randomUUID()}.${ext}`;
      const { error: uploadError } = await supabase.storage
        .from('photos')
        .upload(path, photo.file);

      if (uploadError) {
        setSubmitting(false);
        setSubmitError('사진을 올리지 못했어요. 잠시 후 다시 시도해 주세요.');
        return;
      }

      photoUrl = supabase.storage.from('photos').getPublicUrl(path).data.publicUrl;
    }

    const author = user.user_metadata?.full_name || user.user_metadata?.name || user.email;

    const { error } = await supabase.from('posts').insert({
      title: title.trim(),
      content: content.trim(),
      author,
      category,
      photo_url: photoUrl,
      user_id: user.id,
    });

    setSubmitting(false);

    if (error) {
      setSubmitError('저장하지 못했어요. 잠시 후 다시 시도해 주세요.');
      return;
    }

    navigate('/');
  }

  return (
    <div className={styles.content}>
      <h1 className={styles.pageTitle}>의견 쓰기</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label className="field-label" htmlFor="title">
            제목
          </label>
          <input
            id="title"
            className={`input-field ${errors.title ? 'error' : ''}`}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="예: 골목 가로등이 계속 꺼져 있어요"
          />
          {errors.title && <p className="field-error-text">{errors.title}</p>}
        </div>

        <div className={styles.field}>
          <div className={styles.fieldHeader}>
            <label className="field-label" htmlFor="content">
              내용
            </label>
            <button
              type="button"
              className={`btn-secondary ${styles.aiButton}`}
              onClick={handleAiDraft}
              disabled={!content.trim() || aiLoading}
            >
              {aiLoading ? '다듬는 중…' : 'AI 작성도우미'}
            </button>
          </div>
          <textarea
            id="content"
            className={`textarea-field ${errors.content ? 'error' : ''}`}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="겪은 불편이나 제안을 짧게라도 적어주세요. AI 작성도우미로 다듬을 수 있어요."
          />
          {errors.content && <p className="field-error-text">{errors.content}</p>}
          {aiError && <p className="field-error-text">{aiError}</p>}
        </div>

        <div className={styles.field}>
          <span className="field-label">분야</span>
          <div className={styles.categoryRow}>
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                className={`chip-category ${category === c ? 'active' : ''}`}
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.field}>
          <span className="field-label">사진 첨부</span>
          <PhotoUpload photo={photo} onChange={handlePhotoChange} />
        </div>

        {submitError && <p className="field-error-text">{submitError}</p>}

        <div className={styles.actions}>
          <button type="button" className="btn-secondary" onClick={() => navigate(-1)}>
            취소
          </button>
          <button type="submit" className="btn-primary" disabled={submitting}>
            {submitting ? '등록 중…' : '등록'}
          </button>
        </div>
      </form>
    </div>
  );
}
