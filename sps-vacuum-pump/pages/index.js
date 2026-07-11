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
  const m = t.meta;

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
        <title>{m.home_title}</title>
        <meta name="description" content={m.home_description} />
        <meta name="keywords" content={m.keywords} />
        <meta property="og:title" content={m.home_title} />
        <meta property="og:description" content={m.home_og_description} />
        <meta property="og:url" content="https://spsvacuumpump.com" />
        <meta property="og:image" content="https://spsvacuumpump.com/images/equipement-promo-0910.png" />
        <link rel="canonical" href="https://spsvacuumpump.com" />
      </Head>

      <section className={homeStyles.heroLanding}>
        <Image
          src="/images/equipement-promo-0910.png"
          alt={m.hero_alt}
          fill
          className={homeStyles.heroImg}
          priority
        />
        <button type="button" className={homeStyles.heroScrollBtn} onClick={scrollToProducts}>
          {e.view_equipment}
        </button>
      </section>

      <div className={styles.page} id="produits">
        <ProductCarousel products={products} onSelect={openProduct} />

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
                  {e.view_product}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.callBanner}>
          <p>{e.inventory_banner}</p>
          <Link href="/contact" className={styles.viewBtn} style={{ marginTop: "1rem", display: "inline-block" }}>
            {e.contact_us}
          </Link>
        </div>
      </div>

      {selected && (
        <ProductModal
          product={selected}
          onClose={closeProduct}
        />
      )}
    </>
  );
}
