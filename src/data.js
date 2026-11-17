/* ============================================
   CONTENUTI & CONFIGURAZIONE — Shake & Tonic
   Tutti i testi, i dati fiscali/legali e i meta SEO
   del sito in un unico posto.
   ============================================ */

export const SITE = {
  name: 'Shake & Tonic',
  /* TODO: verificare/aggiornare con il dominio definitivo di produzione (senza slash finale) */
  url: 'https://www.shakeandtonic.it',
  locale: 'it_IT',
  priceRange: '€€',
  geo: {
    latitude: 45.4384,
    longitude: 8.6186,
  },
  /* TODO: inserire l'ID di Google Analytics 4 (es. 'G-XXXXXXXXXX') quando disponibile */
  gaMeasurementId: '',
};

/* Dati fiscali e societari del Titolare (Footer, Privacy Policy e Note Legali) */
export const LEGAL = {
  companyName: 'Shake & Tonic di Carchidi D.',
  legalForm: '',
  legalAddress: 'Via Galileo Galilei, 13 — 28100 Novara (NO)',
  vatId: '02824220038',
  taxCode: '',
  rea: '',
  pec: '',
  shareCapital: '',
  privacyEmail: 'info@shakeandtonic.it',
  lastUpdated: '17 novembre 2026',
};

export const CONTACT = {
  address: 'Via Galileo Galilei, 17',
  city: '28100 Novara (NO)',
  phone: '+39 320 808 0834',
  phoneHref: 'tel:+393208080834',
  whatsapp: 'https://wa.me/393208080834',
  email: 'info@shakeandtonic.it',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Via+Galileo+Galilei+17+28100+Novara',
  mapsEmbed: 'https://www.google.com/maps?q=Via+Galileo+Galilei+17,+28100+Novara&output=embed',
  /* TODO: sostituire '#' con gli URL reali dei profili social */
  instagram: '#',
  facebook: '#',
};

/* Meta SEO per ciascuna pagina */
export const PAGE_SEO = {
  home: {
    title: 'Shake & Tonic | Gintoneria e Cocktail Bar a Novara',
    description:
      "Shake & Tonic — Gintoneria e Cocktail bar d'autore a Novara in Via Galileo Galilei 17. Oltre 30 gin premium, toniche artigianali, cocktail signature, colazioni e aperitivi.",
    path: '/',
    image: '/logo.jpg',
  },
  menu: {
    title: 'Il Menù | Cocktail, Analcolici e Tapas — Shake & Tonic Novara',
    description:
      'Scopri il menù di Shake & Tonic a Novara: cocktail classici e signature, vini e bollicine, mocktail analcolici, bruschettoni, panini, piadine e taglieri.',
    path: '/menu',
    image: '/gin-tonic.jpg',
  },
  gintoneria: {
    title: 'La Gintoneria | Oltre 30 Gin & Matcher — Shake & Tonic Novara',
    description:
      "La Gintoneria d'autore di Shake & Tonic a Novara: oltre 30 etichette di gin selezionati, 12 toniche artigianali, botaniche fresche e il Gin & Tonic Matcher.",
    path: '/gintoneria',
    image: '/hero-night.jpg',
  },
  privacy: {
    title: 'Privacy Policy | Shake & Tonic Novara',
    description:
      'Informativa sul trattamento dei dati personali ai sensi dell’art. 13 del Regolamento UE 2016/679 (GDPR) per gli utenti del sito Shake & Tonic.',
    path: '/privacy-policy',
    noindex: true,
  },
  cookie: {
    title: 'Cookie Policy | Shake & Tonic Novara',
    description:
      'Informativa sull’utilizzo dei cookie tecnici, analitici e di terze parti sul sito web di Shake & Tonic a Novara.',
    path: '/cookie-policy',
    noindex: true,
  },
  terms: {
    title: 'Termini e Condizioni | Note Legali — Shake & Tonic Novara',
    description:
      'Termini e condizioni di utilizzo del sito web e note legali di Shake & Tonic a Novara.',
    path: '/termini-e-condizioni',
    noindex: true,
  },
  notFound: {
    title: 'Pagina non trovata (404) | Shake & Tonic Novara',
    description: 'La pagina richiesta non è disponibile su Shake & Tonic Novara.',
    path: '/404',
    noindex: true,
  },
};

/* Orari: open/close in ore decimali. close > 24 = dopo mezzanotte */
export const HOURS = [
  { label: 'Lunedì — Mercoledì', days: [1, 2, 3], open: 7, close: 22, text: '07:00 — 22:00' },
  { label: 'Giovedì', days: [4], open: 7, close: 24, text: '07:00 — 00:00' },
  { label: 'Venerdì — Sabato', days: [5, 6], open: 7, close: 25, text: '07:00 — 01:00' },
  { label: 'Domenica', days: [0], open: 7, close: 13, text: '07:00 — 13:00' },
];

