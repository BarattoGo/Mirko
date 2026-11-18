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
    desc: 'Colazioni con cornetti appena sfornati, caffè selezionati, pranzi veloci e aperitivi. Il tuo punto di riferimento.',
    items: ['Espresso & caffè selezionati', 'Cornetti appena sfornati', 'Pranzi veloci', 'Aperitivi'],
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

/* Profili del Drink & Gin Matcher (10 profili con Gin Tonic + Cocktail reali dalla carta) */
export const GIN_PROFILES = [
  {
    id: 'agrumato', label: 'Agrumato', icon: 'citrus',
    title: 'Solare & Agrumato',
    gin: 'Malfy Con Limone', tonic: 'Tonica Mediterranea', garnish: 'Scorza di limone & basilico',
    desc: 'Luminoso, fresco e dissetante, con agrumi vivi in primo piano. Perfetto per iniziare la serata.',
    menuPicks: [
      { name: 'Gin Fizz', price: '€8.00' },
      { name: 'Mojito Siciliano', price: '€7.00' },
      { name: 'Tequila Paloma', price: '€8.00' },
    ],
    scale: { freschezza: 95, corpo: 45, aromaticita: 65 },
  },
  {
    id: 'fruttato', label: 'Fruttato', icon: 'cherry',
    title: 'Morbido & Fruttato',
    gin: 'Bombay Bramble', tonic: 'Tonica Premium Light', garnish: 'More & lamponi freschi',
    desc: 'Frutti rossi maturi e una morbidezza vellutata. Avvolgente, colorato e irresistibile.',
    menuPicks: [
      { name: 'Bramble', price: '€8.00' },
      { name: 'Porn Star Martini', price: '€7.00' },
      { name: 'Raspberry Mule', price: '€8.00' },
    ],
    scale: { freschezza: 80, corpo: 55, aromaticita: 75 },
  },
  {
    id: 'esotico', label: 'Esotico', icon: 'tropical',
    title: 'Esotico & Tropicale',
    gin: 'Gin Premium & Passion Twist', tonic: 'Tonica Indiana & Lime', garnish: 'Passion fruit & lime fresco',
    desc: 'Note tropicali di frutto della passione, lime, rum e frutta fresca. Un viaggio estivo nel bicchiere.',
    menuPicks: [
      { name: 'Mai-Tai', price: '€8.00' },
      { name: 'Mojito Fresh Fruits', price: '€8.00' },
      { name: 'Caipirinha', price: '€6.00' },
    ],
    scale: { freschezza: 90, corpo: 60, aromaticita: 85 },
  },
  {
    id: 'floreale', label: 'Floreale', icon: 'flower',
    title: 'Delicato & Floreale',
    gin: "Hendrick's", tonic: 'Tonica ai fiori di sambuco', garnish: 'Cetriolo & petali di rosa',
    desc: 'Elegante e setoso, con profumi di fiori di sambuco, rosa e cetriolo. Per chi ama i drink raffinati.',
    menuPicks: [
      { name: 'Hugo Spritz', price: '€7.00' },
      { name: "Pimm's", price: '€6.00' },
      { name: 'Cosmopolitan', price: '€7.00' },
    ],
    scale: { freschezza: 80, corpo: 45, aromaticita: 85 },
  },
  {
    id: 'erbaceo', label: 'Erbaceo', icon: 'leaf',
    title: 'Mediterraneo & Erbaceo',
    gin: 'Gin Mare', tonic: 'Tonica Mediterranea', garnish: 'Rosmarino & oliva',
    desc: 'Rosmarino, menta, timo e botaniche balsamiche: profumi intensi e carattere deciso.',
    menuPicks: [
      { name: 'Hanky Panky', price: '€10.00' },
      { name: 'Mojito', price: '€7.00' },
      { name: 'John Collins', price: '€8.00' },
    ],
    scale: { freschezza: 70, corpo: 65, aromaticita: 90 },
  },
  {
    id: 'secco', label: 'Secco', icon: 'martini',
    title: 'Secco & Classico',
    gin: 'Tanqueray London Dry', tonic: 'Indian Tonic Water', garnish: 'Lime & bacche di ginepro',
    desc: 'Il grande classico senza compromessi: ginepro protagonista, taglio dry e finale pulitissimo.',
    menuPicks: [
      { name: 'Cocktail Martini', price: '€9.00' },
      { name: 'Gin and French', price: '€10.00' },
      { name: 'Margarita', price: '€7.00' },
    ],
    scale: { freschezza: 70, corpo: 75, aromaticita: 55 },
  },
  {
    id: 'amaro', label: 'Amaro & Bitter', icon: 'bitter',
    title: 'Amaro & Deciso',
    gin: 'London Dry & Twist Bitter', tonic: 'Tonica Dry & Pompelmo', garnish: "Scorza d'arancia & ginepro",
    desc: 'Il fascino dell’aperitivo italiano d’autore: note amaricanti, vermouth rosso e agrumi.',
    menuPicks: [
      { name: 'Negroni', price: '€7.00' },
      { name: 'Pink Americano', price: '€7.00' },
      { name: 'Milano - Torino', price: '€8.00' },
    ],
    scale: { freschezza: 60, corpo: 85, aromaticita: 85 },
  },
  {
    id: 'speziato', label: 'Speziato', icon: 'flame',
    title: 'Complesso & Speziato',
    gin: 'Monkey 47', tonic: 'Tonica Premium Classica', garnish: "Pepe rosa & scorza d'arancia",
    desc: 'Zenzero pungente, spezie calde, liquirizia e 47 botaniche per chi cerca un sorso ricco di carattere.',
    menuPicks: [
      { name: 'Averna Mule', price: '€7.00' },
      { name: 'Black Mojito', price: '€7.00' },
      { name: 'Moskow Mule', price: '€7.00' },
    ],
    scale: { freschezza: 55, corpo: 85, aromaticita: 95 },
  },
  {
    id: 'torbato', label: 'Torbato & Intenso', icon: 'aged',
    title: 'Torbato & Meditazione',
    gin: 'Selezione Whisky & Rum Riserva', tonic: 'Servito Liscio o On the Rocks', garnish: "Scorza d'arancia / Cioccolato",
    desc: 'Per il dopocena: note affumicate di torba scozzese, bourbon americani e grandi rum invecchiati.',
    menuPicks: [
      { name: 'Old Fashioned', price: '€8.00' },
      { name: 'Manhattan', price: '€8.00' },
      { name: "Lagavulin / Papa's Pilar", price: '€10.00' },
    ],
    scale: { freschezza: 30, corpo: 98, aromaticita: 95 },
  },
  {
    id: 'analcolico', label: 'Zero Alcol 0.0', icon: 'zero',
    title: 'Piacere Zero Alcol (0.0)',
    gin: 'Tanqueray 0.0 / Beefeater 0.0', tonic: 'Tonica Premium o Mediterranea', garnish: 'Lime, frutti rossi & menta',
    desc: 'Tutto il rituale del Gin Tonic in calice balloon o di un cocktail esotico, ma con 0.0% alcol.',
    menuPicks: [
      { name: 'Tanqueray 0.0 / Beefeater 0.0', price: '€8.00' },
      { name: 'Solea (Analcolico)', price: '€6.00' },
      { name: 'Cool Passion (Analcolico)', price: '€7.00' },
    ],
    scale: { freschezza: 95, corpo: 40, aromaticita: 75 },
  },
];

