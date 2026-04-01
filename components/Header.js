import Link from "next/link";
import { useRouter } from "next/router";
import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Header.module.css";

export default function Header() {
  const { lang, toggleLang, t } = useLanguage();
  const router = useRouter();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/sirop", label: t.nav.sirop },
    { href: "/equipement", label: t.nav.equipement },
    { href: "/histoire", label: t.nav.histoire },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoPlaceholder}>
            <span>🍁</span>
            <span className={styles.logoText}>Cabane à Sucre</span>
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

        <button className={styles.langToggle} onClick={toggleLang}>
          {lang === "fr" ? "🇬🇧 English" : "🇫🇷 Français"}
        </button>
      </div>
    </header>
  );
}
