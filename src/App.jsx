import React, { useEffect, useState, useRef } from 'react';
import { Wine, Coffee, Clock, MapPin, Phone, Sun, Moon } from 'lucide-react';
import './index.css';

/* ============================================
   NAVBAR
   ============================================ */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="nav-logo">
          da <span>Mirko</span>
        </a>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#chi-siamo" onClick={() => setMenuOpen(false)}>Chi Siamo</a>
          <a href="#menu" onClick={() => setMenuOpen(false)}>Menù</a>
          <a href="#gintoneria" onClick={() => setMenuOpen(false)}>Gintoneria</a>
          <a href="#contatti" onClick={() => setMenuOpen(false)}>Contatti</a>
        </div>
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

/* ============================================
   HERO
   ============================================ */
const Hero = () => {
  const [showNight, setShowNight] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setShowNight(prev => !prev), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="hero">
      <div className="hero-bg">
        <img
          src="/hero-day.jpg"
          alt="Bar da Mirko di giorno"
          style={{ opacity: showNight ? 0 : 1 }}
        />
        <div className="hero-img-night">
          <img
            src="/hero-night.jpg"
            alt="Bar da Mirko di sera"
            style={{ opacity: showNight ? 1 : 0 }}
          />
        </div>
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="label">Caffetteria &bull; Gintoneria</span>
        <h1>Bar <em>da Mirko</em></h1>
        <div className="hero-divider" />
        <p className="hero-subtitle">
          Di giorno il tuo bar di fiducia. Di sera, la gintoneria che cercavi.
        </p>
        <div className="hero-cta-group">
          <a href="#menu" className="btn btn-primary">Scopri il Menù</a>
          <a href="#gintoneria" className="btn btn-outline">La Gintoneria</a>
        </div>
      </div>
    </header>
  );
};

/* ============================================
   DUAL IDENTITY SECTION
   ============================================ */
const DualIdentity = () => (
  <section className="dual-section">
    <div className="dual-card day">
      <div className="dual-card-bg">
        <img src="/hero-day.jpg" alt="Atmosfera diurna" />
      </div>
      <div className="dual-card-overlay" />
      <div className="dual-card-content reveal">
        <span className="label">
          <Sun size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
          Di Giorno
        </span>
        <h2>Caffetteria<br />& Bar</h2>
        <p>
          Colazioni con cornetti appena sfornati, caffè selezionati,
          pranzi veloci e aperitivi al tramonto. Il tuo punto di riferimento.
        </p>
      </div>
    </div>
    <div className="dual-card night">
      <div className="dual-card-bg">
        <img src="/hero-night.jpg" alt="Atmosfera serale" />
      </div>
      <div className="dual-card-overlay" />
      <div className="dual-card-content reveal">
        <span className="label">
          <Moon size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
          Di Sera
        </span>
        <h2>Gintoneria<br />d'Autore</h2>
        <p>
          Una selezione curata di gin premium, toniche artigianali
          e botaniche fresche. Ogni drink racconta una storia.
        </p>
      </div>
    </div>
  </section>
);

/* ============================================
   ABOUT
   ============================================ */
const About = () => (
  <section id="chi-siamo" className="section">
    <div className="container">
      <div className="about-grid">
        <div className="about-text reveal">
          <span className="label">La Nostra Storia</span>
          <h2>Un locale, <br />due anime</h2>
          <p>
            Da Mirko non è solo un bar. È il luogo dove la tradizione del
            caffè italiano incontra la passione per la mixology. Di giorno
            vi accogliamo con il profumo dei cornetti appena sfornati e un
            espresso perfetto. Di sera, il bancone si trasforma e prende
            vita la nostra gintoneria.
          </p>
          <p>
            Ogni gin tonic è un'esperienza unica: gin selezionati da tutto
            il mondo, toniche artigianali e guarnizioni fresche scelte con
            cura per creare l'abbinamento perfetto.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <h3>30+</h3>
              <p>Gin in carta</p>
            </div>
            <div className="stat-item">
              <h3>12</h3>
              <p>Toniche artigianali</p>
            </div>
            <div className="stat-item">
              <h3>7/7</h3>
              <p>Giorni a settimana</p>
            </div>
          </div>
        </div>
        <div className="about-image reveal">
          <img src="/gin-tonic.jpg" alt="Gin Tonic d'autore" />
        </div>
      </div>
    </div>
  </section>
);

/* ============================================
   MENU
   ============================================ */
