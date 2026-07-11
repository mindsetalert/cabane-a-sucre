import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Equipement.module.css";

export default function ProductModal({ product, onClose }) {
  const { t } = useLanguage();
  const [activeImg, setActiveImg] = useState(0);
  const e = t.equipement;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={ev => ev.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>

        <div className={styles.modalLayout}>
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
                        <td className={styles.priceTax}>
                          {p.amount !== "Sur demande" && p.amount !== "On request" ? e.taxes : ""}
                        </td>
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
                  <p className={styles.callLabel}>{e.email_us}</p>
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
