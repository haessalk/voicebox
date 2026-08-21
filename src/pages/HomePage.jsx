import { useEffect, useMemo, useState } from 'react';
import Hero from '../components/Hero';
import StatusFilterTabs from '../components/StatusFilterTabs';
import CategoryFilter from '../components/CategoryFilter';
import PostCard from '../components/PostCard';
import { supabase } from '../lib/supabaseClient';
import styles from './HomePage.module.css';

export default function HomePage() {
  const [status, setStatus] = useState('전체');
  const [category, setCategory] = useState('전체');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function loadPosts() {
      setLoading(true);
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (ignore) return;
      if (error) {
        setError('의견 목록을 불러오지 못했어요.');
      } else {
        setPosts(data);
        setError(null);
      }
      setLoading(false);
    }

    loadPosts();
    return () => {
      ignore = true;
    };
  }, []);

  const filtered = useMemo(
    () =>
      posts.filter(
        (post) =>
          (status === '전체' || post.status === status) &&
          (category === '전체' || post.category === category)
      ),
    [posts, status, category]
  );

  return (
    <>
      <Hero />
      <div className={styles.content}>
        <div className={styles.filters}>
          <div>
            <div className={styles.filterLabel}>처리 상태</div>
            <StatusFilterTabs value={status} onChange={setStatus} />
          </div>
          <div>
            <div className={styles.filterLabel}>분야</div>
            <CategoryFilter value={category} onChange={setCategory} />
          </div>
        </div>

        {loading && <p className={styles.empty}>불러오는 중이에요…</p>}
        {!loading && error && <p className={styles.empty}>{error}</p>}
        {!loading && !error && filtered.length === 0 && (
          <p className={styles.empty}>해당하는 의견이 아직 없어요.</p>
        )}
        {!loading && !error && filtered.length > 0 && (
          <div className={styles.grid}>
            {filtered.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