export const MOODS = {
  day: {
    label: 'Di Giorno',
    time: '07:00 — 18:00',
    title: 'Caffetteria',
    titleEm: '& Bar',
    desc: 'Colazioni con cornetti appena sfornati, caffè selezionati, pranzi veloci e aperitivi al tramonto. Il tuo punto di riferimento.',
    items: ['Espresso & caffè selezionati', 'Cornetti appena sfornati', 'Pranzi veloci', 'Aperitivo al tramonto'],
  },
  night: {
    label: 'Di Sera',
    time: '18:00 — chiusura',
    title: 'Gintoneria',
    titleEm: "d'Autore",
    desc: 'Una selezione curata di gin premium, toniche artigianali e botaniche fresche. Ogni drink racconta una storia.',
    items: ['30+ gin premium', 'Toniche artigianali', 'Cocktail signature', 'Taglieri & Bruschettoni'],
  },
};

export const SIGNATURES = [
  { n: '01', name: 'Hanky Panky', desc: 'Gin, Vermouth rosso, Fernet Branca', notes: ['Erbaceo', 'Intenso'], price: '€10' },
  { n: '02', name: 'Bramble', desc: 'Gin, succo di limone, sciroppo di zucchero, liquore alle more', notes: ['Fruttato', 'Fresco'], price: '€8' },
  { n: '03', name: 'Porn Star Martini', desc: 'Vodka vaniglia, passoa, sciroppo passion fruit, lime', notes: ['Esotico', 'Vellutato'], price: '€7' },
];

export const RITUAL = [
  { n: '01', title: 'Il Ghiaccio', desc: 'Calice balloon raffreddato e ghiaccio pieno a lento scioglimento: il drink resta freddo senza annacquarsi.' },
  { n: '02', title: 'Il Gin', desc: 'Dosato al jigger, mai a occhio. Scegliamo il distillato in base alle botaniche che vogliamo esaltare.' },
  { n: '03', title: 'La Tonica', desc: 'Versata lentamente lungo la spirale del bar spoon per preservare ogni singola bollicina.' },
  { n: '04', title: 'Il Botanico', desc: 'Scorze, erbe fresche e spezie scelte per accompagnare il gin. Il tocco finale che lo rende unico.' },
];

/* Profili del Gin & Tonic Matcher (abbinamenti indicativi) */
export const GIN_PROFILES = [
  {
    id: 'agrumato', label: 'Agrumato', icon: 'citrus',
    title: 'Solare & Agrumato',
    gin: 'Malfy Con Limone', tonic: 'Tonica Mediterranea', garnish: 'Scorza di limone & basilico',
    desc: 'Luminoso e dissetante, profuma di costiera. Il gin tonic perfetto per iniziare la serata.',
    scale: { freschezza: 95, corpo: 40, aromaticita: 60 },
  },
  {
    id: 'floreale', label: 'Floreale', icon: 'flower',
    title: 'Delicato & Floreale',
    gin: "Hendrick's", tonic: 'Tonica ai fiori di sambuco', garnish: 'Cetriolo & petali di rosa',
    desc: 'Elegante e setoso, con note di rosa e cetriolo. Per chi ama i profumi raffinati.',
    scale: { freschezza: 75, corpo: 45, aromaticita: 85 },
  },
  {
    id: 'secco', label: 'Secco', icon: 'martini',
    title: 'Secco & Classico',
    gin: 'Tanqueray London Dry', tonic: 'Indian Tonic Water', garnish: 'Lime & bacche di ginepro',
    desc: 'Il grande classico: ginepro protagonista, amaro deciso e finale pulito.',
    scale: { freschezza: 70, corpo: 70, aromaticita: 55 },
  },
  {
    id: 'erbaceo', label: 'Erbaceo', icon: 'leaf',
    title: 'Mediterraneo & Erbaceo',
    gin: 'Gin Mare', tonic: 'Tonica Mediterranea', garnish: 'Rosmarino & oliva',
    desc: 'Rosmarino, timo e oliva: un viaggio sapido nel Mediterraneo, dentro un calice.',
    scale: { freschezza: 65, corpo: 65, aromaticita: 90 },
  },
  {
    id: 'speziato', label: 'Speziato', icon: 'flame',
    title: 'Complesso & Speziato',
    gin: 'Monkey 47', tonic: 'Tonica Premium Classica', garnish: "Pepe rosa & scorza d'arancia",
    desc: 'Ricco, profondo, avvolgente. 47 botaniche per chi cerca carattere.',
    scale: { freschezza: 50, corpo: 90, aromaticita: 95 },
  },
  {
    id: 'fruttato', label: 'Fruttato', icon: 'cherry',
    title: 'Morbido & Fruttato',
    gin: 'Bombay Bramble', tonic: 'Tonica Premium Light', garnish: 'More & lamponi freschi',
    desc: 'Frutti di bosco e una dolcezza naturale. Morbido, colorato, irresistibile.',
    scale: { freschezza: 80, corpo: 50, aromaticita: 70 },
  },
];

/* ============================================
   MENÙ — tag opzionale: 'Signature' | 'Best Seller' | 'Classico'
   ============================================ */
