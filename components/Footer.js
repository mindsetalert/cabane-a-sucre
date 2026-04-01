import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.made}>{t.footer.made_in}</p>
        <p className={styles.copy}>
          © {year} Cabane à Sucre — {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
