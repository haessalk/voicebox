import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const SERVICE_TAGLINE = '불편하면, 바로 남기세요';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>{SERVICE_TAGLINE}</h1>
      <p className={styles.desc}>
        동네에서 겪은 불편이나 제안을 남기면 위스테이별내가 확인하고, 처리 상황을 접수 · 처리중 ·
        완료로 알려드립니다.
      </p>
      <Link to="/write" className="btn-inverse">
        의견 남기기
      </Link>
    </section>
  );
}
