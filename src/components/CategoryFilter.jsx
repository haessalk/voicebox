import { CATEGORIES } from '../data/posts';
import styles from './CategoryFilter.module.css';

const OPTIONS = ['전체', ...CATEGORIES];

export default function CategoryFilter({ value, onChange }) {
  return (
    <div className={styles.row}>
      {OPTIONS.map((category) => (
        <button
          key={category}
          type="button"
          className={`chip-category ${value === category ? 'active' : ''}`}
          aria-pressed={value === category}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
