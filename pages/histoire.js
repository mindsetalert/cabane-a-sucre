import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Histoire.module.css";

export default function Histoire() {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <span className={styles.pageIcon}>🌲</span>
        <h1 className={styles.pageTitle}>{t.histoire.title}</h1>
        <p className={styles.pageSubtitle}>{t.histoire.subtitle}</p>
      </div>

      <div className={styles.content}>
        {t.histoire.paragraphs.map((para, i) => (
          <p key={i} className={styles.paragraph}>
            {para}
          </p>
        ))}
      </div>

      <div className={styles.decoration}>
        <span>🍁</span>
        <span>🌿</span>
        <span>🍁</span>
      </div>
    </div>
  );
}
