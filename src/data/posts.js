export const CATEGORIES = ['시설관리', '환경미화', '생활편의', '주차', '안전', '소음'];

export const STATUS_FILTERS = ['전체', '접수', '처리중', '완료'];

export const STATUS_SLUG = {
  접수: 'received',
  처리중: 'progress',
  완료: 'done',
};

export function formatDateTime(iso) {
  const d = new Date(iso);
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())} ${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}`;
}
