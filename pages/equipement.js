import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Equipement.module.css";

const PRODUCTS_FR = [
  {
    id: "contacteur-relai-wifi",
    name: "Contacteur 60A AC-3 + Relai WiFi 110V — Démarrage à distance",
    short: "Démarrez votre vacuum ou toute autre machine à distance via WiFi avec application mobile.",
    prices: [
      { label: "Relai WiFi 110V — 63 Amp", amount: "109.99$" },
      { label: "Contacteur 60A — Monophasé/Triphasé 240V", amount: "124.99$" },
      { label: "Kit complet", amount: "229.99$", total: true },
    ],
    price: "Kit complet : 229.99$ + taxes",
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
    name: "Pompe à Vide avec Convertisseur VFD — 1.5HP à 10HP",
    short: "Pompes à vide haute performance avec démarrage progressif VFD monophasé, refroidisseur d'huile inclus.",
    prices: [
      { label: "1.5 HP — Drive inclut — 21 CFM (800 entailles)",   amount: "2 099.99$" },
      { label: "3 HP   — Drive inclut — 45 CFM (1 500 entailles)", amount: "3 199.99$" },
      { label: "5 HP   — Drive inclut — 71 CFM (3 000 entailles)", amount: "4 499.99$" },
      { label: "7.5 HP — Drive inclut — 113 CFM (6 000 entailles)",amount: "4 999.99$" },
      { label: "10 HP  — Drive inclut — 142 CFM (8 000 entailles)",amount: "5 499.99$" },
    ],
    price: "À partir de 2 099.99$ + taxes",
    stock: "Disponible le 1er juillet 2026 : 2 × 3HP • 2 × 5HP • 1 × 7.5HP",
    stockDate: "2026-07-01",
    description: `Ces pompes à vide à l'huile à palettes rotatives professionnelles sont spécialement conçues pour les érablières exigeant un maximum de rendement et de fiabilité. La technologie à palettes rotatives lubrifiées à l'huile garantit un vide absolu profond et stable, même lors des longues journées de production en saison des sucres.\n\nChaque unité est livrée complète avec un convertisseur de fréquence (VFD) permettant un démarrage progressif (slow start) en monophasé. Le démarrage progressif réduit considérablement le stress sur le moteur électrique, prolongeant sa durée de vie et évitant les pics de courant.\n\nChaque pompe est équipée d'un refroidisseur d'huile intégré pour maintenir un vide absolu optimal tout au long de la saison.\n\nModèles disponibles :\n• 1.5 HP — Drive inclut — 21 CFM — 800 entailles\n• 3 HP — Drive inclut — 45 CFM — 1 500 entailles\n• 5 HP — Drive inclut — 71 CFM — 3 000 entailles\n• 7.5 HP — Drive inclut — 113 CFM — 6 000 entailles\n• 10 HP — Drive inclut — 142 CFM — 8 000 entailles\n\nCaractéristiques :\n• Type : pompe à vide à l'huile à palettes rotatives\n• Convertisseur VFD inclus (monophasé, démarrage progressif)\n• Refroidisseur d'huile intégré\n• Vide absolu maximal garanti\n• Idéale pour les érablières de toutes tailles\n• Durable, fiable et facile d'entretien`,
    images: [
      { src: "/images/equipement/vacuum-1.jpg", alt: "Pompe à vide — vue générale" },
      { src: "/images/equipement/vacuum-2.jpg", alt: "Pompe à vide — vue latérale" },
      { src: "/images/equipement/vacuum-3.jpg", alt: "Pompe à vide — détail" },
      { src: "/images/equipement/vacuum-4.jpg", alt: "Pompe à vide — vue arrière" },
      { src: "/images/equipement/vacuum-5.jpg", alt: "Pompe à vide — vue complète" },
      { src: "/images/equipement/vacuum-vfd.png", alt: "Convertisseur VFD monophasé inclus" },
      { src: "/images/equipement/vacuum-7.png", alt: "Pompe à vide 7.5 HP et 10 HP" },
    ],
    category: "Pompe à vide",
    callLabel: "Pour réserver ou acheter, contactez-nous :",
  },
  {
    id: "tote-inox",
    name: "Totes en Acier Inoxydable — 650 L et 1000 L",
    short: "Alternative aux barils. Remplissage 7x plus rapide, empilables, acier inoxydable. Dépôt de 400$ requis.",
    stock: "Disponible sur commande — livraison rapide",
    stockDate: null,
    prices: [
      { label: "Tote 650 L (143 gal imp.)", amount: "1 395$" },
      { label: "Tote 1000 L (220 gal imp.)", amount: "1 795$" },
      { label: "Valve papillon (option)", amount: "75$" },
    ],
    price: "À partir de 1 395$ — Dépôt 400$",
    description: `Totes conçues pour offrir une alternative aux barils. Cette transaction s'agit d'un dépôt de 400$ sur le prix de vente. La balance sera payable lors du ramassage.\n\nCapacités disponibles :\n• 650 litres (143 gallons impériaux) — 39-3/8'' × 47-3/8'' × 30'' de haut\n• 1000 litres (220 gallons impériaux) — 39-3/8'' × 47-3/8'' × 45'' de haut\n\nMatériau : Acier inoxydable 1/16''\n\nInclus :\n• Sortie ferrule 2'' avec capuchon et collier en bas\n• Entrée de 6'' avec collier, capuchon et bouchon fileté 2'' (comme les barils) sur le dessus\n• Palette et cage de protection en acier galvanisé\n• Option : valve papillon de sortie 75$\n\nAvantages :\n• Classement 7x plus rapide — Soyez payés plus rapidement\n• Se vide complètement au niveau — Évite tout résidu, facilite le nettoyage\n• 1 tote 1000 L = 6.5 barils de 34 gallons • 1 tote 650 L = 4.2 barils de 34 gallons\n• Entreposage en hauteur — Empilable 3 de haut\n• Moins de manutention — Réduit le risque de bris et perte de sirop\n• Transport facile par chariot élévateur ou transpalette\n• Refroidit plus vite que la tote de plastique — Limite le foncissement du sirop\n• Meilleure conservation — Barrière contre l'oxygène et la lumière, conserve plusieurs années sans oxydation ni fermentation\n• Entreposage extérieur sans risque — Résiste au soleil et à la pluie\n\nConditions de vente :\n• Dépôt requis : 400$ (balance payable au ramassage)\n• Ramassage : Estrie (Sainte-Cécile-de-Whitton) ou Bas-Saint-Laurent (Sainte-Rita)\n• Livraison possible — Contactez-nous pour les détails et grandes quantités`,
    images: [
      { src: "/images/equipement/tote-1.jpg", alt: "Tote en acier inoxydable — vue générale" },
      { src: "/images/equipement/tote-2.jpg", alt: "Tote en acier inoxydable — couvercle" },
      { src: "/images/equipement/tote-3.jpg", alt: "Tote en acier inoxydable — valve" },
      { src: "/images/equipement/tote-4.jpg", alt: "Tote en acier inoxydable — façade" },
    ],
    category: "Entreposage",
    callLabel: "Pour commander ou réserver, contactez-nous :",
  },
  {
    id: "canneuse-automatique",
    name: "Canneuse Automatique",
    short: "18 cannes par minute, 3 secondes par canne. Compatible cannes standard et petit baril. Acier inoxydable, 120V.",
    stock: "Disponible sur commande — livraison rapide",
    stockDate: null,
    prices: [
      { label: "🍁 Prix en vente", amount: "1 795$", total: true },
      { label: "Prix régulier", amount: "2 095$" },
    ],
    price: "1 795$ 🍁 (En vente)",
    description: `Canneuse automatique pour toutes les cannes de sirop d'érable standards ainsi que les cannes petit barils.\n\nVient avec un adaptateur pour canne petit barils.\n\nComplètement en acier inoxydable, durable et simple à l'utilisation.\n\nCaractéristiques :\n• 3 secondes seulement par canne\n• Production d'environ 18 cannes par minute\n• Très rapide — pièces de rechange disponibles\n• 120 Volt standard\n• Vient avec une pédale\n• Garantie de 2 ans\n• Livraison possible`,
    images: [
      { src: "/images/equipement/canneuse-1.jpg", alt: "Canneuse automatique — vue principale" },
      { src: "/images/equipement/canneuse-2.jpg", alt: "Canneuse automatique — vue détaillée" },
    ],
    category: "Canneuse",
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
      { src: "/images/equipement/kit-tube-seal.jpg", alt: "Seals de rubber inclus" },
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
      { label: "WiFi Relay 110V — 63 Amp", amount: "$109.99" },
      { label: "60A Contactor — Single/Three Phase 240V", amount: "$124.99" },
      { label: "Complete Kit", amount: "$229.99", total: true },
    ],
    price: "Complete Kit: $229.99 + taxes",
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
    name: "Vacuum Pump with VFD Converter — 1.5HP to 10HP",
    short: "High-performance vacuum pumps with single-phase VFD slow start and integrated oil cooler.",
    prices: [
      { label: "1.5 HP — Drive included — 21 CFM (800 taps)",    amount: "$2,099.99" },
      { label: "3 HP   — Drive included — 45 CFM (1,500 taps)",  amount: "$3,199.99" },
      { label: "5 HP   — Drive included — 71 CFM (3,000 taps)",  amount: "$4,499.99" },
      { label: "7.5 HP — Drive included — 113 CFM (6,000 taps)", amount: "$4,999.99" },
      { label: "10 HP  — Drive included — 142 CFM (8,000 taps)", amount: "$5,499.99" },
    ],
    price: "From $2,099.99 + taxes",
    stock: "Available July 1st, 2026: 2 × 3HP • 2 × 5HP • 1 × 7.5HP",
    stockDate: "2026-07-01",
    description: `These professional rotary vane oil vacuum pumps are specifically designed for sugar shacks requiring maximum performance and reliability. The oil-lubricated rotary vane technology delivers deep, stable absolute vacuum even during long production days throughout the maple season.\n\nEach unit comes complete with a Variable Frequency Drive (VFD) converter enabling single-phase slow start operation. The slow start significantly reduces stress on the electric motor, extending its lifespan and preventing current spikes at startup.\n\nEach pump is equipped with an integrated oil cooler to maintain optimal absolute vacuum levels throughout the entire maple season.\n\nAvailable models:\n• 1.5 HP — Drive included — 21 CFM — 800 taps\n• 3 HP — Drive included — 45 CFM — 1,500 taps\n• 5 HP — Drive included — 71 CFM — 3,000 taps\n• 7.5 HP — Drive included — 113 CFM — 6,000 taps\n• 10 HP — Drive included — 142 CFM — 8,000 taps\n\nFeatures:\n• Type: rotary vane oil vacuum pump\n• VFD converter included (single-phase, slow start)\n• Integrated oil cooler\n• Maximum absolute vacuum guaranteed\n• Ideal for sugar shacks of all sizes\n• Durable, reliable and easy to maintain`,
    images: [
      { src: "/images/equipement/vacuum-1.jpg", alt: "Vacuum pump — general view" },
      { src: "/images/equipement/vacuum-2.jpg", alt: "Vacuum pump — side view" },
      { src: "/images/equipement/vacuum-3.jpg", alt: "Vacuum pump — detail" },
      { src: "/images/equipement/vacuum-4.jpg", alt: "Vacuum pump — rear view" },
      { src: "/images/equipement/vacuum-5.jpg", alt: "Vacuum pump — full view" },
      { src: "/images/equipement/vacuum-vfd.png", alt: "Single-phase VFD converter included" },
      { src: "/images/equipement/vacuum-7.png", alt: "Vacuum pump 7.5 HP and 10 HP" },
    ],
    category: "Vacuum pump",
    callLabel: "To reserve or purchase, contact us:",
  },
  {
    id: "tote-inox",
    name: "Stainless Steel Totes — 650 L and 1000 L",
    short: "Alternative to barrels. 7x faster grading, stackable, stainless steel. $400 deposit required.",
    stock: "Available on order — fast delivery",
    stockDate: null,
    prices: [
      { label: "650 L Tote (143 imp. gal.)", amount: "$1,395" },
      { label: "1000 L Tote (220 imp. gal.)", amount: "$1,795" },
      { label: "Butterfly valve (option)", amount: "$75" },
    ],
    price: "From $1,395 — $400 Deposit",
    description: `Totes designed as an alternative to barrels. This transaction requires a $400 deposit on the sale price. The balance is payable at pickup.\n\nAvailable capacities:\n• 650 litres (143 imperial gallons) — 39-3/8'' × 47-3/8'' × 30'' high\n• 1000 litres (220 imperial gallons) — 39-3/8'' × 47-3/8'' × 45'' high\n\nMaterial: 1/16'' Stainless steel\n\nIncluded:\n• 2'' ferrule outlet with cap and clamp at the bottom\n• 6'' top opening with clamp, cap and 2'' threaded plug (like barrels) on top\n• Galvanized steel pallet and protective cage\n• Option: butterfly outlet valve $75\n\nAdvantages:\n• 7x faster grading — Get paid faster\n• Drains completely when level — Avoids residue, easy to clean\n• 1 tote 1000 L = 6.5 barrels of 34 gallons • 1 tote 650 L = 4.2 barrels of 34 gallons\n• Vertical storage — Stackable 3 high\n• Less handling — Reduces risk of breakage and syrup loss\n• Easy transport by forklift or pallet jack\n• Cools faster than plastic totes — Limits darkening of syrup\n• Better preservation — Barrier against oxygen and light, preserves for years without oxidation or fermentation\n• Outdoor storage safe — Resistant to sun and rain\n\nTerms of sale:\n• Required deposit: $400 (balance payable at pickup)\n• Pickup: Estrie (Sainte-Cécile-de-Whitton) or Lower St. Lawrence (Sainte-Rita)\n• Delivery available — Contact us for details and large quantities`,
    images: [
      { src: "/images/equipement/tote-1.jpg", alt: "Stainless steel tote — general view" },
      { src: "/images/equipement/tote-2.jpg", alt: "Stainless steel tote — lid" },
      { src: "/images/equipement/tote-3.jpg", alt: "Stainless steel tote — valve" },
      { src: "/images/equipement/tote-4.jpg", alt: "Stainless steel tote — front" },
    ],
    category: "Storage",
    callLabel: "To order or reserve, contact us:",
  },
  {
    id: "canneuse-automatique",
    name: "Automatic Canning Machine",
    short: "18 cans per minute, 3 seconds per can. Compatible with standard maple syrup cans and small barrels. Stainless steel, 120V.",
    stock: "Available on order — fast delivery",
    stockDate: null,
    prices: [
      { label: "🍁 Sale price", amount: "$1,795", total: true },
      { label: "Regular price", amount: "$2,095" },
    ],
    price: "$1,795 🍁 (On Sale)",
    description: `Automatic canning machine for all standard maple syrup cans as well as small barrel cans.\n\nComes with an adapter for small barrel cans.\n\nCompletely made of stainless steel, durable and easy to use.\n\nFeatures:\n• Only 3 seconds per can\n• Production of approximately 18 cans per minute\n• Very fast — replacement parts available\n• Standard 120 Volt\n• Comes with a foot pedal\n• 2-year warranty\n• Delivery available`,
    images: [
      { src: "/images/equipement/canneuse-1.jpg", alt: "Automatic canning machine — main view" },
      { src: "/images/equipement/canneuse-2.jpg", alt: "Automatic canning machine — detailed view" },
    ],
    category: "Canning Machine",
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
      { src: "/images/equipement/kit-tube-seal.jpg", alt: "Rubber seals included" },
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
                      <tr key={i} className={p.total ? styles.priceRowTotal : styles.priceRow}>
                        <td className={styles.priceLabel}>{p.label}</td>
                        <td className={styles.priceAmount}>{p.amount}</td>
                        <td className={styles.priceTax}>{p.amount !== "Sur demande" && p.amount !== "On request" ? "+ taxes" : ""}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <span className={styles.modalPrice}>{product.price}</span>
              )}
              {product.stock && <span className={styles.modalStock}>✅ {product.stock}</span>}
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
                  <a href="mailto:erabliere.lespotasucre@gmail.com" className={styles.callEmail}>erabliere.lespotasucre@gmail.com</a>
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

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const product = products.find(p => p.id === hash);
      if (product) setSelected(product);
    }
  }, [lang]);

  return (
    <div className={styles.page}>
      <Head>
        <title>Équipement Érablière — Le Spot à Sucre</title>
        <meta name="description" content="Équipement professionnel pour érablières : pompes à vide VFD 1.5HP à 10HP, totes inox 650L et 1000L, canneuse automatique, contacteur 60A et relai WiFi. Livraison possible." />
        <meta name="keywords" content="équipement érablière, pompe à vide érablière, vacuum pump maple, pompe VFD érablière, tote inox érablière, canneuse automatique sirop, contacteur 60A érablière, démarrage automatique érablière, équipement acéricole, Québec, Outaouais, L'Ange-Gardien" />
        <meta property="og:title" content="Équipement Érablière — Le Spot à Sucre" />
        <meta property="og:description" content="Pompes à vide, totes inox, canneuse automatique et plus pour votre érablière." />
        <meta property="og:url" content="https://erablierelespotasucre.com/equipement" />
        <link rel="canonical" href="https://erablierelespotasucre.com/equipement" />
      </Head>
      <div className={styles.heroSection}>
        <div className={styles.heroImgWrap}>
          <Image
            src="/images/equipement-hero.png"
            alt="Équipement érablière professionnel — Le Spot à Sucre"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{e.title}</h1>
          <p className={styles.heroSubtitle}>{e.subtitle}</p>
        </div>
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

