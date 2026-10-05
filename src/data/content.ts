// Contenido de la landing. Fuente única: "BioCare Solución Logística — Textos web y SEO (landing)".
// Los textos se copian palabra por palabra. Se omiten las etiquetas de rol (Eyebrow, H1, Texto, Botón),
// los marcadores [VALIDAR …] (conservando el texto que acompañan) y toda frase que dependa de un marcador [X].

export const site = {
  name: 'BioCare Solución Logística',
  shortName: 'BioCare',
  url: 'https://biocare.com.mx/',
  title: 'Transporte de muestras biológicas en Querétaro | BioCare',
  description:
    'Recolección y traslado de muestras clínicas y medicamentos en Querétaro. Rutas programadas, temperatura controlada y trazabilidad de clínica a laboratorio.',
  robots: 'index, follow, max-image-preview:large',
  themeColor: '#0A7E7A',
  og: {
    title: 'BioCare — Muestras seguras, a tiempo, en cada trayecto',
    description:
      'Rutas programadas de recolección y traslado de muestras clínicas y medicamentos para laboratorios, clínicas y hospitales en Querétaro y el Bajío.',
    image: '/og/biocare-og-1200x630.jpg',
    imageAlt: 'Camioneta de BioCare Solución Logística para transporte de muestras clínicas',
  },
};

export const contact = {
  phoneDisplay: '442 233 5566',
  phoneE164: '+524422335566',
  phoneSchema: '+52 442 233 5566',
  email: 'contacto@biocare.com.mx',
  hours: 'Lunes a sábado, 7:00 a 20:00',
  hoursSidebar: 'lunes a sábado, 7:00 a 20:00',
  coverage: 'Querétaro y el Bajío',
};

const WA = 'https://wa.me/524422335566?text=';
export const whatsapp = {
  general: WA + encodeURIComponent('Hola, BioCare. Me interesa el servicio de recolección de muestras. ¿Me pueden dar información?'),
  rutas: WA + encodeURIComponent('Hola, BioCare. Quiero cotizar una ruta programada de recolección de muestras para mi laboratorio.'),
  floatLabel: 'Escríbenos por WhatsApp',
  floatTooltip: '¿Dudas? Escríbenos.',
};

export const social = [
  { name: 'Facebook', href: 'https://www.facebook.com/biocarelogistica', icon: 'facebook' },
  { name: 'Instagram', href: 'https://www.instagram.com/biocarelogistica', icon: 'instagram' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/biocarelogistica', icon: 'linkedin' },
] as const;

export const header = {
  logoAlt: 'BioCare Solución Logística',
  menu: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Rutas', href: '#rutas' },
    { label: 'Bioseguridad', href: '#bioseguridad' },
    { label: 'Cobertura', href: '#cobertura' },
    { label: 'Preguntas', href: '#preguntas' },
  ],
  cta: { label: 'Agenda tu recolección', href: '#contacto' },
  mobileWhatsapp: 'Escríbenos por WhatsApp',
  openMenu: 'Abrir menú',
  closeMenu: 'Cerrar menú',
  skipLink: 'Ir al contenido principal',
};

export const hero = {
  // Ajuste solicitado por el cliente: hero más ligero. Se conservan el H1 (keyword principal),
  // los botones y los indicadores; el párrafo se resume y el tagline sale del hero (sigue en OG y footer de marca).
  h1: 'Transporte de muestras biológicas en Querétaro, a tiempo y con trazabilidad',
  text: 'Recolectamos las muestras de tus sucursales y centros de toma y las llevamos directo a tu laboratorio.',
  primary: 'Agenda tu recolección',
  secondary: 'Escríbenos por WhatsApp',
  indicators: ['Rutas programadas', 'Temperatura controlada', 'Cadena de custodia documentada'],
};

export const contexto = {
  h2: 'Cada muestra que llega tarde es un diagnóstico que espera',
  text: 'Un laboratorio con varias sucursales depende de que las muestras lleguen completas, en buen estado y a la hora en que el equipo de procesamiento las espera. Cuando el traslado depende de choferes improvisados, taxis o personal de la clínica, aparecen los mismos problemas:',
  list: [
    'Muestras que llegan fuera de horario y retrasan la corrida del día.',
    'Tubos y contenedores expuestos a calor o a golpes durante el camino.',
    'Ningún registro de quién recogió, a qué hora y en qué condiciones.',
  ],
  close: 'BioCare se encarga de ese trayecto para que tu equipo se concentre en tomar y procesar muestras.',
};

