import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#080c10" />
        <link rel="icon" type="image/png" href="/images/logo-reel.png" />
        <link rel="apple-touch-icon" href="/images/logo-reel.png" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
