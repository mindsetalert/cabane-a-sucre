import Link from "next/link";
import Image from "next/image";
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
          <Image
            src="/images/logo.png"
            alt="Le Spot à Sucre Érablière"
            width={82}
            height={82}
            className={styles.logoImg}
            priority
          />
          <div className={styles.logoTextBlock}>
            <span className={styles.logoName}>Le Spot à Sucre</span>
            <span className={styles.logoSub}>Érablière</span>
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
          {lang === "fr" ? "🇬🇧 EN" : "🇫🇷 FR"}
        </button>
      </div>
    </header>
  );
}
