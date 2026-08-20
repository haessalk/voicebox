import { useMemo, useState } from 'react';
import Hero from '../components/Hero';
import StatusFilterTabs from '../components/StatusFilterTabs';
import CategoryFilter from '../components/CategoryFilter';
import PostCard from '../components/PostCard';
import { POSTS } from '../data/posts';
import styles from './HomePage.module.css';

export default function HomePage() {
  const [status, setStatus] = useState('전체');
  const [category, setCategory] = useState('전체');

  const filtered = useMemo(
    () =>
      POSTS.filter(
        (post) =>
          (status === '전체' || post.status === status) &&
          (category === '전체' || post.category === category)
      ),
    [status, category]
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

        {filtered.length > 0 ? (
          <div className={styles.grid}>
            {filtered.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className={styles.empty}>해당하는 의견이 아직 없어요.</p>
        )}
      </div>
    </>
  );
}
