import Link from "next/link";
import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{t.home.hero_title}</h1>
          <p className={styles.heroSubtitle}>{t.home.hero_subtitle}</p>
          <Link href="/sirop" className={styles.heroCta}>
            {t.home.hero_cta}
          </Link>
        </div>
      </section>

      <section className={styles.sections}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>🍯</div>
          <h2 className={styles.cardTitle}>{t.home.section_sirop_title}</h2>
          <p className={styles.cardDesc}>{t.home.section_sirop_desc}</p>
          <Link href="/sirop" className={styles.cardBtn}>
            {t.home.section_sirop_btn}
          </Link>
        </div>

        <div className={styles.divider} />

        <div className={styles.card}>
          <div className={styles.cardIcon}>⚙️</div>
          <h2 className={styles.cardTitle}>{t.home.section_equip_title}</h2>
          <p className={styles.cardDesc}>{t.home.section_equip_desc}</p>
          <Link href="/equipement" className={styles.cardBtn}>
            {t.home.section_equip_btn}
          </Link>
        </div>
      </section>

      <section className={styles.banner}>
        <div className={styles.bannerLeaf}>🍁</div>
        <p className={styles.bannerText}>
          {t.home.hero_subtitle}
        </p>
        <div className={styles.bannerLeaf}>🍁</div>
      </section>
    </>
  );
}
