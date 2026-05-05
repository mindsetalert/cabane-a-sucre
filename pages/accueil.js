import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Accueil.module.css";

const CAROUSEL_FR = [
  { id: "tote-inox",             name: "Totes en Acier Inoxydable", short: "650 L et 1000 L — Alternative aux barils",       price: "À partir de 1 395$",    img: "/images/equipement/tote-1.jpg" },
  { id: "canneuse-automatique",  name: "Canneuse Automatique",       short: "18 cannes/min — Acier inoxydable, 120V",          price: "1 795$ 🍁 (En vente)",  img: "/images/equipement/canneuse-1.jpg" },
  { id: "contacteur-relai-wifi", name: "Contacteur 60A + Relai WiFi",short: "Démarrage à distance via WiFi",                   price: "Kit complet : 229.99$", img: "/images/equipement/relai-wifi-1.jpg" },
  { id: "pompe-vacuum",          name: "Pompe à Vide VFD",           short: "1.5HP à 10HP avec démarrage progressif",          price: "À partir de 2 399.99$", img: "/images/equipement/vacuum-1.jpg" },
  { id: "kit-tube-verre",        name: "Kit Tube de Verre 1½\"",     short: "Pour presse à sirop — visualisez la couleur",     price: "125$",                  img: "/images/equipement/kit-tube-2.jpg" },
];

const CAROUSEL_EN = [
  { id: "tote-inox",             name: "Stainless Steel Totes",       short: "650 L and 1000 L — Barrel alternative",           price: "From $1,395",         img: "/images/equipement/tote-1.jpg" },
  { id: "canneuse-automatique",  name: "Automatic Canning Machine",   short: "18 cans/min — Stainless steel, 120V",              price: "$1,795 🍁 (On Sale)", img: "/images/equipement/canneuse-1.jpg" },
  { id: "contacteur-relai-wifi", name: "60A Contactor + WiFi Relay",  short: "Remote start via WiFi",                            price: "Kit: $229.99",        img: "/images/equipement/relai-wifi-1.jpg" },
  { id: "pompe-vacuum",          name: "VFD Vacuum Pump",             short: "1.5HP to 10HP with slow start",                    price: "From $2,399.99",      img: "/images/equipement/vacuum-1.jpg" },
  { id: "kit-tube-verre",        name: "1½\" Glass Tube Kit",         short: "For syrup press — monitor color in real time",     price: "$125",                img: "/images/equipement/kit-tube-2.jpg" },
];

function ProductCarousel({ lang }) {
  const ref = useRef(null);
  const items = lang === "fr" ? CAROUSEL_FR : CAROUSEL_EN;
  const label = lang === "fr" ? "Voir le produit →" : "View product →";
  const title = lang === "fr" ? "Nos Produits" : "Our Products";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 1.5;
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const scroll = (dir) => {
    if (ref.current) ref.current.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className={styles.carouselSection}>
      <h2 className={styles.carouselTitle}>{title}</h2>
      <div className={styles.carouselWrapper}>
        <button className={`${styles.carouselArrow} ${styles.arrowLeft}`} onClick={() => scroll(-1)} aria-label="Précédent">‹</button>
        <div className={styles.carouselTrack} ref={ref}>
          {items.map(p => (
            <Link key={p.id} href={`/equipement#${p.id}`} className={styles.carouselCard}>
              <div className={styles.carouselImgWrap}>
                <Image src={p.img} alt={p.name} fill style={{ objectFit: "contain" }} />
              </div>
              <div className={styles.carouselCardBody}>
                <h3 className={styles.carouselCardName}>{p.name}</h3>
                <p className={styles.carouselCardShort}>{p.short}</p>
                <span className={styles.carouselCardPrice}>{p.price}</span>
                <span className={styles.carouselCardBtn}>{label}</span>
              </div>
            </Link>
          ))}
        </div>
        <button className={`${styles.carouselArrow} ${styles.arrowRight}`} onClick={() => scroll(1)} aria-label="Suivant">›</button>
      </div>
    </section>
  );
}

export default function Accueil() {
  const { lang, t } = useLanguage();

  return (
    <>
      <Head>
        <title>Le Spot à Sucre Érablière — Sirop d'érable pur & Équipement d'érablière</title>
        <meta name="description" content="Sirop d'érable pur du Québec et équipement d'érablière professionnel : pompes à vide, totes inox, canneuse automatique, démarrage automatique. L'Ange-Gardien, Outaouais." />
        <link rel="canonical" href="https://erablierelespotasucre.com" />
      </Head>

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
          <div className={styles.heroButtons}>
            <Link href="/equipement" className={styles.heroCta}>
              {t.home.section_equip_btn} →
            </Link>
            <Link href="/sirop" className={styles.heroCtaSecondary}>
              {t.home.hero_cta_sirop}
            </Link>
          </div>
        </div>
      </section>

      <ProductCarousel lang={lang} />

      <section className={styles.sections}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <Image src="/images/equipement/vacuum-1.jpg" alt="Pompe à vide érablière" width={110} height={110} style={{ objectFit: "contain", borderRadius: "8px" }} />
          </div>
          <h2 className={styles.cardTitle}>{t.home.section_equip_title}</h2>
          <p className={styles.cardDesc}>{t.home.section_equip_desc}</p>
          <Link href="/equipement" className={styles.cardBtn}>
            {t.home.section_equip_btn}
          </Link>
        </div>

        <div className={styles.divider} />

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
