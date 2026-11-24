import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PAGE_SEO } from '../data';
import { usePageSEO } from '../hooks';
import { PageHero, Ritual, GinMatcher, Counter } from '../components/Sections';

const GinIntro = () => (
  <section className="section gin-intro">
    <div className="container">
      <div className="gin-grid">
        <div className="gin-content reveal">
          <span className="label">La Gintoneria</span>
          <h2>L'arte del <br /><em>Gin &amp; Tonic</em></h2>
          <p>
            Ogni sera il nostro bancone si trasforma. Oltre 166 etichette di gin
            da tutto il mondo — tra le proposte in carta e le numerose bottiglie
            speciali fuori menù da scoprire al bancone — abbinate a 9+ toniche
            artigianali e guarnizioni fresche. Ogni combinazione è studiata per
            esaltare le botaniche e creare un'esperienza unica.
          </p>
          <ul className="gin-list">
            <li><span>Gin Premium (in carta e fuori menù)</span><span>166+</span></li>
            <li><span>Toniche artigianali</span><span>9+</span></li>
            <li><span>Botaniche e guarnizioni fresche</span><span>∞</span></li>
            <li><span>Combinazioni possibili</span><span>1500+</span></li>
          </ul>
          <a href="#matcher" className="link-arrow">Trova il tuo abbinamento <ArrowRight size={16} /></a>
        </div>
        <div className="gin-image reveal">
          <img
            src="/gin-tonic.jpg"
            alt="Gin Tonic Signature servito in calice balloon da Shake & Tonic a Novara"
            width="1024"
            height="1024"
            loading="lazy"
            decoding="async"
          />
          <div className="gin-image-caption glass">
            <span>Servito in</span>
            <strong>Calice Balloon</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const GinNumbers = () => (
  <section className="section-tight numbers-band">
    <div className="container numbers-grid reveal">
      <Counter value={166} suffix="+" label="Etichette di gin" />
      <Counter value={9} suffix="+" label="Toniche artigianali" />
      <Counter value={1500} suffix="+" label="Combinazioni" />
      <Counter value={10} label="Profili di gusto" />
    </div>
  </section>
);

const GintoneriaPage = () => {
  usePageSEO(PAGE_SEO.gintoneria);
  return (
    <>
      <PageHero
        image="/hero-night.jpg"
        label="Di Sera"
        title="La"
        em="Gintoneria"
        text="Oltre 166 gin da tutto il mondo, 9+ toniche artigianali e botaniche fresche. Benvenuto nel rito."
      />
      <GinIntro />
      <GinNumbers />
      <Ritual />
      <GinMatcher />
      <section className="section-tight">
        <div className="container center-cta reveal">
          <Link id="gin-contact-btn" to="/#contatti" className="btn btn-primary">Vieni a trovarci <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
};

export default GintoneriaPage;
