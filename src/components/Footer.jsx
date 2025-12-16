import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h4>VEDANSH INFRA</h4>
            <p>Engineering Excellence, Building the Future.</p>
            <p style={{ marginTop: '12px', fontSize: '13px', opacity: 0.8 }}>
              ISO 9001 | ISO 14001 | OHSAS 45001 | IBR Approved
            </p>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>F-16, Block-II, Ambe Market</li>
              <li>Chittorgarh - 312001, Rajasthan</li>
              <li><a href="mailto:info@vedansh.in">info@vedansh.in</a></li>
              <li><a href="tel:+918955177870">+91 89551 77870</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Vedansh Infra Services Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
