import styles from './Footer.module.css';

const ORG_NAME = '위스테이별내사회적협동조합';
const ORG_TAGLINE = '입주자 모두가 조합원이 되어 마을의 살림을 직접 결정하는 사회적협동조합';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.orgName}>{ORG_NAME}</div>
      <p className={styles.desc}>{ORG_TAGLINE}</p>
    </footer>
  );
}
