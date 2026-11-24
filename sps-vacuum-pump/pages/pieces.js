import SeoHead from "../components/SeoHead";
import { webPageSchema } from "../lib/seo";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Pieces.module.css";

export default function Pieces() {
  const { t } = useLanguage();
  const p = t.pieces;
  const m = t.meta;

  return (
    <div className={styles.page}>
      <SeoHead
        title={m.pieces_title}
        description={m.pieces_description}
        path="/pieces"
        jsonLd={webPageSchema({
          title: m.pieces_title,
          description: m.pieces_description,
          path: "/pieces",
        })}
      />

      <div className={styles.pageHeader}>
        <span className={styles.pageIcon}>🔧</span>
        <h1 className={styles.pageTitle}>{p.title}</h1>
        <p className={styles.pageSubtitle}>{p.subtitle}</p>
      </div>

      {p.intro && <p className={styles.intro}>{p.intro}</p>}

      <figure className={styles.catalogFigure}>
        <Image
          src="/images/equipement/pieces-encor.png"
          alt="Pièces de remplacement SPS — pompe à vide SPS-1000 10 HP"
          width={1536}
          height={1024}
          className={styles.catalogImg}
          priority
        />
      </figure>

      <div className={styles.highlights}>
        {p.highlights.map((item) => (
          <div key={item.title} className={styles.highlightCard}>
            <span className={styles.highlightIcon}>{item.icon}</span>
            <h2 className={styles.highlightTitle}>{item.title}</h2>
            <p className={styles.highlightText}>{item.text}</p>
          </div>
        ))}
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{p.models_title}</h2>
        <p className={styles.sectionIntro}>{p.models_intro}</p>
        <div className={styles.modelTags}>
          {p.models.map((model) => (
            <span key={model} className={styles.modelTag}>
              {model}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{p.parts_title}</h2>
        <ul className={styles.list}>
          {p.parts_list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.recommendation}>
        <h2 className={styles.recommendationTitle}>{p.order_title}</h2>
        <p>{p.order_text}</p>
      </div>

      <p className={styles.closing}>{p.closing}</p>

      <div className={styles.ctaWrap}>
        <Link href="/contact" className={styles.cta}>
          {p.contact_cta}
        </Link>
      </div>
    </div>
  );
}
