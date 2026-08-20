import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const ORG_NAME = '위스테이별내사회적협동조합';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        <img className={styles.icon} src="/icons/icon-192.png" alt="" />
        <span className={styles.orgName}>{ORG_NAME}</span>
      </Link>
    </header>
  );
}
