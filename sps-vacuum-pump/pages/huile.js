import Link from "next/link";
import SeoHead from "../components/SeoHead";
import { webPageSchema } from "../lib/seo";
import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Vfd.module.css";

export default function Huile() {
  const { t } = useLanguage();
  const h = t.huile;
  const m = t.meta;

  return (
    <div className={styles.page}>
      <SeoHead
        title={m.huile_title}
        description={m.huile_description}
        path="/huile"
        jsonLd={webPageSchema({
          title: m.huile_title,
          description: m.huile_description,
          path: "/huile",
        })}
      />

      <div className={styles.pageHeader}>
        <span className={styles.pageIcon}>🛢️</span>
        <h1 className={styles.pageTitle}>{h.title}</h1>
        <p className={styles.pageSubtitle}>{h.subtitle}</p>
      </div>

      <p className={styles.intro}>{h.intro}</p>

      <div className={styles.warning}>
        <p>{h.warning}</p>
      </div>

      <div className={styles.highlights}>
        {h.highlights.map((item) => (
          <div key={item.title} className={styles.highlightCard}>
            <span className={styles.highlightIcon}>{item.icon}</span>
            <h2 className={styles.highlightTitle}>{item.title}</h2>
            <p className={styles.highlightText}>{item.text}</p>
          </div>
        ))}
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{h.seal_title}</h2>
        <p className={styles.note}>{h.seal_text}</p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{h.temp_title}</h2>
        <p className={styles.note}>{h.temp_text}</p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{h.season_title}</h2>
        <p className={styles.note}>{h.season_text}</p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{h.points_title}</h2>
        <ul className={styles.list}>
          {h.points.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <p className={styles.closing}>{h.closing}</p>

      <div className={styles.ctaWrap}>
        <Link href="/contact" className={styles.cta}>
          {h.contact_cta}
        </Link>
      </div>
    </div>
  );
}
