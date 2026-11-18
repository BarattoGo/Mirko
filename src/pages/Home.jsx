import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, ArrowRight, CalendarCheck } from 'lucide-react';
import { MOODS, SIGNATURES, CONTACT, PAGE_SEO } from '../data';
import { openBookingModal, usePageSEO } from '../hooks';
import { Counter, CtaBanner, Contact, SectionHeading } from '../components/Sections';

/* ============ HERO ============ */
const Hero = () => {
  const [night, setNight] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setNight((n) => !n), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <header className="hero">
      <div className="hero-bg">
        <img
          src="/hero-day.jpg"
          alt="Bancone e sala di Shake & Tonic a Novara di giorno"
          width="1376"
          height="768"
          fetchPriority="high"
          className={night ? '' : 'active'}
        />
        <img
          src="/hero-night.jpg"
          alt="Atmosfera serale e cocktail bar da Shake & Tonic a Novara"
          width="1376"
          height="768"
          decoding="async"
          className={night ? 'active' : ''}
        />
      </div>
      <div className="hero-overlay" />
      <div className="orb orb-a" />

      <div className="hero-content">
        <button
          type="button"
          onClick={openBookingModal}
          className="status-pill hero-book-pill glass hero-anim"
          style={{ '--d': '0.1s' }}
        >
          <CalendarCheck size={14} />
          Prenota un tavolo
        </button>
        <span className="label label-white hero-anim" style={{ '--d': '0.25s' }}>Gintoneria e Cocktail bar</span>
        <h1 className="hero-title hero-anim" style={{ '--d': '0.4s' }}>
          Shake <em>&amp;</em> Tonic
        </h1>
        <p className="hero-subtitle hero-anim" style={{ '--d': '0.55s' }}>
          Il tuo locale di fiducia a Novara. Gintoneria e Cocktail bar d'autore.
        </p>
        <div className="hero-cta-group hero-anim" style={{ '--d': '0.7s' }}>
          <Link id="hero-menu-btn" to="/menu" className="btn btn-primary">Scopri il Menù</Link>
          <Link id="hero-gin-btn" to="/gintoneria" className="btn btn-outline">La Gintoneria</Link>
        </div>
      </div>

      <div className="hero-bottom">
        <span>{CONTACT.address} · Novara</span>
        <span className="hero-mood">{night ? <><Moon size={13} /> Di sera</> : <><Sun size={13} /> Di giorno</>}</span>
      </div>
    </header>
  );
};

/* ============ MANIFESTO ============ */
const MANIFESTO = 'Di giorno, il profumo del caffè. Di sera, il rito del gin. Un solo bancone, due anime.';

const Manifesto = () => (
  <section className="section manifesto" id="manifesto">
    <div className="container">
      <span className="label reveal">Il Manifesto</span>
      <p className="manifesto-text reveal">
        {MANIFESTO.split(' ').map((w, i) => (
          <span key={i} className={/anime|gin\.|caffè\./.test(w) ? 'hl' : ''} style={{ '--i': i }}>{w} </span>
        ))}
      </p>
    </div>
  </section>
);

/* ============ MOOD GIORNO / NOTTE ============ */
const MoodSwitch = () => {
  const h = new Date().getHours();
  const [mood, setMood] = useState(h >= 6 && h < 18 ? 'day' : 'night');
  const m = MOODS[mood];

  return (
    <section className={`section mood mood-${mood}`} id="mood">
      <div className="mood-bg" />
      <div className="container">
        <div className="mood-head reveal">
          <span className="label">Un locale, due anime</span>
          <div className="mood-toggle" role="tablist" aria-label="Scegli il momento">
            <button id="mood-day" role="tab" aria-selected={mood === 'day'} className={mood === 'day' ? 'active' : ''} onClick={() => setMood('day')}>
              <Sun size={15} /> Giorno
            </button>
            <button id="mood-night" role="tab" aria-selected={mood === 'night'} className={mood === 'night' ? 'active' : ''} onClick={() => setMood('night')}>
              <Moon size={15} /> Sera
            </button>
            <span className="mood-toggle-thumb" />
          </div>
        </div>

        <div className="mood-body" key={mood}>
          <div className="mood-text">
            <span className="mood-time">{m.label} · {m.time}</span>
            <h2>{m.title} <em>{m.titleEm}</em></h2>
            <p>{m.desc}</p>
          </div>
          <ul className="mood-list">
            {m.items.map((it, i) => (
              <li key={it} style={{ '--i': i }}>
                <span className="mood-list-num">0{i + 1}</span>
                {it}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

/* ============ LA NOSTRA STORIA ============ */
const About = () => (
  <section id="chi-siamo" className="section about">
    <div className="container">
      <div className="about-grid">
        <div className="about-image reveal">
          <div className="about-frame" />
          <img
            src="/gin-tonic.jpg"
            alt="Gin Tonic d'autore servito in calice balloon da Shake & Tonic a Novara"
            width="1024"
            height="1024"
            loading="lazy"
            decoding="async"
          />
          <div className="about-badge glass">
            <span>Signature</span>
            <strong>Gin &amp; Tonic</strong>
          </div>
        </div>
        <div className="about-text reveal">
          <span className="label">La Nostra Storia</span>
          <h2>Un locale, <br /><em>due anime</em></h2>
          <p>
            Shake &amp; Tonic non è solo un bar. È il luogo dove la tradizione del
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
            <Counter value={30} suffix="+" label="Gin in carta" />
            <Counter value={12} label="Toniche artigianali" />
            <div className="counter">
              <span className="counter-value">7<small>/7</small></span>
              <span className="counter-label">Giorni a settimana</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ SIGNATURE ============ */
const Signatures = () => (
  <section className="section signatures">
    <div className="container">
      <SectionHeading
        label="Dalla nostra carta"
        title="I drink che"
        em="ci raccontano"
        text="Tre cocktail che i nostri clienti ordinano a occhi chiusi."
      />
      <div className="signature-grid">
        {SIGNATURES.map((s, i) => (
          <article key={s.n} className="signature-card reveal" style={{ '--delay': `${i * 0.12}s` }}>
            <div className="signature-top">
              <span className="signature-num">N°{s.n}</span>
              <span className="signature-price">{s.price}</span>
            </div>
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
            <div className="signature-notes">
              {s.notes.map((n) => <span key={n}>{n}</span>)}
            </div>
          </article>
        ))}
      </div>
      <div className="center-cta reveal">
        <Link id="signatures-menu-btn" to="/menu" className="link-arrow">Sfoglia il menù completo <ArrowRight size={16} /></Link>
      </div>
    </div>
  </section>
);

const HomePage = () => {
  usePageSEO(PAGE_SEO.home);
  return (
    <>
      <Hero />
      <Manifesto />
      <MoodSwitch />
      <About />
      <Signatures />
      <CtaBanner
        label="Gin & Tonic Matcher"
        title="Non sai cosa"
        em="scegliere?"
        text="Rispondi a una sola domanda e ti suggeriamo il gin tonic perfetto per il tuo mood."
        to="/gintoneria#matcher"
        cta="Trova il tuo Gin"
      />
      <Contact />
    </>
  );
};

export default HomePage;
