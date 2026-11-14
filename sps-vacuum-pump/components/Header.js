import Link from "next/link";
import { useRouter } from "next/router";
import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Header.module.css";

export default function Header() {
  const { lang, toggleLang, t } = useLanguage();
  const router = useRouter();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/produits", label: t.nav.products },
    { href: "/vfd", label: t.nav.vfd },
    { href: "/voltage", label: t.nav.voltage },
    { href: "/huile", label: t.nav.huile },
    { href: "/notre-but", label: t.nav.but },
    { href: "/garantie", label: t.nav.garantie },
    { href: "/pieces", label: t.nav.pieces },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-reel.png"
            alt="SPS Vacuum — Équipement Érablière"
            className={styles.logoImg}
          />
        </Link>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${router.pathname === link.href ? styles.active : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className={styles.langToggle}
          onClick={toggleLang}
          aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}
        >
          {lang === "fr" ? "🇨🇦 EN" : "🇫🇷 FR"}
        </button>
      </div>
    </header>
  );
}
