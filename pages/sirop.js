import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Sirop.module.css";

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

      <div className={styles.pricingGrid}>
        {/* Canne à l'unité */}
        <div className={styles.pricingCard}>
          <div className={styles.canVisual}>
            <div className={styles.can}>
              <div className={styles.canTop} />
              <div className={styles.canBody}>
                <span className={styles.canLeaf}>🍁</span>
                <span className={styles.canMl}>540 ml</span>
              </div>
              <div className={styles.canBottom} />
            </div>
            <span className={styles.canCount}>×1</span>
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
        <div className={`${styles.pricingCard} ${styles.featured}`}>
          <div className={styles.badge}>{s.best_value}</div>
          <div className={styles.canVisual}>
            <div className={styles.canGroup}>
              {[0,1,2].map(i => (
                <div key={i} className={styles.can}>
                  <div className={styles.canTop} />
                  <div className={styles.canBody}>
                    <span className={styles.canLeaf}>🍁</span>
                    <span className={styles.canMl}>540 ml</span>
                  </div>
                  <div className={styles.canBottom} />
                </div>
              ))}
            </div>
            <span className={styles.canCount}>×3</span>
          </div>
          <div className={styles.cardInfo}>
            <h2 className={styles.cardTitle}>{s.trio_title}</h2>
            <p className={styles.cardDesc}>{s.trio_desc}</p>
            <div className={styles.priceTag}>
              <span className={styles.price}>20$</span>
              <span className={styles.perUnit}>{s.per_trio}</span>
            </div>
            <p className={styles.savings}>{s.trio_savings}</p>
          </div>
        </div>

        {/* Gallon */}
        <div className={styles.pricingCard}>
          <div className={styles.canVisual}>
            <div className={styles.canGroup}>
              {[0,1,2,3].map(i => (
                <div key={i} className={`${styles.can} ${styles.canSmall}`}>
                  <div className={styles.canTop} />
                  <div className={styles.canBody}>
                    <span className={styles.canLeaf}>🍁</span>
                  </div>
                  <div className={styles.canBottom} />
                </div>
              ))}
            </div>
            <div className={styles.canGroup}>
              {[0,1,2,3].map(i => (
                <div key={i} className={`${styles.can} ${styles.canSmall}`}>
                  <div className={styles.canTop} />
                  <div className={styles.canBody}>
                    <span className={styles.canLeaf}>🍁</span>
                  </div>
                  <div className={styles.canBottom} />
                </div>
              ))}
            </div>
            <span className={styles.canCount}>×8</span>
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

      <div className={styles.note}>
        <span>🍁</span>
        <p>{s.note}</p>
        <span>🍁</span>
      </div>
    </div>
  );
}
