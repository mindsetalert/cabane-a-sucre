import SeoHead from "../components/SeoHead";
import { webPageSchema } from "../lib/seo";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../lib/LanguageContext";
import homeStyles from "../styles/Home.module.css";

export default function Accueil() {
  const { t } = useLanguage();
  const e = t.equipement;
  const h = t.home;
  const m = t.meta;

  return (
    <>
      <SeoHead
        title={m.home_title}
        description={m.home_description}
        path="/"
        image="https://spsvacuumpump.com/images/accueil-hero.png"
        keywords={m.keywords}
        jsonLd={webPageSchema({
          title: m.home_title,
          description: m.home_description,
          path: "/",
        })}
      />

      <div className={homeStyles.homeMobileWrap}>
        <section className={homeStyles.heroLanding}>
          <div className={homeStyles.heroImgWrap}>
            <Image
              src="/images/accueil-hero.png"
              alt={m.hero_alt}
              fill
              className={homeStyles.heroImg}
              priority
            />
          </div>
          <Link href="/produits" className={homeStyles.heroScrollBtn}>
            {e.view_products}
          </Link>
        </section>

        <section className={homeStyles.d25Section} aria-labelledby="screw-home-title">
          <div className={homeStyles.d25Inner}>
            <div className={homeStyles.d25Copy}>
              <p className={homeStyles.d25Title} id="screw-home-title">
                {h.screw_title}
              </p>
              <p className={homeStyles.d25Text}>{h.screw_text}</p>
              <Link href="/produits#pompe-vis" className={homeStyles.infoCta}>
                {h.screw_cta}
              </Link>
            </div>
            <div className={homeStyles.d25ImgWrap}>
              <Image
                src="/images/equipement/pompe-vis-fiche.png"
                alt={h.screw_title}
                width={1200}
                height={900}
                className={homeStyles.d25Img}
              />
            </div>
          </div>
        </section>

        <section className={homeStyles.d25Section} aria-labelledby="vacuum-home-title">
          <div className={homeStyles.d25Inner}>
            <div className={homeStyles.d25Copy}>
              <p className={homeStyles.d25Title} id="vacuum-home-title">
                {h.vacuum_title}
              </p>
              <p className={homeStyles.d25Text}>{h.vacuum_text}</p>
              <Link href="/produits#pompe-vacuum" className={homeStyles.infoCta}>
                {h.vacuum_cta}
              </Link>
            </div>
            <div className={homeStyles.d25ImgWrap}>
              <Image
                src="/images/equipement/pompe-vacuum-fiche.png"
                alt={h.vacuum_title}
                width={1200}
                height={900}
                className={homeStyles.d25Img}
              />
            </div>
          </div>
        </section>

        <section className={homeStyles.d25Section} aria-labelledby="canneuse-home-title">
          <div className={homeStyles.d25Inner}>
            <div className={homeStyles.d25Copy}>
              <p className={homeStyles.d25Title} id="canneuse-home-title">
                {h.canneuse_title}
              </p>
              <p className={homeStyles.d25Text}>
                <span className={homeStyles.priceNowrap}>{h.canneuse_price}</span>
                . {h.canneuse_stock}
              </p>
              <Link href="/produits#canneuse-automatique" className={homeStyles.infoCta}>
                {h.canneuse_cta}
              </Link>
            </div>
            <div className={homeStyles.d25ImgWrap}>
              <Image
                src="/images/equipement/canneuse-automatique-fiche.png"
                alt={h.canneuse_title}
                width={1200}
                height={900}
                className={homeStyles.d25Img}
              />
            </div>
          </div>
        </section>

        <section className={homeStyles.d25Section} aria-labelledby="d25-home-title">
          <div className={homeStyles.d25Inner}>
            <div className={homeStyles.d25Copy}>
              <p className={homeStyles.d25Title} id="d25-home-title">
                {h.d25_title}
              </p>
              <p className={homeStyles.d25Text}>{h.d25_text}</p>
              <Link href="/produits#pompe-diaphragme" className={homeStyles.infoCta}>
                {h.d25_cta}
              </Link>
            </div>
            <div className={homeStyles.d25ImgWrap}>
              <Image
                src="/images/equipement/pompe-diaphragme-fiche.png"
                alt={h.d25_title}
                width={1200}
                height={900}
                className={homeStyles.d25Img}
              />
            </div>
          </div>
        </section>

        <section className={homeStyles.infoSection} aria-label={h.stock_title}>
          <div className={homeStyles.infoWrap}>
            <div className={homeStyles.stockHeader}>
              <p className={homeStyles.infoEyebrow}>{h.stock_title}</p>
              <h2 className={homeStyles.infoTitle}>{h.stock_intro}</h2>
              {h.stock_items.length > 0 && (
                <ul className={homeStyles.stockList}>
                  {h.stock_items.map((item) => (
                    <li key={`stock-${item.model}`} className={homeStyles.stockItem}>
                      <span className={homeStyles.stockQty}>{item.qty}</span>
                      <span className={homeStyles.stockModel}>{item.model}</span>
                    </li>
                  ))}
                </ul>
              )}
              <p className={homeStyles.infoNote}>{h.stock_note}</p>
            </div>

            <div className={homeStyles.typeBand}>
              <h3 className={homeStyles.typeTitle}>{h.group_vacuum}</h3>
              <div className={homeStyles.typeGrid}>
                <div className={homeStyles.typeCol}>
                  <p className={homeStyles.reservedEyebrow}>{h.reserved_title}</p>
                  <ul className={homeStyles.stockList}>
                    {h.reserved_vacuum.map((item) => (
                      <li key={`res-v-${item.model}`} className={homeStyles.reservedItem}>
                        <span className={homeStyles.reservedQty}>{item.qty}</span>
                        <span className={homeStyles.stockModel}>{item.model}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={homeStyles.typeCol}>
                  <p className={homeStyles.colEyebrow}>{h.incoming_vacuum_title}</p>
                  <p className={homeStyles.groupIntro}>{h.incoming_vacuum_intro}</p>
                  <ul className={homeStyles.stockList}>
                    {h.incoming_vacuum.map((item) => (
                      <li
                        key={`in-v-${item.model}`}
                        className={item.soldOut ? homeStyles.stockItemSoldOut : homeStyles.stockItem}
                      >
                        <span className={homeStyles.stockQty}>{item.qty}</span>
                        <span className={homeStyles.stockModel}>{item.model}</span>
                      </li>
                    ))}
                  </ul>
                  <p className={homeStyles.includedNote}>{h.included_note_vacuum}</p>
                </div>
              </div>

              <div className={homeStyles.januaryOrder}>
                <p className={homeStyles.colEyebrow}>{h.january_title}</p>
                <p className={homeStyles.groupIntro}>{h.january_intro}</p>
                <ul className={homeStyles.stockList}>
                  {h.january_vacuum.map((item) => (
                    <li key={`jan-v-${item.model}`} className={homeStyles.stockItem}>
                      <span className={homeStyles.stockQty}>{item.qty}</span>
                      <span className={homeStyles.stockModel}>{item.model}</span>
                    </li>
                  ))}
                </ul>
                <p className={homeStyles.januaryNote}>{h.january_note}</p>
              </div>
            </div>

            <div className={homeStyles.typeBand}>
              <h3 className={homeStyles.typeTitle}>{h.group_canneuse}</h3>
              <div className={homeStyles.typeGrid}>
                <div className={homeStyles.typeCol}>
                  <p className={homeStyles.reservedEyebrow}>{h.reserved_title}</p>
                  <ul className={homeStyles.stockList}>
                    {h.reserved_canneuse.map((item) => (
                      <li key={`res-c-${item.model}`} className={homeStyles.reservedItem}>
                        <span className={homeStyles.reservedQty}>{item.qty}</span>
                        <span className={homeStyles.stockModel}>{item.model}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={homeStyles.typeCol}>
                  <p className={homeStyles.colEyebrow}>{h.incoming_title}</p>
                  <p className={homeStyles.groupIntro}>{h.incoming_canneuse_intro}</p>
                  <ul className={homeStyles.stockList}>
                    {h.incoming_canneuse.map((item) => (
                      <li key={`in-c-${item.model}`} className={homeStyles.stockItem}>
                        <span className={homeStyles.stockQty}>{item.qty}</span>
                        <span className={homeStyles.stockModel}>{item.model}</span>
                      </li>
                    ))}
                  </ul>
                  <p className={homeStyles.includedNote}>{h.included_note_canneuse}</p>
                </div>
              </div>
            </div>

            <div className={homeStyles.typeBand}>
              <h3 className={homeStyles.typeTitle}>{h.group_diaphragm}</h3>
              <div className={homeStyles.typeGrid}>
                <div className={homeStyles.typeCol}>
                  <p className={homeStyles.reservedEyebrow}>{h.reserved_title}</p>
                  <ul className={homeStyles.stockList}>
                    {h.reserved_diaphragm.map((item) => (
                      <li key={`res-d-${item.model}`} className={homeStyles.reservedItem}>
                        <span className={homeStyles.reservedQty}>{item.qty}</span>
                        <span className={homeStyles.stockModel}>{item.model}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={homeStyles.typeCol}>
                  <p className={homeStyles.colEyebrow}>{h.incoming_title}</p>
                  <p className={homeStyles.groupIntro}>{h.incoming_diaphragm_intro}</p>
                  <ul className={homeStyles.stockList}>
                    {h.incoming_diaphragm.map((item) => (
                      <li key={`in-d-${item.model}`} className={homeStyles.stockItem}>
                        <span className={homeStyles.stockQty}>{item.qty}</span>
                        <span className={homeStyles.stockModel}>{item.model}</span>
                      </li>
                    ))}
                  </ul>
                  <p className={homeStyles.includedNote}>{h.included_note_diaphragm}</p>
                </div>
              </div>
            </div>

            <div className={homeStyles.reservationBlock}>
              <p className={homeStyles.infoEyebrow}>{h.reservation_title}</p>
              <h2 className={homeStyles.infoTitle}>{h.reservation_intro}</h2>
              <p className={homeStyles.depositBadge}>{h.reservation_deposit}</p>
              <ol className={homeStyles.reservationSteps}>
                {h.reservation_steps.map((step, i) => (
                  <li key={i} className={homeStyles.reservationStep}>
                    <span className={homeStyles.stepNum}>{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <Link href="/contact" className={homeStyles.infoCta}>
                {h.reservation_cta}
              </Link>
            </div>
          </div>
        </section>

        <div className={homeStyles.mobilePanel}>
          <p className={homeStyles.mobileTagline}>{h.mobile_tagline}</p>
          <a href="tel:8197435003" className={homeStyles.mobileCall}>
            📞 (819) 743-5003 — {h.mobile_call}
          </a>
          <nav className={homeStyles.mobileLinks}>
            <Link href="/produits">{h.mobile_links_products}</Link>
            <Link href="/pieces">{h.mobile_links_parts}</Link>
            <Link href="/garantie">{h.mobile_links_warranty}</Link>
            <Link href="/contact">{h.mobile_links_contact}</Link>
          </nav>
        </div>
      </div>
    </>
  );
}
