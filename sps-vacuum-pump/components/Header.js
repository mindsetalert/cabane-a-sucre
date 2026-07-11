import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Header.module.css";

export default function Header() {
  const { lang, toggleLang, t } = useLanguage();
  const router = useRouter();

  const navLinks = [
    { href: "/", label: t.nav.products },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/equipement/vacuum-1.jpg"
            alt="SPS Vacuum Pump"
            width={60}
            height={60}
            className={styles.logoImg}
            priority
          />
          <div className={styles.logoTextBlock}>
            <span className={styles.logoName}>SPS Vacuum Pump</span>
            <span className={styles.logoSub}>{t.nav.logo_sub}</span>
          </div>
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
