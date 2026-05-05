import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { lang } = useLanguage();
  const fr = lang === "fr";

  return (
    <>
      <Head>
        <title>Le Spot à Sucre Érablière — Sirop d'érable pur & Équipement d'érablière</title>
        <meta name="description" content="Sirop d'érable pur du Québec et équipement d'érablière professionnel : pompes à vide, totes inox, canneuse automatique, démarrage automatique. L'Ange-Gardien, Outaouais." />
        <meta name="keywords" content="sirop d'érable pur, érablière Québec, pompe à vide érablière, équipement acéricole, équipement érablière, tote inox érablière, canneuse automatique sirop, vacuum pump maple, pompe VFD, démarrage automatique érablière, Outaouais, L'Ange-Gardien, Le Spot à Sucre" />
        <meta property="og:title" content="Le Spot à Sucre Érablière" />
        <meta property="og:description" content="Sirop d'érable pur du Québec et équipement d'érablière professionnel." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://erablierelespotasucre.com" />
        <meta property="og:image" content="https://erablierelespotasucre.com/images/tubulure.jpg" />
        <link rel="canonical" href="https://erablierelespotasucre.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Le Spot à Sucre Érablière",
          "description": "Sirop d'érable pur du Québec et équipement d'érablière professionnel.",
          "url": "https://erablierelespotasucre.com",
          "telephone": "+18197435003",
          "email": "erabliere.lespotasucre@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "L'Ange-Gardien",
            "addressRegion": "Outaouais",
            "addressCountry": "CA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 45.65,
            "longitude": -70.75
          },
          "openingHours": "Mo-Su 08:00-20:00",
          "priceRange": "$$",
          "sameAs": []
        })}} />
      </Head>

      <div className={styles.splitPage}>

        {/* ── Équipement ── */}
        <Link href="/equipement" className={styles.splitPanel}>
          <Image
            src="/images/equipement-hero.png"
            alt="Équipement d'érablière professionnel"
            fill
            className={styles.splitBg}
            priority
          />
          <div className={styles.splitOverlay} />
          <div className={styles.splitContent}>
            <span className={styles.splitIcon}>⚙️</span>
            <h2 className={styles.splitTitle}>
              {fr ? "Équipement Érablière" : "Maple Equipment"}
            </h2>
            <p className={styles.splitSub}>
              {fr
                ? "Pompes à vide, totes inox, canneuse automatique, démarrage automatique et plus — Prix compétitifs"
                : "Vacuum pumps, stainless totes, canning machine, automatic start and more — Competitive prices"}
            </p>
            <span className={styles.splitBtn}>
              {fr ? "Voir l'équipement →" : "View equipment →"}
            </span>
          </div>
        </Link>

        <div className={styles.splitDivider} />

        {/* ── Sirop d'Érable ── */}
        <Link href="/sirop" className={styles.splitPanel}>
          <Image
            src="/images/evap.jpg"
            alt="Érablière — sirop d'érable"
            fill
            className={styles.splitBg}
            priority
          />
          <div className={styles.splitOverlay} />
          <div className={styles.splitContent}>
            <span className={styles.splitIcon}>🍁</span>
            <h2 className={styles.splitTitle}>
              {fr ? "Sirop d'Érable Pur" : "Pure Maple Syrup"}
            </h2>
            <p className={styles.splitSub}>
              {fr
                ? "Sirop d'érable pur du Québec — Claire, Médium, Foncé"
                : "Pure Quebec maple syrup — Light, Medium, Dark"}
            </p>
            <span className={styles.splitBtn}>
              {fr ? "Voir notre sirop →" : "View our syrup →"}
            </span>
          </div>
        </Link>

      </div>
    </>
  );
}