export const servicios = {
  eyebrow: 'Servicios',
  h2: 'Servicios de recolección y traslado de muestras clínicas',
  intro: 'Un servicio especializado para mover muestras biológicas y medicamentos entre los puntos de tu operación, con personal capacitado y unidades equipadas.',
  cards: [
    {
      icon: 'route',
      h3: 'Rutas programadas de recolección',
      text: 'Definimos contigo los puntos, los horarios y la frecuencia. Cada día pasamos a la misma hora por las muestras de tus centros de toma y las entregamos en tu laboratorio.',
    },
    {
      icon: 'network',
      h3: 'Traslado entre sucursales y laboratorio central',
      text: 'Conectamos sucursales, consultorios y centros de toma con tu laboratorio de procesamiento, para mantener un flujo constante de muestras durante todo el día.',
    },
    {
      icon: 'thermometer',
      h3: 'Transporte de medicamentos con temperatura controlada',
      text: 'Trasladamos medicamentos e insumos que requieren refrigeración en contenedores con control de temperatura, de la farmacia o almacén al punto de uso.',
    },
    {
      icon: 'bolt',
      h3: 'Recolecciones adicionales fuera de ruta',
      text: '¿Un volumen inesperado o una muestra que no puede esperar a la siguiente ruta? Solicítala por WhatsApp y te confirmamos la hora de recolección.',
    },
  ],
};

export const rutas = {
  eyebrow: 'Rutas y horarios',
  h2: 'Rutas y horarios de recolección diseñados para tu operación',
  text: 'No hay dos laboratorios iguales. Por eso diseñamos cada ruta según el número de puntos de toma, los horarios de corte de tu laboratorio y el volumen de muestras de cada día.',
  list: [
    'Una o varias recolecciones al día, según el volumen de cada sucursal.',
    'Horarios fijos y rutas recurrentes, para que tu equipo sepa exactamente a qué hora pasamos.',
    'Varios puntos en una misma ruta, de las sucursales al laboratorio sin escalas innecesarias.',
    'Ajustes cuando tu operación cambia: nuevas sucursales, cambios de horario o temporadas de alta demanda.',
  ],
  button: 'Diseñemos tu ruta',
};

export const proceso = {
  eyebrow: 'Proceso',
  h2: 'Cómo funciona el servicio',
  steps: [
    { h3: 'Conocemos tu operación.', text: 'Revisamos contigo tus sucursales, horarios de toma, horarios de corte del laboratorio y tipo de muestras.' },
    { h3: 'Diseñamos la ruta.', text: 'Te proponemos puntos, horarios y frecuencia de recolección. Arrancamos cuando la apruebas.' },
    { h3: 'Recolectamos y trasladamos.', text: 'Nuestro personal recoge las muestras en contenedores adecuados, registra la entrega y las lleva directo a tu laboratorio.' },
    { h3: 'Entregamos y confirmamos.', text: 'Tu laboratorio recibe las muestras con su registro de entrega y tú recibes la confirmación.' },
  ],
};

export const bioseguridad = {
  eyebrow: 'Bioseguridad',
  h2: 'Bioseguridad, cadena de custodia y temperatura controlada',
  intro: 'Transportar una muestra no es solo moverla de un lugar a otro. Es entregarla en las mismas condiciones en que salió.',
  pillars: [
    {
      icon: 'thermometer',
      h3: 'Temperatura controlada',
      text: 'Contenedores y hieleras para muestras a temperatura ambiente, refrigeradas o congeladas, según lo que indique tu laboratorio.',
    },
    {
      icon: 'clipboard',
      h3: 'Cadena de custodia documentada',
      text: 'Cada recolección queda registrada: punto de origen, hora de recolección, quién entrega, quién recibe y hora de llegada al laboratorio.',
    },
    {
      icon: 'package',
      h3: 'Embalaje seguro',
      text: 'Las muestras viajan en embalaje que las protege de derrames, golpes y exposición, separadas por tipo y destino.',
    },
    {
      icon: 'badge',
      h3: 'Personal capacitado e identificado',
      text: 'Nuestro equipo está capacitado en el manejo de muestras biológicas y se presenta uniformado y con credencial en cada punto de recolección.',
    },
  ],
};

