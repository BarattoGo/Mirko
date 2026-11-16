import { useEffect, useRef, useState } from 'react';
import { HOURS } from './data';

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

/* Titolo pagina per SEO */
export const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
