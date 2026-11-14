import Image from "next/image";
import Link from "next/link";
import SeoHead from "../components/SeoHead";
import { webPageSchema } from "../lib/seo";
import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Vfd.module.css";

export default function Vfd() {
  const { t } = useLanguage();
  const v = t.vfd;
  const m = t.meta;

  return (
    <div className={styles.page}>
      <SeoHead
        title={m.vfd_title}
        description={m.vfd_description}
        path="/vfd"
        image="https://spsvacuumpump.com/images/equipement/vfd-price-2.png"
        jsonLd={webPageSchema({
          title: m.vfd_title,
          description: m.vfd_description,
          path: "/vfd",
        })}
      />

      <div className={styles.pageHeader}>
        <span className={styles.pageIcon}>⚡</span>
        <h1 className={styles.pageTitle}>{v.title}</h1>
        <p className={styles.pageSubtitle}>{v.subtitle}</p>
      </div>

      <figure className={styles.priceFigure}>
        <Image
          src="/images/equipement/vfd-price-2.png"
          alt={v.price_image_alt}
          width={1774}
          height={887}
          className={styles.priceImg}
          priority
        />
      </figure>

      <p className={styles.intro}>{v.intro}</p>

      <div className={styles.warning}>
        <p>{v.settings_warning}</p>
      </div>

      <div className={styles.highlights}>
        {v.highlights.map((item) => (
          <div key={item.title} className={styles.highlightCard}>
            <span className={styles.highlightIcon}>{item.icon}</span>
            <h2 className={styles.highlightTitle}>{item.title}</h2>
            <p className={styles.highlightText}>{item.text}</p>
          </div>
        ))}
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{v.what_title}</h2>
        <ul className={styles.list}>
          {v.what_points.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{v.models_title}</h2>
        <p className={styles.sectionIntro}>{v.models_intro}</p>
        <table className={styles.modelsTable}>
          <thead>
            <tr>
              <th>{t.nav.products}</th>
              <th>VFD</th>
            </tr>
          </thead>
          <tbody>
            {v.models.map((row) => (
              <tr key={row.pump}>
                <td>{row.pump}</td>
                <td>
                  <span className={styles.kwBadge}>{row.kw}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className={styles.note}>{v.models_note}</p>
      </div>

      <p className={styles.closing}>{v.closing}</p>

      <div className={styles.ctaWrap}>
        <Link href="/produits" className={styles.ctaSecondary}>
          {v.products_cta}
        </Link>
        <Link href="/contact" className={styles.cta}>
          {v.contact_cta}
        </Link>
      </div>
    </div>
  );
}
