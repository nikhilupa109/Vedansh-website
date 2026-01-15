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

  // Hero background image (GitHub Pages-safe) with extension fallbacks
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

  // Character animation for hero title
  useEffect(() => {
    if (!heroTitleRef.current) return;

    const title = heroTitleRef.current;
    const text = title.textContent;
    title.textContent = '';
    title.style.whiteSpace = 'normal';

    const words = text.split(' ').filter(Boolean);
    const allChars = [];

    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement('span');
      wordSpan.style.display = 'inline-block';
      wordSpan.style.whiteSpace = 'nowrap';

      word.split('').forEach((char) => {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        charSpan.style.display = 'inline-block';
        charSpan.style.opacity = '0';
        allChars.push(charSpan);
        wordSpan.appendChild(charSpan);
      });

      title.appendChild(wordSpan);

      if (wordIndex < words.length - 1) {
        title.appendChild(document.createTextNode(' '));
      }
    });

    gsap.to(allChars, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 0.8,
      stagger: 0.02,
      ease: 'back.out(1.7)',
      delay: 0.3,
      onStart: () => {
        allChars.forEach((char) => {
          char.style.transform = 'translateY(50px) rotateX(-90deg)';
        });
      },
    });
  }, []);

  // Hero section animation
  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.hero-animate', {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'expo.out',
        delay: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Scroll reveal animations for card grids
  useEffect(() => {
    const targets = document.querySelectorAll(
      '.service-card, .cert-grid > div, .industries-grid > div'
    );
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        clipPath: 'inset(100% 0 0 0)',
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.1,
        ease: 'expo.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: targets[0].closest('section') || targets[0].parentElement,
          start: 'top 80%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const coreServices = [
    {
      Icon: GiCrane,
      title: 'Mechanical Plant Erection',
      description:
        'Heavy mechanical erection of industrial plants with precision installation, alignment, and commissioning support.',
      highlights: [
        'Heavy Equipment Installation',
        'Alignment & Commissioning',
        'Shutdown & Turnaround Support',
        'Site Safety Compliance',
      ],
    },
    {
      Icon: FaTools,
      title: 'Boilers and Pipeline',
      description:
        'Boiler erection assistance, piping fabrication & installation, and on-site execution to accelerate plant timelines.',
      highlights: [
        'Boiler Erection Assistance',
        'Piping Fabrication & Erection',
        'High-Pressure Lines',
        'Welding & QA/QC',
      ],
    },
    {
      Icon: GiElectric,
      title: 'Electrical & Substation EPC',
      description:
        'EPC delivery for electrical packages, substations, testing, commissioning, and integrated E&I execution.',
      highlights: [
        'HV/LV Electrical Works',
        'Substation EPC',
        'Testing & Commissioning',
        'Integrated E&I Execution',
      ],
    },
    {
      Icon: FaCogs,
      title: 'Operation & Maintenance',
      description:
        'O&M services designed to increase uptime, improve reliability, and extend the life of critical assets.',
      highlights: [
        'Long-Term O&M Contracts',
        'Preventive Maintenance',
        'Emergency Support',
        'Performance Benchmarking',
      ],
    },
    {
      Icon: MdPrecisionManufacturing,
      title: 'Fabrication Workshop',
      description:
        'Fabrication capability for critical steel components with quality checks and repeatable, reliable output.',
      highlights: [
        'Structural Fabrication',
        'Custom Components',
        'Shop Trials & Fit-ups',
        'Quality Documentation',
      ],
    },
  ];

  const technicalDisciplines = [
    { name: 'Industrial Electrical Works', Icon: GiElectric, desc: 'HV/LV systems, panels, cabling, terminations, and testing for industrial facilities.' },
    { name: 'Mechanical Erection', Icon: GiCrane, desc: 'Complete mechanical erection of plants, equipment, and static/rotary packages.' },
    { name: 'Instrumentation', Icon: FaClipboardCheck, desc: 'Instrumentation installation, calibration, loop checking, and commissioning.' },
    { name: 'Plant Maintenance', Icon: FaCogs, desc: 'Routine and shutdown maintenance across mechanical and electrical assets.' },
    { name: 'Fabrication & Structural', Icon: MdPrecisionManufacturing, desc: 'Fabrication of structures, pipe racks, supports, and process equipment items.' },
    { name: 'Safety & Compliance', Icon: FaHardHat, desc: 'Strict adherence to HSE, statutory, and client safety protocols.' },
  ];

  const industries = [
    { name: 'Cement', icon: FaIndustry },
    { name: 'Steel & Metals', icon: GiFactory },
    { name: 'Power & Utilities', icon: FaBolt },
    { name: 'Oil & Gas', icon: FaCogs },
    { name: 'Manufacturing', icon: MdPrecisionManufacturing },
    { name: 'Infrastructure', icon: MdEngineering },
  ];

  const capabilities = [
    { Icon: FaCertificate, text: 'Special Class IBR Boiler Erector License' },
    { Icon: FaBolt, text: 'Class-A Electrical Contractor License – Rajasthan & Gujarat' },
    { Icon: FaHardHat, text: '77 Lakh Safe Man-Hours with Zero Fatalities' },
    { Icon: FaLightbulb, text: '19 Years of Industrial Execution Experience' },
  ];

  return (
    <>
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
              className="hero-animate"
              style={{
                color: '#FFFFFF',
                fontSize: 'clamp(42px, 5vw, 64px)',
                fontWeight: 900,
                marginBottom: '18px',
                letterSpacing: '-0.02em',
              }}
            >
              Industrial Services & Turnkey Execution
            </h1>
            <p
              className="hero-animate"
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
            <div
              className="hero-animate"
              style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}
            >
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
                fontFamily: 'Poppins, sans-serif',
                color: '#1F2937',
              }}
            >
              Our Core Services
            </h2>
            <p
              style={{
                fontSize: 18,
                color: '#6B7280',
                maxWidth: 700,
                margin: '0 auto',
              }}
            >
              Comprehensive solutions tailored to meet the unique demands of India&apos;s industrial sector.
            </p>
          </div>

          <div className="services-grid">
            {coreServices.map((service, idx) => (
              <div key={idx} className="service-card" style={{ textAlign: 'left' }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 16 }}>
                  <service.Icon style={{ fontSize: 34, color: '#1fadbf' }} />
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      margin: 0,
                      fontFamily: 'Poppins, sans-serif',
                      color: '#1F2937',
                    }}
                  >
                    {service.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: 16,
                    color: '#6B7280',
                    lineHeight: 1.7,
                    marginBottom: 18,
                  }}
                >
                  {service.description}
                </p>
                <ul style={{ paddingLeft: 18, margin: 0, color: '#1F2937' }}>
                  {service.highlights.map((h, i) => (
                    <li key={i} style={{ marginBottom: 8 }}>
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
                fontFamily: 'Poppins, sans-serif',
                color: '#1F2937',
              }}
            >
              Technical Disciplines
            </h2>
            <p
              style={{
                fontSize: 18,
                color: '#6B7280',
                maxWidth: 700,
                margin: '0 auto',
              }}
            >
              Specialized execution capabilities across major industrial disciplines.
            </p>
          </div>

          <div className="cert-grid">
            {technicalDisciplines.map((discipline, i) => (
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
                <discipline.Icon style={{ fontSize: 64, color: '#1fadbf', marginBottom: 20 }} />
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    marginBottom: 8,
                    fontFamily: 'Poppins, sans-serif',
                    color: '#1F2937',
                  }}
                >
                  {discipline.name}
                </h3>
                <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7 }}>
                  {discipline.desc}
                </p>
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
                fontFamily: 'Poppins, sans-serif',
                color: '#1F2937',
              }}
            >
              Industries We Serve
            </h2>
            <p
              style={{
                fontSize: 18,
                color: '#6B7280',
                maxWidth: 700,
                margin: '0 auto',
              }}
            >
              Proven expertise across diverse industrial sectors throughout India.
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
                <div style={{ fontSize: 48, marginBottom: 12 }}>
                  <industry.icon />
                </div>
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    fontFamily: 'Poppins, sans-serif',
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
                fontFamily: 'Poppins, sans-serif',
                color: '#FFFFFF',
              }}
            >
              Our Capabilities
            </h2>
            <p
              style={{
                fontSize: 18,
                color: '#E5E7EB',
                maxWidth: 700,
                margin: '0 auto',
              }}
            >
              Industry certifications and credentials that validate our expertise.
            </p>
          </div>

          <div
            style={{
              maxWidth: 900,
              margin: '0 auto',
              display: 'grid',
              gap: 24,
            }}
          >
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
                  transition: 'all 0.35s ease',
                  transform: 'translateX(0)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(31, 173, 191, 0.1)';
                  e.currentTarget.style.borderColor = '#1fadbf';
                  e.currentTarget.style.transform = 'translateX(12px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <cap.Icon style={{ fontSize: '32px', color: '#1fadbf', flexShrink: 0 }} />
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#FFFFFF',
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {cap.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Need expert industrial services?</h2>
            <p>
              Our team is ready to deliver comprehensive solutions tailored to your project
              requirements.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginTop: '32px',
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
    </>
  );
};

export default Services;
