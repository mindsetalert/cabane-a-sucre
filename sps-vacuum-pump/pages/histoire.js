import Head from "next/head";
import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Histoire.module.css";

export default function Histoire() {
  const { t } = useLanguage();
  const h = t.histoire;
  const m = t.meta;

  return (
    <div className={styles.page}>
      <Head>
        <title>{m.histoire_title}</title>
        <meta name="description" content={m.histoire_description} />
        <link rel="canonical" href="https://spsvacuumpump.com/histoire" />
      </Head>

      <div className={styles.pageHeader}>
        <span className={styles.pageIcon}>🌲</span>
        <h1 className={styles.pageTitle}>{h.title}</h1>
        <p className={styles.pageSubtitle}>{h.subtitle}</p>
      </div>

      <div className={styles.content}>
        {h.paragraphs.map((para, i) => (
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
