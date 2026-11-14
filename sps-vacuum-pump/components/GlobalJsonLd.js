import Head from "next/head";
import {
  organizationSchema,
  localBusinessSchema,
  webSiteSchema,
  jsonLdScript,
} from "../lib/seo";

export default function GlobalJsonLd() {
  const schemas = [organizationSchema(), localBusinessSchema(), webSiteSchema()];

  return (
    <Head>
      {schemas.map((schema, i) => (
        <script
          key={`global-ld-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(schema)}
        />
      ))}
    </Head>
  );
}
