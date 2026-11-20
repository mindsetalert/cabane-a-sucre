import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Equipement.module.css";

function priceChunks(label) {
  return label.split(" — ").flatMap((part, index) => {
    const match = part.match(/^(.*?)\s+(\(.*\))$/);
    const pieces = match ? [match[1], match[2]] : [part];
    return pieces.map((text, i) => ({ text, sep: index > 0 && i === 0 }));
  });
}

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
            {product.sale && <span className={styles.saleBadge}>{e.sale}</span>}
            <h2 className={styles.productName}>{product.name}</h2>
            <div className={styles.modalMeta}>
              {product.prices ? (
                product.prices.some((p) => p.model && p.cfm) ? (
                  <div className={styles.priceTableWrap}>
                    <table className={styles.priceTable}>
                      <thead>
                        <tr>
                          <th>{e.col_model}</th>
                          <th>{e.col_cfm}</th>
                          <th>{e.col_taps}</th>
                          <th>{e.col_vac}</th>
                          <th>{e.col_price}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.prices.map((p, i) => (
                          <tr key={i}>
                            <td>
                              <span className={styles.priceModel}>{p.model}</span>
                              {p.hp && <span className={styles.priceHp}>{p.hp}</span>}
                            </td>
                            <td>{p.cfm}</td>
                            <td>{p.taps}</td>
                            <td>{p.vac || "−29.9"}</td>
                            <td>
                              <span className={styles.priceValue}>{p.amount}</span>
                              {p.amount !== "Sur demande" && p.amount !== "On request" && (
                                <span className={styles.priceTax}>{e.taxes}</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : product.prices.some((p) => p.model && p.size) ? (
                  <div className={styles.priceTableWrap}>
                    <table className={`${styles.priceTable} ${styles.priceTableSpecs}`}>
                      <thead>
                        <tr>
                          <th>{e.col_model}</th>
                          <th>{e.col_detail}</th>
                          <th>{e.col_size}</th>
                          <th>{e.col_price}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.prices.map((p, i) => (
                          <tr key={i}>
                            <td>
                              <span className={styles.priceModel}>{p.model}</span>
                            </td>
                            <td className={styles.priceDetail}>{p.detail}</td>
                            <td className={styles.priceSize}>{p.size}</td>
                            <td>
                              <span className={styles.priceValue}>{p.amount}</span>
                              {p.amount !== "Sur demande" && p.amount !== "On request" && (
                                <span className={styles.priceTax}>{e.taxes}</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                <div className={styles.priceList}>
                    {product.prices.map((p, i) => (
                      <div key={i} className={p.total ? styles.priceItemTotal : styles.priceItem}>
                        <span className={styles.priceLabel}>
                          {priceChunks(p.label).map((part, j) => (
                            <span key={j} className={styles.priceChunk}>
                              {part.sep ? "— " : ""}
                              {part.text}
                            </span>
                          ))}
                        </span>
                        <span className={styles.priceAmount}>
                          {p.was && (
                            <span className={styles.priceWas}>{p.was}</span>
                          )}
                          <span className={styles.priceValue}>{p.amount}</span>
                          {p.amount !== "Sur demande" && p.amount !== "On request" && (
                            <span className={styles.priceTax}>{e.taxes}</span>
                          )}
                        </span>
                      </div>
                    ))}
                </div>
                )
              ) : (
                <span className={styles.modalPrice}>
                  {product.priceWas && (
                    <span className={styles.priceWas}>{product.priceWas}</span>
                  )}
                  {product.price}
                </span>
              )}
              {product.stock && (
                <span className={product.stockOut ? styles.modalStockOut : styles.modalStock}>
                  {product.stockOut ? "⚠ " : "✅ "}
                  {product.stock}
                </span>
              )}
            </div>
            {product.notice && (
              <p className={product.noticeAlert ? styles.productNoticeAlert : styles.productNotice}>
                {product.notice}
              </p>
            )}
            {product.voltageInfo && (
              <p className={styles.voltageNote}>
                {e.voltage_pump}{" "}
                <Link href="/voltage" className={styles.voltageLink} onClick={onClose}>
                  {e.voltage_link}
                </Link>
              </p>
            )}
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

        {product.featureSheet && (
          <section className={styles.featureSheet} aria-label={product.featureSheet.title}>
            <h3 className={styles.featureSheetTitle}>{product.featureSheet.title}</h3>
            <div className={styles.featureRows}>
              {product.featureSheet.rows.map((row) => (
                <article
                  key={row.heading}
                  className={`${styles.featureRow} ${row.highlight ? styles.featureRowHighlight : ""}`}
                >
                  <div className={styles.featureImgWrap}>
                    <Image
                      src={row.image}
                      alt={row.imageAlt}
                      width={480}
                      height={360}
                      className={styles.featureImg}
                    />
                  </div>
                  <div className={styles.featureCopy}>
                    <h4 className={styles.featureHeading}>{row.heading}</h4>
                    <ul className={styles.featureBullets}>
                      {row.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
