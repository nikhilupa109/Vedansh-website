import { useRef, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { getProjectBySlug, getRelatedProjects } from '../data/projects';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaMapMarkerAlt, 
  FaRupeeSign, 
  FaCalendar, 
  FaBuilding, 
  FaCheckCircle, 
  FaArrowLeft, 
  FaArrowRight,
  FaClock,
  FaLightbulb,
  FaExclamationTriangle,
  FaTools,
  FaTrophy
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);


const CLIENT_LOGOS = {
  'Adani Infrastructure Management Services Ltd': '/logos/adani.png',
  'Adani Kutch Copper Limited': '/logos/adani.png',
  'Hindalco Industries Limited': '/logos/hindalco.png',
  'Hindalco Industries Ltd - Birla Copper Unit': '/logos/aditya-birla.png',
  'Hindustan Zinc Ltd': '/logos/hindustan-zinc.png',
  'Jindal Urban Waste Management Jaipur Ltd': '/logos/jindal.png',
  'Jindal Urban Waste Management Jodhpur Ltd': '/logos/jindal.png',
  'Kutch Copper Tubes Ltd': '/logos/adani.png',
  'Mundra Petrochem Ltd': '/logos/adani.png',
  'Sprng Akshay Urja Pvt Ltd': '/logos/sprng.png',
  'Sprng Natural Power Source Pvt Ltd': '/logos/sprng.png',
  'Sprng Power Earth Pvt Ltd': '/logos/sprng.png',
  'UltraTech Nathdwara Cement Ltd': '/logos/ultratech.png',
};
const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Prefer canonical data, but allow navigation state as a fallback
  const projectFromState = location.state?.project;
  const project = getProjectBySlug(slug) || projectFromState;

  

  const clientLogo = project?.clientLogo || CLIENT_LOGOS[project?.client];
