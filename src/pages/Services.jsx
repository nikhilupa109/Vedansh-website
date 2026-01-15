import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaCogs,
  FaTools,
  FaClipboardCheck,
  FaUsers,
  FaBolt,
  FaIndustry,
  FaHardHat,
  FaCertificate,
  FaLightbulb,
  FaProjectDiagram,
} from 'react-icons/fa';
import { GiElectric, GiCrane, GiFactory } from 'react-icons/gi';
import { MdPrecisionManufacturing, MdEngineering } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

const BASE = import.meta.env.BASE_URL || '/';

const Services = () => {
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);

  const [heroBg, setHeroBg] = useState(`${BASE}images/hero/services.jpg`);

  useEffect(() => {
    const candidates = [
      `${BASE}images/hero/services.jpg`,
      `${BASE}images/hero/services.jpeg`,
      `${BASE}images/hero/services.png`,
      `${BASE}images/hero/services.webp`,
      `${BASE}images/hero/services-hero.jpg`,
      `${BASE}images/hero/services-hero.jpeg`,
      `${BASE}images/hero/services-hero.png`,
      `${BASE}images/hero/services-hero.webp`,
    ];

    let cancelled = false;

    const tryLoad = (idx) => {
      if (idx >= candidates.length) return;

      const img = new Image();
      img.onload = () => {
        if (!cancelled) setHeroBg(candidates[idx]);
      };
      img.onerror = () => {
        if (!cancelled) tryLoad(idx + 1);
      };
      img.src = candidates[idx];
    };

    tryLoad(0);
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroTitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const coreServices = [
    {
      title: 'EPC / Turnkey Project Execution',
      description:
        'Complete engineering, procurement, and construction management for industrial projects—from planning to commissioning.',
      Icon: FaProjectDiagram,
      highlights: ['Engineering', 'Procurement', 'Construction', 'Commissioning'],
    },
    {
      title: 'Electrical & Instrumentation',
      description:
        'HV/LV installations, cabling, panels, testing, and instrumentation works for plants and industrial facilities.',
      Icon: GiElectric,
      highlights: ['HT/LT Works', 'Cabling', 'Panels', 'Testing & Commissioning'],
    },
    {
      title: 'Mechanical Erection & Maintenance',
      description:
        'Equipment installation, alignment, piping, structural works, shutdown maintenance, and plant upgrades.',
      Icon: FaTools,
      highlights: ['Equipment Erection', 'Piping', 'Structural', 'Shutdown Works'],
    },
    {
      title: 'Civil & Structural Works',
      description:
        'Industrial civil execution including foundations, sheds, utility structures, and allied infrastructure.',
      Icon: MdEngineering,
      highlights: ['Foundations', 'Sheds', 'Utilities', 'Infrastructure'],
    },
  ];

  const technicalDisciplines = [
    { name: 'Industrial Electrical Works', Icon: GiElectric },
    { name: 'Mechanical Erection', Icon: GiCrane },
    { name: 'Instrumentation', Icon: FaClipboardCheck },
    { name: 'Plant Maintenance', Icon: FaCogs },
    { name: 'Fabrication & Structural', Icon: MdPrecisionManufacturing },
    { name: 'Safety & Compliance', Icon: FaHardHat },
  ];

  const industries = [
    { name: 'Cement', icon: <FaIndustry /> },
    { name: 'Steel', icon: <GiFactory /> },
    { name: 'Power & Utilities', icon: <FaBolt /> },
    { name: 'Oil & Gas', icon: <FaCogs /> },
    { name: 'Manufacturing', icon: <MdPrecisionManufacturing /> },
    { name: 'Infrastructure', icon: <MdEngineering /> },
  ];

  const capabilities = [
    { Icon: FaCertificate, text: 'Special Class IBR Boiler Erector License' },
    { Icon: FaBolt, text: 'Class-A Electrical Contractor License (Rajasthan & Gujarat)' },
    { Icon: FaHardHat, text: '77+ Lakh Safe Man-Hours with Zero Fatalities' },
    { Icon: FaLightbulb, text: '19+ Years of Industrial Expertise' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        ref={heroRef}
        style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '140px',
          paddingBottom: '80px',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1
              ref={heroTitleRef}
              style={{
                color: '#FFFFFF',
                fontSize: 'clamp(42px, 5vw, 64px)',
                fontWeight: '900',
                marginBottom: '18px',
                letterSpacing: '-0.02em',
              }}
            >
              Industrial Services & Turnkey Execution
            </h1>
            <p
              style={{
                color: 'rgba(255,255,255,0.92)',
                fontSize: '18px',
                lineHeight: 1.8,
                maxWidth: '850px',
                margin: '0 auto 36px',
              }}
            >
              Expert EPC, plant erection, and O&amp;M services delivering quality excellence across electrical,
              mechanical, civil, and instrumentation projects.
            </p>
            <div style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section style={{ padding: '120px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: 800,
                marginBottom: 20,
                fontFamily: "'Poppins', sans-serif",
                color: '#1F2937',
              }}
            >
              Our Core Services
            </h2>
            <p style={{ fontSize: 18, color: '#6B7280', maxWidth: 700, margin: '0 auto' }}>
              Comprehensive solutions tailored to meet the unique demands of India's industrial sector
            </p>
          </div>

          <div className="services-grid">
            {coreServices.map((service, i) => (
              <div key={i} className="service-card" style={{ textAlign: 'left' }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 16 }}>
                  <service.Icon style={{ fontSize: 34, color: '#1fadbf' }} />
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      margin: 0,
                      fontFamily: "'Poppins', sans-serif",
                      color: '#1F2937',
                    }}
                  >
                    {service.title}
                  </h3>
                </div>

                <p style={{ fontSize: 16, color: '#6B7280', lineHeight: 1.7, marginBottom: 18 }}>
                  {service.description}
                </p>

                <ul style={{ paddingLeft: 18, margin: 0, color: '#1F2937' }}>
                  {service.highlights.map((h, idx) => (
                    <li key={idx} style={{ marginBottom: 8 }}>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Disciplines */}
      <section style={{ padding: '120px 0', backgroundColor: '#F8F9FA' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: 800,
                marginBottom: 20,
                fontFamily: "'Poppins', sans-serif",
                color: '#1F2937',
              }}
            >
              Technical Disciplines
            </h2>
            <p style={{ fontSize: 18, color: '#6B7280', maxWidth: 700, margin: '0 auto' }}>
              Specialized execution capabilities across major industrial disciplines
            </p>
          </div>

          <div className="cert-grid">
            {technicalDisciplines.map((d, i) => (
              <div
                key={i}
                style={{
                  background: '#FFFFFF',
                  padding: 40,
                  borderRadius: 20,
                  textAlign: 'center',
                  border: '2px solid #E5E7EB',
                  transition: 'all 0.3s ease',
                }}
              >
                <d.Icon style={{ fontSize: 64, color: '#1fadbf', marginBottom: 20 }} />
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    marginBottom: 8,
                    fontFamily: "'Poppins', sans-serif",
                    color: '#1F2937',
                  }}
                >
                  {d.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section style={{ padding: '120px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: 800,
                marginBottom: 20,
                fontFamily: "'Poppins', sans-serif",
                color: '#1F2937',
              }}
            >
              Industries We Serve
            </h2>
            <p style={{ fontSize: 18, color: '#6B7280', maxWidth: 700, margin: '0 auto' }}>
              Proven delivery across diverse industrial sectors
            </p>
          </div>

          <div className="industries-grid">
            {industries.map((industry, i) => (
              <div
                key={i}
                style={{
                  background: 'linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)',
                  padding: 30,
                  borderRadius: 16,
                  border: '1px solid #E5E7EB',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 12 }}>{industry.icon}</div>
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    fontFamily: "'Poppins', sans-serif",
                    color: '#1F2937',
                  }}
                >
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ padding: '120px 0', backgroundColor: '#1F2937' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: 800,
                marginBottom: 20,
                fontFamily: "'Poppins', sans-serif",
                color: '#FFFFFF',
              }}
            >
              Our Capabilities
            </h2>
            <p style={{ fontSize: 18, color: '#E5E7EB', maxWidth: 700, margin: '0 auto' }}>
              Industry certifications and credentials that validate our expertise
            </p>
          </div>

          <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gap: 24 }}>
            {capabilities.map((cap, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '24px 32px',
                  borderRadius: 16,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                }}
              >
                <cap.Icon style={{ fontSize: 32, color: '#1fadbf', flexShrink: 0 }} />
                <span style={{ fontSize: 18, fontWeight: 700, color: '#FFFFFF', fontFamily: "'Poppins', sans-serif" }}>
                  {cap.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Need expert industrial services?</h2>
            <p>Our team is ready to deliver comprehensive solutions tailored to your project requirements.</p>
            <div
              style={{
                display: 'flex',
                gap: 20,
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginTop: 32,
              }}
            >
              <Link to="/contact" className="btn btn-primary">
                Get in Touch
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
