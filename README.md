# Shake & Tonic — Gintoneria e Cocktail Bar (Novara)

Sito vetrina ufficiale per **Shake & Tonic** (Via Galileo Galilei 17, 28100 Novara), sviluppato con:
- **React 19** + **React Router 7**
- **Vite 8**
- **Vanilla CSS** (Design System Dark Luxury · Viola & Bianco, con font self-hosted GDPR-compliant)
- **lucide-react** (Icone)

## Dove inserire gli ultimi dati del cliente prima del lancio
Tutti i parametri centralizzati si trovano in [`src/data.js`](./src/data.js) e [`index.html`](./index.html):
1. **Dati fiscali e societari (`LEGAL` in `src/data.js`):** inserire `vatId` (P.IVA), eventuale `taxCode`, `rea`, `pec`, `legalForm`. Appariranno automaticamente nel Footer e nelle 3 pagine legali (`/privacy-policy`, `/cookie-policy`, `/termini-e-condizioni`).
2. **Social (`CONTACT` in `src/data.js`):** sostituire `'#'` in `instagram` e `facebook` con gli URL reali dei profili.
3. **Dominio definitivo:** se diverso da `https://shakeandtonic.it`, aggiornare `SITE.url` in `src/data.js`, gli URL in `index.html`, `public/robots.txt` e `public/sitemap.xml`.
4. **CookieYes + Google Analytics 4:** decommentare il blocco predisposto in `index.html` inserendo `COOKIEYES_ID` e `G-XXXXXXXXXX` (e valorizzare `SITE.gaMeasurementId` in `src/data.js`).
