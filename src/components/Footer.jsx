import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content" style={{ gridTemplateColumns: "1.6fr 1fr 1fr 1.4fr" }}>
          <div className="footer-col">
            <h4>VEDANSH INFRA SERVICES PVT. LTD. </h4>
            <p>Engineering Excellence, Building the Future.</p>
            <p style={{ marginTop: '12px', fontSize: '13px', opacity: 0.8 }}>
              ISO 9001 | ISO 14001 | ISO 45001 | IBR Approved
            </p>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Mechanical Plant Erection</Link></li>
              <li><Link to="/services">Boilers and Pipeline</Link></li>
              <li><Link to="/services">Electrical and Substation EPC</Link></li>
              <li><Link to="/services">Operation &amp; Maintenance</Link></li>
              <li><Link to="/services">Fabrication Workshop</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <div style={{ fontWeight: 800, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Registered Office
                </div>
                <div style={{ lineHeight: 1.65 }}>
                  F-16, Block-II, Ambe Market, Near<br />
                  Rituraj Vatika, Chittorgarh-312001
                </div>
              </li>

              <li style={{ marginTop: '16px' }}>
                <div style={{ fontWeight: 800, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Branch Office
                </div>
                <div style={{ lineHeight: 1.65 }}>
                  302, Central by Sangath IPL, B/H 4D Square Mall,<br />
                  Motera Road, Chandkheda, Ahmedabad, Gujarat. 380005.
                </div>
              </li>

              <li style={{ marginTop: '16px' }}>
                <a href="mailto:vedansh.infragroup@gmail.com">vedansh.infragroup@gmail.com</a>
              </li>

              <li style={{ marginTop: '10px' }}>
                <a
                  href="https://www.linkedin.com/company/vedansh/?viewAsMember=true"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Vedansh Infra LinkedIn"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontWeight: 700 }}
                >
                  {/* LinkedIn icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.6 0 4.266 2.369 4.266 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
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