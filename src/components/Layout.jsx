import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { CONTACT, HOURS } from '../data';
import { useOpenStatus } from '../hooks';

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
  const status = useOpenStatus();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
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
              id="nav-toggle"
              className={`nav-hamburger ${open ? 'is-open' : ''}`}
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Chiudi menu' : 'Apri menu'}
              aria-expanded={open}
            >
              <span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Menu mobile a schermo intero */}
      <div className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="mobile-menu-glow" />
        <ul className="mobile-menu-links">
          {ALL_LINKS.map((l, i) => (
            <li key={l.label} style={{ '--i': i }}>
              <span className="mobile-menu-num">0{i + 1}</span>
              <NavItem link={l} onClick={() => setOpen(false)} className="mobile-link" />
            </li>
          ))}
        </ul>
        <div className="mobile-menu-footer">
          <span className={`status-dot ${status.open ? 'is-open' : ''}`} />
          <span>{status.text}</span>
        </div>
      </div>
    </>
  );
};

/* ============ FOOTER ============ */
export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-top">
        <div className="footer-brand">
          <Logo className="footer-logo" />
          <p>Gintoneria e Cocktail bar. Il tuo punto di ritrovo esclusivo a Novara.</p>
        </div>

        <div className="footer-col">
          <h4>Naviga</h4>
          {ALL_LINKS.map((l) => <Link key={l.label} to={l.to}>{l.label}</Link>)}
        </div>

        <div className="footer-col">
          <h4>Orari</h4>
          {HOURS.map((h) => (
            <p key={h.label}><span>{h.label}</span>{h.text}</p>
          ))}
        </div>

        <div className="footer-col">
          <h4>Dove siamo</h4>
          <p>{CONTACT.address}<br />{CONTACT.city}</p>
          <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Shake &amp; Tonic. Tutti i diritti riservati.</span>
        <div className="footer-socials">
          <a href={CONTACT.instagram} aria-label="Instagram">Instagram <ArrowUpRight size={14} /></a>
          <a href={CONTACT.facebook} aria-label="Facebook">Facebook <ArrowUpRight size={14} /></a>
          <button id="back-to-top" className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Torna su">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </div>
  </footer>
);

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
