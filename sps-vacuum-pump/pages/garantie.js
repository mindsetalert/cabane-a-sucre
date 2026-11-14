import { useState } from "react";
import SeoHead from "../components/SeoHead";
import { webPageSchema } from "../lib/seo";
import Link from "next/link";
import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Garantie.module.css";

const PRODUCT_KEYS = ["palette", "vis", "canneuse"];

export default function Garantie() {
  const { t } = useLanguage();
  const g = t.garantie;
  const m = t.meta;
  const [product, setProduct] = useState("palette");
  const content = g.products[product];

  return (
    <div className={styles.page}>
      <SeoHead
        title={m.garantie_title}
        description={m.garantie_description}
        path="/garantie"
        jsonLd={webPageSchema({
          title: m.garantie_title,
          description: m.garantie_description,
          path: "/garantie",
        })}
      />

      <div className={styles.pageHeader}>
        <span className={styles.pageIcon}>🛡️</span>
        <h1 className={styles.pageTitle}>{g.title}</h1>
        <p className={styles.pageSubtitle}>{g.subtitle}</p>
      </div>

      <div className={styles.chooser}>
        <p className={styles.chooserLabel}>{g.choose}</p>
        <div className={styles.chooserButtons} role="tablist" aria-label={g.choose}>
          {PRODUCT_KEYS.map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={product === key}
              className={`${styles.chooserBtn} ${product === key ? styles.chooserBtnActive : ""}`}
              onClick={() => setProduct(key)}
            >
              {g.products[key].label}
            </button>
          ))}
        </div>
      </div>

      <p className={styles.intro}>{content.intro}</p>

      <div
        className={`${styles.plans} ${content.plans.length === 1 ? styles.plansSingle : ""}`}
      >
        {content.plans.map((plan) => (
          <div key={plan.title} className={styles.planCard}>
            <h2 className={styles.planTitle}>{plan.title}</h2>
            <p className={styles.planDuration}>{plan.duration}</p>
            <p className={styles.planPrice}>{plan.price}</p>
            <p className={styles.planDesc}>{plan.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{content.conditions_title}</h2>
        <ul className={styles.list}>
          {content.conditions.map((item, index) => {
            const text = typeof item === "string" ? item : item.text;
            const required = typeof item === "object" && item.required;
            return (
              <li
                key={index}
                className={required ? styles.required : undefined}
              >
                {text}
              </li>
            );
          })}
        </ul>
      </div>

      <div className={`${styles.section} ${styles.exclusions}`}>
        <h2 className={styles.sectionTitle}>{content.exclusions_title}</h2>
        <ul className={styles.list}>
          {content.exclusions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {content.recommendation && content.recommendation_title ? (
        <div className={styles.recommendation}>
          <h2 className={styles.recommendationTitle}>
            {content.recommendation_title}
          </h2>
          <p>{content.recommendation}</p>
        </div>
      ) : null}

      <p className={styles.closing}>{content.closing}</p>

      <div className={styles.ctaWrap}>
        <Link href="/contact" className={styles.cta}>
          {g.contact_cta}
        </Link>
      </div>
    </div>
  );
}
