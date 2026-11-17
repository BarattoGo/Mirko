import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, CalendarCheck, X } from 'lucide-react';
import { CONTACT, LEGAL } from '../data';
import { openBookingModal, trackEvent } from '../hooks';

/* Ordine voci: Home, Menù, Gintoneria, Chi Siamo, Contatti */
const LINKS_LEFT = [
  { to: '/', label: 'Home', end: true },
  { to: '/menu', label: 'Menù' },
  { to: '/gintoneria', label: 'Gintoneria' },
];
const LINKS_RIGHT = [
  { to: '/#contatti', label: 'Chi Siamo', hash: true },
  { to: '/#contatti', label: 'Contatti', hash: true },
];
const ALL_LINKS = [...LINKS_LEFT, ...LINKS_RIGHT];

const NavItem = ({ link, onClick, className = '' }) =>
  link.hash ? (
    <Link to={link.to} onClick={onClick} className={`nav-link ${className}`}>{link.label}</Link>
  ) : (
    <NavLink to={link.to} end={link.end} onClick={onClick} className={({ isActive }) => `nav-link ${className} ${isActive ? 'active' : ''}`}>
      {link.label}
    </NavLink>
  );

export const Logo = ({ className = '' }) => (
  <span className={`logo-type ${className}`}>
    Shake <em>&amp;</em> Tonic
  </span>
);

