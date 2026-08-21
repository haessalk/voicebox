import { Link } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';
import styles from './Header.module.css';

const ORG_NAME = '위스테이별내사회적협동조합';

export default function Header() {
  const { user, loading } = useAuth();
  const avatarUrl = user?.user_metadata?.avatar_url || user?.user_metadata?.picture;

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        <img className={styles.icon} src="/icons/icon-192.png" alt="" />
        <span className={styles.orgName}>{ORG_NAME}</span>
      </Link>

      {!loading && (
        <div className={styles.actions}>
          {user ? (
            <Link to="/mypage" aria-label="마이페이지">
              {avatarUrl ? (
                <img className={styles.avatar} src={avatarUrl} alt="" />
              ) : (
                <div className={styles.avatar} />
              )}
            </Link>
          ) : (
            <>
              <Link to="/login" className={`btn-secondary ${styles.authBtn}`}>
                로그인
              </Link>
              <Link to="/signup" className={`btn-secondary ${styles.authBtn}`}>
                회원가입
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
