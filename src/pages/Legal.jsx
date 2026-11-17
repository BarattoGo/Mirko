import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Cookie, FileText, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { CONTACT, LEGAL, PAGE_SEO, SITE } from '../data';
import { reopenCookieConsent, useMapConsent, usePageSEO } from '../hooks';
import { PageHero } from '../components/Sections';

const OwnerDetailsBox = () => (
  <div className="legal-box">
    <h3>Estremi del Titolare</h3>
    <ul>
      <li>
        <strong>Denominazione / Ragione Sociale:</strong> {LEGAL.companyName}
        {LEGAL.legalForm ? ` (${LEGAL.legalForm})` : ''}
      </li>
      <li>
        <strong>Sede:</strong> {LEGAL.legalAddress}
      </li>
      {LEGAL.vatId && (
        <li>
          <strong>Partita IVA:</strong> {LEGAL.vatId}
        </li>
      )}
      {LEGAL.taxCode && (
        <li>
          <strong>Codice Fiscale:</strong> {LEGAL.taxCode}
        </li>
      )}
      {LEGAL.rea && (
        <li>
          <strong>REA:</strong> {LEGAL.rea}
        </li>
      )}
      {LEGAL.shareCapital && (
        <li>
          <strong>Capitale Sociale:</strong> {LEGAL.shareCapital}
        </li>
      )}
      <li>
        <strong>Email di contatto / Privacy:</strong>{' '}
        <a href={`mailto:${LEGAL.privacyEmail}`}>{LEGAL.privacyEmail}</a>
      </li>
      {LEGAL.pec && (
        <li>
          <strong>PEC:</strong> <a href={`mailto:${LEGAL.pec}`}>{LEGAL.pec}</a>
        </li>
      )}
      <li>
        <strong>Telefono:</strong> <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
      </li>
    </ul>
  </div>
);

const LegalNav = ({ current }) => (
  <nav className="legal-nav" aria-label="Documenti legali">
    <Link to="/privacy-policy" className={current === 'privacy' ? 'active' : ''}>
      <ShieldCheck size={15} /> Privacy Policy
    </Link>
    <Link to="/cookie-policy" className={current === 'cookie' ? 'active' : ''}>
      <Cookie size={15} /> Cookie Policy
    </Link>
    <Link to="/termini-e-condizioni" className={current === 'terms' ? 'active' : ''}>
      <FileText size={15} /> Termini e Condizioni
    </Link>
  </nav>
);

