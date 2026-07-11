import Head from "next/head";
import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/But.module.css";

export default function NotreBut() {
  const { t } = useLanguage();
  const b = t.but;
  const m = t.meta;

  return (
    <div className={styles.page}>
      <Head>
        <title>{m.but_title}</title>
        <meta name="description" content={m.but_description} />
        <link rel="canonical" href="https://spsvacuumpump.com/notre-but" />
      </Head>

      <div className={styles.pageHeader}>
        <span className={styles.pageIcon}>🎯</span>
        <h1 className={styles.pageTitle}>{b.title}</h1>
        <p className={styles.pageSubtitle}>{b.subtitle}</p>
      </div>

      <div className={styles.pillars}>
        {b.pillars.map((pillar, i) => (
          <div key={i} className={styles.pillar}>
            <span className={styles.pillarIcon}>{pillar.icon}</span>
            <h2 className={styles.pillarTitle}>{pillar.title}</h2>
            <p className={styles.pillarText}>{pillar.text}</p>
          </div>
        ))}
      </div>

      <div className={styles.content}>
        {b.paragraphs.map((para, i) => (
          <p key={i} className={styles.paragraph}>
            {para}
          </p>
        ))}
        <p className={styles.paragraph}>{b.closing}</p>
      </div>

      <div className={styles.decoration}>
        <span>⚙️</span>
        <span>🍁</span>
        <span>⚙️</span>
      </div>
    </div>
  );
}