export const paraQuien = {
  eyebrow: 'Clientes',
  h2: 'Logística clínica para laboratorios, clínicas y hospitales',
  profiles: [
    { icon: 'flask', h3: 'Laboratorios con sucursales', text: 'concentra las muestras de todos tus puntos de toma en tu laboratorio de procesamiento.' },
    { icon: 'droplet', h3: 'Centros de toma de muestras', text: 'envía tus muestras al laboratorio sin depender de tu personal.' },
    { icon: 'hospital', h3: 'Clínicas, consultorios y hospitales', text: 'manda a analizar muestras a laboratorios externos con un traslado confiable.' },
    { icon: 'pill', h3: 'Farmacias y distribuidores de medicamentos', text: 'mueve producto que requiere temperatura controlada.' },
  ],
};

export const porQue = {
  h2: 'Por qué elegir BioCare',
  benefits: [
    { icon: 'clock', h3: 'Puntualidad que se puede planear', text: 'llegamos en la ventana de horario que acordamos.' },
    { icon: 'cross', h3: 'Especialistas en lo clínico', text: 'solo transportamos muestras y medicamentos; no mezclamos tu carga con paquetería.' },
    { icon: 'bell', h3: 'Información en todo momento', text: 'si hay un retraso, te avisamos antes y con la hora estimada de llegada.' },
    { icon: 'chat', h3: 'Un contacto directo', text: 'un solo canal por WhatsApp para programar, ajustar o pedir recolecciones adicionales.' },
  ],
};

export const cobertura = {
  h2: 'Cobertura en Querétaro y el Bajío',
  text: 'Operamos rutas de recolección y traslado en Querétaro y el Bajío, y conectamos sucursales, centros de toma y laboratorios entre las ciudades de la región. ¿Tu operación está fuera de esta zona? Escríbenos y revisamos la ruta.',
  cities: ['Querétaro', 'San Juan del Río', 'Celaya', 'Salamanca', 'Irapuato', 'León'],
};

export const faq = {
  h2: 'Preguntas frecuentes sobre el transporte de muestras',
  items: [
    {
      q: '¿Qué tipo de muestras transportan?',
      a: 'Muestras biológicas para análisis clínico, como sangre, orina, heces, hisopados y tejidos, además de medicamentos que requieren temperatura controlada.',
    },
    {
      q: '¿Cómo se mantiene la temperatura de las muestras?',
      a: 'Usamos contenedores y hieleras adecuados para cada condición: ambiente, refrigeración o congelación, según lo indique tu laboratorio.',
    },
    {
      q: '¿Puedo tener varias recolecciones al día?',
      a: 'Sí. Programamos una o varias recolecciones diarias, con horarios fijos, según el volumen de cada sucursal y los horarios de corte de tu laboratorio.',
    },
    {
      q: '¿Qué pasa si necesito una recolección fuera de mi ruta?',
      a: 'Escríbenos por WhatsApp. Te confirmamos disponibilidad y hora estimada de recolección.',
    },
    {
      q: '¿Cómo sé que mis muestras llegaron?',
      a: 'Cada traslado queda registrado con hora de recolección y hora de entrega, y recibes la confirmación cuando el laboratorio las recibe.',
    },
    {
      q: '¿En qué zonas tienen servicio?',
      a: 'En Querétaro y el Bajío, incluidas ciudades como San Juan del Río, Celaya, Salamanca, Irapuato y León. Para otras zonas, consúltanos.',
    },
    {
      q: '¿Cómo se cotiza el servicio?',
      a: 'Según el número de puntos, la frecuencia de recolección y las distancias. Cuéntanos tu operación y te enviamos una propuesta de ruta con su costo.',
    },
    {
      q: '¿Facturan?',
      a: 'Sí, emitimos factura (CFDI) por todos nuestros servicios.',
    },
  ],
};

