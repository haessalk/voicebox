import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';
import { useToast } from './ToastContext';

const AuthContext = createContext(null);

// 첫 로그인(=가입 직후)인지 판단하는 기준: 계정 생성 시각과 이번 로그인 시각이
// 거의 같으면(10초 이내) 방금 가입한 것으로 본다.
const NEW_USER_THRESHOLD_MS = 10_000;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { showToast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);

      if (event === 'SIGNED_IN' && session?.user) {
        const createdAt = new Date(session.user.created_at).getTime();
        const lastSignInAt = new Date(session.user.last_sign_in_at).getTime();
        const isNewUser = Math.abs(lastSignInAt - createdAt) < NEW_USER_THRESHOLD_MS;
        showToast(isNewUser ? '가입을 마쳤습니다. 환영해요!' : '로그인되었습니다.');
        navigate('/');
      }

      if (event === 'SIGNED_OUT') {
        navigate('/');
      }
    });

    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function signInWithGoogle() {
    return supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin + '/' },
    });
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
