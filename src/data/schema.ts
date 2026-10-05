// JSON-LD de la home: Organization, LocalBusiness y Service tal cual el documento de textos,
// más FAQPage generado desde las mismas preguntas y respuestas visibles en #preguntas.
import { contact, faq, site } from './content';

export const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://biocare.com.mx/#organization',
      name: 'BioCare Solución Logística',
      url: 'https://biocare.com.mx/',
      logo: 'https://biocare.com.mx/brand/biocare-logo-verde.png',
      sameAs: [
        'https://www.facebook.com/biocarelogistica',
        'https://www.instagram.com/biocarelogistica',
        'https://www.linkedin.com/company/biocarelogistica',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://biocare.com.mx/#business',
      name: 'BioCare Solución Logística',
      description:
        'Recolección y transporte de muestras clínicas y medicamentos con rutas programadas, temperatura controlada y cadena de custodia en Querétaro y el Bajío.',
      url: 'https://biocare.com.mx/',
      image: 'https://biocare.com.mx/og/biocare-og-1200x630.jpg',
      telephone: contact.phoneSchema,
      email: contact.email,
      parentOrganization: { '@id': 'https://biocare.com.mx/#organization' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Querétaro',
        addressRegion: 'Qro.',
        addressCountry: 'MX',
      },
      areaServed: [
        { '@type': 'Place', name: 'El Bajío' },
        { '@type': 'State', name: 'Querétaro' },
        { '@type': 'State', name: 'Guanajuato' },
        { '@type': 'City', name: 'San Juan del Río' },
        { '@type': 'City', name: 'Celaya' },
        { '@type': 'City', name: 'Salamanca' },
        { '@type': 'City', name: 'Irapuato' },
        { '@type': 'City', name: 'León' },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '07:00',
          closes: '20:00',
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'Transporte de muestras biológicas y medicamentos',
      serviceType: 'Logística clínica',
      provider: { '@id': 'https://biocare.com.mx/#business' },
      areaServed: 'Querétaro y el Bajío, México',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios BioCare',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rutas programadas de recolección de muestras' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Traslado de muestras entre sucursales y laboratorio' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transporte de medicamentos con temperatura controlada' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Recolecciones adicionales fuera de ruta' } },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${site.url}#preguntas`,
      mainEntity: faq.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};
