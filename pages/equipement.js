import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Equipement.module.css";

const PRODUCTS_FR = [
  {
    id: "kit-tube-verre",
    name: "Kit Tube de Verre 1½\" pour Presse à Sirop",
    short: "Visualisez la couleur du sirop en temps réel à la sortie de votre presse.",
    price: "125$ + taxes",
    stock: "6 unités disponibles à partir du 15 juin 2026",
    stockDate: "2026-06-15",
    description: `Ce kit de tube de verre fileté 1½" est conçu pour être installé directement sur la sortie de votre presse à sirop. Il vous permet de surveiller visuellement la couleur du sirop en temps réel et de détecter rapidement tout bris de filtre avant qu'il ne contamine votre production.\n\nIndispensable pour tout producteur soucieux de la qualité et de la pureté de son sirop d'érable, ce kit est fabriqué en acier inoxydable et verre de haute qualité, résistant à la chaleur et facile à nettoyer.\n\nLe kit comprend :\n• 1 clip à tred femelle 1½"\n• 1 tube de verre (section principale)\n• 1 tube de verre (section secondaire)\n• 1 clip de serrage inoxydable`,
    images: [
      { src: "/images/equipement/kit-tube-2.jpg", alt: "Tube de verre pour presse à sirop" },
      { src: "/images/equipement/kit-tube-1.jpg", alt: "Clip à tred femelle 1½\"" },
      { src: "/images/equipement/kit-tube-2.jpg", alt: "Tube de verre (section principale)" },
      { src: "/images/equipement/kit-tube-3.jpg", alt: "Tube de verre (section secondaire)" },
      { src: "/images/equipement/kit-tube-4.jpg", alt: "Clip de serrage inoxydable" },
    ],
    category: "Presse à sirop",
    callLabel: "Pour réserver ou acheter, contactez-nous :",
  },
];

const PRODUCTS_EN = [
  {
    id: "kit-tube-verre",
    name: "1½\" Glass Tube Kit for Maple Syrup Press",
    short: "Monitor syrup color in real time at your press output.",
    price: "$125 + taxes",
    stock: "6 units available starting June 15, 2026",
    stockDate: "2026-06-15",
    description: `This 1½" threaded glass tube kit is designed to be installed directly on the output of your maple syrup press. It allows you to visually monitor the color of the syrup in real time and quickly detect any broken filter before it contaminates your production.\n\nEssential for any producer concerned with the quality and purity of their maple syrup, this kit is made from stainless steel and high-quality heat-resistant glass, easy to clean.\n\nKit includes:\n• 1 female threaded clip 1½"\n• 1 glass tube (main section)\n• 1 glass tube (secondary section)\n• 1 stainless steel clamp`,
    images: [
      { src: "/images/equipement/kit-tube-2.jpg", alt: "Glass tube for maple syrup press" },
      { src: "/images/equipement/kit-tube-1.jpg", alt: "Female threaded clip 1½\"" },
      { src: "/images/equipement/kit-tube-2.jpg", alt: "Glass tube (main section)" },
      { src: "/images/equipement/kit-tube-3.jpg", alt: "Glass tube (secondary section)" },
      { src: "/images/equipement/kit-tube-4.jpg", alt: "Stainless steel clamp" },
    ],
    category: "Syrup press",
    callLabel: "To reserve or purchase, contact us:",
  },
];

function ProductModal({ product, onClose, lang }) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>

        <div className={styles.modalLayout}>
          {/* Galerie photos */}
          <div className={styles.gallery}>
            <div className={styles.mainImgWrap}>
              <Image
                src={product.images[activeImg].src}
                alt={product.images[activeImg].alt}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className={styles.thumbRow}>
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className={`${styles.thumb} ${i === activeImg ? styles.thumbActive : ""}`}
                  onClick={() => setActiveImg(i)}
                >
                  <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover" }} />
                </button>
              ))}
            </div>
            <p className={styles.imgCaption}>{product.images[activeImg].alt}</p>
          </div>

          {/* Infos produit */}
          <div className={styles.productInfo}>
            <span className={styles.category}>{product.category}</span>
            <h2 className={styles.productName}>{product.name}</h2>
            <div className={styles.modalMeta}>
              <span className={styles.modalPrice}>{product.price}</span>
              <span className={styles.modalStock}>📦 {product.stock}</span>
            </div>
            <div className={styles.description}>
              {product.description.split("\n").map((line, i) =>
                line.startsWith("•") ? (
                  <p key={i} className={styles.bullet}>• {line.slice(1).trim()}</p>
                ) : line === "" ? (
                  <br key={i} />
                ) : (
                  <p key={i}>{line}</p>
                )
              )}
            </div>
            <div className={styles.callBox}>
              <div className={styles.callRow}>
                <span className={styles.callIcon}>📞</span>
                <div>
                  <p className={styles.callLabel}>{product.callLabel}</p>
                  <a href="tel:+18197435003" className={styles.callNumber}>+1 (819) 743-5003</a>
                </div>
              </div>
              <div className={styles.callRow}>
                <span className={styles.callIcon}>✉️</span>
                <div>
                  <p className={styles.callLabel}>{lang === "fr" ? "Écrivez-nous" : "Email us"}</p>
                  <a href="mailto:leighpigeon@hotmail.com" className={styles.callEmail}>leighpigeon@hotmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Equipement() {
  const { lang, t } = useLanguage();
  const [selected, setSelected] = useState(null);
  const products = lang === "fr" ? PRODUCTS_FR : PRODUCTS_EN;
  const e = t.equipement;

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{e.title}</h1>
        <p className={styles.pageSubtitle}>{e.subtitle}</p>
      </div>

      <div className={styles.grid}>
        {products.map(product => (
          <div
            key={product.id}
            className={styles.card}
            onClick={() => setSelected(product)}
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
                <span className={styles.cardStock}>📦 {product.stock}</span>
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
      </div>

      {selected && (
        <ProductModal
          product={selected}
          onClose={() => setSelected(null)}
          lang={lang}
        />
      )}
    </div>
  );
}
