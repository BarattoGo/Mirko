import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ChevronDown } from 'lucide-react';
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
  const [activeCat, setActiveCat] = useState(MENU_TABS[0].id);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  /* Aggiorna automaticamente la categoria attiva durante lo scroll */
  useEffect(() => {
    const onScroll = () => {
      const offset = 210;
      let current = MENU_TABS[0].id;
      for (const t of MENU_TABS) {
        const el = document.getElementById(`cat-${t.id}`);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = t.id;
        }
      }
      setActiveCat(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Chiude il menu a tendina cliccando fuori o premendo Escape */
  useEffect(() => {
    if (!dropdownOpen) return;
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setDropdownOpen(false);
    };
    window.addEventListener('mousedown', onClickOutside);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('mousedown', onClickOutside);
      window.removeEventListener('keydown', onKey);
    };
  }, [dropdownOpen]);

  const scrollToCategory = (id) => {
    setActiveCat(id);
    setDropdownOpen(false);
    const el = document.getElementById(`cat-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentTab = MENU_TABS.find((t) => t.id === activeCat) || MENU_TABS[0];

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
          <div className="container menu-sticky-bar">
            <div className="menu-dropdown" ref={dropdownRef}>
              <button
                type="button"
                className={`menu-dropdown-btn ${dropdownOpen ? 'is-open' : ''}`}
                onClick={() => setDropdownOpen((v) => !v)}
                aria-expanded={dropdownOpen}
                aria-haspopup="listbox"
              >
                <span className="menu-dropdown-prefix">Categoria:</span>
                <strong>{currentTab.label}</strong>
                <ChevronDown size={15} className={`menu-dropdown-chevron ${dropdownOpen ? 'rot' : ''}`} />
              </button>

              {dropdownOpen && (
                <ul className="menu-dropdown-list" role="listbox" aria-label="Scegli categoria menù">
                  {MENU_TABS.map((t, idx) => (
                    <li key={t.id} role="option" aria-selected={activeCat === t.id}>
                      <button
                        type="button"
                        className={`menu-dropdown-option ${activeCat === t.id ? 'active' : ''}`}
                        onClick={() => scrollToCategory(t.id)}
                      >
                        <span className="menu-dropdown-num">0{idx + 1}</span>
                        <span>{t.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Link to="/gintoneria#matcher" className="menu-matcher-callout">
              <span className="menu-matcher-text">
                <Sparkles size={14} />
                <span>
                  <strong>Non sai cosa bere?</strong> Scopri il tuo drink
                </span>
              </span>
              <span className="menu-matcher-cta">
                Fai il test <ArrowRight size={13} />
              </span>
            </Link>
          </div>
        </div>

        <div className="container menu-continuous">
          {MENU_TABS.map((t, catIndex) => {
            const sections = GROUPED_MENU[t.id];
            return (
              <div key={t.id} id={`cat-${t.id}`} className="menu-category-group">
                <div className="menu-category-header">
                  <span className="menu-category-index">0{catIndex + 1}</span>
                  <h2 className="menu-category-title">{t.label}</h2>
                  <span className="menu-category-line" aria-hidden="true" />
                </div>

                <div className="menu-sections">
                  {sections.map((sec, si) => (
                    <div key={sec.title} className="menu-block" style={{ '--i': si }}>
                      <div className="menu-block-head">
                        <span className="menu-block-num">{ROMAN[si]}</span>
                        <h3>{sec.title}</h3>
                      </div>
                      <ul className="menu-list">
                        {sec.items.map((item) => (
                          <li key={item.name} className="menu-item">
                            <div className="menu-item-row">
                              <h4>
                                {item.name}
                                {item.tag && <span className={`menu-tag tag-${item.tag.replace(/\s/g, '').toLowerCase()}`}>{item.tag}</span>}
                              </h4>
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
