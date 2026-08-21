import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { useAuth } from '../lib/AuthContext';
import { supabase } from '../lib/supabaseClient';
import styles from './MyPage.module.css';

const TABS = ['내가 쓴 글', '내 정보'];

export default function MyPage() {
  const { user, signOut } = useAuth();
  const [tab, setTab] = useState(TABS[0]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function loadMyPosts() {
      setLoading(true);
      const { data } = await supabase
        .from('posts')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      if (!ignore) {
        setPosts(data ?? []);
        setLoading(false);
      }
    }

    loadMyPosts();
    return () => {
      ignore = true;
    };
  }, [user.id]);

  const name = user.user_metadata?.full_name || user.user_metadata?.name || '이름 없음';
  const avatarUrl = user.user_metadata?.avatar_url || user.user_metadata?.picture;

  return (
    <div className={styles.content}>
      <div className={styles.tabs} role="tablist">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            className={`${styles.tab} ${tab === t ? styles.active : ''}`}
            aria-selected={tab === t}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === '내가 쓴 글' && (
        <>
          {loading && <p className={styles.empty}>불러오는 중이에요…</p>}
          {!loading && posts.length === 0 && (
            <p className={styles.empty}>아직 쓴 글이 없어요.</p>
          )}
          {!loading && posts.length > 0 && (
            <div className={styles.grid}>
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </>
      )}

      {tab === '내 정보' && (
        <div className={styles.profile}>
          {avatarUrl ? (
            <img className={styles.avatar} src={avatarUrl} alt="" />
          ) : (
            <div className={styles.avatar} />
          )}
          <div className={styles.infoList}>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>이름</span>
              <span className={styles.infoValue}>{name}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>이메일</span>
              <span className={styles.infoValue}>{user.email}</span>
            </div>
          </div>
          <button type="button" className="btn-secondary" onClick={signOut}>
            로그아웃
          </button>
        </div>
      )}
    </div>
  );
}
