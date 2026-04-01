import "../styles/globals.css";
import { LanguageProvider } from "../lib/LanguageContext";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}