export const contacto = {
  eyebrow: 'Contacto',
  h2: 'Agenda tu recolección de muestras',
  // Se omite "Te respondemos con una propuesta de ruta en menos de [X] horas hábiles." (depende de [X]).
  text: 'Cuéntanos cuántos puntos de toma tienes y a qué horas necesitas que lleguen tus muestras.',
};

export const form = {
  fields: {
    nombre: { label: 'Nombre', placeholder: 'Tu nombre completo' },
    empresa: { label: 'Laboratorio o clínica', placeholder: 'Nombre de tu empresa' },
    telefono: { label: 'WhatsApp', placeholder: '10 dígitos' },
    correo: { label: 'Correo', placeholder: 'tu@empresa.com' },
    servicio: {
      label: '¿Qué necesitas?',
      placeholder: 'Selecciona una opción',
      options: ['Rutas programadas', 'Traslado entre sucursales', 'Transporte de medicamentos', 'Recolección adicional', 'Otro'],
    },
    puntos: { label: 'Número de puntos de recolección', placeholder: 'Ej. 3' },
    mensaje: { label: 'Cuéntanos de tu operación', placeholder: 'Municipios, horarios de toma y horario de corte de tu laboratorio' },
    privacidad: { before: 'Acepto el ', link: 'Aviso de privacidad' },
  },
  submit: 'Solicitar propuesta de ruta',
  sending: 'Enviando…',
  // Se omite "Te escribimos por WhatsApp en menos de [X] horas hábiles para revisar tu ruta." (depende de [X]).
  success: 'Recibimos tu solicitud.',
  error: 'No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos directo por WhatsApp.',
  required: 'Este campo es obligatorio.',
  invalidPhone: 'Escribe un número de 10 dígitos.',
  invalidEmail: 'Revisa que el correo tenga el formato nombre@dominio.com.',
  privacyRequired: 'Para continuar, acepta el Aviso de privacidad.',
};

export const footer = {
  logoAlt: 'BioCare Solución Logística',
  description: 'Recolección y transporte de muestras clínicas y medicamentos con temperatura controlada en Querétaro y el Bajío.',
  servicios: {
    title: 'Servicios',
    links: [
      { label: 'Rutas programadas', href: '#servicios' },
      { label: 'Traslado entre sucursales', href: '#servicios' },
      { label: 'Transporte de medicamentos', href: '#servicios' },
      { label: 'Recolecciones adicionales', href: '#servicios' },
    ],
  },
  empresa: {
    title: 'Empresa',
    links: [
      { label: 'Cómo funciona', href: '#como-funciona' },
      { label: 'Bioseguridad', href: '#bioseguridad' },
      { label: 'Cobertura', href: '#cobertura' },
      { label: 'Preguntas frecuentes', href: '#preguntas' },
    ],
  },
  contactoTitle: 'Contacto',
  socialHandle: '@biocarelogistica',
  legal: '© 2026 BioCare Solución Logística. Todos los derechos reservados.',
  privacy: 'Aviso de privacidad',
  credit: 'Sitio por LABS by Publifix',
};

export const notFound = {
  h1: 'Esta ruta no existe.',
  text: 'La página que buscas no está disponible.',
  button: 'Volver al inicio',
};

export const images = {
  hero: { name: 'transporte-muestras-biologicas-queretaro-biocare', alt: 'Mensajero de BioCare en motocicleta con caja térmica durante el transporte de muestras biológicas en Querétaro' },
  ruta: { name: 'ruta-programada-recoleccion-muestras', alt: 'Camioneta de BioCare en una ruta programada de recolección de muestras clínicas' },
  moto: { name: 'moto-recoleccion-muestras-clinicas', alt: 'Motocicleta de BioCare con caja térmica para recolecciones de muestras fuera de ruta' },
  mensajero: { name: 'mensajero-hielera-temperatura-controlada', alt: 'Mensajero uniformado de BioCare con hielera para muestras con temperatura controlada' },
  laboratorio: { name: 'entrega-muestras-laboratorio-clinico', alt: 'Entrega de contenedor de muestras en la recepción de un laboratorio clínico' },
  personal: { name: 'personal-biocare-solucion-logistica', alt: 'Personal de BioCare Solución Logística con uniforme y credencial' },
} as const;
