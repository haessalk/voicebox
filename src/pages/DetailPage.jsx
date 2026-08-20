import { Link, useParams } from 'react-router-dom';
import StatusBadge from '../components/StatusBadge';
import PhotoIcon from '../components/PhotoIcon';
import { POSTS, formatDateTime } from '../data/posts';
import styles from './DetailPage.module.css';

export default function DetailPage() {
  const { id } = useParams();
  const post = POSTS.find((p) => String(p.id) === id);

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

      {post.hasPhoto && (
        <div className={styles.photo}>
          <PhotoIcon size={36} />
        </div>
      )}

      <div className={styles.top}>
        <StatusBadge status={post.status} />
        <span className="chip-category">{post.category}</span>
      </div>

      <h1 className={styles.title}>{post.title}</h1>

      <div className={styles.meta}>
        {post.author} · {formatDateTime(post.createdAt)}
      </div>

      <p className={styles.body}>{post.content}</p>
    </div>
  );
}