const heroRef = useRef(null);
  const infoRef = useRef(null);
  const detailsRef = useRef(null);
  const highlightsRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!project) return;

    // Hero animation
    const heroElements = heroRef.current?.querySelectorAll('.animate-fade-in');
    if (heroElements) {
      gsap.fromTo(heroElements, 
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.3
        }
      );
    }

    // Info cards animation
    const infoCards = infoRef.current?.querySelectorAll('.info-card');
    if (infoCards) {
      gsap.fromTo(infoCards,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 80%'
          }
        }
      );
    }

    // Detail sections animation
    const detailSections = detailsRef.current?.querySelectorAll('.detail-card');
    if (detailSections) {
      gsap.fromTo(detailSections,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: detailsRef.current,
            start: 'top 75%'
          }
        }
      );
    }

    // Highlights animation
    const highlightCards = highlightsRef.current?.querySelectorAll('.highlight-item');
    if (highlightCards) {
      gsap.fromTo(highlightCards,
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: highlightsRef.current,
            start: 'top 80%'
          }
        }
      );
    }

    // Features animation
    const featureItems = featuresRef.current?.querySelectorAll('.feature-card');
    if (featureItems) {
      gsap.fromTo(featureItems,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%'
          }
        }
      );
    }
  }, [project, slug]);

  if (!project) {
    return (
      <div style={{ 
        minHeight: '60vh', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '120px 20px 80px'
      }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1F2937', marginBottom: '16px' }}>
          Project Not Found
        </h2>
        <p style={{ fontSize: '18px', color: '#6B7280', marginBottom: '32px' }}>
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/projects" 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '14px 32px',
            background: 'linear-gradient(135deg, #1fadbf 0%, #16a085 100%)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '10px',
            fontWeight: '600',
            fontSize: '16px',
            transition: 'all 0.3s ease'
          }}
        >
          <FaArrowLeft />
          Back to Projects
        </Link>
      </div>
    );
  }

  const relatedProjects = project ? getRelatedProjects(project, 3) : [];

  return (
    <>
      <style>{`
        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: rgba(31, 173, 191, 0.1);
          color: #1fadbf;
          text-decoration: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .back-btn:hover {
          background: #1fadbf;
          color: white;
          border-color: #1fadbf;
          transform: translateX(-5px);
        }

        .back-btn svg {
          transition: transform 0.3s ease;
        }

        .back-btn:hover svg {
          transform: translateX(-5px);
        }

        .info-card {
          background: white;
          padding: 24px;
          border-radius: 16px;
          border: 2px solid #E5E7EB;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          border-color: #1fadbf;
          transform: scale(1.05);
          box-shadow: 0 12px 24px rgba(31, 173, 191, 0.15);
        }

        .detail-card {
          position: relative;
          overflow: hidden;
          padding: 40px;
          border-radius: 24px;
          margin-bottom: 32px;
          transition: all 0.4s ease;
        }

        .detail-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.05;
          pointer-events: none;
        }

        .detail-card:hover {
          transform: scale(1.05);
        }

        .detail-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          font-size: 28px;
        }

        .highlight-item {
          background: linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%);
          padding: 28px;
          border-radius: 16px;
          border: 2px solid #E5E7EB;
          transition: all 0.4s ease;
        }

        .highlight-item:hover {
          border-color: #1fadbf;
          transform: scale(1.05);
          box-shadow: 0 12px 24px rgba(31, 173, 191, 0.15);
        }

        .feature-card {
          cursor: default;
        }

        .feature-card:hover {
          border-color: #1fadbf !important;
          transform: scale(1.05);
          box-shadow: 0 12px 24px rgba(31, 173, 191, 0.15);
        }

        .related-project-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #E5E7EB;
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .related-project-card:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 24px rgba(31, 173, 191, 0.15);
          border-color: #1fadbf;
        }

        .scope-badge {
          display: inline-block;
          padding: 6px 14px;
          background: rgba(31, 173, 191, 0.1);
          color: #1fadbf;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          border: 1px solid rgba(31, 173, 191, 0.2);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .detail-icon {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        style={{ 
          background: 'linear-gradient(135deg, #F8F9FA 0%, #E5E7EB 100%)',
          padding: '140px 0 80px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <Link to="/projects" className="back-btn animate-fade-in">
            <FaArrowLeft />
            Back to Projects
          </Link>

          <div style={{ marginTop: '40px', maxWidth: '1000px' }}>
            <div 
              className="animate-fade-in"
              style={{ 
                display: 'inline-block',
                padding: '8px 20px',
                background: 'rgba(31, 173, 191, 0.1)',
                color: '#1fadbf',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '700',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              {project.category}
            </div>

            <h1 
              className="animate-fade-in"
              style={{ 
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: '900',
                color: '#1F2937',
                marginBottom: '20px',
                lineHeight: '1.2',
                fontFamily: "'Poppins', sans-serif"
              }}
            >
              {project.title}
            </h1>

            <div 
              className="animate-fade-in"
              style={{ 
                fontSize: '20px',
                color: '#6B7280',
                lineHeight: '1.7',
                marginBottom: '32px',
                maxWidth: '800px'
              }}
            >
              {project.description}
            </div>

            <div 
              className="animate-fade-in"
              style={{ 
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                alignItems: 'center'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaBuilding style={{ color: '#1fadbf', fontSize: '20px' }} />
              {clientLogo && (
                <img
                  src={clientLogo}
                  alt={`${project.client} logo`}
                  loading="lazy"
                  style={{ height: '32px', width: 'auto', maxWidth: '140px', objectFit: 'contain', marginLeft: '8px', opacity: 0.9 }}
                />
              )}
                <span style={{ fontSize: '16px', color: '#1F2937', fontWeight: '600' }}>
                  {project.client}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaMapMarkerAlt style={{ color: '#1fadbf', fontSize: '20px' }} />
                <span style={{ fontSize: '16px', color: '#1F2937', fontWeight: '600' }}>
                  {project.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section 
        ref={infoRef}
        style={{ 
          padding: '60px 0',
          background: 'white',
          marginTop: '-40px',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div className="container">
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            maxWidth: '1000px'
          }}>
{project.orderDate && (
              <div className="info-card">
                <FaCalendar style={{ fontSize: '28px', color: '#1fadbf', marginBottom: '12px' }} />
                <div style={{ fontSize: '13px', color: '#6B7280', marginBottom: '4px' }}>
                  Order Date
                </div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: '#1F2937' }}>
                  {project.orderDate}
                </div>
              </div>
            )}
            {project.completion && (
              <div className="info-card">
                <FaClock style={{ fontSize: '28px', color: '#1fadbf', marginBottom: '12px' }} />
                <div style={{ fontSize: '13px', color: '#6B7280', marginBottom: '4px' }}>
                  Completion
                </div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: '#1F2937' }}>
                  {project.completion}
                </div>
              </div>
            )}
            {project.year && (
              <div className="info-card">
                <FaCalendar style={{ fontSize: '28px', color: '#1fadbf', marginBottom: '12px' }} />
                <div style={{ fontSize: '13px', color: '#6B7280', marginBottom: '4px' }}>
                  Project Year
                </div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: '#1F2937' }}>
                  {project.year}
                </div>
              </div>
            )}
            {project.status && (
              <div className="info-card">
                <FaCheckCircle style={{ fontSize: '28px', color: '#10B981', marginBottom: '12px' }} />
                <div style={{ fontSize: '13px', color: '#6B7280', marginBottom: '4px' }}>
                  Status
                </div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: '#10B981' }}>
                  {project.status}
                </div>
              </div>
            )}
</div>
        </div>
      </section>

      {/* Scope of Work */}
      <section style={{ padding: '80px 0', background: '#F8F9FA' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '36px',
            fontWeight: '800',
            color: '#1F2937',
            marginBottom: '16px',
            fontFamily: "'Poppins', sans-serif"
          }}>
            Scope of Work
          </h2>
          <p style={{ fontSize: '18px', color: '#6B7280', marginBottom: '32px', maxWidth: '700px' }}>
            Comprehensive services and deliverables for this project
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {project.scope.map((item, idx) => (
              <span key={idx} className="scope-badge">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details - REDESIGNED CARDS */}
      <section ref={detailsRef} style={{ padding: '80px 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 style={{ 
            fontSize: '36px',
            fontWeight: '800',
            color: '#1F2937',
            marginBottom: '48px',
            fontFamily: "'Poppins', sans-serif"
          }}>
            Project Details
          </h2>

          {/* Overview Card - Blue Theme */}
          <div 
            className="detail-card" 
            style={{
              background: 'linear-gradient(135deg, #EBF8FF 0%, #DBEAFE 100%)',
              border: '2px solid #93C5FD',
              boxShadow: '0 4px 20px rgba(59, 130, 246, 0.1)'
            }}
          >
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="detail-icon" style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)' }}>
                <FaLightbulb style={{ color: 'white' }} />
              </div>
              <h3 style={{ 
                fontSize: '28px',
                fontWeight: '700',
                color: '#1E40AF',
                marginBottom: '16px',
                fontFamily: "'Poppins', sans-serif"
              }}>
                📋 Project Overview
              </h3>
              <p style={{ fontSize: '17px', color: '#1E3A8A', lineHeight: '1.8' }}>
                {project.details.overview}
              </p>
            </div>
          </div>

          {/* Challenge Card - Red/Orange Theme */}
          <div 
            className="detail-card"
            style={{
              background: 'linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%)',
              border: '2px solid #FCA5A5',
              boxShadow: '0 4px 20px rgba(239, 68, 68, 0.1)'
            }}
          >
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="detail-icon" style={{ background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)' }}>
                <FaExclamationTriangle style={{ color: 'white' }} />
              </div>
              <h3 style={{ 
                fontSize: '28px',
                fontWeight: '700',
                color: '#991B1B',
                marginBottom: '16px',
                fontFamily: "'Poppins', sans-serif"
              }}>
                ⚠️ The Challenge
              </h3>
              <p style={{ fontSize: '17px', color: '#7F1D1D', lineHeight: '1.8' }}>
                {project.details.challenge}
              </p>
            </div>
          </div>

          {/* Solution Card - Green Theme */}
          <div 
            className="detail-card"
            style={{
              background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
              border: '2px solid #86EFAC',
              boxShadow: '0 4px 20px rgba(34, 197, 94, 0.1)'
            }}
          >
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="detail-icon" style={{ background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)' }}>
                <FaTools style={{ color: 'white' }} />
              </div>
              <h3 style={{ 
                fontSize: '28px',
                fontWeight: '700',
                color: '#166534',
                marginBottom: '16px',
                fontFamily: "'Poppins', sans-serif"
              }}>
                💡 Our Solution
              </h3>
              <p style={{ fontSize: '17px', color: '#14532D', lineHeight: '1.8' }}>
                {project.details.solution}
              </p>
            </div>
          </div>

          {/* Outcome Card - Teal Theme */}
          <div 
            className="detail-card"
            style={{
              background: 'linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 100%)',
              border: '2px solid #5EEAD4',
              boxShadow: '0 4px 20px rgba(20, 184, 166, 0.1)'
            }}
          >
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="detail-icon" style={{ background: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)' }}>
                <FaTrophy style={{ color: 'white' }} />
              </div>
              <h3 style={{ 
                fontSize: '28px',
                fontWeight: '700',
                color: '#115E59',
                marginBottom: '16px',
                fontFamily: "'Poppins', sans-serif"
              }}>
                🏆 Results & Outcome
              </h3>
              <p style={{ fontSize: '17px', color: '#134E4A', lineHeight: '1.8' }}>
                {project.details.outcome}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <section ref={highlightsRef} style={{ padding: '80px 0', background: '#F8F9FA' }}>
          <div className="container">
            <h2 style={{ 
              fontSize: '36px',
              fontWeight: '800',
              color: '#1F2937',
              marginBottom: '16px',
              fontFamily: "'Poppins', sans-serif",
              textAlign: 'center'
            }}>
              Key Highlights
            </h2>
            <p style={{ 
              fontSize: '18px', 
              color: '#6B7280', 
              marginBottom: '48px',
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto 48px'
            }}>
              Major achievements and standout features of this project
            </p>

            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="highlight-item">
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #1fadbf 0%, #16a085 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <FaCheckCircle style={{ fontSize: '28px', color: 'white' }} />
                  </div>
                  <h3 style={{ 
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#1F2937',
                    marginBottom: '12px',
                    fontFamily: "'Poppins', sans-serif"
                  }}>
                    {highlight.title}
                  </h3>
                  <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.6' }}>
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Features - REDESIGNED WITH CARDS */}
      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <section ref={featuresRef} style={{ padding: '80px 0', background: 'white' }}>
          <div className="container">
            <h2 style={{ 
              fontSize: '36px',
              fontWeight: '800',
              color: '#1F2937',
              marginBottom: '16px',
              fontFamily: "'Poppins', sans-serif",
              textAlign: 'center'
            }}>
              Key Features
            </h2>
            <p style={{ 
              fontSize: '18px', 
              color: '#6B7280', 
              marginBottom: '48px',
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto 48px'
            }}>
              Technical capabilities and project specifications
            </p>

            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {project.keyFeatures.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="feature-card"
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)',
                    padding: '28px',
                    borderRadius: '16px',
                    border: '2px solid #E5E7EB',
                    transition: 'all 0.4s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Gradient accent bar */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    background: 'linear-gradient(180deg, #1fadbf 0%, #16a085 100%)'
                  }} />

                  {/* Number badge */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(31, 173, 191, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#1fadbf'
                  }}>
                    {idx + 1}
                  </div>

                  {/* Icon */}
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #1fadbf 0%, #16a085 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <FaCheckCircle style={{ fontSize: '24px', color: 'white' }} />
                  </div>

                  {/* Feature text */}
                  <p style={{ 
                    fontSize: '16px',
                    color: '#1F2937',
                    fontWeight: '600',
                    lineHeight: '1.6',
                    margin: 0,
                    paddingRight: '40px'
                  }}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects && relatedProjects.length > 0 && (
        <section style={{ padding: '80px 0', background: '#F8F9FA' }}>
          <div className="container">
            <h2 style={{ 
              fontSize: '36px',
              fontWeight: '800',
              color: '#1F2937',
              marginBottom: '16px',
              fontFamily: "'Poppins', sans-serif",
              textAlign: 'center'
            }}>
              Related Projects
            </h2>
            <p style={{ 
              fontSize: '18px', 
              color: '#6B7280', 
              marginBottom: '48px',
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto 48px'
            }}>
              Explore more projects in similar categories
            </p>

            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {relatedProjects.map((relProject) => (
                <Link
                  key={relProject.id}
                  to={`/projects/${relProject.slug}`} state={{ project: relProject }}
                  className="related-project-card"
                  style={{ textDecoration: 'none' }}
                >
                  <div style={{ padding: '28px' }}>
                    <div style={{
                      display: 'inline-block',
                      padding: '6px 14px',
                      background: 'rgba(31, 173, 191, 0.1)',
                      color: '#1fadbf',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: '700',
                      marginBottom: '16px',
                      textTransform: 'uppercase'
                    }}>
                      {relProject.category}
                    </div>
                    <h3 style={{ 
                      fontSize: '20px',
                      fontWeight: '700',
                      color: '#1F2937',
                      marginBottom: '12px',
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: '1.3'
                    }}>
                      {relProject.title}
                    </h3>
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '12px'
                    }}>
                      <FaMapMarkerAlt style={{ color: '#1fadbf', fontSize: '14px' }} />
                      <span style={{ fontSize: '14px', color: '#6B7280', fontWeight: '500' }}>
                        {relProject.location}
                      </span>
                    </div>
                    <p style={{ 
                      fontSize: '14px',
                      color: '#6B7280',
                      lineHeight: '1.6',
                      marginBottom: '20px'
                    }}>
                      {relProject.description.substring(0, 120)}...
                    </p>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#1fadbf',
                      fontWeight: '600',
                      fontSize: '14px'
                    }}>
                      View Details
                      <FaArrowRight />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section style={{ 
        padding: '100px 0',
        background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '42px',
            fontWeight: '800',
            marginBottom: '20px',
            fontFamily: "'Poppins', sans-serif"
          }}>
            Let's Build Something Great Together
          </h2>
          <p style={{ 
            fontSize: '20px',
            marginBottom: '40px',
            maxWidth: '700px',
            margin: '0 auto 40px',
            opacity: 0.9
          }}>
            Have a project in mind? Our team is ready to deliver excellence
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 40px',
                background: 'linear-gradient(135deg, #1fadbf 0%, #16a085 100%)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '16px',
                transition: 'all 0.3s ease'
              }}
            >
              Get in Touch
              <FaArrowRight />
            </Link>
            <Link 
              to="/projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 40px',
                background: 'transparent',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '16px',
                border: '2px solid white',
                transition: 'all 0.3s ease'
              }}
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;