import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { MENU, MENU_TABS, PAGE_SEO } from '../data';
import { usePageSEO } from '../hooks';
import { PageHero, CtaBanner } from '../components/Sections';

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

/* Raggruppa la lista piatta in sezioni */
const groupSections = (list) =>
  list.reduce((acc, item) => {
    if (item.section) acc.push({ title: item.section, items: [] });
    else acc[acc.length - 1].items.push(item);
    return acc;
  }, []);

const GROUPED_MENU = Object.fromEntries(
  MENU_TABS.map((t) => [t.id, groupSections(MENU[t.id])])
);

const MenuPage = () => {
  usePageSEO(PAGE_SEO.menu);
  const [tab, setTab] = useState('alcolici');

  const handleSelectTab = (id) => {
    setTab(id);
    const sectionEl = document.getElementById('menu-content-start');
    if (sectionEl && window.scrollY > sectionEl.offsetTop - 120) {
      window.scrollTo({ top: sectionEl.offsetTop - 140, behavior: 'smooth' });
    }
  };

  return (
    <>
      <PageHero
        label="Cosa Offriamo"
        title="Il"
        em="Menù"
        text="Dalla colazione al dopocena, ogni momento ha il suo gusto."
      />

      <section className="section menu-page" id="menu-content-start">
        <div className="menu-tabs-wrap">
          <div className="container">
            <div className="menu-tabs-grid" role="tablist" aria-label="Categorie menù">
              {MENU_TABS.map((t) => (
                <button
                  key={t.id}
                  id={`menu-tab-${t.id}`}
                  role="tab"
                  aria-selected={tab === t.id}
                  aria-controls={`menu-panel-${t.id}`}
                  className={`menu-tab ${tab === t.id ? 'active' : ''}`}
                  onClick={() => handleSelectTab(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="menu-sticky-bar">
              <Link to="/gintoneria#matcher" className="menu-matcher-callout">
                <div className="menu-matcher-left">
                  <span className="menu-matcher-icon" aria-hidden="true">
                    <Sparkles size={15} />
                  </span>
                  <div className="menu-matcher-copy">
                    <span className="menu-matcher-eyebrow">Drink &amp; Gin Matcher</span>
                    <span className="menu-matcher-headline">
                      Non sai cosa <em>bere stasera?</em>
                    </span>
                  </div>
                </div>
                <span className="menu-matcher-cta">
                  <span>Scopri il tuo drink</span>
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="container">
          {MENU_TABS.map((t) => {
            const isActive = tab === t.id;
            const sections = GROUPED_MENU[t.id];
            return (
              <div
                key={t.id}
                id={`menu-panel-${t.id}`}
                role="tabpanel"
                aria-labelledby={`menu-tab-${t.id}`}
                hidden={!isActive}
                className={`menu-sections ${isActive ? 'is-active' : ''}`}
              >
                {sections.map((sec, si) => (
                  <div key={sec.title} className="menu-block" style={{ '--i': si }}>
                    <div className="menu-block-head">
                      <span className="menu-block-num">{ROMAN[si]}</span>
                      <h2>{sec.title}</h2>
                    </div>
                    <ul className="menu-list">
                      {sec.items.map((item) => (
                        <li key={item.name} className="menu-item">
                          <div className="menu-item-row">
                            <h3>
                              {item.name}
                              {item.tag && <span className={`menu-tag tag-${item.tag.replace(/\s/g, '').toLowerCase()}`}>{item.tag}</span>}
                            </h3>
                            <span className="menu-dots" aria-hidden="true" />
                            <span className="menu-price">{item.price}</span>
                          </div>
                          <p>{item.desc}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            );
          })}
          <p className="menu-note">
            Oltre alle proposte in carta, al bancone trovi oltre 166 etichette di gin e numerosi cocktail e distillati fuori menù: chiedi consiglio al nostro bartender. Per allergie o intolleranze rivolgiti allo staff. I prezzi sono IVA inclusa.
          </p>
        </div>
      </section>

      <CtaBanner
        label="La Gintoneria"
        title="Oltre 166 gin"
        em="ti aspettano"
        text="Oltre alla selezione in carta, scopri al bancone tutte le nostre etichette fuori menù e trova il gin tonic giusto per te con il Matcher."
        to="/gintoneria"
        cta="Vai alla Gintoneria"
      />
    </>
  );
};

export default MenuPage;
