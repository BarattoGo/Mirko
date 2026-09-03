import React, { useEffect } from 'react';
import { Wine, Coffee, Clock, MapPin } from 'lucide-react';
import './index.css';

// We'll assume the generated image is available or we can use a direct path
// In reality, it is at: /Users/patrick/.gemini/antigravity-ide/brain/d98e283d-812b-431d-bdde-60ebfb12ef0f/hero_background_1788446979643.jpg
// For the actual app we should import it or serve it. Let's use a URL for now if we can, or just a placeholder CSS.
// Let's create a Hero component.

const Hero = () => (
  <header className="hero" style={{
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden'
  }}>
    {/* Background Image - I'll use a direct path for the prototype, usually we'd move it to public */}
    <div style={{
      position: 'absolute',
      top: 0, left: 0, width: '100%', height: '100%',
      backgroundImage: `url('/hero.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'brightness(0.4)',
      zIndex: -1
    }} />
    
    <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
      <div className="glass animate-fade-in" style={{ padding: '4rem 2rem', display: 'inline-block' }}>
        <h1 className="title-glow text-gold" style={{ fontSize: '4rem', marginBottom: '1rem' }}>Nocturne Bar</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Elevate Your Spirits
        </p>
        <a href="#menu" className="btn btn-primary">Scopri il Menù</a>
      </div>
    </div>
  </header>
);

const About = () => (
  <section id="about" className="section container" style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
    <div style={{ flex: '1 1 400px' }} className="animate-fade-in">
      <h2 className="text-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>La Nostra Storia</h2>
      <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
        Situato nel cuore della città, Nocturne Bar (da Mirko) è il punto d'incontro ideale per chi cerca un'atmosfera elegante e rilassata. 
        Da oltre 10 anni offriamo ai nostri clienti un'esperienza unica, combinando la tradizione della caffetteria italiana con l'innovazione della mixology moderna.
      </p>
      <p style={{ color: 'var(--text-secondary)' }}>
        Che sia per una colazione veloce, un aperitivo tra amici o un drink serale, da noi troverai sempre la massima qualità e un sorriso ad accoglierti.
      </p>
    </div>
    <div style={{ flex: '1 1 400px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div className="glass" style={{ padding: '2rem', textAlign: 'center' }}>
        <Coffee className="text-gold" size={48} style={{ margin: '0 auto 1rem' }} />
        <h3>Caffetteria</h3>
      </div>
      <div className="glass" style={{ padding: '2rem', textAlign: 'center' }}>
        <Wine className="text-gold" size={48} style={{ margin: '0 auto 1rem' }} />
        <h3>Mixology</h3>
      </div>
    </div>
  </section>
);

const Menu = () => {
  const categories = [
    { name: 'I Classici', items: [{ n: 'Negroni', p: '€8' }, { n: 'Americano', p: '€7' }, { n: 'Spritz', p: '€6' }] },
    { name: 'Signature Drinks', items: [{ n: 'Golden Nocturne', p: '€12' }, { n: 'Midnight Velvet', p: '€10' }] },
    { name: 'Caffetteria', items: [{ n: 'Espresso', p: '€1.50' }, { n: 'Cappuccino', p: '€2.50' }] }
  ];

  return (
    <section id="menu" className="section" style={{ backgroundColor: 'var(--bg-color-light)' }}>
      <div className="container">
        <h2 className="text-gold title-glow" style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '3rem' }}>Il Menù</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {categories.map((cat, i) => (
            <div key={i} className="glass animate-fade-in" style={{ padding: '2rem', animationDelay: `${i * 0.2}s` }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>{cat.name}</h3>
              <ul style={{ listStyle: 'none' }}>
                {cat.items.map((item, j) => (
                  <li key={j} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '1.1rem' }}>
                    <span>{item.n}</span>
                    <span className="text-gold">{item.p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="section" style={{ borderTop: '1px solid var(--glass-border)', paddingBottom: '2rem' }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
      <div>
        <h3 className="text-gold" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Nocturne Bar</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin size={18} /> Via Roma 123, 00100 Città
        </p>
        <p style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Clock size={18} /> Lun-Dom: 07:00 - 02:00
        </p>
      </div>
      <div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Seguici</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="#" style={{ color: 'var(--text-primary)', transition: 'color 0.3s', textDecoration: 'none' }} className="hover:text-gold">
            Instagram
          </a>
          <a href="#" style={{ color: 'var(--text-primary)', transition: 'color 0.3s', textDecoration: 'none' }} className="hover:text-gold">
            Facebook
          </a>
        </div>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
      © {new Date().getFullYear()} Nocturne Bar. Tutti i diritti riservati.
    </div>
  </footer>
);

function App() {
  // Simple intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-fade-in').forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Hero />
      <About />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
