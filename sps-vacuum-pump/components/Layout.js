import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import GlobalJsonLd from "./GlobalJsonLd";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <div className={`${styles.wrapper} ${isHome ? styles.wrapperHome : ""}`}>
      <GlobalJsonLd />
      <Header />
      <main className={`${styles.main} ${isHome ? styles.mainHome : ""}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
