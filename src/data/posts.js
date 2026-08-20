export const CATEGORIES = ['시설관리', '환경미화', '생활편의', '주차', '안전', '소음'];

export const STATUS_FILTERS = ['전체', '접수', '처리중', '완료'];

export const STATUS_SLUG = {
  접수: 'received',
  처리중: 'progress',
  완료: 'done',
};

export const POSTS = [
  {
    id: 1,
    title: '골목 가로등이 계속 꺼져 있어요',
    content:
      '저녁마다 골목 초입 가로등이 켜지지 않아 밤에 다니기 무서워요. 벌써 일주일째 이런 상태예요. 특히 퇴근 시간대에 아이들과 어르신들이 많이 다니는 길이라 빠른 점검이 필요할 것 같습니다.',
    status: '접수',
    category: '시설관리',
    author: '3동 김OO',
    createdAt: '2026-08-12T19:20:00',
    hasPhoto: true,
  },
  {
    id: 2,
    title: '놀이터 그네가 삐걱거려요',
    content:
      '아이들이 타는 그네 사슬에서 계속 삐걱거리는 소리가 나요. 안전 점검이 필요할 것 같아요. 혹시 사슬이 끊어지기라도 하면 크게 다칠 수 있으니 우선순위로 봐주셨으면 합니다.',
    status: '처리중',
    category: '시설관리',
    author: '7동 박OO',
    createdAt: '2026-08-10T09:05:00',
    hasPhoto: true,
  },
  {
    id: 3,
    title: '분리수거장에 안내판을 달아주세요',
    content:
      '품목별로 어디에 버려야 하는지 헷갈려하는 입주민이 많아요. 안내판이 있으면 훨씬 깔끔하게 분리배출이 될 것 같습니다. 그림으로 된 안내판이면 더 좋을 것 같아요.',
    status: '완료',
    category: '환경미화',
    author: '1동 이OO',
    createdAt: '2026-08-03T14:40:00',
    hasPhoto: true,
  },
  {
    id: 4,
    title: '단지 내 자전거 거치대가 부족해요',
    content:
      '출퇴근 시간마다 거치대가 꽉 차서 자전거를 세울 곳이 없어요. 몇 자리만 더 늘려주시면 좋겠어요. 특히 5동, 6동 쪽 거치대가 항상 만석입니다.',
    status: '접수',
    category: '생활편의',
    author: '5동 최OO',
    createdAt: '2026-08-15T08:10:00',
    hasPhoto: true,
  },
  {
    id: 5,
    title: '경로당 앞 벤치를 늘려주세요',
    content:
      '어르신들이 앉아 쉴 곳이 부족합니다. 벤치를 두 개 정도 더 놓아주시면 감사하겠습니다. 그늘막도 같이 있으면 여름에 더 편하게 이용하실 수 있을 것 같아요.',
    status: '완료',
    category: '생활편의',
    author: '2동 정OO',
    createdAt: '2026-07-28T11:00:00',
    hasPhoto: true,
  },
];

export function formatDateTime(iso) {
  const d = new Date(iso);
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())} ${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}`;
}
