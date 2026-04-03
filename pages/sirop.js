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
        <div className={styles.mapleLeaf}>
          <svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 5
              C50 5 45 18 38 20 C30 22 22 15 22 15
              C22 15 26 25 22 30 C18 35 8 32 8 32
              C8 32 16 38 15 45 C14 52 5 55 5 55
              C5 55 16 55 18 62 C20 69 12 75 12 75
              C12 75 22 70 28 74 C34 78 33 88 33 88
              C33 88 40 80 50 82
              C60 80 67 88 67 88
              C67 88 66 78 72 74 C78 70 88 75 88 75
              C88 75 80 69 82 62 C84 55 95 55 95 55
              C95 55 86 52 85 45 C84 38 92 32 92 32
              C92 32 82 35 78 30 C74 25 78 15 78 15
              C78 15 70 22 62 20 C55 18 50 5 50 5Z"
              fill="url(#goldGradient)"
              filter="url(#glow)"
            />
            <rect x="47" y="82" width="6" height="22" rx="3" fill="url(#stemGradient)" />
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e8c97a" />
                <stop offset="50%" stopColor="#C9872A" />
                <stop offset="100%" stopColor="#a86d18" />
              </linearGradient>
              <linearGradient id="stemGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C9872A" />
                <stop offset="100%" stopColor="#7a4a10" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>
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
