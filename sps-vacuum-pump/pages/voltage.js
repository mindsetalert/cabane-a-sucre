import Link from "next/link";
import SeoHead from "../components/SeoHead";
import { webPageSchema } from "../lib/seo";
import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Vfd.module.css";

export default function Voltage() {
  const { t } = useLanguage();
  const v = t.voltage;
  const m = t.meta;

  return (
    <div className={styles.page}>
      <SeoHead
        title={m.voltage_title}
        description={m.voltage_description}
        path="/voltage"
        jsonLd={webPageSchema({
          title: m.voltage_title,
          description: m.voltage_description,
          path: "/voltage",
        })}
      />

      <div className={styles.pageHeader}>
        <span className={styles.pageIcon}>⚡</span>
        <h1 className={styles.pageTitle}>{v.title}</h1>
        <p className={styles.pageSubtitle}>{v.subtitle}</p>
      </div>

      <p className={styles.intro}>{v.intro}</p>

      <div className={styles.highlights}>
        {v.highlights.map((item) => (
          <div key={item.title} className={styles.highlightCard}>
            <span className={styles.highlightIcon}>{item.icon}</span>
            <h2 className={styles.highlightTitle}>{item.title}</h2>
            <p className={styles.highlightText}>{item.text}</p>
          </div>
        ))}
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{v.points_title}</h2>
        <ul className={styles.list}>
          {v.points.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <p className={styles.closing}>{v.closing}</p>

      <div className={styles.ctaWrap}>
        <Link href="/contact" className={styles.cta}>
          {v.contact_cta}
        </Link>
      </div>
    </div>
  );
}
