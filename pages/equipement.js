import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Products.module.css";

export default function Equipement() {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <span className={styles.pageIcon}>⚙️</span>
        <h1 className={styles.pageTitle}>{t.equipement.title}</h1>
        <p className={styles.pageSubtitle}>{t.equipement.subtitle}</p>
      </div>

      <div className={styles.grid}>
        {t.equipement.products.map((product, i) => (
          <div key={i} className={styles.productCard}>
            <div className={styles.productTop}>
              <h3 className={styles.productName}>{product.name}</h3>
              <span className={styles.productPrice}>{product.price}</span>
            </div>
            <p className={styles.productDesc}>{product.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
