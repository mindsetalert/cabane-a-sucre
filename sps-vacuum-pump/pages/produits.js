import { useState, useEffect } from "react";
import SeoHead from "../components/SeoHead";
import {
  webPageSchema,
  breadcrumbSchema,
  productListSchema,
  SITE_URL,
} from "../lib/seo";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../lib/LanguageContext";
import { getProducts } from "../lib/products";
import ProductModal from "../components/ProductModal";
import homeStyles from "../styles/Home.module.css";
import styles from "../styles/Equipement.module.css";

export default function Produits() {
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
      const product = products.find((p) => p.id === hash);
      if (product) setSelected(product);
    }
  }, [lang, products]);

  return (
    <>
      <SeoHead
        title={m.products_title}
        description={m.products_description}
        path="/produits"
        image="https://spsvacuumpump.com/images/equipement/sps750.png"
        keywords={m.keywords}
        jsonLd={[
          webPageSchema({
            title: m.products_title,
            description: m.products_description,
            path: "/produits",
          }),
          breadcrumbSchema([
            { name: "Accueil", url: SITE_URL },
            { name: "Produits", url: `${SITE_URL}/produits` },
          ]),
          productListSchema(products),
        ]}
      />

      <div className={styles.page} id="produits">
        <div className={homeStyles.catalogHeader}>
          <h2 className={homeStyles.catalogTitle}>{e.title}</h2>
          <p className={homeStyles.catalogSubtitle}>{e.cta}</p>
        </div>

        <div className={styles.grid}>
          {products.map((product) => (
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
                {product.notice && (
                  <p className={product.noticeAlert ? styles.cardNoticeAlert : styles.cardNotice}>
                    {product.notice}
                  </p>
                )}
                {product.voltageInfo && (
                  <p className={styles.cardVoltage}>
                    {e.voltage_pump}{" "}
                    <Link href="/voltage" className={styles.voltageLink} onClick={(ev) => ev.stopPropagation()}>
                      {e.voltage_link}
                    </Link>
                  </p>
                )}
                <div className={styles.cardMeta}>
                  {product.sale && (
                    <span className={styles.saleBadge}>{e.sale}</span>
                  )}
                  <span className={styles.cardPrice}>
                    {product.priceWas && (
                      <span className={styles.priceWas}>{product.priceWas}</span>
                    )}
                    {product.price}
                  </span>
                  {product.stock && (
                    <span className={product.stockOut ? styles.cardStockOut : styles.cardStock}>
                      {product.stockOut ? "⚠ " : "✅ "}
                      {product.stock}
                    </span>
                  )}
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
