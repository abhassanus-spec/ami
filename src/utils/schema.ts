export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['MedicalBusiness', 'MedicalClinic', 'HealthAndBeautyBusiness'],
  name: 'Ästhetik Praxis Aljeroudy',
  image: 'https://aljeroudy-aesthetik.de/logo.png',
  '@id': 'https://aljeroudy-aesthetik.de',
  url: 'https://aljeroudy-aesthetik.de',
  telephone: '+49-176-41454381', // +49 176 414 54 381
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Musterstraße 123',
    addressLocality: 'Essen',
    addressRegion: 'NRW',
    postalCode: '45138',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.4556432,
    longitude: 7.0115552,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Thursday'],
      opens: '11:30',
      closes: '18:15',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:15',
      closes: '13:45',
    },
  ],
  sameAs: [
    'https://www.facebook.com/aljeroudy',
    'https://www.instagram.com/aljeroudy',
  ],
  areaServed: {
    '@type': 'City',
    name: 'Essen',
  },
  paymentAccepted: 'Cash, Bank Transfer',
  currenciesAccepted: 'EUR',
};

export const createServiceSchema = (service: {
  name: string;
  description: string;
  price: string;
  duration: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Medical Service',
  name: service.name,
  description: service.description,
  provider: {
    '@type': 'MedicalBusiness',
    name: 'Ästhetik Praxis Aljeroudy',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Essen',
      addressRegion: 'NRW',
      addressCountry: 'DE',
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'Essen',
  },
  offers: {
    '@type': 'Offer',
    price: service.price.replace('€', ''),
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
  },
  url: `https://aljeroudy-aesthetik.de${service.url}`,
});

export const createFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `https://aljeroudy-aesthetik.de${item.url}`,
  })),
});

export const createBlogPostSchema = (post: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.description,
  image: post.image,
  datePublished: post.datePublished,
  dateModified: post.dateModified,
  author: {
    '@type': 'Organization',
    name: 'Ästhetik Praxis Aljeroudy',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Ästhetik Praxis Aljeroudy',
    logo: {
      '@type': 'ImageObject',
      url: 'https://aljeroudy-aesthetik.de/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://aljeroudy-aesthetik.de${post.url}`,
  },
});
