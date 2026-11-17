import { useState } from 'react';
import { MENU, MENU_TABS, PAGE_SEO } from '../data';
import { usePageSEO } from '../hooks';
import { PageHero, CtaBanner } from '../components/Sections';

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

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

  return (
    <>
      <PageHero
        label="Cosa Offriamo"
        title="Il"
        em="Menù"
        text="Dalla colazione al dopocena, ogni momento ha il suo gusto."
      />

      <section className="section menu-page">
        <div className="menu-tabs-wrap">
          <div className="menu-tabs" role="tablist" aria-label="Categorie menù">
            {MENU_TABS.map((t) => (
              <button
                key={t.id}
                id={`menu-tab-${t.id}`}
                role="tab"
                aria-selected={tab === t.id}
                aria-controls={`menu-panel-${t.id}`}
                className={`menu-tab ${tab === t.id ? 'active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
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
            Per allergie o intolleranze chiedi pure al nostro staff. I prezzi sono IVA inclusa.
          </p>
        </div>
      </section>

      <CtaBanner
        label="La Gintoneria"
        title="Oltre 30 gin"
        em="ti aspettano"
        text="Scopri la nostra selezione e trova il gin tonic giusto per te con il Matcher."
        to="/gintoneria"
        cta="Vai alla Gintoneria"
      />
    </>
  );
};

export default MenuPage;
