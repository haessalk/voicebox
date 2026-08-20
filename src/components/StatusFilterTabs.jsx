import { STATUS_FILTERS } from '../data/posts';
import styles from './StatusFilterTabs.module.css';

export default function StatusFilterTabs({ value, onChange }) {
  return (
    <div className={styles.row} role="tablist" aria-label="처리 상태 필터">
      {STATUS_FILTERS.map((status) => (
        <button
          key={status}
          type="button"
          data-status={status}
          className={`${styles.chip} ${value === status ? styles.active : ''}`}
          aria-pressed={value === status}
          onClick={() => onChange(status)}
        >
          {status}
        </button>
      ))}
    </div>
  );
}
