import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Wine, Coffee, Clock, MapPin, Phone, Sun, Moon } from 'lucide-react';
import './index.css';

/* ============================================
   NAVBAR
   ============================================ */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Link to="/" className="nav-logo-central">
          Shake <span>&</span> Tonic
        </Link>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/menu" onClick={() => setMenuOpen(false)}>Menù</Link>
          <Link to="/gintoneria" onClick={() => setMenuOpen(false)}>Gintoneria</Link>
          <a href="/#contatti" onClick={() => setMenuOpen(false)}>Chi Siamo</a>
          <a href="/#contatti" onClick={() => setMenuOpen(false)}>Contatti</a>
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
          alt="Shake & Tonic di giorno"
          style={{ opacity: showNight ? 0 : 1 }}
        />
        <div className="hero-img-night">
          <img
            src="/hero-night.jpg"
            alt="Shake & Tonic di sera"
            style={{ opacity: showNight ? 1 : 0 }}
          />
        </div>
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="label" style={{ color: '#ffffff' }}>Gintoneria e Cocktail bar</span>
        <h1>Shake <em>& Tonic</em></h1>
        <div className="hero-divider" />
        <p className="hero-subtitle">
          Il tuo locale di fiducia a Novara. Gintoneria e Cocktail bar d'autore.
        </p>
        <div className="hero-cta-group">
          <Link to="/menu" className="btn btn-primary">Scopri il Menù</Link>
          <Link to="/gintoneria" className="btn btn-outline">La Gintoneria</Link>
        </div>
      </div>
    </header>
  );
};

/* ============================================
   DUAL IDENTITY SECTION (TEXT ONLY)
   ============================================ */
