import { useEffect, useRef, useState } from 'react';
import { HOURS, SITE } from './data';

/* Stato apertura in tempo reale (gestisce gli orari dopo mezzanotte) */
const fmt = (h) => {
  const hh = Math.floor(h % 24);
  const mm = Math.round((h % 1) * 60);
  return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
};

const scheduleFor = (day) => HOURS.find((s) => s.days.includes(day));

export const getOpenStatus = (now = new Date()) => {
  const day = now.getDay();
  const h = now.getHours() + now.getMinutes() / 60;
  const today = scheduleFor(day);
  const yesterday = scheduleFor((day + 6) % 7);

  if (h < yesterday.close - 24) return { open: true, text: `Aperto ora · chiude alle ${fmt(yesterday.close)}` };
  if (h >= today.open && h < today.close) return { open: true, text: `Aperto ora · chiude alle ${fmt(today.close)}` };
  const nextOpen = h < today.open ? today.open : scheduleFor((day + 1) % 7).open;
  return { open: false, text: `Chiuso · apre alle ${fmt(nextOpen)}` };
};

export const useOpenStatus = () => {
  const [status, setStatus] = useState(() => getOpenStatus());
  useEffect(() => {
    const t = setInterval(() => setStatus(getOpenStatus()), 60000);
    return () => clearInterval(t);
  }, []);
  return status;
};

/* Contatore animato che parte quando entra in viewport */
export const useCountUp = (target, duration = 1600) => {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 4);
        setValue(Math.round(target * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => { obs.disconnect(); cancelAnimationFrame(raf); };
  }, [target, duration]);

  return [ref, value];
};

/* Helper per aggiornare/creare tag <meta> e <link> nell'head */
const setMetaTag = (attr, key, content) => {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setCanonical = (href) => {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

/* SEO per pagina (title, description, canonical, Open Graph, Twitter Card, robots) */
export const usePageSEO = ({ title, description, path = '/', image = '/logo.jpg', noindex = false }) => {
  useEffect(() => {
    const cleanPath = path === '/' ? '/' : path.replace(/\/+$/, '');
    const fullUrl = `${SITE.url}${cleanPath}`;
    const fullImage = image.startsWith('http') ? image : `${SITE.url}${image}`;

    if (title) document.title = title;
    if (description) setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');
    setCanonical(fullUrl);

    if (title) {
      setMetaTag('property', 'og:title', title);
      setMetaTag('name', 'twitter:title', title);
    }
    if (description) {
      setMetaTag('property', 'og:description', description);
      setMetaTag('name', 'twitter:description', description);
    }
    setMetaTag('property', 'og:url', fullUrl);
    setMetaTag('property', 'og:image', fullImage);
    setMetaTag('name', 'twitter:image', fullImage);

    /* Tracciamento page_view su SPA se GA4 è attivo e autorizzato */
    if (typeof window !== 'undefined' && typeof window.gtag === 'function' && SITE.gaMeasurementId) {
      window.gtag('event', 'page_view', {
        page_title: title || document.title,
        page_location: fullUrl,
        page_path: cleanPath,
      });
    }
  }, [title, description, path, image, noindex]);
};

/* Mantiene compatibilità con chiamate semplici */
export const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

/* Tracciamento conversioni GA4 (attivo solo se l'utente ha accettato i cookie analitici) */
export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
};

/* Gestione blocco preventivo Google Maps + integrazione CookieYes */
const MAP_CONSENT_KEY = 'shake_tonic_map_consent';

const hasCookieYesMapConsent = () => {
  if (typeof document === 'undefined') return false;
  const match = document.cookie.match(/(?:^|;\s*)cookieyes-consent=([^;]*)/);
  if (!match) return false;
  const val = decodeURIComponent(match[1]);
  return val.includes('functional:yes') || val.includes('analytics:yes');
};

export const useMapConsent = () => {
  const [allowed, setAllowed] = useState(() => {
    if (typeof window === 'undefined') return false;
    try {
      return window.localStorage.getItem(MAP_CONSENT_KEY) === '1' || hasCookieYesMapConsent();
    } catch {
      return hasCookieYesMapConsent();
    }
  });

  useEffect(() => {
    const onConsentUpdate = () => {
      const ok = hasCookieYesMapConsent();
      setAllowed((prev) => prev || ok);
    };
    document.addEventListener('cookieyes_consent_update', onConsentUpdate);
    window.addEventListener('storage', onConsentUpdate);
    return () => {
      document.removeEventListener('cookieyes_consent_update', onConsentUpdate);
      window.removeEventListener('storage', onConsentUpdate);
    };
  }, []);

  const grantMapConsent = () => {
    try {
      window.localStorage.setItem(MAP_CONSENT_KEY, '1');
    } catch {
      /* ignore storage errors */
    }
    setAllowed(true);
  };

  const revokeMapConsent = () => {
    try {
      window.localStorage.removeItem(MAP_CONSENT_KEY);
    } catch {
      /* ignore storage errors */
    }
    setAllowed(false);
  };

  return { mapAllowed: allowed, grantMapConsent, revokeMapConsent };
};

/* Riapre il pannello di gestione consenso CookieYes (se installato) o mostra info */
export const reopenCookieConsent = () => {
  if (typeof window === 'undefined') return false;
  if (typeof window.revisitCkyConsent === 'function') {
    window.revisitCkyConsent();
    return true;
  }
  const ckyBtn = document.querySelector('.cky-banner-element, .cky-btn-revisit');
  if (ckyBtn) {
    ckyBtn.click();
    return true;
  }
  return false;
};
