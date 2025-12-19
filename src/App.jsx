import { lazy, Suspense, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';

import 'lenis/dist/lenis.css';
import './styles/main.css';

import ScrollToTop from './components/ScrollToTop';

// Lazy-loaded layout components
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const Careers = lazy(() => import('./pages/Careers')); // Careers page

function App() {
  const location = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // React Router does not reset scroll position by default.
    // With Lenis smooth-scroll enabled, we must reset Lenis' internal scroll state too.
    const lenis = lenisRef.current;
    if (lenis && typeof lenis.scrollTo === 'function') {
      // immediate prevents smooth animation on route change
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [location.pathname]);

  return (
    <Suspense fallback={<div className="page-loader">Loading...</div>}>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Suspense>
  );
}

export default App;
