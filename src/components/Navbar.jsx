import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

 const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/careers', label: 'Careers' },  // ← add this line
  { path: '/contact', label: 'Contact' },
];


  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link
          to="/"
          className="logo nav-logo-link"
          aria-label="Vedansh Infra Services"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Vedansh Infra Services"
            className="nav-logo-img"
          />
        </Link>

        
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <li key={link.path}>
              <Link to={link.path} className={location.pathname === link.path ? 'active' : ''}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