/* ============ PRIVACY POLICY ============ */
export const PrivacyPolicyPage = () => {
  usePageSEO(PAGE_SEO.privacy);

  return (
    <>
      <PageHero
        label="Informativa GDPR · Art. 13 Reg. UE 2016/679"
        title="Privacy"
        em="Policy"
        text={`Ultimo aggiornamento: ${LEGAL.lastUpdated}`}
      />

      <section className="section legal-page">
        <div className="container legal-container">
          <LegalNav current="privacy" />

          <article className="legal-content">
            <p className="legal-lead">
              La presente informativa descrive le modalità di gestione del sito web{' '}
              <strong>{SITE.url}</strong> in riferimento al trattamento dei dati personali degli
              utenti che lo consultano, ai sensi dell’art. 13 del Regolamento (UE) 2016/679
              (“GDPR”) e del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.
            </p>

            <h2>1. Titolare del Trattamento</h2>
            <p>
              Il Titolare del trattamento dei dati personali raccolti tramite questo sito web è:
            </p>
            <OwnerDetailsBox />

            <h2>2. Tipologie di Dati raccolti</h2>
            <p>
              Il presente sito ha natura puramente informativa e vetrina: non prevede registrazione
              utente, aree riservate, carrelli e-commerce né moduli (form) di contatto o
              prenotazione online. I dati trattati si limitano a:
            </p>
            <ul>
              <li>
                <strong>Dati tecnici di navigazione:</strong> i sistemi informatici e le procedure
                software preposte al funzionamento di questo sito acquisiscono, nel corso del loro
                normale esercizio, alcuni dati la cui trasmissione è implicita nell’uso dei
                protocolli di comunicazione di Internet (es. indirizzi IP, orario della richiesta,
                tipo di browser e sistema operativo, pagine visitate). I caratteri tipografici
                (font) sono ospitati direttamente sul server del sito e non comportano connessioni
                automatiche verso server di terze parti.
              </li>
              <li>
                <strong>Dati forniti volontariamente dall’utente:</strong> l’invio facoltativo,
                esplicito e volontario di comunicazioni tramite posta elettronica (
                <code>{CONTACT.email}</code>), chiamata telefonica (<code>{CONTACT.phone}</code>) o
                messaggio WhatsApp comporta la successiva acquisizione dell’indirizzo email, del
                numero telefonico e degli eventuali ulteriori dati personali inseriti dall’utente,
                necessari esclusivamente per rispondere alle richieste ricevute.
              </li>
              <li>
                <strong>Dati statistici raccolti previo consenso (Google Analytics 4):</strong>{' '}
                esclusivamente qualora l’utente esprima il proprio consenso esplicito tramite il
                banner cookie, il sito utilizza Google Analytics 4 per raccogliere informazioni
                statistiche aggregate sull’utilizzo delle pagine e sulle interazioni principali (es.
                visualizzazioni pagina, click sui pulsanti di contatto).
              </li>
              <li>
                <strong>Contenuti incorporati di terze parti (Google Maps):</strong> la mappa
                interattiva presente nella sezione Contatti è bloccata preventivamente e viene
                caricata solo su esplicita azione o consenso dell’utente. L’attivazione della mappa
                comporta la connessione ai server di Google Ireland Limited / Google LLC.
              </li>
            </ul>

            <h2>3. Finalità e Base Giuridica del Trattamento</h2>
            <ul>
              <li>
                <strong>Erogazione e sicurezza del sito web:</strong> consentire la corretta
                visualizzazione delle pagine e garantire la sicurezza informatica dell’infrastruttura
                (base giuridica: legittimo interesse del Titolare, art. 6 par. 1 lett. f GDPR).
              </li>
              <li>
                <strong>Riscontro a richieste di informazioni o contatti:</strong> rispondere a
                telefonate, email o messaggi WhatsApp inviati spontaneamente dall’utente (base
                giuridica: esecuzione di misure precontrattuali adottate su richiesta
                dell’interessato, art. 6 par. 1 lett. b GDPR).
              </li>
              <li>
                <strong>Analisi statistica del traffico (Google Analytics 4) e mappe interattive:</strong>{' '}
                misurare in forma statistica le visite al sito e mostrare la mappa interattiva di
                Google Maps (base giuridica: consenso esplicito dell’interessato, art. 6 par. 1
                lett. a GDPR, revocabile in qualsiasi momento).
              </li>
              <li>
                <strong>Adempimento di obblighi di legge:</strong> ottemperare a obblighi previsti da
                leggi, regolamenti, normativa comunitaria o ordini dell’Autorità (art. 6 par. 1
                lett. c GDPR).
              </li>
            </ul>

            <h2>4. Modalità del Trattamento, Destinatari e Trasferimenti Extra-UE</h2>
            <p>
              Il trattamento è effettuato con strumenti informatici e telematici adottando misure
              tecniche e organizzative adeguate (incluso il protocollo crittografato HTTPS). Oltre
              al Titolare, possono avere accesso tecnici o fornitori esterni nominati, ove
              necessario, Responsabili del Trattamento ex art. 28 GDPR:
            </p>
            <ul>
              <li>
                <strong>Hosting e distribuzione (CDN):</strong> Vercel Inc. (con infrastruttura edge
                distribuita e clausole contrattuali standard / adesione al Data Privacy Framework
                UE-USA).
              </li>
              <li>
                <strong>Servizi statistici e mappe (previo consenso):</strong> Google Ireland
                Limited (Gordon House, Barrow Street, Dublino 4, Irlanda) e Google LLC (USA),
                aderente all’EU-US Data Privacy Framework. Su Google Analytics 4 è attiva
                l’anonimizzazione dell’indirizzo IP.
              </li>
              <li>
                <strong>Piattaforma di gestione del consenso (CMP):</strong> CookieYes Limited,
                utilizzata per registrare e documentare le preferenze cookie espresse dall’utente.
              </li>
            </ul>

            <h2>5. Periodo di Conservazione dei Dati</h2>
            <ul>
              <li>
                I log tecnici di navigazione sono conservati per il tempo strettamente necessario a
                garantire la sicurezza e l’operatività del servizio.
              </li>
              <li>
                Le comunicazioni inviate volontariamente via email o telefono sono conservate per il
                tempo necessario a evadere la richiesta dell’utente, fatti salvi eventuali obblighi
                di legge.
              </li>
              <li>
                I dati statistici associati ai cookie di Google Analytics 4 (attivati solo previo
                consenso) sono conservati secondo le durate indicate nella{' '}
                <Link to="/cookie-policy">Cookie Policy</Link> (fino a un massimo di 14 mesi per il
                cookie identificativo, o 2 mesi per i dati a livello di evento in GA4).
              </li>
            </ul>

            <h2>6. Diritti dell’Interessato (Artt. 15–22 GDPR)</h2>
            <p>
              In qualunque momento l’utente può esercitare i diritti riconosciuti dagli articoli da
              15 a 22 del GDPR, tra cui il diritto di:
            </p>
            <ul>
              <li>ottenere conferma dell’esistenza o meno di dati personali che lo riguardano e accedervi;</li>
              <li>chiederne la rettifica, l’aggiornamento o la cancellazione (“diritto all’oblio”);</li>
              <li>chiedere la limitazione del trattamento o opporsi allo stesso per motivi legittimi;</li>
              <li>revocare in qualsiasi momento il consenso prestato (senza pregiudicare la liceità del trattamento basata sul consenso prima della revoca);</li>
              <li>proporre reclamo all’Autorità Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">www.garanteprivacy.it</a>).</li>
            </ul>
            <p>
              Le richieste possono essere indirizzate senza formalità al Titolare scrivendo a{' '}
              <a href={`mailto:${LEGAL.privacyEmail}`}>{LEGAL.privacyEmail}</a>.
            </p>

            <div className="legal-back">
              <Link to="/" className="btn btn-outline">
                <ArrowLeft size={15} /> Torna alla Home
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

/* ============ COOKIE POLICY ============ */
export const CookiePolicyPage = () => {
  usePageSEO(PAGE_SEO.cookie);
  const { mapAllowed, grantMapConsent, revokeMapConsent } = useMapConsent();
  const [feedback, setFeedback] = useState('');

  const handleOpenCmp = () => {
    const opened = reopenCookieConsent();
    if (!opened) {
      setFeedback(
        'Il pannello CookieYes sarà attivo non appena verrà inserito lo script associato al dominio di produzione.'
      );
    } else {
      setFeedback('');
    }
  };

  return (
    <>
      <PageHero
        label="Informativa Estesa · Linee Guida Garante Privacy"
        title="Cookie"
        em="Policy"
        text={`Ultimo aggiornamento: ${LEGAL.lastUpdated}`}
      />

      <section className="section legal-page">
        <div className="container legal-container">
          <LegalNav current="cookie" />

          <article className="legal-content">
            <p className="legal-lead">
              La presente Cookie Policy spiega cosa sono i cookie e gli altri strumenti di
              tracciamento, quali tipologie vengono utilizzate dal sito{' '}
              <strong>{SITE.url}</strong> e come l’utente può gestire o revocare in qualsiasi
              momento le proprie preferenze, in conformità al Provvedimento del Garante per la
              protezione dei dati personali del 10 giugno 2021 (<em>“Linee guida cookie e altri
              strumenti di tracciamento”</em>).
            </p>

            <h2>1. Cosa sono i Cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati inviano al terminale
              dell’utente (computer, smartphone, tablet), dove vengono memorizzati per essere poi
              ritrasmessi agli stessi siti alla visita successiva. Oltre ai cookie, possono essere
              utilizzati strumenti analoghi di archiviazione locale del browser (come{' '}
              <code>localStorage</code>) per memorizzare le preferenze espresse dall’utente.
            </p>

            <h2>2. Gestione immediata delle tue preferenze</h2>
            <p>
              Puoi rivedere o modificare in qualsiasi momento il consenso ai cookie statistici
              tramite il pannello di gestione del consenso (CookieYes) e gestire lo sblocco della
              mappa interattiva di Google Maps:
            </p>

            <div className="legal-box legal-consent-controls">
              <div className="legal-consent-row">
                <div>
                  <strong>Preferenze Banner Cookie (CookieYes / Google Analytics 4)</strong>
                  <p>Apri il pannello per accettare o rifiutare i cookie analitici di terze parti.</p>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleOpenCmp}>
                  <Cookie size={15} /> Gestisci preferenze cookie
                </button>
              </div>

              {feedback && <p className="legal-feedback">{feedback}</p>}

              <div className="legal-consent-row">
                <div>
                  <strong>Mappa interattiva Google Maps</strong>
                  <p>
                    Stato attuale:{' '}
                    <span className={mapAllowed ? 'consent-active' : 'consent-denied'}>
                      {mapAllowed ? 'Attiva (autorizzata)' : 'Bloccata preventivamente'}
                    </span>
                  </p>
                </div>
                {mapAllowed ? (
                  <button type="button" className="btn btn-outline" onClick={revokeMapConsent}>
                    Blocca Google Maps
                  </button>
                ) : (
                  <button type="button" className="btn btn-outline" onClick={grantMapConsent}>
                    <CheckCircle2 size={15} /> Consenti Google Maps
                  </button>
                )}
              </div>
            </div>

            <h2>3. Tipologie di Cookie e Strumenti utilizzati</h2>

            <h3>A. Cookie Tecnici e di Preferenza (Sempre attivi — non richiedono consenso)</h3>
            <p>
              Sono indispensabili per il corretto funzionamento del sito e per memorizzare le scelte
              dell’utente in merito ai cookie e ai contenuti esterni, evitando di riproporre il
              banner a ogni cambio pagina.
            </p>
            <div className="legal-table-wrap">
              <table className="legal-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Fornitore</th>
                    <th>Finalità</th>
                    <th>Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>cookieyes-consent</code></td>
                    <td>CookieYes</td>
                    <td>Memorizza lo stato del consenso dell’utente per le diverse categorie di cookie.</td>
                    <td>1 anno</td>
                  </tr>
                  <tr>
                    <td><code>shake_tonic_map_consent</code></td>
                    <td>{SITE.name} (localStorage)</td>
                    <td>Ricorda se l’utente ha scelto di sbloccare la mappa interattiva nella sezione Contatti.</td>
                    <td>Persistente (revocabile)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>B. Cookie Analitici di Terze Parti (Attivati SOLO previo consenso)</h3>
            <p>
              Questi cookie vengono installati esclusivamente se l’utente clicca su “Accetta” nel
              banner cookie. Vengono utilizzati tramite <strong>Google Analytics 4</strong> (Google
              Ireland Limited) per raccogliere dati statistici aggregati sul numero degli utenti e
              su come questi visitano il sito (pagine viste, click sui pulsanti di chiamata,
              WhatsApp, indicazioni stradali).
            </p>
            <div className="legal-table-wrap">
              <table className="legal-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Fornitore</th>
                    <th>Finalità e Privacy Policy</th>
                    <th>Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>_ga</code></td>
                    <td>Google Ireland Ltd</td>
                    <td>
                      Distingue gli utenti a fini statistici.{' '}
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                        Privacy Policy Google
                      </a>
                    </td>
                    <td>Max 14 mesi (o 2 anni default GA4)</td>
                  </tr>
                  <tr>
                    <td><code>_ga_*</code></td>
                    <td>Google Ireland Ltd</td>
                    <td>Mantiene e conserva lo stato della sessione statistica su Google Analytics 4.</td>
                    <td>Max 14 mesi (o 2 anni default GA4)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>C. Servizi di Terze Parti incorporati (Google Maps)</h3>
            <p>
              Nella sezione Contatti è presente una mappa interattiva fornita da Google Maps. Per
              tutelare la privacy del visitatore, la mappa è <strong>bloccata preventivamente</strong>{' '}
              e non invia dati a Google finché l’utente non clicca sul pulsante “Mostra mappa
              interattiva” oppure accetta i cookie tramite il banner. L’utente può in ogni caso
              aprire l’indirizzo su Google Maps tramite semplice link esterno senza attivare la
              mappa incorporata.
            </p>

            <h2>4. Gestione dei Cookie tramite le impostazioni del Browser</h2>
            <p>
              Oltre ai controlli presenti su questa pagina, l’utente può gestire, bloccare o
              cancellare i cookie direttamente dalle impostazioni del proprio browser:
            </p>
            <ul>
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
                  Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
                  Apple Safari
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" rel="noopener noreferrer">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/it-it/windows/gestire-i-cookie-in-microsoft-edge-visualizzare-consentire-bloccare-eliminare-e-usare-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">
                  Microsoft Edge
                </a>
              </li>
            </ul>

            <div className="legal-back">
              <Link to="/" className="btn btn-outline">
                <ArrowLeft size={15} /> Torna alla Home
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

/* ============ TERMINI E CONDIZIONI / NOTE LEGALI ============ */
export const TermsPage = () => {
  usePageSEO(PAGE_SEO.terms);

  return (
    <>
      <PageHero
        label="Condizioni di Utilizzo del Sito"
        title="Termini &"
        em="Note Legali"
        text={`Ultimo aggiornamento: ${LEGAL.lastUpdated}`}
      />

      <section className="section legal-page">
        <div className="container legal-container">
          <LegalNav current="terms" />

          <article className="legal-content">
            <p className="legal-lead">
              L’accesso e la navigazione sul sito web <strong>{SITE.url}</strong> comportano
              l’accettazione delle presenti Note Legali e Condizioni d’Uso.
            </p>

            <h2>1. Informazioni sul Titolare del Sito</h2>
            <OwnerDetailsBox />

            <h2>2. Oggetto del Sito e Natura Indicativa di Menù, Prezzi e Abbinamenti</h2>
            <p>
              Il sito ha finalità esclusivamente informative e di presentazione dell’attività di
              caffetteria, cocktail bar e gintoneria svolta presso il locale{' '}
              <strong>{SITE.name}</strong> in {CONTACT.address}, {CONTACT.city}.
            </p>
            <ul>
              <li>
                I prodotti, le etichette di gin, le toniche, i piatti e i relativi prezzi riportati
                nella pagina <Link to="/menu">Menù</Link> e nella pagina{' '}
                <Link to="/gintoneria">Gintoneria</Link> (incluso lo strumento interattivo{' '}
                <em>Gin &amp; Tonic Matcher</em>) hanno valore puramente illustrativo e non
                costituiscono offerta al pubblico vincolante ai sensi dell’art. 1336 c.c.
              </li>
              <li>
                La disponibilità delle singole etichette, delle botaniche fresche e delle proposte
                gastronomiche può variare giornalmente o stagionalmente. Fa sempre fede il listino
                esposto e consultabile fisicamente presso il locale.
              </li>
            </ul>

            <h2>3. Allergeni e Consumo Responsabile</h2>
            <ul>
              <li>
                <strong>Allergeni e intolleranze:</strong> prima di ordinare presso il locale, il
                cliente è invitato a segnalare sempre al personale di sala eventuali allergie o
                intolleranze alimentari per consultare il registro degli allergeni (Reg. UE
                1169/2011).
              </li>
              <li>
                <strong>Consumo responsabile di bevande alcoliche:</strong> i contenuti dedicati a
                cocktail, distillati e vini sono rivolti esclusivamente a un pubblico maggiorenne.
                Presso il locale non vengono somministrate bevande alcoliche ai minori di 18 anni.
              </li>
            </ul>

            <h2>4. Proprietà Intellettuale</h2>
            <p>
              Tutti i contenuti presenti sul sito (testi, grafica, logotipo <em>Shake &amp; Tonic</em>,
              layout, fotografie e codice sorgente) sono protetti dalle vigenti norme sul diritto
              d’autore e sulla proprietà industriale. È vietata qualsiasi riproduzione, anche
              parziale, non espressamente autorizzata. I marchi dei distillati e dei prodotti citati
              in carta appartengono ai rispettivi legittimi proprietari.
            </p>

            <h2>5. Collegamenti a Siti di Terze Parti</h2>
            <p>
              Il sito contiene collegamenti esterni (es. WhatsApp, Google Maps, profili social
              Instagram e Facebook). Il Titolare non esercita alcun controllo su tali siti di terze
              parti e declina ogni responsabilità in merito alla loro disponibilità, ai relativi
              contenuti e alle politiche di trattamento dei dati adottate dagli stessi.
            </p>

            <h2>6. Legge Applicabile</h2>
            <p>
              Le presenti Note Legali sono regolate dalla legge italiana. Per qualsiasi controversia
              inerente all’interpretazione o all’esecuzione delle presenti condizioni sarà
              competente il Foro previsto dalla normativa vigente.
            </p>

            <div className="legal-back">
              <Link to="/" className="btn btn-outline">
                <ArrowLeft size={15} /> Torna alla Home
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