/* ============================================
   MENÙ — tag opzionale: 'Signature' | 'Best Seller' | 'Classico'
   ============================================ */
export const MENU = {
  alcolici: [
    { section: 'Classici' },
    { name: 'Aperol Spritz', price: '€6.00', desc: 'Aperol, Prosecco, soda.', tag: 'Best Seller' },
    { name: 'Campari Spritz', price: '€6.00', desc: 'Campari bitter, Prosecco, soda.' },
    { name: 'Negroni', price: '€7.00', desc: 'Campari bitter, Vermouth rosso, Gin.', tag: 'Classico' },
    { name: 'Negroni Sbagliato', price: '€7.00', desc: 'Campari bitter, Vermouth rosso, Prosecco.' },
    { name: 'Americano', price: '€7.00', desc: 'Campari bitter, Vermouth rosso, soda.' },
    { name: 'Pink Americano', price: '€7.00', desc: 'Campari bitter, Vermouth, soda al pompelmo.' },
    { name: 'Milano - Torino', price: '€8.00', desc: 'Campari bitter, Vermouth rosso.' },
    { name: 'Hugo Spritz', price: '€7.00', desc: 'St. Germain, Prosecco, foglie di menta.' },

    { section: 'Twist sui Classici' },
    { name: 'Caipirinha', price: '€6.00', desc: 'Cachaça, lime, zucchero di canna.' },
    { name: "Pimm's", price: '€6.00', desc: "Pimm's, ginger ale, arancia, limone, cetriolo, foglie di menta." },
    { name: 'Mojito Siciliano', price: '€7.00', desc: 'Limone, arancia, menta, zucchero di canna, amaro Averna, soda.' },
    { name: 'Black Mojito', price: '€7.00', desc: 'Liquore alla liquirizia, lime, zucchero, foglie di menta.' },
    { name: 'Averna Mule', price: '€7.00', desc: 'Amaro Averna, lime, ginger beer.' },
    { name: 'Cynar Spritz', price: '€7.00', desc: 'Cynar, Prosecco, soda.' },

    { section: 'Base Gin' },
    { name: 'Gin Fizz', price: '€8.00', desc: 'Gin, zucchero di canna, lime, soda.' },
    { name: 'John Collins', price: '€8.00', desc: 'Gin, succo di lime, zucchero di canna, angostura bitter, soda.' },
    { name: 'Bramble', price: '€8.00', desc: 'Gin, succo di lime, zucchero di canna, liquore alle more.', tag: 'Signature' },
    { name: 'Cocktail Martini', price: '€9.00', desc: 'Gin, Vermouth dry. Chiedi al barman il gin che fa al caso tuo.', tag: 'Classico' },

    { section: 'Base Rum' },
    { name: 'Cuba Libre', price: '€7.00', desc: 'Rum scuro, Coca Cola.' },
    { name: 'Mojito', price: '€7.00', desc: 'Rum chiaro, lime, zucchero di canna bianco, foglie di menta, soda.' },
    { name: 'Mai-Tai', price: '€8.00', desc: "Rum chiaro, Rum scuro, Curaçao all'arancia, succo di lime, sciroppo d'orzata." },
    { name: 'Rum Cooler', price: '€8.00', desc: 'Rum scuro, ginger ale, lime, arancia, zucchero di canna.' },
    { name: 'Daiquiri', price: '€8.00', desc: 'Rum chiaro, zucchero, lime.' },
    { name: 'Mojito Fresh Fruits', price: '€8.00', desc: 'Rum chiaro, lime, zucchero di canna bianco, foglie di menta, frutta fresca a piacere.' },

    { section: 'Base Vodka' },
    { name: 'Caipiroska', price: '€6.00', desc: 'Vodka, zucchero di canna, lime.' },
    { name: 'Caipiroska Fresh Fruits', price: '€8.00', desc: 'Vodka, lime, zucchero, frutta fresca a piacere.' },
    { name: 'Black Russian', price: '€7.00', desc: 'Vodka, Kahlúa.' },
    { name: 'Bloody Mary', price: '€7.00', desc: 'Vodka, succo di pomodoro, sale, pepe, lime, tabasco, salsa worcestershire.' },
    { name: 'Cosmopolitan', price: '€7.00', desc: 'Vodka, Cointreau, lime, succo di cranberry.' },
    { name: 'Good Mother', price: '€7.00', desc: 'Vodka, amaretto Disaronno.' },
    { name: 'Long Island', price: '€7.00', desc: 'Vodka, gin, rum, triple sec, sour, Coca Cola.' },
    { name: 'Moskow Mule', price: '€7.00', desc: 'Vodka, succo di lime, ginger beer.' },
    { name: 'Porn Star Martini', price: '€7.00', desc: 'Vodka Absolut vaniglia, Passoa, sciroppo passion fruit, succo di lime.', tag: 'Best Seller' },
    { name: 'Raspberry Mule', price: '€8.00', desc: 'Vodka, purea di lampone, lampone fresco, succo di lime, ginger beer.' },

    { section: 'Base Tequila' },
    { name: 'Caipiteca', price: '€7.00', desc: 'Tequila, lime, zucchero di canna.' },
    { name: 'Margarita', price: '€7.00', desc: 'Tequila, Cointreau, succo di lime.' },
    { name: "Tommy's Margarita", price: '€8.00', desc: "Tequila, succo di lime, sciroppo d'agave." },
    { name: 'Tequila Paloma', price: '€8.00', desc: "Tequila Espolòn, succo di lime, sciroppo d'agave, soda al pompelmo." },

    { section: 'Base Wisky' },
    { name: 'God Father', price: '€8.00', desc: 'Scotch whisky, amaretto Disaronno.' },
    { name: 'Manhattan', price: '€8.00', desc: 'Rye o Canadian whisky, Vermouth rosso, angostura bitter.' },
    { name: 'Old Fashioned', price: '€8.00', desc: 'American Bourbon, zolletta di zucchero di canna, angostura bitter, soda.', tag: 'Classico' },

    { section: 'Cocktail Storici' },
    { name: 'Grasshopper', price: '€10.00', desc: 'Crema di cacao bianca, crema di menta.' },
    { name: 'Gin and French', price: '€10.00', desc: 'Gin, Vermouth dry.' },
    { name: 'Stinger', price: '€10.00', desc: 'Cognac, crema di menta.' },
    { name: 'Hanky Panky', price: '€10.00', desc: 'Gin, Vermouth rosso, Fernet Branca.', tag: 'Signature' },
  ],
  cantina: [
    { section: 'Vini Rossi (Calice / Bottiglia)' },
    { name: 'Chianti', price: '€5 / 25', desc: 'Vino rosso al calice o in bottiglia.' },
    { name: 'Valpolicella', price: '€6 / 30', desc: 'Vino rosso strutturato al calice o in bottiglia.' },
    { name: 'Nebbiolo', price: '€6 / 30', desc: 'Vino rosso piemontese al calice o in bottiglia.' },
    { name: 'Morellino', price: '€6 / 30', desc: 'Morellino di Scansano al calice o in bottiglia.' },
    { name: "Nero d'Avola", price: '€5 / 25', desc: 'Vino rosso siciliano al calice o in bottiglia.' },

    { section: 'Vini Bianchi (Calice / Bottiglia)' },
    { name: 'Grillo', price: '€5 / 25', desc: 'Vino bianco fresco e sapido al calice o in bottiglia.' },
    { name: 'Falanghina', price: '€5 / 25', desc: 'Vino bianco campano al calice o in bottiglia.' },
    { name: 'Ribolla Gialla', price: '€5 / 25', desc: 'Vino bianco friulano al calice o in bottiglia.' },
    { name: 'Arneis', price: '€6 / 30', desc: 'Roero Arneis al calice o in bottiglia.' },
    { name: 'Traminer', price: '€6 / 30', desc: 'Vino bianco aromatico al calice o in bottiglia.' },

    { section: 'Bollicine & Champagne' },
    { name: 'Franciacorta', price: '€7 / 40', desc: 'Bollicine metodo classico (calice / bottiglia).' },
    { name: 'Valdobbiadene', price: '€5 / 25', desc: 'Prosecco Superiore DOCG (calice / bottiglia).' },
    { name: 'Champagne', price: '€60.00', desc: 'Bottiglia.' },
  ],
  birre: [
    { section: 'Alla Spina' },
    { name: 'Isenbeck (Premium Pils)', price: '€4 / 6', desc: 'Piccola €4 · Media €6 — Carattere fresco e deciso, tipico delle Pils tedesche.' },

    { section: 'In Bottiglia' },
    { name: 'Heineken', price: '€4.00', desc: 'Lager bionda in bottiglia.' },
    { name: "Beck's", price: '€4.00', desc: 'Pilsner tedesca in bottiglia.' },
    { name: 'Ichnusa', price: '€4.00', desc: 'Birra sarda in bottiglia.' },
    { name: 'Corona', price: '€4.00', desc: 'Pale lager messicana in bottiglia.' },

    { section: 'Birre Speciali' },
    { name: 'Delirium Tremens', price: '€6.00', desc: 'Strong Blond Beer belga.' },
    { name: 'Delirium Nocturnum', price: '€6.00', desc: 'Strong Dark Beer belga.' },
    { name: 'Delirium Red', price: '€6.00', desc: 'Strong Fruit Beer alle ciliegie.' },
    { name: 'Leffe Rouge', price: '€6.00', desc: 'Birra d’abbazia belga ambrata.' },
    { name: 'Leffe Ambrée', price: '€6.00', desc: 'Birra d’abbazia belga dal gusto maltato e speziato.' },
  ],
  distillati: [
    { section: 'Rum' },
    { name: "Papa's Pilar", price: '€10.00', desc: 'Rum premium da degustazione.' },
    { name: 'Diplomatico', price: '€8.00', desc: 'Rum Reserva Exclusiva.' },
    { name: 'Zacapa 23', price: '€9.00', desc: 'Rum Solera Gran Reserva.' },
    { name: 'Matusalem 15', price: '€7.00', desc: 'Rum Gran Reserva 15 anni.' },
    { name: 'Matusalem Gran Riserva 8', price: '€7.00', desc: 'Rum invecchiato.' },
    { name: 'Kraken', price: '€7.00', desc: 'Black Spiced Rum.' },

    { section: 'Wisky' },
    { name: 'Caol Ila', price: '€8.00', desc: 'Single Malt Scotch Whisky (Islay).' },
    { name: 'Lagavulin', price: '€10.00', desc: 'Single Malt Scotch Whisky torbato.' },
    { name: 'Ardbeg', price: '€8.00', desc: 'Single Malt Scotch Whisky (Islay).' },
    { name: 'Bulleit Bourbon', price: '€7.00', desc: 'Kentucky Straight Bourbon Whiskey.' },
    { name: 'Nikka From The Barrel', price: '€8.00', desc: 'Blended Whisky giapponese.' },
  ],
  analcolici: [
    { section: 'Cocktail Analcolici' },
    { name: 'Fruit Punch', price: '€6.00', desc: 'Ananas, arancia, sciroppo di fragola, sweet & sour.' },
    { name: 'Solea', price: '€6.00', desc: 'Arancia, frutto della passione, lime.', tag: 'Signature' },
    { name: 'Cool Passion', price: '€7.00', desc: 'Frutto della passione, lampone, sour.' },
    { name: 'A fantasia del tuo barman', price: '€6 / 7', desc: 'Cocktail analcolico creato su misura dal bartender.' },

    { section: 'Distillati 0.0 & Bibite' },
    { name: 'Beefeater 0.0', price: '€8.00', desc: 'Distillato analcolico alle botaniche del London Dry.' },
    { name: 'Tanqueray 0.0', price: '€8.00', desc: 'Distillato analcolico con ginepro e agrumi.' },
    { name: 'Bibite', price: 'da €3.50', desc: 'Coca Cola, Sprite, Fanta, toniche, succhi di frutta, Crodino, Sanbittèr.' },
    { name: 'Acqua Naturale / Frizzante', price: '€1.50', desc: 'Bottiglia.' },
  ],
  cibo: [
    { section: 'I Taglieri' },
    { name: 'Tagliere Regular', price: '€2.50', desc: 'Selezione di salumi e formaggi del territorio.' },
    { name: 'Tagliere XXL', price: '€5.00', desc: 'Ricca selezione di salumi, formaggi e stuzzichini.', tag: 'Best Seller' },

    { section: 'I Bruschettoni' },
    { name: 'Guancia a Guancia', price: '€8.00', desc: 'Formaggio, granella di noci, crema di pecorino, guanciale.', tag: 'Signature' },
    { name: 'Calabrese', price: '€7.50', desc: 'Passata di pomodoro, formaggio, pomodoro secco, salame piccante.' },
    { name: 'Mix Grill', price: '€6.50', desc: 'Passata di pomodoro, formaggio, verdure grigliate a pezzetti.' },
    { name: 'Margherita', price: '€5.50', desc: 'Passata di pomodoro, formaggio, basilico.' },

    { section: 'Panini & Piadine' },
    { name: 'Crudo, Brie, e Rucola', price: '€6.50', desc: 'Prosciutto crudo, formaggio brie, rucola fresca.' },
    { name: 'Speck, Brie e Patè di Olive', price: '€6.50', desc: 'Speck affumicato, brie morbido, patè di olive.' },
    { name: 'Tacchino, Rucola e Patè', price: '€6.00', desc: 'Fesa di tacchino, rucola, patè di olive.' },
    { name: 'Il Toast Farcito', price: '€5.00', desc: 'Toast classico farcito.' },
  ],
};

export const MENU_TABS = [
  { id: 'alcolici', label: 'Cocktail' },
  { id: 'cantina', label: 'La Cantina' },
  { id: 'birre', label: 'Birre' },
  { id: 'distillati', label: 'Rum & Wisky' },
  { id: 'analcolici', label: 'Analcolici' },
  { id: 'cibo', label: 'Food & Taglieri' },
];
