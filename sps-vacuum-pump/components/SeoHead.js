import Head from "next/head";
import { SITE_URL, DEFAULT_OG_IMAGE, jsonLdScript } from "../lib/seo";

export default function SeoHead({
  title,
  description,
  path = "/",
  image,
  keywords,
  type = "website",
  jsonLd = [],
}) {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const ogImage = image || DEFAULT_OG_IMAGE;
  const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd].filter(Boolean);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="SPS Vacuum Pump" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="fr_CA" />
      <meta property="og:locale:alternate" content="en_CA" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="geo.region" content="CA-QC" />
      <meta name="geo.placename" content="L'Ange-Gardien, Québec" />

      {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
        />
      )}

      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(schema)}
        />
      ))}
    </Head>
  );
}
