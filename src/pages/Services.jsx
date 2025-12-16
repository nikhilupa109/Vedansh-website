import { useRef, useEffect } from 'react';
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

const Services = () => {
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);

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
        const spaceSpan = document.createElement('span');
        spaceSpan.innerHTML = '&nbsp;';
        spaceSpan.style.display = 'inline-block';
        title.appendChild(spaceSpan);
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
      title: 'Plant Erection & Commissioning',
      description: 'Expert erection and commissioning of industrial plants including detailed engineering, fabrication, and installation of critical heavy equipment in thermal, steel, petrochemical and process industries.',
      highlights: ['Boiler Erection (IBR Certified)', 'Heavy Equipment Installation', 'Structural & Pipeline Erection', 'Testing & Commissioning']
    },
    {
      Icon: FaTools,
      title: 'Operation & Maintenance',
      description: 'Comprehensive O&M services with skilled manpower to minimize downtime and maximize plant efficiency. Our technical experts ensure reliability and sustained performance.',
      highlights: ['Annual Maintenance Contracts', 'Plant Shutdown & Overhauling', 'Preventive Maintenance', '24/7 Technical Support']
    },
    {
      Icon: FaProjectDiagram,
      title: 'EPC Services',
      description: 'End-to-end Engineering, Procurement, and Construction services delivering turnkey solutions with single-source accountability from design to commissioning.',
      highlights: ['Complete Project Management', 'Design & Engineering', 'Procurement & Supply', 'Construction & Commissioning']
    },
    {
      Icon: FaUsers,
      title: 'Manpower Services',
      description: 'Skilled technical manpower deployment across all disciplines including ITI-certified technicians, engineers, and specialized workforce for industrial operations.',
      highlights: ['Certified Technicians', 'Engineering Expertise', 'Safety-Trained Personnel', 'Flexible Deployment']
    }
  ];

  const technicalDisciplines = [
    { Icon: FaBolt, name: 'Electrical', desc: 'HV/LV installations, substations, switchyards' },
    { Icon: MdEngineering, name: 'Mechanical', desc: 'Heavy equipment, piping, structural work' },
    { Icon: GiElectric, name: 'Instrumentation', desc: 'Control systems, automation, calibration' },
    { Icon: FaIndustry, name: 'Civil', desc: 'Foundations, structures, infrastructure' }
  ];

  const industries = [
    { name: 'Metal & Mining', icon: '⚙️' },
    { name: 'Power Generation', icon: '⚡' },
    { name: 'Cement', icon: '🏗️' },
    { name: 'Chemical', icon: '🧪' },
    { name: 'Fertilizers', icon: '🌾' },
    { name: 'Renewables', icon: '♻️' },
    { name: 'Data Centers', icon: '💾' },
    { name: 'Petrochemical', icon: '🛢️' }
  ];

  const capabilities = [
    { Icon: FaCertificate, text: 'Special Class IBR Boiler Erector License' },
    { Icon: FaBolt, text: 'Class-A Electrical Contractor License (Rajasthan & Gujarat)' },
    { Icon: FaCheckCircle, text: 'ISO 9001, 14001, 45001 Certified' },
    { Icon: FaHardHat, text: '77+ Lakh Safe Man-Hours with Zero Fatalities' },
    { Icon: FaIndustry, text: 'MSME Registered Organization' },
    { Icon: FaLightbulb, text: '19+ Years of Industrial Expertise' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #F8F9FA 0%, #E5E7EB 100%)', paddingTop: '100px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 ref={heroTitleRef} style={{ fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: '900', marginBottom: '28px', fontFamily: "'Poppins', sans-serif", color: '#1F2937', lineHeight: '1.1', perspective: '1000px' }}>
              Comprehensive industrial solutions across all disciplines
            </h1>
            <p className="hero-animate" style={{ fontSize: '22px', color: '#6B7280', lineHeight: '1.7', maxWidth: '750px', margin: '0 auto 40px' }}>
              Expert EPC, plant erection, and O&M services delivering quality excellence across electrical, mechanical, civil, and instrumentation projects.
            </p>
            <div className="hero-animate" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/projects" className="btn btn-primary">View Projects</Link>
              <Link to="/contact" className="btn btn-secondary">Request Quote</Link>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '40px' }}>
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
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(31, 173, 191, 0.15)';
                  e.currentTarget.style.borderColor = '#1fadbf';
                  e.currentTarget.style.background = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
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
      <section style={{ padding: '120px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '20px', fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}>
              Industries We Serve
            </h2>
            <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '700px', margin: '0 auto' }}>
              Proven expertise across diverse industrial sectors throughout India
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', maxWidth: '1100px', margin: '0 auto' }}>
            {industries.map((industry, i) => (
              <div
                key={i}
                style={{
                  background: 'linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)',
                  padding: '32px 24px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  border: '1px solid #E5E7EB',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  opacity: 1,
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #1fadbf 0%, #16a085 100%)';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(31, 173, 191, 0.2)';
                  e.currentTarget.querySelector('span').style.color = 'white';
                  e.currentTarget.querySelector('div').style.filter = 'brightness(0) invert(1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.querySelector('span').style.color = '#1F2937';
                  e.currentTarget.querySelector('div').style.filter = 'none';
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
