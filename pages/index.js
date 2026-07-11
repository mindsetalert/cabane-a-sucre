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
        <title>Le Spot à Sucre Érablière — Sirop d'érable pur du Québec</title>
        <meta name="description" content="Sirop d'érable pur du Québec récolté et mis en canne à notre érablière. Claire, Médium, Foncé. L'Ange-Gardien, Outaouais." />
        <meta name="keywords" content="sirop d'érable pur, érablière Québec, sirop d'érable Outaouais, achat sirop d'érable, producteur local, L'Ange-Gardien, Le Spot à Sucre" />
        <meta property="og:title" content="Le Spot à Sucre Érablière" />
        <meta property="og:description" content="Sirop d'érable pur du Québec récolté et mis en canne à notre érablière." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://erablierelespotasucre.com" />
        <meta property="og:image" content="https://erablierelespotasucre.com/images/tubulure.jpg" />
        <link rel="canonical" href="https://erablierelespotasucre.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Le Spot à Sucre Érablière",
          "description": "Sirop d'érable pur du Québec récolté et mis en canne à notre érablière.",
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

      <div className={styles.syrupLanding}>
        <Link href="/sirop" className={styles.syrupPanel}>
          <Image
            src="/images/evap.jpg"
            alt="Érablière — sirop d'érable"
            fill
            className={styles.syrupBg}
            priority
          />
          <div className={styles.syrupOverlay} />
          <div className={styles.syrupContent}>
            <span className={styles.syrupIcon}>🍁</span>
            <h1 className={styles.syrupTitle}>
              {fr ? "Sirop d'Érable Pur" : "Pure Maple Syrup"}
            </h1>
            <p className={styles.syrupSub}>
              {fr
                ? "Sirop d'érable pur du Québec — Claire, Médium, Foncé"
                : "Pure Quebec maple syrup — Light, Medium, Dark"}
            </p>
            <span className={styles.syrupBtn}>
              {fr ? "Voir notre sirop →" : "View our syrup →"}
            </span>
          </div>
        </Link>
      </div>
    </>
  );
}
