export const SITE_URL = "https://spsvacuumpump.com";
export const SITE_NAME = "SPS Vacuum Pump";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/equipement/sps750.png`;
export const LOGO_URL = `${SITE_URL}/images/logo-reel.png`;

export const BUSINESS = {
  name: SITE_NAME,
  legalName: "SPS Vacuum Pump — Le Spot à Sucre Érablière",
  phone: "+1-819-743-5003",
  email: "erabliere.lespotasucre@gmail.com",
  streetAddress: "621 Avenue de L'Ange-Gardien",
  addressLocality: "L'Ange-Gardien",
  addressRegion: "QC",
  postalCode: "J8L 4B6",
  addressCountry: "CA",
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: SITE_URL,
    logo: LOGO_URL,
    image: DEFAULT_OG_IMAGE,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    sameAs: ["https://erablierelespotasucre.com"],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    description:
      "Vente de pompes à vide SPS, contacteurs et équipement pour érablières au Québec.",
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE,
    logo: LOGO_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.583,
      longitude: -75.45,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Québec, Canada",
    },
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#business` },
    inLanguage: ["fr-CA", "en-CA"],
  };
}

export function webPageSchema({ title, description, path }) {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#business` },
    inLanguage: "fr-CA",
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function productListSchema(products) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Équipement érablière SPS Vacuum Pump",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.short,
        image: product.images?.[0]?.src
          ? `${SITE_URL}${product.images[0].src}`
          : DEFAULT_OG_IMAGE,
        brand: { "@type": "Brand", name: "SPS" },
        offers: {
          "@type": "Offer",
          priceCurrency: "CAD",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/produits#${product.id}`,
          seller: { "@id": `${SITE_URL}/#business` },
        },
      },
    })),
  };
}

export function jsonLdScript(data) {
  return { __html: JSON.stringify(data) };
}
