import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaCogs, FaTools, FaClipboardCheck, FaUsers, FaBolt, FaIndustry,
  FaHardHat, FaCertificate, FaCheckCircle, FaLightbulb, FaProjectDiagram
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
    img.onerror = () => tryLoad(idx + 1);
    img.src = candidates[idx];
  };

  tryLoad(0);
  return () => { cancelled = true; };
}, []);


  // Character animation for title
  useEffect(() => {
    if (!heroTitleRef.current) return;

    const title = heroTitleRef.current;
    const text = title.textContent;
    title.innerHTML = '';

    const words = text.split(' ');
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
        wordSpan.appendChild(charSpan);
        allChars.push(charSpan);
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
      ease: "back.out(1.7)",
      delay: 0.3,
      onStart: () => {
        allChars.forEach(char => {
          char.style.transform = 'translateY(50px) rotateX(-90deg)';
        });
      }
    });
  }, []);

  // Hero animation
  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.hero-animate', {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "expo.out",
        delay: 0.5
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const coreServices = [
    {
      Icon: GiCrane,
      title: 'Mechanical Plant Erection',
      description: 'Heavy mechanical erection of industrial plants with precision installation, alignment, and commissioning support.',
      highlights: ['Heavy Equipment Installation', 'Alignment & Commissioning', 'Shutdown & Turnaround Support', 'Site Safety Compliance']
    },
    {
      Icon: FaTools,
      title: 'Boilers and Pipeline',
      description: 'Boiler erection support and piping fabrication / installation to accelerate plant timelines and improve reliability.',
      highlights: ['IBR Boiler Erection', 'Piping Fabrication & Installation', 'Hydro / Pneumatic Testing', 'Commissioning Support']
    },
    {
      Icon: FaBolt,
      title: 'Electrical and Substation EPC',
      description: 'EPC delivery for electrical packages and substations including testing, commissioning, and integrated execution.',
      highlights: ['HV/LV Cabling & Panels', 'Substations & Switchyards', 'Testing & Commissioning', 'E&I Integration']
    },
    {
      Icon: FaCogs,
      title: 'Operation & Maintenance',
      description: 'O&M services designed to increase uptime, improve reliability, and extend the life of critical assets.',
      highlights: ['Annual Maintenance Contracts', 'Preventive Maintenance', 'Breakdown Support', 'Shutdown Overhauls']
    },
    {
      Icon: MdPrecisionManufacturing,
      title: 'Fabrication Workshop',
      description: 'Fabrication capability for critical steel components with quality checks and reliable, repeatable output.',
      highlights: ['Structural Fabrication', 'Pipe Spools & Supports', 'QA/QC Checks', 'Repeatable Output']
    }
  ];


  const technicalDisciplines = [
    { Icon: FaIndustry, name: 'Civil', desc: 'Foundations, structures, infrastructure' },
    { Icon: FaBolt, name: 'Electrical', desc: 'HV/LV installations, substations, switchyards' },
    { Icon: GiElectric, name: 'Instrumentation', desc: 'Control systems, automation, calibration' },
    { Icon: MdEngineering, name: 'Mechanical', desc: 'Heavy equipment, piping, structural work' }
  ];


  const industries = [
    { name: 'Chemical', icon: '🧪' },
    { name: 'Cement', icon: '🏗️' },
    { name: 'Fertilizers', icon: '🌾' },
    { name: 'Metal & Mining', icon: '⚙️' },
    { name: 'Petrochemical', icon: '🛢️' },
    { name: 'Power Generation', icon: '⚡' },
    { name: 'Renewables', icon: '♻️' }
  ];


  const capabilities = [
    { Icon: FaCertificate, text: 'Special Class IBR Boiler Erector License' },
    { Icon: FaBolt, text: 'Class-A Electrical Contractor License (Rajasthan & Gujarat)' },
    { Icon: FaHardHat, text: '77+ Lakh Safe Man-Hours with Zero Fatalities' },
    { Icon: FaLightbulb, text: '19+ Years of Industrial Expertise' }
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
          backgroundColor: '#111827'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <div
              className="hero-animate"
              style={{
                display: 'inline-block',
                background: 'rgba(31, 173, 191, 0.9)',
                color: 'white',
                padding: '10px 24px',
                borderRadius: '999px',
                fontSize: '14px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '26px',
                border: '1px solid rgba(255,255,255,0.25)'
              }}
            >
              INDUSTRIAL EXCELLENCE SINCE 2006
            </div>

            <h1
              ref={heroTitleRef}
              style={{
                fontSize: 'clamp(40px, 6vw, 68px)',
                fontWeight: '900',
                marginBottom: '22px',
                fontFamily: "'Poppins', sans-serif",
                color: '#FFFFFF',
                lineHeight: '1.1',
                perspective: '1000px'
              }}
            >
              Comprehensive industrial solutions across all disciplines
            </h1>

            <p
              className="hero-animate"
              style={{
                fontSize: '22px',
                color: 'rgba(255,255,255,0.85)',
                lineHeight: '1.7',
                maxWidth: '750px',
                margin: '0 auto 40px'
              }}
            >
              Expert EPC, plant erection, and O&M services delivering quality excellence across electrical, mechanical, civil, and instrumentation projects.
            </p>

            <div className="hero-animate" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/projects" className="btn btn-primary">View Projects</Link>
              <Link
                to="/contact"
                className="btn btn-secondary"
                style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.65)', background: 'transparent' }}
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Core Services - IMMEDIATELY VISIBLE */}
      <section style={{ padding: '120px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '20px', fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}>Our Core Services</h2>
            <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '700px', margin: '0 auto' }}>
              Comprehensive solutions tailored to meet the unique demands of India's industrial sector
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
            {coreServices.map((service, i) => (
              <div 
                key={i}
                style={{
                  background: '#F8F9FA',
                  padding: '48px',
                  borderRadius: '24px',
                  border: '1px solid #E5E7EB',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  opacity: 1,
                  transform: 'translateY(0)',
                  ...(coreServices.length % 2 !== 0 && i === coreServices.length - 1
                    ? { gridColumn: '1 / -1', maxWidth: 'calc(50% - 20px)', justifySelf: 'center', width: '100%' }
                    : {})
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(31, 173, 191, 0.15)';
                  e.currentTarget.style.borderColor = '#1fadbf';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.background = '#F8F9FA';
                }}
              >
                <service.Icon style={{ fontSize: '56px', color: '#1fadbf', marginBottom: '24px' }} />
                <h3 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px', fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.7', marginBottom: '24px' }}>
                  {service.description}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <FaCheckCircle style={{ color: '#1fadbf', fontSize: '16px', flexShrink: 0 }} />
                      <span style={{ fontSize: '14px', color: '#4B5563', fontWeight: '500' }}>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Disciplines - IMMEDIATELY VISIBLE */}
      <section style={{ padding: '120px 0', backgroundColor: '#F8F9FA' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '20px', fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}>
              Technical Disciplines
            </h2>
            <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '700px', margin: '0 auto' }}>
              Advanced technical expertise across all major industrial disciplines
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            {technicalDisciplines.map((discipline, i) => (
              <div
                key={i}
                style={{
                  background: '#FFFFFF',
                  padding: '40px',
                  borderRadius: '20px',
                  textAlign: 'center',
                  border: '2px solid #E5E7EB',
                  transition: 'all 0.3s ease',
                  opacity: 1,
                  transform: 'scale(1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#1fadbf';
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(31, 173, 191, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <discipline.Icon style={{ fontSize: '64px', color: '#1fadbf', marginBottom: '20px' }} />
                <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px', fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}>
                  {discipline.name}
                </h3>
                <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.6' }}>
                  {discipline.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served - IMMEDIATELY VISIBLE */}
      <section style={{ padding: '140px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '20px', fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}>
              Industries We Serve
            </h2>
            <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '700px', margin: '0 auto' }}>
              Proven expertise across diverse industrial sectors throughout India
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px', maxWidth: '1200px', margin: '0 auto' }}>
            {industries.map((industry, i) => (
              <div
                key={i}
                style={{
                  background: 'linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)',
                  padding: '40px 26px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  border: '1px solid #E5E7EB',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  opacity: 1,
                  transform: 'translateY(0)',
                  ...(industries.length % 2 !== 0 && i === industries.length - 1
                    ? { gridColumn: '1 / -1', maxWidth: 'calc(50% - 14px)', justifySelf: 'center', width: '100%' }
                    : {})
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.borderColor = '#1fadbf';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(31, 173, 191, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '12px', transition: 'all 0.3s ease' }}>
                  {industry.icon}
                </div>
                <span style={{ fontSize: '16px', fontWeight: '700', fontFamily: "'Poppins', sans-serif", color: '#1F2937', transition: 'all 0.3s ease' }}>
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities & Credentials - IMMEDIATELY VISIBLE */}
      <section style={{ padding: '120px 0', backgroundColor: '#1F2937' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '20px', fontFamily: "'Poppins', sans-serif", color: '#FFFFFF' }}>
              Our Capabilities
            </h2>
            <p style={{ fontSize: '18px', color: '#E5E7EB', maxWidth: '700px', margin: '0 auto' }}>
              Industry certifications and credentials that validate our expertise
            </p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gap: '24px' }}>
            {capabilities.map((cap, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '24px 32px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  transition: 'all 0.3s ease',
                  opacity: 1,
                  transform: 'translateX(0)'
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
                <span style={{ fontSize: '18px', fontWeight: '600', color: '#FFFFFF', fontFamily: "'Poppins', sans-serif" }}>
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
            <p>Our team is ready to deliver comprehensive solutions tailored to your project requirements.</p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '32px' }}>
              <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
              <Link to="/projects" className="btn btn-secondary">View Our Work</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;