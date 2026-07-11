import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../lib/LanguageContext";
import { getProducts } from "../lib/products";
import ProductModal from "../components/ProductModal";
import ProductCarousel from "../components/ProductCarousel";
import homeStyles from "../styles/Home.module.css";
import styles from "../styles/Equipement.module.css";

export default function Home() {
  const { lang, t } = useLanguage();
  const [selected, setSelected] = useState(null);
  const products = getProducts(lang);
  const e = t.equipement;

  const openProduct = (product) => {
    setSelected(product);
    window.history.replaceState(null, "", `#${product.id}`);
  };

  const closeProduct = () => {
    setSelected(null);
    window.history.replaceState(null, "", window.location.pathname);
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const product = products.find(p => p.id === hash);
      if (product) setSelected(product);
    }
  }, [lang, products]);

  const scrollToProducts = () => {
    document.getElementById("produits")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Équipement Érablière — SPS Vacuum Pump</title>
        <meta name="description" content="Équipement professionnel pour érablières : pompes à vide SPS VFD 1.5HP à 10HP, totes inox 650L et 1000L, canneuse automatique, contacteur 60A et relai WiFi. Livraison possible." />
        <meta name="keywords" content="SPS vacuum pump, équipement érablière, pompe à vide érablière, vacuum pump maple, pompe VFD érablière, tote inox érablière, canneuse automatique sirop, contacteur 60A érablière, démarrage automatique érablière, équipement acéricole, Québec" />
        <meta property="og:title" content="Équipement Érablière — SPS Vacuum Pump" />
        <meta property="og:description" content="Pompes à vide SPS, totes inox, canneuse automatique et plus pour votre érablière." />
        <meta property="og:url" content="https://spsvacuumpump.com" />
        <meta property="og:image" content="https://spsvacuumpump.com/images/equipement-promo-0910.png" />
        <link rel="canonical" href="https://spsvacuumpump.com" />
      </Head>

      <section className={homeStyles.heroLanding}>
        <Image
          src="/images/equipement-promo-0910.png"
          alt="Équipement érablière professionnel — SPS Vacuum Pump"
          fill
          className={homeStyles.heroImg}
          priority
        />
        <button type="button" className={homeStyles.heroScrollBtn} onClick={scrollToProducts}>
          {lang === "fr" ? "Voir l'équipement →" : "View equipment →"}
        </button>
      </section>

      <div className={styles.page} id="produits">
        <ProductCarousel products={products} lang={lang} onSelect={openProduct} />

        <div className={homeStyles.catalogHeader}>
          <h2 className={homeStyles.catalogTitle}>{e.title}</h2>
          <p className={homeStyles.catalogSubtitle}>{e.cta}</p>
        </div>

        <div className={styles.grid}>
          {products.map(product => (
            <div
              key={product.id}
              className={styles.card}
              onClick={() => openProduct(product)}
            >
              <div className={styles.cardImgWrap}>
                <Image
                  src={product.images[0].src}
                  alt={product.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardCategory}>{product.category}</span>
                <h3 className={styles.cardName}>{product.name}</h3>
                <p className={styles.cardShort}>{product.short}</p>
                <div className={styles.cardMeta}>
                  <span className={styles.cardPrice}>{product.price}</span>
                  {product.stock && <span className={styles.cardStock}>✅ {product.stock}</span>}
                </div>
                <button className={styles.viewBtn}>
                  {lang === "fr" ? "Voir le produit →" : "View product →"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.callBanner}>
          <p>{lang === "fr"
            ? "📞 Tout notre inventaire est disponible sur appel. Contactez-nous pour connaître les disponibilités."
            : "📞 All our inventory is available by phone. Contact us for availability."
          }</p>
          <Link href="/contact" className={styles.viewBtn} style={{ marginTop: "1rem", display: "inline-block" }}>
            {lang === "fr" ? "Nous contacter →" : "Contact us →"}
          </Link>
        </div>
      </div>

      {selected && (
        <ProductModal
          product={selected}
          onClose={closeProduct}
          lang={lang}
        />
      )}
    </>
  );
}
