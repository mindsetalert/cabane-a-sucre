import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Equipement.module.css";

const PRODUCTS_FR = [
  {
    id: "contacteur-relai-wifi",
    name: "Contacteur 60A AC-3 + Relai WiFi 110V — Démarrage à distance",
    short: "Démarrez votre vacuum ou toute autre machine à distance via WiFi avec application mobile.",
    prices: [
      { label: "Relai WiFi", amount: "109.99$" },
      { label: "Contacteur 60A", amount: "124.99$" },
      { label: "Kit complet", amount: "234.98$" },
    ],
    price: "Kit complet : 234.98$ + taxes",
    stock: "En stock : 3 relais WiFi • 1 contacteur 60A",
    stockDate: null,
    description: `Ce système de démarrage à distance combine un contacteur industriel de 60 ampères AC-3 et un relai WiFi 110V avec application mobile, pour vous permettre de démarrer votre pompe à vide, votre évaporateur ou toute autre machine directement depuis votre téléphone.\n\nLe relai WiFi se connecte à votre réseau et se contrôle via une application simple et intuitive. Programmez des horaires de démarrage automatique, activez ou désactivez vos équipements à distance — même en dehors de votre érablière.\n\nLe contacteur de 60A AC-3 est un composant industriel robuste, conçu pour supporter les démarrages répétés de moteurs électriques lourds sans surchauffe ni usure prématurée.\n\nCaractéristiques :\n• Relai WiFi 110V avec application mobile incluse (iOS et Android)\n• Contacteur industriel 60A AC-3\n• Démarrage à distance via WiFi\n• Programmation horaire possible\n• Compatible avec pompes à vide, moteurs électriques et autres équipements\n• Vendus séparément ou en ensemble selon vos besoins`,
    images: [
      { src: "/images/equipement/relai-wifi-1.jpg", alt: "Relai WiFi 110V avec application mobile" },
      { src: "/images/equipement/relai-wifi-2.jpg", alt: "Interface et application du relai WiFi" },
      { src: "/images/equipement/contacteur-1.jpg", alt: "Contacteur industriel 60A AC-3" },
    ],
    category: "Électrique & Contrôle",
    callLabel: "Pour réserver ou acheter, contactez-nous :",
  },
  {
    id: "pompe-vacuum",
    name: "Pompe à Vide avec Convertisseur VFD — 3HP à 10HP",
    short: "Pompes à vide haute performance avec démarrage progressif VFD monophasé, refroidisseur d'huile inclus.",
    price: "Sur demande",
    stock: "Disponible le 1er juillet 2026 : 2 × 3HP • 2 × 5HP • 1 × 7.5HP",
    stockDate: "2026-07-01",
    description: `Ces pompes à vide professionnelles sont spécialement conçues pour les érablières exigeant un maximum de rendement et de fiabilité. Disponibles en 3HP, 5HP, 7.5HP et 10HP, chaque unité est livrée avec un convertisseur de fréquence (VFD) permettant un démarrage progressif (slow start) en monophasé.\n\nLe démarrage progressif réduit considérablement le stress sur le moteur électrique, prolongeant ainsi sa durée de vie et évitant les pics de courant au démarrage.\n\nChaque pompe est équipée d'un refroidisseur d'huile intégré, permettant d'atteindre et de maintenir un niveau de vide absolu optimal tout au long de la saison des sucres, même lors des longues journées de production.\n\nCaractéristiques :\n• Puissances disponibles : 3HP, 5HP, 7.5HP et 10HP\n• Convertisseur VFD inclus (monophasé, démarrage progressif)\n• Refroidisseur d'huile intégré\n• Vide absolu maximal garanti\n• Idéale pour les érablières de toutes tailles\n• Durable, fiable et facile d'entretien`,
    images: [
      { src: "/images/equipement/vacuum-1.jpg", alt: "Pompe à vide — vue générale" },
      { src: "/images/equipement/vacuum-2.jpg", alt: "Pompe à vide — vue latérale" },
      { src: "/images/equipement/vacuum-3.jpg", alt: "Pompe à vide — détail" },
      { src: "/images/equipement/vacuum-4.jpg", alt: "Pompe à vide — vue arrière" },
      { src: "/images/equipement/vacuum-5.jpg", alt: "Pompe à vide — vue complète" },
      { src: "/images/equipement/vacuum-vfd.png", alt: "Convertisseur VFD monophasé inclus" },
    ],
    category: "Pompe à vide",
    callLabel: "Pour réserver ou acheter, contactez-nous :",
  },
  {
    id: "kit-tube-verre",
    name: "Kit Tube de Verre 1½\" pour Presse à Sirop",
    short: "Visualisez la couleur du sirop en temps réel à la sortie de votre presse.",
    price: "125$ + taxes",
    stock: "6 unités disponibles à partir du 15 juin 2026",
    stockDate: "2026-06-15",
    description: `Ce kit de tube de verre fileté 1½" est conçu pour être installé directement sur la sortie de votre presse à sirop. Il vous permet de surveiller visuellement la couleur du sirop en temps réel et de détecter rapidement tout bris de filtre avant qu'il ne contamine votre production.\n\nIndispensable pour tout producteur soucieux de la qualité et de la pureté de son sirop d'érable, ce kit est fabriqué en acier inoxydable et verre de haute qualité, résistant à la chaleur et facile à nettoyer.\n\nLe kit comprend :\n• 2 clips de serrage inoxydable\n• 2 réducteurs 1½" clip à NPT tred femelle\n• 2 seals de rubber\n• 1 tube de verre`,
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
    id: "contacteur-relai-wifi",
    name: "60A AC-3 Contactor + 110V WiFi Relay — Remote Start",
    short: "Start your vacuum pump or any machine remotely via WiFi with a mobile app.",
    prices: [
      { label: "WiFi Relay", amount: "$109.99" },
      { label: "60A Contactor", amount: "$124.99" },
      { label: "Complete Kit", amount: "$234.98" },
    ],
    price: "Complete Kit: $234.98 + taxes",
    stock: "In stock: 3 WiFi relays • 1 contactor 60A",
    stockDate: null,
    description: `This remote start system combines an industrial 60-amp AC-3 contactor and a 110V WiFi relay with mobile app, allowing you to start your vacuum pump, evaporator or any other machine directly from your phone.\n\nThe WiFi relay connects to your network and is controlled via a simple, intuitive app. Set automatic start schedules, activate or deactivate your equipment remotely — even from outside your sugar shack.\n\nThe 60A AC-3 contactor is a robust industrial component designed to handle repeated heavy-duty motor starts without overheating or premature wear.\n\nFeatures:\n• 110V WiFi relay with mobile app included (iOS and Android)\n• Industrial 60A AC-3 contactor\n• Remote start via WiFi\n• Programmable scheduling\n• Compatible with vacuum pumps, electric motors and other equipment\n• Sold separately or together depending on your needs`,
    images: [
      { src: "/images/equipement/relai-wifi-1.jpg", alt: "110V WiFi relay with mobile app" },
      { src: "/images/equipement/relai-wifi-2.jpg", alt: "WiFi relay app interface" },
      { src: "/images/equipement/contacteur-1.jpg", alt: "Industrial 60A AC-3 contactor" },
    ],
    category: "Electrical & Control",
    callLabel: "To reserve or purchase, contact us:",
  },
  {
    id: "pompe-vacuum",
    name: "Vacuum Pump with VFD Converter — 3HP to 10HP",
    short: "High-performance vacuum pumps with single-phase VFD slow start and integrated oil cooler.",
    price: "On request",
    stock: "Available July 1st, 2026: 2 × 3HP • 2 × 5HP • 1 × 7.5HP",
    stockDate: "2026-07-01",
    description: `These professional vacuum pumps are specifically designed for sugar shacks requiring maximum performance and reliability. Available in 3HP, 5HP, 7.5HP and 10HP, each unit comes with a Variable Frequency Drive (VFD) converter enabling single-phase slow start operation.\n\nThe slow start significantly reduces stress on the electric motor, extending its lifespan and preventing current spikes at startup.\n\nEach pump is equipped with an integrated oil cooler, allowing it to reach and maintain optimal absolute vacuum levels throughout the entire maple season, even during long production days.\n\nFeatures:\n• Available power: 3HP, 5HP, 7.5HP and 10HP\n• VFD converter included (single-phase, slow start)\n• Integrated oil cooler\n• Maximum absolute vacuum guaranteed\n• Ideal for sugar shacks of all sizes\n• Durable, reliable and easy to maintain`,
    images: [
      { src: "/images/equipement/vacuum-1.jpg", alt: "Vacuum pump — general view" },
      { src: "/images/equipement/vacuum-2.jpg", alt: "Vacuum pump — side view" },
      { src: "/images/equipement/vacuum-3.jpg", alt: "Vacuum pump — detail" },
      { src: "/images/equipement/vacuum-4.jpg", alt: "Vacuum pump — rear view" },
      { src: "/images/equipement/vacuum-5.jpg", alt: "Vacuum pump — full view" },
      { src: "/images/equipement/vacuum-vfd.png", alt: "Single-phase VFD converter included" },
    ],
    category: "Vacuum pump",
    callLabel: "To reserve or purchase, contact us:",
  },
  {
    id: "kit-tube-verre",
    name: "1½\" Glass Tube Kit for Maple Syrup Press",
    short: "Monitor syrup color in real time at your press output.",
    price: "$125 + taxes",
    stock: "6 units available starting June 15, 2026",
    stockDate: "2026-06-15",
    description: `This 1½" threaded glass tube kit is designed to be installed directly on the output of your maple syrup press. It allows you to visually monitor the color of the syrup in real time and quickly detect any broken filter before it contaminates your production.\n\nEssential for any producer concerned with the quality and purity of their maple syrup, this kit is made from stainless steel and high-quality heat-resistant glass, easy to clean.\n\nKit includes:\n• 2 stainless steel clamps\n• 2 reducers 1½" clip to NPT female thread\n• 2 rubber seals\n• 1 glass tube`,
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
              {product.prices ? (
                <table className={styles.priceTable}>
                  <tbody>
                    {product.prices.map((p, i) => (
                      <tr key={i} className={i === product.prices.length - 1 ? styles.priceRowTotal : styles.priceRow}>
                        <td className={styles.priceLabel}>{p.label}</td>
                        <td className={styles.priceAmount}>{p.amount}</td>
                        <td className={styles.priceTax}>+ taxes</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <span className={styles.modalPrice}>{product.price}</span>
              )}
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
