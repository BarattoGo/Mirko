import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Navbar, Footer, CursorGlow, ScrollManager } from './components/Layout';
import HomePage from './pages/Home';
import MenuPage from './pages/Menu';
import GintoneriaPage from './pages/Gintoneria';

const NotFound = () => (
  <section className="not-found">
    <span className="label">Errore 404</span>
    <h1>Bicchiere <em>vuoto</em></h1>
    <p>La pagina che cerchi non esiste.</p>
    <Link to="/" className="btn btn-primary">Torna alla Home</Link>
  </section>
);

/* Transizione morbida a ogni cambio pagina */
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <main className="page-transition" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/gintoneria" element={<GintoneriaPage />} />
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
    </Router>
  );
}

export default App;