const menuData = {
  caffetteria: [
    { name: 'Espresso', price: '€1.20', desc: 'Miscela arabica 100%, tostatura media' },
    { name: 'Cappuccino', price: '€1.80', desc: 'Con latte fresco e schiuma cremosa' },
    { name: 'Cornetto Artigianale', price: '€1.50', desc: 'Sfornato ogni mattina, vuoto o farcito' },
    { name: 'Caffè Shakerato', price: '€3.00', desc: 'Espresso, ghiaccio e un tocco di vaniglia' },
    { name: 'Spremuta Fresca', price: '€3.50', desc: 'Arance siciliane spremute al momento' },
    { name: 'Toast Gourmet', price: '€4.50', desc: 'Pane artigianale, prosciutto crudo, burrata' },
  ],
  aperitivo: [
    { name: 'Spritz Classico', price: '€5.00', desc: 'Prosecco, Aperol, soda e oliva' },
    { name: 'Negroni', price: '€7.00', desc: 'Gin, Campari, vermouth rosso' },
    { name: 'Americano', price: '€6.00', desc: 'Campari, vermouth rosso, soda' },
    { name: 'Hugo', price: '€5.50', desc: 'Prosecco, sciroppo di sambuco, menta' },
    { name: 'Moscow Mule', price: '€7.00', desc: 'Vodka, ginger beer, lime fresco' },
    { name: 'Tagliere Misto', price: '€12.00', desc: 'Salumi, formaggi, bruschette e olive' },
  ],
  gintoneria: [
    { name: 'Classic G&T', price: '€8.00', desc: 'Tanqueray, Fever-Tree Indian, limone' },
    { name: 'Floral G&T', price: '€10.00', desc: 'Hendrick\'s, elderflower tonic, cetriolo e rosa' },
    { name: 'Mediterranean G&T', price: '€10.00', desc: 'Gin Mare, tonica rosmarino, olive e timo' },
    { name: 'Japanese G&T', price: '€12.00', desc: 'Roku, yuzu tonic, zenzero e shiso' },
    { name: 'Pink G&T', price: '€9.00', desc: 'Gordon\'s Pink, tonica, fragole e pepe rosa' },
    { name: 'Smoky G&T', price: '€12.00', desc: 'Monkey 47, tonica affumicata, pompelmo bruciato' },
  ],
};

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('caffetteria');
  const tabs = [
    { id: 'caffetteria', label: 'Caffetteria' },
    { id: 'aperitivo', label: 'Aperitivo' },
    { id: 'gintoneria', label: 'Gintoneria' },
  ];

  return (
    <section id="menu" className="section">
      <div className="container">
        <div className="menu-header reveal">
          <span className="label">Cosa Offriamo</span>
          <h2>Il Menù</h2>
          <p>Dalla colazione al dopocena, ogni momento ha il suo gusto</p>
        </div>

        <div className="menu-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`menu-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {menuData[activeTab].map((item, i) => (
            <div key={`${activeTab}-${i}`} className="menu-card reveal">
              <div className="menu-card-header">
                <h3>{item.name}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================
   GIN SHOWCASE
   ============================================ */
const GinShowcase = () => (
  <section id="gintoneria" className="section gin-section">
    <div className="container">
      <div className="gin-grid">
        <div className="gin-image reveal">
          <img src="/gin-tonic.jpg" alt="Gin Tonic Signature" />
        </div>
        <div className="gin-content reveal">
          <span className="label">La Gintoneria</span>
          <h2>L'arte del <br />Gin & Tonic</h2>
          <p>
            Ogni sera il nostro bancone si trasforma. Oltre 30 etichette di gin
            da tutto il mondo, abbinate a toniche artigianali e guarnizioni
            fresche. Ogni combinazione è studiata per esaltare le botaniche
            e creare un'esperienza unica.
          </p>
          <ul className="gin-list">
            <li>
              <span>Gin Premium selezionati</span>
              <span>30+</span>
            </li>
            <li>
              <span>Toniche artigianali</span>
              <span>12</span>
            </li>
            <li>
              <span>Botaniche e guarnizioni fresche</span>
              <span>∞</span>
            </li>
            <li>
              <span>Combinazioni possibili</span>
              <span>360+</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

/* ============================================
   CONTACT
   ============================================ */
const Contact = () => (
  <section id="contatti" className="section">
    <div className="container">
      <div className="menu-header reveal">
        <span className="label">Vieni a Trovarci</span>
        <h2>Contatti</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-card reveal">
          <div className="contact-icon">
            <Clock size={22} />
          </div>
          <h3>Orari</h3>
          <p>
            Lun — Ven: 6:30 — 01:00<br />
            Sab — Dom: 7:30 — 02:00
          </p>
        </div>
        <div className="contact-card reveal">
          <div className="contact-icon">
            <MapPin size={22} />
          </div>
          <h3>Dove Siamo</h3>
          <p>
            Via Roma, 42<br />
            00100 — Città, IT
          </p>
        </div>
        <div className="contact-card reveal">
          <div className="contact-icon">
            <Phone size={22} />
          </div>
          <h3>Contattaci</h3>
          <p>
            +39 333 123 4567<br />
            info@bardamirko.it
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ============================================
   FOOTER
   ============================================ */
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>da <span>Mirko</span></h3>
          <p>
            Il tuo bar di fiducia di giorno, la gintoneria che
            cercavi di sera. Ti aspettiamo.
          </p>
        </div>
        <div className="footer-col">
          <h4>Naviga</h4>
          <a href="#chi-siamo">Chi Siamo</a>
          <a href="#menu">Menù</a>
          <a href="#gintoneria">Gintoneria</a>
          <a href="#contatti">Contatti</a>
        </div>
        <div className="footer-col">
          <h4>Orari</h4>
          <a>Lun — Ven: 6:30 — 01:00</a>
          <a>Sab — Dom: 7:30 — 02:00</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Bar da Mirko. Tutti i diritti riservati.</span>
        <div className="footer-socials">
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Facebook">Facebook</a>
        </div>
      </div>
    </div>
  </footer>
);

/* ============================================
   APP
   ============================================ */
function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <DualIdentity />
      <About />
      <MenuSection />
      <GinShowcase />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