export const MENU = {
  alcolici: [
    { section: 'I Classici' },
    { name: 'Aperol Spritz', price: '€6.00', desc: 'Aperol, Prosecco, soda', tag: 'Best Seller' },
    { name: 'Negroni', price: '€7.00', desc: 'Campari bitter, Vermouth rosso, Gin', tag: 'Classico' },
    { name: 'Milano - Torino', price: '€8.00', desc: 'Campari bitter, Vermouth rosso' },
    { name: 'Hugo Spritz', price: '€7.00', desc: 'St. Germain, Prosecco, foglie di menta' },
    { section: 'Twist sui Classici' },
    { name: 'Mojito Siciliano', price: '€7.00', desc: 'Limone, arancia, menta, zucchero, amaro Averna, soda' },
    { name: 'Black Mojito', price: '€7.00', desc: 'Liquore alla liquirizia, lime, zucchero, foglie di menta' },
    { name: 'Averna Mule', price: '€7.00', desc: 'Amaro Averna, lime, ginger beer' },
    { section: 'Base Gin & Vodka' },
    { name: 'Gin Fizz', price: '€8.00', desc: 'Gin, succo di limone, sciroppo di zucchero, soda' },
    { name: 'Bramble', price: '€8.00', desc: 'Gin, succo di limone, sciroppo di zucchero, liquore alle more', tag: 'Signature' },
    { name: 'Moscow Mule', price: '€7.00', desc: 'Vodka, succo di lime, ginger beer' },
    { name: 'Porn Star Martini', price: '€7.00', desc: 'Vodka vaniglia, passoa, sciroppo passion fruit, lime', tag: 'Best Seller' },
    { section: 'Cocktail Storici & Signature' },
    { name: 'Grasshopper', price: '€10.00', desc: 'Crema di cacao bianca, crema di menta' },
    { name: 'Hanky Panky', price: '€10.00', desc: 'Gin, Vermouth rosso, Fernet Branca', tag: 'Signature' },
    { name: 'Stinger', price: '€10.00', desc: 'Cognac, crema di menta bianca' },
    { section: 'La Cantina (Calice / Bottiglia)' },
    { name: 'Franciacorta', price: '€7 / 40', desc: "Bollicine italiane d'eccellenza" },
    { name: 'Valpolicella', price: '€6 / 30', desc: 'Vino rosso strutturato' },
  ],
  analcolici: [
    { section: "Mocktail d'Autore" },
    { name: 'Sweet & Sour', price: '€6.00', desc: 'Ananas, arancia, sciroppo di fragola, sweet & sour' },
    { name: 'Solea', price: '€6.00', desc: 'Arancia, frutto della passione, lime', tag: 'Signature' },
    { name: 'Cool Passion', price: '€7.00', desc: 'Frutto della passione, lampone, sour' },
    { section: 'I Grandi Classici' },
    { name: 'Aperitivi Analcolici', price: '€6.00 / 7.00', desc: 'Crodino, Sanbittèr, ecc.' },
    { name: 'Succhi di Frutta', price: '€3.00', desc: 'Vari gusti selezionati' },
    { name: 'Bibite', price: '€3.00', desc: 'Coca Cola, Sprite, Fanta, ecc.' },
    { name: 'Acqua Naturale / Frizzante', price: '€1.50', desc: 'Bottiglia' },
  ],
  cibo: [
    { section: 'I Bruschettoni' },
    { name: 'Guancia a Guancia', price: '€8.00', desc: 'Formaggio, granella di noci, crema di pecorino, guanciale', tag: 'Signature' },
    { name: 'Calabrese', price: '€7.50', desc: 'Passata di pomodoro, formaggio, pomodoro secco, salame piccante' },
    { name: 'Mix Grill', price: '€6.50', desc: 'Passata di pomodoro, formaggio, verdure grigliate a pezzetti' },
    { name: 'Margherita', price: '€5.50', desc: 'Passata di pomodoro, formaggio, basilico' },
    { section: 'Panini & Piadine' },
    { name: 'Crudo, Brie, e Rucola', price: '€6.50', desc: 'Prosciutto crudo, formaggio brie, rucola fresca' },
    { name: 'Speck, Brie e Patè di Olive', price: '€6.50', desc: 'Speck affumicato, brie morbido, patè di olive' },
    { name: 'Tacchino, Rucola e Patè', price: '€6.00', desc: 'Fesa di tacchino, rucola, patè di olive' },
    { name: 'Il Toast Farcito', price: '€5.00', desc: 'Toast classico farcito' },
    { section: 'I Taglieri' },
    { name: 'Tagliere Regular', price: '€12.00', desc: 'Selezione di salumi e formaggi del territorio' },
    { name: 'Tagliere XXL', price: '€20.00', desc: 'Ricca selezione di salumi, formaggi, e stuzzichini', tag: 'Best Seller' },
  ],
};

export const MENU_TABS = [
  { id: 'alcolici', label: 'Cocktail & Vini' },
  { id: 'analcolici', label: 'Analcolici' },
  { id: 'cibo', label: 'Food & Tapas' },
];
