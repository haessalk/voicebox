import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import StatusBadge from '../components/StatusBadge';
import { supabase } from '../lib/supabaseClient';
import { formatDateTime } from '../data/posts';
import styles from './DetailPage.module.css';

export default function DetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function loadPost() {
      setLoading(true);
      const { data } = await supabase.from('posts').select('*').eq('id', id).maybeSingle();
      if (!ignore) {
        setPost(data);
        setLoading(false);
      }
    }

    loadPost();
    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <div className={styles.content}>
        <p className={styles.notFound}>불러오는 중이에요…</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className={styles.content}>
        <p className={styles.notFound}>글을 찾을 수 없어요.</p>
        <Link to="/" className={styles.back}>
          ← 목록으로
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.content}>
      <Link to="/" className={styles.back}>
        ← 목록으로
      </Link>

      {post.photo_url && (
        <div className={styles.photo}>
          <img
            src={post.photo_url}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
          />
        </div>
      )}

      <div className={styles.top}>
        <StatusBadge status={post.status} />
        <span className="chip-category">{post.category}</span>
      </div>

      <h1 className={styles.title}>{post.title}</h1>

      <div className={styles.meta}>
        {post.author} · {formatDateTime(post.created_at)}
      </div>

      <p className={styles.body}>{post.content}</p>
    </div>
  );
}
