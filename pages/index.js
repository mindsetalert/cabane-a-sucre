import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Home.module.css";


export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <section className={styles.hero}>
        <Image
          src="/images/tubulure.jpg"
          alt="Réseau de tubulure érablière"
          fill
          className={styles.heroBg}
          priority
        />
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
          <div className={styles.cardIcon}>
            <Image src="/images/canne.webp" alt="Canne de sirop d'érable" width={90} height={110} style={{ objectFit: "contain" }} />
          </div>
          <h2 className={styles.cardTitle}>{t.home.section_sirop_title}</h2>
          <p className={styles.cardDesc}>{t.home.section_sirop_desc}</p>
          <Link href="/sirop" className={styles.cardBtn}>
            {t.home.section_sirop_btn}
          </Link>
        </div>

        <div className={styles.divider} />

        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <Image src="/images/equipement/kit-tube-2.jpg" alt="Équipement érablière" width={90} height={110} style={{ objectFit: "contain", borderRadius: "8px" }} />
          </div>
          <h2 className={styles.cardTitle}>{t.home.section_equip_title}</h2>
          <p className={styles.cardDesc}>{t.home.section_equip_desc}</p>
          <Link href="/equipement" className={styles.cardBtn}>
            {t.home.section_equip_btn}
          </Link>
        </div>
      </section>

      <section className={styles.evapSection}>
        <Image
          src="/images/evap.jpg"
          alt="Évaporateur érablière"
          fill
          className={styles.evapBg}
        />
        <div className={styles.evapOverlay} />
        <div className={styles.evapContent}>
          <h2 className={styles.evapTitle}>{t.home.section_equip_title}</h2>
          <p className={styles.evapDesc}>{t.home.section_equip_desc}</p>
          <Link href="/equipement" className={styles.evapBtn}>
            {t.home.section_equip_btn}
          </Link>
        </div>
      </section>
    </>
  );
}
