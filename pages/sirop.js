import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Sirop.module.css";

function Canne({ size = "normal" }) {
  return (
    <div className={size === "small" ? styles.canneSmall : styles.canne}>
      <Image
        src="/images/canne.webp"
        alt="Canne de sirop d'érable 540ml"
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}

export default function Sirop() {
  const { t } = useLanguage();
  const s = t.sirop;

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <span className={styles.pageIcon}>🍯</span>
        <h1 className={styles.pageTitle}>{s.title}</h1>
        <p className={styles.pageSubtitle}>{s.subtitle}</p>
        <p className={styles.canInfo}>{s.can_info}</p>
      </div>

      {/* 3 options principales */}
      <div className={styles.pricingGrid}>

        {/* Canne à l'unité */}
        <div className={styles.pricingCard}>
          <div className={styles.canVisual}>
            <Canne size="normal" />
          </div>
          <div className={styles.cardInfo}>
            <h2 className={styles.cardTitle}>{s.unit_title}</h2>
            <p className={styles.cardDesc}>{s.unit_desc}</p>
            <div className={styles.priceTag}>
              <span className={styles.price}>8$</span>
              <span className={styles.perUnit}>{s.per_can}</span>
            </div>
          </div>
        </div>

        {/* 3 cannes */}
        <div className={styles.pricingCard}>
          <div className={styles.canVisual}>
            <div className={styles.canRow}>
              <Canne size="small" />
              <Canne size="small" />
              <Canne size="small" />
            </div>
          </div>
          <div className={styles.cardInfo}>
            <h2 className={styles.cardTitle}>{s.trio_title}</h2>
            <p className={styles.cardDesc}>{s.trio_desc}</p>
            <div className={styles.priceTag}>
              <span className={styles.price}>22$</span>
              <span className={styles.perUnit}>{s.per_trio}</span>
            </div>
            <p className={styles.savings}>{s.trio_savings}</p>
          </div>
        </div>

        {/* Gallon — meilleure valeur */}
        <div className={`${styles.pricingCard} ${styles.featured}`}>
          <div className={styles.badge}>{s.best_value}</div>
          <div className={styles.canVisual}>
            <div className={styles.canGrid}>
              {[0,1,2,3,4,5,6,7].map(i => (
                <Canne key={i} size="small" />
              ))}
            </div>
          </div>
          <div className={styles.cardInfo}>
            <h2 className={styles.cardTitle}>{s.gallon_title}</h2>
            <p className={styles.cardDesc}>{s.gallon_desc}</p>
            <div className={styles.priceTag}>
              <span className={styles.price}>55$</span>
              <span className={styles.perUnit}>{s.per_gallon}</span>
            </div>
            <p className={styles.savings}>{s.gallon_savings}</p>
          </div>
        </div>

      </div>

      {/* Section volume 5 gallons+ */}
      <div className={styles.bulkSection}>
        <div className={styles.bulkBadge}>{s.bulk_badge}</div>
        <div className={styles.bulkIcon}>📦</div>
        <h2 className={styles.bulkTitle}>{s.bulk_title}</h2>
        <p className={styles.bulkDesc}>{s.bulk_desc}</p>
        <div className={styles.bulkPriceBlock}>
          <span className={styles.bulkPrice}>50$</span>
          <span className={styles.bulkPer}>{s.per_bulk}</span>
        </div>
        <p className={styles.bulkSavings}>{s.bulk_savings}</p>
        <Link href="/contact" className={styles.bulkBtn}>
          {s.bulk_contact} →
        </Link>
      </div>

      <div className={styles.note}>
        <span>🍁</span>
        <p>{s.note}</p>
        <span>🍁</span>
      </div>
    </div>
  );
}
