import SeoHead from "../components/SeoHead";
import { webPageSchema } from "../lib/seo";
import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/But.module.css";

export default function NotreBut() {
  const { t } = useLanguage();
  const b = t.but;
  const m = t.meta;

  return (
    <div className={styles.page}>
      <SeoHead
        title={m.but_title}
        description={m.but_description}
        path="/notre-but"
        jsonLd={webPageSchema({
          title: m.but_title,
          description: m.but_description,
          path: "/notre-but",
        })}
      />

      <div className={styles.pageHeader}>
        <span className={styles.pageIcon}>🎯</span>
        <h1 className={styles.pageTitle}>{b.title}</h1>
        <p className={styles.pageSubtitle}>{b.subtitle}</p>
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
