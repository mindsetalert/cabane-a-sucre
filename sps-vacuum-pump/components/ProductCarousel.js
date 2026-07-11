import { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Accueil.module.css";

export default function ProductCarousel({ products, lang, onSelect }) {
  const ref = useRef(null);
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
          {products.map(p => (
            <button key={p.id} type="button" className={styles.carouselCard} onClick={() => onSelect(p)}>
              <div className={styles.carouselImgWrap}>
                <Image src={p.images[0].src} alt={p.name} fill style={{ objectFit: "contain" }} />
              </div>
              <div className={styles.carouselCardBody}>
                <h3 className={styles.carouselCardName}>{p.name}</h3>
                <p className={styles.carouselCardShort}>{p.short}</p>
                <span className={styles.carouselCardPrice}>{p.price}</span>
                <span className={styles.carouselCardBtn}>{label}</span>
              </div>
            </button>
          ))}
        </div>
        <button className={`${styles.carouselArrow} ${styles.arrowRight}`} onClick={() => scroll(1)} aria-label="Suivant">›</button>
      </div>
    </section>
  );
}