/* ============ NAVBAR ============ */
export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKeyDown = (e) => {
      if (e.key === 'Escape' && open) setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Salta al contenuto principale
      </a>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`} aria-label="Navigazione principale">
        <div className="navbar-inner">
          <div className="nav-side nav-left">
            {LINKS_LEFT.map((l) => <NavItem key={l.label} link={l} />)}
          </div>

          <Link to="/" className="nav-logo" aria-label="Shake & Tonic — Home" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <div className="nav-side nav-right">
            {LINKS_RIGHT.map((l) => <NavItem key={l.label} link={l} />)}
            <button
              type="button"
              className="nav-book-btn"
              onClick={() => {
                setOpen(false);
                openBookingModal();
              }}
            >
              <CalendarCheck size={14} />
              <span>Prenota</span>
            </button>
            <button
              id="nav-toggle"
              className={`nav-hamburger ${open ? 'is-open' : ''}`}
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Chiudi menu' : 'Apri menu'}
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              <span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Menu mobile a schermo intero */}
      <div
        id="mobile-navigation"
        className={`mobile-menu ${open ? 'open' : ''}`}
        aria-hidden={!open}
      >
        <div className="mobile-menu-glow" />
        <ul className="mobile-menu-links">
          {ALL_LINKS.map((l, i) => (
            <li key={l.label} style={{ '--i': i }}>
              <span className="mobile-menu-num">0{i + 1}</span>
              <NavItem link={l} onClick={() => setOpen(false)} className="mobile-link" />
            </li>
          ))}
        </ul>
        <div className="mobile-menu-cta">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setOpen(false);
              openBookingModal();
            }}
          >
            <CalendarCheck size={16} /> Prenota un tavolo
          </button>
        </div>
      </div>
    </>
  );
};

/* ============ FOOTER (stile compatto 2 colonne) ============ */
export const Footer = () => (
  <footer className="footer">
    <div className="footer-accent-line" aria-hidden="true" />
    <div className="container">
      <div className="footer-compact-grid">
        <div className="footer-compact-col">
          <h4>SHAKE &amp; TONIC</h4>
          <p className="footer-line"><strong>Titolare:</strong> {LEGAL.companyName}</p>
          <p className="footer-line"><strong>P.IVA:</strong> {LEGAL.vatId}</p>
          <p className="footer-line"><strong>Sede:</strong> {LEGAL.legalAddress}</p>
          <p className="footer-copy">© {new Date().getFullYear()} Shake &amp; Tonic</p>
        </div>

        <div className="footer-compact-col">
          <h4>CONTATTI</h4>
          <a
            href={CONTACT.phoneHref}
            onClick={() => trackEvent('click_phone', { location: 'footer' })}
            className="footer-contact-item"
          >
            <Phone size={15} />
            <span>{CONTACT.phone}</span>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            onClick={() => trackEvent('click_email', { location: 'footer' })}
            className="footer-contact-item"
          >
            <Mail size={15} />
            <span>{CONTACT.email}</span>
          </a>
          <a
            href={CONTACT.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('click_directions', { location: 'footer' })}
            className="footer-contact-item"
          >
            <MapPin size={15} />
            <span>{CONTACT.address}, {CONTACT.city}</span>
          </a>
        </div>
      </div>

      <div className="footer-compact-bottom">
        <nav className="footer-policy-links" aria-label="Informative legali">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span className="footer-sep" aria-hidden="true">|</span>
          <Link to="/cookie-policy">Cookie Policy</Link>
          <span className="footer-sep" aria-hidden="true">|</span>
          <Link to="/termini-e-condizioni">Termini e Condizioni</Link>
        </nav>
      </div>
    </div>
  </footer>
);

/* ============ MODALE PRENOTAZIONE RAPIDA (montato nel DOM solo quando aperto) ============ */
const BOOKING_DAYS = ['Stasera', 'Domani', 'Venerdì', 'Sabato', 'Altro giorno'];
const BOOKING_SLOTS = [
  { id: 'aperitivo', label: 'Aperitivo', time: '18:30 – 20:30' },
  { id: 'dopocena', label: 'Dopocena', time: '21:30 – 23:30' },
  { id: 'giorno', label: 'Pranzo / Caffè', time: '12:00 – 15:00' },
];
const BOOKING_GUESTS = ['2', '3', '4', '5', '6+'];

export const BookingWidget = () => {
  const [open, setOpen] = useState(false);
  const [day, setDay] = useState(BOOKING_DAYS[0]);
  const [slot, setSlot] = useState(BOOKING_SLOTS[0]);
  const [guests, setGuests] = useState('2');

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener('open-booking-modal', onOpen);
    return () => window.removeEventListener('open-booking-modal', onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (!open) return null;

  const message = `Ciao Shake & Tonic! Vorrei prenotare un tavolo per ${guests} persone (${day} · ${slot.label} ${slot.time}). Grazie!`;
  const whatsappUrl = `${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

  const handleSendWhatsApp = () => {
    trackEvent('booking_whatsapp', {
      booking_day: day,
      booking_slot: slot.id,
      booking_guests: guests,
    });
    setOpen(false);
  };

  return (
    <div className="booking-modal-overlay" onClick={() => setOpen(false)}>
      <div
        id="booking-popover"
        className="booking-card glass"
        role="dialog"
        aria-modal="true"
        aria-label="Prenota un tavolo"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="booking-card-head">
          <div>
            <span className="label">Prenotazione Rapida</span>
            <h3>Prenota un <em>tavolo</em></h3>
          </div>
          <button
            type="button"
            className="booking-close"
            onClick={() => setOpen(false)}
            aria-label="Chiudi scheda prenotazione"
          >
            <X size={16} />
          </button>
        </div>

        <div className="booking-field">
          <span className="booking-field-label">Quando</span>
          <div className="booking-chips">
            {BOOKING_DAYS.map((d) => (
              <button
                key={d}
                type="button"
                className={`booking-chip ${day === d ? 'active' : ''}`}
                onClick={() => setDay(d)}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="booking-field">
          <span className="booking-field-label">Momento</span>
          <div className="booking-slots">
            {BOOKING_SLOTS.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`booking-slot ${slot.id === s.id ? 'active' : ''}`}
                onClick={() => setSlot(s)}
              >
                <strong>{s.label}</strong>
                <small>{s.time}</small>
              </button>
            ))}
          </div>
        </div>

        <div className="booking-field">
          <span className="booking-field-label">Persone</span>
          <div className="booking-guests">
            {BOOKING_GUESTS.map((g) => (
              <button
                key={g}
                type="button"
                className={`booking-guest ${guests === g ? 'active' : ''}`}
                onClick={() => setGuests(g)}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <div className="booking-actions">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleSendWhatsApp}
            className="btn btn-primary booking-submit"
          >
            <MessageCircle size={15} /> Invia su WhatsApp
          </a>
          <a
            href={CONTACT.phoneHref}
            onClick={() => {
              trackEvent('click_phone', { location: 'booking_widget' });
              setOpen(false);
            }}
            className="btn btn-outline booking-call"
          >
            <Phone size={14} /> Chiama
          </a>
        </div>
      </div>
    </div>
  );
};

/* ============ CURSOR GLOW (solo desktop) ============ */
export const CursorGlow = () => {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const el = document.getElementById('cursor-glow');
    let x = 0, y = 0, cx = 0, cy = 0, raf;
    const move = (e) => { x = e.clientX; y = e.clientY; };
    const loop = () => {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      if (el) el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('mousemove', move);
    loop();
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf); };
  }, []);
  return <div id="cursor-glow" className="cursor-glow" aria-hidden="true" />;
};

/* ============ SCROLL + REVEAL ============ */
export const ScrollManager = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [hash, pathname]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    const scan = () => document.querySelectorAll('.reveal:not(.visible)').forEach((el) => io.observe(el));
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, []);

  return null;
};
