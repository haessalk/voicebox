import { STATUS_SLUG } from '../data/posts';

export default function StatusBadge({ status }) {
  return <span className={`badge badge-${STATUS_SLUG[status]}`}>{status}</span>;
}