const DualIdentity = () => (
  <section className="section" style={{ paddingBottom: '2rem' }}>
    <div className="container" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <div className="dual-text-card reveal" style={{ flex: '1', minWidth: '300px', padding: '3rem', background: 'var(--color-bg-elevated)', borderRadius: '1rem', border: '1px solid var(--color-border)' }}>
        <span className="label">
          <Sun size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
          Di Giorno
        </span>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Caffetteria & Bar</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
          Colazioni con cornetti appena sfornati, caffè selezionati,
          pranzi veloci e aperitivi al tramonto. Il tuo punto di riferimento.
        </p>
      </div>
      <div className="dual-text-card reveal" style={{ flex: '1', minWidth: '300px', padding: '3rem', background: 'var(--color-bg-card)', borderRadius: '1rem', border: '1px solid var(--color-border)' }}>
        <span className="label">
          <Moon size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
          Di Sera
        </span>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Gintoneria d'Autore</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
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
            Shake & Tonic non è solo un bar. È il luogo dove la tradizione del
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
  alcolici: [
    { section: "I Classici" },
    { name: 'Aperol Spritz', price: '€6.00', desc: 'Aperol, Prosecco, soda' },
    { name: 'Negroni', price: '€7.00', desc: 'Campari bitter, Vermouth rosso, Gin' },
    { name: 'Milano - Torino', price: '€8.00', desc: 'Campari bitter, Vermouth rosso' },
    { name: 'Hugo Spritz', price: '€7.00', desc: 'St. Germain, Prosecco, foglie di menta' },
    { section: "Twist sui Classici" },
    { name: 'Mojito Siciliano', price: '€7.00', desc: 'Limone, arancia, menta, zucchero, amaro Averna, soda' },
    { name: 'Black Mojito', price: '€7.00', desc: 'Liquore alla liquirizia, lime, zucchero, foglie di menta' },
    { name: 'Averna Mule', price: '€7.00', desc: 'Amaro Averna, lime, ginger beer' },
    { section: "Base Gin & Vodka" },
    { name: 'Gin Fizz', price: '€8.00', desc: 'Gin, succo di limone, sciroppo di zucchero, soda' },
    { name: 'Bramble', price: '€8.00', desc: 'Gin, succo di limone, sciroppo di zucchero, liquore alle more' },
    { name: 'Moscow Mule', price: '€7.00', desc: 'Vodka, succo di lime, ginger beer' },
    { name: 'Porn Star Martini', price: '€7.00', desc: 'Vodka vaniglia, passoa, sciroppo passion fruit, lime' },
    { section: "Cocktail Storici & Signature" },
    { name: 'Grasshopper', price: '€10.00', desc: 'Crema di cacao bianca, crema di menta' },
    { name: 'Hanky Panky', price: '€10.00', desc: 'Gin, Vermouth rosso, Fernet Branca' },
    { name: 'Stinger', price: '€10.00', desc: 'Cognac, crema di menta bianca' },
    { section: "La Cantina (Calice / Bottiglia)" },
    { name: 'Franciacorta', price: '€7 / 40', desc: 'Bollicine italiane d\'eccellenza' },
    { name: 'Valpolicella', price: '€6 / 30', desc: 'Vino rosso strutturato' },
  ],
  analcolici: [
    { section: "Mocktail d'Autore" },
    { name: 'Sweet & Sour', price: '€6.00', desc: 'Ananas, arancia, sciroppo di fragola, sweet & sour' },
    { name: 'Solea', price: '€6.00', desc: 'Arancia, frutto della passione, lime' },
    { name: 'Cool Passion', price: '€7.00', desc: 'Frutto della passione, lampone, sour' },
    { section: "I Grandi Classici" },
    { name: 'Aperitivi Analcolici', price: '€6.00 / 7.00', desc: 'Crodino, Sanbittèr, ecc.' },
    { name: 'Succhi di Frutta', price: '€3.00', desc: 'Vari gusti selezionati' },
    { name: 'Bibite', price: '€3.00', desc: 'Coca Cola, Sprite, Fanta, ecc.' },
    { name: 'Acqua Naturale / Frizzante', price: '€1.50', desc: 'Bottiglia' }
  ],
  cibo: [
    { section: "I Bruschettoni" },
    { name: 'Guancia a Guancia', price: '€8.00', desc: 'Formaggio, granella di noci, crema di pecorino, guanciale' },
    { name: 'Calabrese', price: '€7.50', desc: 'Passata di pomodoro, formaggio, pomodoro secco, salame piccante' },
    { name: 'Mix Grill', price: '€6.50', desc: 'Passata di pomodoro, formaggio, verdure grigliate a pezzetti' },
    { name: 'Margherita', price: '€5.50', desc: 'Passata di pomodoro, formaggio, basilico' },
    { section: "Panini & Piadine" },
    { name: 'Crudo, Brie, e Rucola', price: '€6.50', desc: 'Prosciutto crudo, formaggio brie, rucola fresca' },
    { name: 'Speck, Brie e Patè di Olive', price: '€6.50', desc: 'Speck affumicato, brie morbido, patè di olive' },
    { name: 'Tacchino, Rucola e Patè', price: '€6.00', desc: 'Fesa di tacchino, rucola, patè di olive' },
    { name: 'Il Toast Farcito', price: '€5.00', desc: 'Toast classico farcito' },
    { section: "I Taglieri" },
    { name: 'Tagliere Regular', price: '€12.00', desc: 'Selezione di salumi e formaggi del territorio' },
    { name: 'Tagliere XXL', price: '€20.00', desc: 'Ricca selezione di salumi, formaggi, e stuzzichini' },
  ],
};

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('alcolici');
  const tabs = [
    { id: 'alcolici', label: 'Alcolici' },
    { id: 'analcolici', label: 'Analcolici' },
    { id: 'cibo', label: 'Food & Tapas' },
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
          {menuData[activeTab].map((item, i) => {
            if (item.section) {
              return (
                <div key={`${activeTab}-sec-${i}`} className="menu-section-title">
                  <h3>{item.section}</h3>
                </div>
              );
            }
            return (
              <div key={`${activeTab}-${i}`} className="menu-card">
                <div className="menu-card-header">
                  <h3>{item.name}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p>{item.desc}</p>
              </div>
            );
          })}
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
            Via Galileo Galilei, 17<br />
            28100 Novara (NO)
          </p>
        </div>
        <div className="contact-card reveal">
          <div className="contact-icon">
            <Phone size={22} />
          </div>
          <h3>Contattaci</h3>
          <p>
            +39 320 808 0834<br />
            info@shakeandtonic.it
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
          <h3>Shake <span>&</span> Tonic</h3>
          <p>
            Gintoneria e Cocktail bar. Il tuo punto di ritrovo
            esclusivo a Novara.
          </p>
        </div>
        <div className="footer-col">
          <h4>Naviga</h4>
          <Link to="/">Home</Link>
          <Link to="/menu">Menù</Link>
          <Link to="/gintoneria">Gintoneria</Link>
          <a href="/#contatti">Chi Siamo</a>
          <a href="/#contatti">Contatti</a>
        </div>
        <div className="footer-col">
          <h4>Orari</h4>
          <a>Lun — Ven: 6:30 — 01:00</a>
          <a>Sab — Dom: 7:30 — 02:00</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Shake & Tonic. Tutti i diritti riservati.</span>
        <div className="footer-socials">
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Facebook">Facebook</a>
        </div>
      </div>
    </div>
  </footer>
);

/* ============================================
   ROUTING & SCROLL MANAGEMENT
   ============================================ */
const ScrollToAnchor = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <DualIdentity />
    <About />
    <Contact />
  </>
);

const MenuPage = () => (
  <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
    <MenuSection />
  </div>
);

const GintoneriaPage = () => (
  <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
    <GinShowcase />
  </div>
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

    const observeElements = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
    };

    observeElements();
    
    // Fallback mutation observer per elementi renderizzati dai route change
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });
    
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <Router>
      <ScrollToAnchor />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/gintoneria" element={<GintoneriaPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
