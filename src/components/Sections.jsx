import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Clock, MapPin, Phone, Mail, MessageCircle, Navigation, ArrowRight,
  Citrus, Flower2, Martini, Leaf, Flame, Cherry, Sparkles, ShieldCheck,
} from 'lucide-react';
import { CONTACT, HOURS, RITUAL, GIN_PROFILES } from '../data';
import { trackEvent, useCountUp, useMapConsent, useOpenStatus } from '../hooks';

/* ============ HEADING DI SEZIONE ============ */
export const SectionHeading = ({ label, title, em, text, align = 'center' }) => (
  <div className={`section-heading align-${align} reveal`}>
    <span className="label">{label}</span>
    <h2>{title} {em && <em>{em}</em>}</h2>
    {text && <p>{text}</p>}
  </div>
);

/* ============ HERO DELLE PAGINE INTERNE ============ */
export const PageHero = ({ label, title, em, text, image, id }) => (
  <header className={`page-hero ${image ? 'has-image' : ''}`} id={id}>
    {image && (
      <div className="page-hero-bg">
        <img src={image} alt="" width="1376" height="768" decoding="async" />
      </div>
    )}
    <div className="page-hero-overlay" />
    <div className="orb orb-a" />
    <div className="orb orb-b" />
    <div className="page-hero-content container">
      <span className="label label-white hero-anim" style={{ '--d': '0.1s' }}>{label}</span>
      <h1 className="hero-anim" style={{ '--d': '0.25s' }}>{title} <em>{em}</em></h1>
      {text && <p className="hero-anim" style={{ '--d': '0.4s' }}>{text}</p>}
    </div>
  </header>
);

/* ============ CONTATORE ============ */
export const Counter = ({ value, suffix = '', label }) => {
  const [ref, n] = useCountUp(value);
  return (
    <div className="counter" ref={ref}>
      <span className="counter-value">{n}<small>{suffix}</small></span>
      <span className="counter-label">{label}</span>
    </div>
  );
};

