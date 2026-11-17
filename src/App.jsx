import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Navbar, Footer, BookingWidget, CursorGlow, ScrollManager } from './components/Layout';
import { PAGE_SEO } from './data';
import { usePageSEO } from './hooks';
import HomePage from './pages/Home';
import MenuPage from './pages/Menu';
import GintoneriaPage from './pages/Gintoneria';
import { PrivacyPolicyPage, CookiePolicyPage, TermsPage } from './pages/Legal';

const NotFound = () => {
  usePageSEO(PAGE_SEO.notFound);
  return (
    <section className="not-found">
      <span className="label">Errore 404</span>
      <h1>Bicchiere <em>vuoto</em></h1>
      <p>La pagina che cerchi non esiste.</p>
      <Link to="/" className="btn btn-primary">Torna alla Home</Link>
    </section>
  );
};

/* Transizione morbida a ogni cambio pagina */
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <main id="main-content" className="page-transition" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/gintoneria" element={<GintoneriaPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        <Route path="/termini-e-condizioni" element={<TermsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

function App() {
  return (
    <Router>
      <ScrollManager />
      <CursorGlow />
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
      <BookingWidget />
    </Router>
  );
}

export default App;
