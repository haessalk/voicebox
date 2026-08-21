import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge';
import PhotoIcon from './PhotoIcon';
import { formatDateTime } from '../data/posts';
import styles from './PostCard.module.css';

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`} className={styles.card}>
      <div className={styles.thumb}>
        <PhotoIcon size={20} />
      </div>
      <div className={styles.body}>
        <div className={styles.top}>
          <StatusBadge status={post.status} />
          <span className="chip-category">{post.category}</span>
        </div>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.excerpt}>{post.content}</p>
        <div className={styles.meta}>
          {post.author} · {formatDateTime(post.created_at)}
        </div>
      </div>
    </Link>
  );
}