/* ============ IL RITUALE ============ */
export const Ritual = () => (
  <section className="section ritual" id="rituale">
    <div className="container">
      <SectionHeading
        label="The Ritual"
        title="Quattro gesti,"
        em="un capolavoro"
        text="Il gin tonic perfetto non nasce per caso. È un rito preciso, ripetuto ogni sera con la stessa cura."
      />
      <div className="ritual-grid">
        {RITUAL.map((step, i) => (
          <article key={step.n} className="ritual-card reveal" style={{ '--delay': `${i * 0.1}s` }}>
            <span className="ritual-num">{step.n}</span>
            <div className="ritual-line" />
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ============ GIN & TONIC MATCHER ============ */
const ICONS = { citrus: Citrus, flower: Flower2, martini: Martini, leaf: Leaf, flame: Flame, cherry: Cherry };
const SCALE_LABELS = { freschezza: 'Freschezza', corpo: 'Corpo', aromaticita: 'Aromaticità' };

export const GinMatcher = () => {
  const [active, setActive] = useState(GIN_PROFILES[0].id);
  const p = GIN_PROFILES.find((g) => g.id === active);

  return (
    <section className="section matcher" id="matcher">
      <div className="container">
        <SectionHeading
          label="Gin & Tonic Matcher"
          title="Qual è il tuo"
          em="mood stasera?"
          text="Scegli il profilo aromatico che preferisci: ti suggeriamo l'abbinamento perfetto da chiedere al bancone."
        />

        <div className="matcher-chips reveal" role="tablist" aria-label="Profili aromatici">
          {GIN_PROFILES.map((g) => {
            const Icon = ICONS[g.icon];
            return (
              <button
                key={g.id}
                id={`matcher-${g.id}`}
                role="tab"
                aria-selected={active === g.id}
                aria-controls="matcher-panel"
                className={`matcher-chip ${active === g.id ? 'active' : ''}`}
                onClick={() => setActive(g.id)}
              >
                <Icon size={18} strokeWidth={1.5} />
                {g.label}
              </button>
            );
          })}
        </div>

        <div className="reveal">
          <div
            id="matcher-panel"
            role="tabpanel"
            aria-labelledby={`matcher-${p.id}`}
            className="matcher-result"
            key={p.id}
            data-profile={p.id}
          >
            <div className="matcher-result-main">
              <span className="label"><Sparkles size={13} /> Il tuo abbinamento</span>
              <h3>{p.title}</h3>
              <p className="matcher-desc">{p.desc}</p>

              <dl className="matcher-recipe">
                <div><dt>Gin</dt><dd>{p.gin}</dd></div>
                <div><dt>Tonica</dt><dd>{p.tonic}</dd></div>
                <div><dt>Garnish</dt><dd>{p.garnish}</dd></div>
              </dl>
            </div>

            <div className="matcher-result-side">
              <div className="matcher-glass" aria-hidden="true">
                <div className="glass-bowl">
                  <div className="glass-liquid" />
                  <span className="bubble b1" /><span className="bubble b2" /><span className="bubble b3" /><span className="bubble b4" />
                </div>
                <div className="glass-stem" />
                <div className="glass-base" />
              </div>
              <div className="matcher-scales">
                {Object.entries(p.scale).map(([k, v]) => (
                  <div key={k} className="scale-row">
                    <div className="scale-head"><span>{SCALE_LABELS[k]}</span><span>{v}%</span></div>
                    <div className="scale-track"><div className="scale-fill" style={{ '--w': `${v}%` }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="matcher-note">Abbinamenti indicativi: la nostra carta gin cambia spesso, chiedi sempre al bartender le novità della settimana.</p>
      </div>
    </section>
  );
};

/* ============ CTA BANNER ============ */
export const CtaBanner = ({ label, title, em, text, to, cta }) => (
  <section className="section-tight">
    <div className="container">
      <div className="cta-banner reveal">
        <div className="cta-banner-glow" />
        <div className="cta-banner-text">
          <span className="label label-white">{label}</span>
          <h2>{title} <em>{em}</em></h2>
          <p>{text}</p>
        </div>
        <Link to={to} className="btn btn-light">{cta} <ArrowRight size={16} /></Link>
      </div>
    </div>
  </section>
);

/* ============ CONTATTI ============ */
export const Contact = () => {
  const status = useOpenStatus();
  const { mapAllowed, grantMapConsent } = useMapConsent();
  const today = new Date().getDay();

  return (
    <section id="contatti" className="section contact">
      <div className="container">
        <SectionHeading label="Vieni a Trovarci" title="Ti aspettiamo" em="al bancone" />

        <div className="contact-grid">
          <div className="contact-info reveal">
            <div className={`status-pill ${status.open ? 'is-open' : ''}`}>
              <span className={`status-dot ${status.open ? 'is-open' : ''}`} />
              {status.text}
            </div>

            <div className="contact-block">
              <div className="contact-icon"><Clock size={20} strokeWidth={1.5} /></div>
              <div>
                <h3>Orari</h3>
                <ul className="hours-list">
                  {HOURS.map((h) => (
                    <li key={h.label} className={h.days.includes(today) ? 'today' : ''}>
                      <span>{h.label}</span><span>{h.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="contact-block">
              <div className="contact-icon"><MapPin size={20} strokeWidth={1.5} /></div>
              <div>
                <h3>Dove Siamo</h3>
                <p>{CONTACT.address}<br />{CONTACT.city}</p>
              </div>
            </div>

            <div className="contact-block">
              <div className="contact-icon"><Phone size={20} strokeWidth={1.5} /></div>
              <div>
                <h3>Contattaci</h3>
                <p>
                  <a href={CONTACT.phoneHref} onClick={() => trackEvent('click_phone', { location: 'contact_info' })}>{CONTACT.phone}</a><br />
                  <a href={`mailto:${CONTACT.email}`} onClick={() => trackEvent('click_email', { location: 'contact_info' })}>{CONTACT.email}</a>
                </p>
              </div>
            </div>

            <div className="contact-actions">
              <a
                id="cta-call"
                href={CONTACT.phoneHref}
                onClick={() => trackEvent('click_phone', { location: 'contact_cta' })}
                className="btn btn-primary"
              >
                <Phone size={15} /> Chiama
              </a>
              <a
                id="cta-whatsapp"
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_whatsapp', { location: 'contact_cta' })}
                className="btn btn-outline"
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
              <a
                id="cta-directions"
                href={CONTACT.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_directions', { location: 'contact_cta' })}
                className="btn btn-outline"
              >
                <Navigation size={15} /> Indicazioni
              </a>
            </div>
          </div>

          <div className="contact-map reveal">
            {mapAllowed ? (
              <>
                <iframe
                  title="Mappa Shake & Tonic — Via Galileo Galilei 17, Novara"
                  src={CONTACT.mapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="map-tint" />
                <a
                  href={CONTACT.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('click_directions', { location: 'map_badge' })}
                  className="map-badge"
                >
                  <MapPin size={14} /> Apri in Google Maps
                </a>
              </>
            ) : (
              <div className="map-consent-placeholder">
                <div className="map-consent-icon">
                  <MapPin size={26} strokeWidth={1.5} />
                </div>
                <h3>{CONTACT.address}</h3>
                <p className="map-consent-city">{CONTACT.city}</p>
                <p className="map-consent-note">
                  <ShieldCheck size={14} /> Per tutelare la tua privacy, la mappa interattiva di
                  Google Maps è disattivata finché non scegli di caricarla.
                </p>
                <div className="map-consent-actions">
                  <button type="button" className="btn btn-primary" onClick={grantMapConsent}>
                    Mostra mappa interattiva
                  </button>
                  <a
                    href={CONTACT.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('click_directions', { location: 'map_placeholder' })}
                    className="btn btn-outline"
                  >
                    <Navigation size={15} /> Apri in Google Maps
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="contact-mail-hint">
          <Mail size={14} /> Per eventi privati e feste di compleanno scrivici:{' '}
          <a href={`mailto:${CONTACT.email}`} onClick={() => trackEvent('click_email', { location: 'events_hint' })}>
            {CONTACT.email}
          </a>
        </div>
      </div>
    </section>
  );
};
