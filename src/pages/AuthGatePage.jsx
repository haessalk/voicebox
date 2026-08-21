import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import ConfirmDialog from '../components/ConfirmDialog';
import GoogleIcon from '../components/GoogleIcon';
import { useAuth } from '../lib/AuthContext';
import styles from './AuthGatePage.module.css';

const CONFIRM_MESSAGE =
  '구글 계정으로 계속합니다. 처음이면 회원가입이, 이미 회원이면 로그인이 진행됩니다. 계속할까요?';

export default function AuthGatePage({ mode }) {
  const { user, signInWithGoogle } = useAuth();
  const [confirming, setConfirming] = useState(false);
  const [error, setError] = useState(null);

  if (user) return <Navigate to="/" replace />;

  const isSignup = mode === 'signup';

  async function handleConfirm() {
    setConfirming(false);
    setError(null);
    const { error } = await signInWithGoogle();
    if (error) setError('구글 인증을 시작하지 못했어요. 잠시 후 다시 시도해 주세요.');
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <img className={styles.icon} src="/icons/icon-192.png" alt="" />
        <h1 className={styles.title}>{isSignup ? '회원가입' : '로그인'}</h1>
        <p className={styles.desc}>
          {isSignup
            ? '구글 계정으로 우리 동네 목소리함에 가입해요.'
            : '구글 계정으로 로그인하고 계속해요.'}
        </p>

        <button
          type="button"
          className={`btn-google ${styles.googleBtn}`}
          onClick={() => setConfirming(true)}
        >
          <GoogleIcon />
          Google로 계속하기
        </button>

        {error && <p className={`field-error-text ${styles.error}`}>{error}</p>}

        <span className={styles.switchLink}>
          {isSignup ? (
            <>
              이미 계정이 있으신가요? <Link to="/login">로그인</Link>
            </>
          ) : (
            <>
              아직 계정이 없으신가요? <Link to="/signup">회원가입</Link>
            </>
          )}
        </span>
      </div>

      {confirming && (
        <ConfirmDialog
          message={CONFIRM_MESSAGE}
          confirmLabel="계속하기"
          onConfirm={handleConfirm}
          onCancel={() => setConfirming(false)}
        />
      )}
    </div>
  );
}
