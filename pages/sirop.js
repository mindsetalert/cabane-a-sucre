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
          <svg viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="goldGrad" x1="20%" y1="0%" x2="80%" y2="100%">
                <stop offset="0%" stopColor="#f0d878" />
                <stop offset="45%" stopColor="#C9872A" />
                <stop offset="100%" stopColor="#8b5210" />
              </linearGradient>
              <filter id="leafGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            {/* Vraie feuille d'érable — 11 pointes */}
            <path
              d="M50,4
                 L45,22 L30,14 L37,30 L18,27 L27,43
                 L4,44 L18,57 L10,73 L32,65 L29,84
                 L50,76 L71,84 L68,65 L90,73 L82,57
                 L96,44 L73,43 L82,27 L63,30 L70,14 Z"
              fill="url(#goldGrad)"
              filter="url(#leafGlow)"
            />
            {/* Tige */}
            <rect x="47" y="80" width="6" height="28" rx="3" fill="#a86d18" />
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
