import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaRocket,
  FaGraduationCap,
  FaChartLine,
  FaUsers,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
  FaHeart,
  FaAward,
  FaMedkit,
  FaUmbrella,
  FaBook,
  FaPhone,
  FaEnvelope,
  FaShieldAlt,
  FaHandshake,
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    currentLocation: '',
    resume: null,
    coverLetter: '',
  });

  const whyVedansh = [
    {
      icon: <FaRocket />,
      title: 'Impactful Work',
      description: "Work on critical infrastructure projects worth ₹200+ Cr that power India's growth",
    },
    {
      icon: <FaGraduationCap />,
      title: 'Growth & Learning',
      description: 'Continuous learning opportunities with industry leaders and cutting-edge technologies',
    },
    {
      icon: <FaChartLine />,
      title: 'Career Progression',
      description: 'Clear growth paths from engineer to project leadership roles',
    },
    {
      icon: <FaUsers />,
      title: 'Team Culture',
      description: 'Collaborative environment with 19 years of excellence and zero fatality record',
    },
  ];

  const careerPaths = [
    {
      title: 'Electrical Track',
      description: 'From Junior Engineer to Chief Electrical Engineer',
      steps: [
        'Junior Electrical Engineer',
        'Electrical Engineer',
        'Senior Electrical Engineer',
        'Chief Electrical Engineer / Project Manager',
      ],
    },
    {
      title: 'Mechanical Track',
      description: 'From Site Engineer to Project Head',
      steps: [
        'Site Mechanical Engineer',
        'Mechanical Engineer',
        'Senior Mechanical Engineer',
        'Project Manager / AGM',
      ],
    },
    {
      title: 'Business Track',
      description: 'From Executive to Leadership',
      steps: [
        'Business Development Executive',
        'Business Development Manager',
        'Regional Head',
        'Vice President - Business',
      ],
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'Senior Electrical Engineer',
      experience: '8 years at Vedansh',
      quote: 'Working on Hindalco and HZL projects has been career-defining. The technical challenges and scale of work here are unmatched.',
    },
    {
      name: 'Priya Sharma',
      position: 'Project Manager',
      experience: '6 years at Vedansh',
      quote: 'From a junior engineer to leading ₹30+ Cr projects - the growth opportunities and trust placed in me have been incredible.',
    },
    {
      name: 'Amit Patel',
      position: 'Chief Mechanical Engineer',
      experience: '12 years at Vedansh',
      quote: 'The safety culture and professional environment make Vedansh stand out. Proud to be part of our zero-fatality track record.',
    },
  ];

  const benefits = [
    {
      icon: <FaMedkit />,
      title: 'Health Insurance',
      description: 'Comprehensive health coverage for you and your family',
    },
    {
      icon: <FaAward />,
      title: 'Performance Bonuses',
      description: 'Annual and project-based performance incentives',
    },
    {
      icon: <FaUmbrella />,
      title: 'Life Insurance',
      description: 'Life and accidental insurance coverage',
    },
    {
      icon: <FaBook />,
      title: 'Training & Development',
      description: 'Ongoing technical and leadership training programs',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Safety First',
      description: 'Industry-leading safety protocols and equipment',
    },
    {
      icon: <FaHandshake />,
      title: 'Work-Life Balance',
      description: 'Competitive leave policy and flexible arrangements',
    },
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Electrical Engineer',
      department: 'Electrical',
      experience: '5-8 years',
      location: 'Mundra, Gujarat',
      type: 'Full-time',
      description: 'Lead electrical works for our ₹36 Cr Green PVC project. Responsible for LV/HV systems, substations, and team management.',
      requirements: [
        'B.Tech/Diploma in Electrical Engineering',
        '5-8 years in industrial EPC projects',
        'Experience with HV/LV systems and substations',
        'Strong leadership and site management skills',
      ],
    },
    {
      id: 2,
      title: 'Mechanical Engineer - Plant Erection',
      department: 'Mechanical',
      experience: '3-5 years',
      location: 'Pakhajan, Gujarat',
      type: 'Full-time',
      description: 'Join our ₹66 Cr Hindalco project team. Handle mechanical erection, equipment installation, and commissioning.',
      requirements: [
        'B.Tech/Diploma in Mechanical Engineering',
        '3-5 years in heavy equipment erection',
        'Knowledge of industrial machinery installation',
        'Ability to read P&ID and technical drawings',
      ],
    },
    {
      id: 3,
      title: 'Project Manager - EPC',
      department: 'Management',
      experience: '8-12 years',
      location: 'Debari, Rajasthan',
      type: 'Full-time',
      description: 'Oversee complete EPC execution of HZL substation projects. Manage teams, budgets, timelines, and stakeholder coordination.',
      requirements: [
        'B.Tech in Engineering + MBA (preferred)',
        '8-12 years in EPC project management',
        'Experience managing ₹20+ Cr projects',
        'Strong client handling and leadership skills',
      ],
    },
    {
      id: 4,
      title: 'Junior Electrical Engineer',
      department: 'Electrical',
      experience: '0-2 years',
      location: 'Multiple Locations',
      type: 'Full-time',
      description: "Start your career with India's leading EPC company. Work on live projects and learn from experienced engineers.",
      requirements: [
        'B.Tech/Diploma in Electrical Engineering',
        'Fresh graduates or up to 2 years experience',
        'Strong technical fundamentals',
        'Willingness to work on-site',
      ],
    },
    {
      id: 5,
      title: 'Business Development Manager',
      department: 'Business Development',
      experience: '4-7 years',
      location: 'Ahmedabad, Gujarat',
      type: 'Full-time',
      description: 'Drive growth in Metal, Power, and Chemical sectors. Build relationships with major industrial clients.',
      requirements: [
        'Engineering degree + MBA',
        '4-7 years in B2B sales (EPC/Industrial)',
        'Proven track record of winning large contracts',
        'Excellent communication and presentation skills',
      ],
    },
    {
      id: 6,
      title: 'QA/QC Engineer',
      department: 'Quality',
      experience: '3-6 years',
      location: 'Multiple Locations',
      type: 'Full-time',
      description: 'Ensure quality compliance across our EPC projects. Conduct inspections, audits, and maintain ISO standards.',
      requirements: [
        'B.Tech in Engineering',
        '3-6 years in QA/QC for EPC projects',
        'Knowledge of ISO 9001, ISO 14001, ISO 45001',
        'Strong documentation and audit skills',
      ],
    },
  ];

  const hiringProcess = [
    { step: '1', title: 'Apply Online', desc: 'Submit your application through our portal' },
    { step: '2', title: 'Screening', desc: 'HR reviews your profile within 3-5 days' },
    { step: '3', title: 'Technical Round', desc: 'Interview with department head' },
    { step: '4', title: 'Final Interview', desc: 'Discussion with senior management' },
    { step: '5', title: 'Offer', desc: 'Receive offer and join Vedansh!' },
  ];

  const filteredJobs = jobOpenings.filter((job) => {
    const deptMatch = selectedDepartment === 'all' || job.department === selectedDepartment;
    const expMatch = selectedExperience === 'all' || job.experience === selectedExperience;
    return deptMatch && expMatch;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully! We'll contact you soon.");
    setFormData({ name: '', email: '', phone: '', position: '', experience: '', currentLocation: '', resume: null, coverLetter: '' });
  };

  const handleApply = (title) => {
    setFormData((prev) => ({ ...prev, position: title }));
    window.location.hash = 'apply-form';
  };

  // Refs
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);
  const whyRef = useRef(null);
  const pathsRef = useRef(null);
  const benefitsRef = useRef(null);
  const openingsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const applyRef = useRef(null);

  // Hero title character animation
  useEffect(() => {
    if (!heroTitleRef.current) return;
    const title = heroTitleRef.current;
    const text = title.textContent || '';
    title.innerHTML = '';
    const words = text.split(' ');
    const allChars = [];
    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement('span');
      wordSpan.style.display = 'inline-block';
      wordSpan.style.whiteSpace = 'nowrap';
      wordSpan.style.marginRight = wordIndex === words.length - 1 ? '0' : '0.25em';
      [...word].forEach((char) => {
        const charSpan = document.createElement('span');
        charSpan.style.display = 'inline-block';
        charSpan.style.transformOrigin = '0% 100%';
        charSpan.textContent = char;
        wordSpan.appendChild(charSpan);
        allChars.push(charSpan);
      });
      title.appendChild(wordSpan);
    });
    gsap.to(allChars, {
      y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: 'power4.out', stagger: 0.02, delay: 0.25,
      onStart: () => { allChars.forEach((c) => { c.style.opacity = '0'; c.style.transform = 'translateY(50px) rotateX(-90deg)'; }); },
    });
  }, []);

  // Scroll animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-animate', { y: 80, opacity: 0, duration: 1, stagger: 0.12, ease: 'expo.out', delay: 0.35 });

      const animateSection = (sectionEl, cardSelector = '.reveal-card') => {
        if (!sectionEl) return;
        const header = sectionEl.querySelectorAll('.section-animate');
        const cards = sectionEl.querySelectorAll(cardSelector);
        if (header.length) {
          gsap.from(header, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08, immediateRender: false, scrollTrigger: { trigger: sectionEl, start: 'top 80%', toggleActions: 'play none none none' } });
        }
        if (cards.length) {
          gsap.from(cards, { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.12, immediateRender: false, scrollTrigger: { trigger: sectionEl, start: 'top 75%', toggleActions: 'play none none none' } });
        }
      };

      animateSection(whyRef.current);
      animateSection(pathsRef.current);
      animateSection(benefitsRef.current);
      animateSection(openingsRef.current, '.job-card');
      animateSection(testimonialsRef.current);
      animateSection(applyRef.current, '.form-card');
    }, pageRef);
    return () => ctx.revert();
  }, []);

  // ─── Shared design tokens (matches other pages exactly) ───────────────────
  const card = {
    background: '#FFFFFF',
    padding: '32px',
    borderRadius: '20px',
    border: '1px solid #E5E7EB',
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const cardGray = {
    ...card,
    background: '#F8F9FA',
  };

  const hoverOn = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.boxShadow = '0 12px 24px rgba(31,173,191,0.15)';
    e.currentTarget.style.borderColor = '#1fadbf';
  };

  const hoverOff = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
    e.currentTarget.style.borderColor = '#E5E7EB';
  };

  const sectionTitle = { fontSize: '48px', fontWeight: '800', marginBottom: '20px', fontFamily: "'Poppins', sans-serif", color: '#1F2937', lineHeight: '1.1' };
  const sectionSubtitle = { fontSize: '20px', color: '#6B7280', maxWidth: '820px', margin: '0 auto', lineHeight: '1.7' };

  const baseUrl = import.meta.env.BASE_URL || '/';
  const heroBg = `${baseUrl}images/hero/careers-hero.jpg`;

  return (
    <>
      <style>{`
        .careers-input, .careers-select, .careers-textarea {
          width: 100%;
          padding: 14px 18px;
          border: 2px solid #E5E7EB;
          border-radius: 14px;
          font-size: 15px;
          font-family: inherit;
          transition: all 0.25s ease;
          background: #FFFFFF;
          outline: none;
        }
        .careers-input:focus, .careers-select:focus, .careers-textarea:focus {
          border-color: #1fadbf;
          box-shadow: 0 0 0 4px rgba(31,173,191,0.15);
        }
        .job-meta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          font-size: 13px;
        }
        .job-meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid #E5E7EB;
          background: #F8F9FA;
          color: #6B7280;
          font-weight: 600;
        }
        .careers-3col {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
        }
        .careers-4col {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 28px;
        }
        @media (max-width: 1100px) {
          .careers-3col { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .careers-4col { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 640px) {
          .careers-3col { grid-template-columns: 1fr; }
          .careers-4col { grid-template-columns: 1fr; }
        }
      `}</style>

      <div ref={pageRef}>

        {/* ── Hero ── */}
        <section
          ref={heroRef}
          style={{
            minHeight: '70vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '140px',
            paddingBottom: '90px',
            position: 'relative',
            overflow: 'hidden',
            backgroundImage: `linear-gradient(180deg, rgba(15,23,42,0.78) 0%, rgba(15,23,42,0.78) 100%), url("${heroBg}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(31,173,191,0.22) 0%, transparent 55%), radial-gradient(circle at 80% 30%, rgba(31,173,191,0.16) 0%, transparent 55%)' }} />
          </div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}>
              <div className="hero-animate" style={{ display: 'inline-block', background: 'rgba(31,173,191,0.18)', border: '1px solid rgba(255,255,255,0.18)', color: '#FFFFFF', padding: '10px 22px', borderRadius: '999px', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '22px', backdropFilter: 'blur(8px)' }}>
                INDUSTRIAL EXCELLENCE SINCE 2006
              </div>
              <h1 ref={heroTitleRef} style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: '900', marginBottom: '22px', fontFamily: "'Poppins', sans-serif", color: '#FFFFFF', lineHeight: '1.1', perspective: '1000px', textShadow: '0 10px 40px rgba(0,0,0,0.35)' }}>
                Join Vedansh Infra Services
              </h1>
              <p className="hero-animate" style={{ fontSize: '22px', color: 'rgba(255,255,255,0.84)', marginBottom: '40px', lineHeight: '1.7', maxWidth: '780px', marginLeft: 'auto', marginRight: 'auto' }}>
                Join Vedansh Infra and work on India's most challenging industrial EPC projects across Metal, Power, Chemical, and Renewable sectors.
              </p>
              <div className="hero-animate" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="#openings" className="btn btn-primary">View Open Positions</a>
                <Link to="/contact" className="btn btn-secondary" style={{ background: 'rgba(255,255,255,0.08)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.55)' }}>
                  Contact HR
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats strip ── */}
        <section style={{ padding: '40px 0', backgroundColor: '#1F2937' }}>
          <div className="container">
            <div className="hero-animate" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '46px', fontWeight: '900', color: '#1fadbf', marginBottom: '8px', fontFamily: "'Poppins', sans-serif" }}>19 Years</div>
                <p style={{ color: '#E5E7EB', fontWeight: '500' }}>Industry Excellence</p>
              </div>
              <div>
                <div style={{ fontSize: '46px', fontWeight: '900', color: '#1fadbf', marginBottom: '8px', fontFamily: "'Poppins', sans-serif" }}>50+</div>
                <p style={{ color: '#E5E7EB', fontWeight: '500' }}>Major Clients</p>
              </div>
              <div>
                <div style={{ fontSize: '46px', fontWeight: '900', color: '#1fadbf', marginBottom: '8px', fontFamily: "'Poppins', sans-serif" }}>Zero</div>
                <p style={{ color: '#E5E7EB', fontWeight: '500' }}>Fatalities Record</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Join Vedansh ── */}
        <section ref={whyRef} style={{ padding: '120px 0', backgroundColor: '#FFFFFF' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <h2 className="section-animate" style={sectionTitle}>Why Join Vedansh?</h2>
              <p className="section-animate" style={sectionSubtitle}>
                You'll work on high-impact industrial infrastructure, learn from experienced leaders, and grow your career on projects that matter.
              </p>
            </div>
            <div className="careers-4col">
              {whyVedansh.map((item, i) => (
                <div key={i} className="reveal-card" style={cardGray} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                  <div style={{ fontSize: '40px', color: '#1fadbf', marginBottom: '16px' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px', fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}>{item.title}</h3>
                  <p style={{ color: '#6B7280', lineHeight: '1.75', fontSize: '15px' }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Career Paths ── */}
        <section ref={pathsRef} style={{ padding: '120px 0', backgroundColor: '#F8F9FA' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <h2 className="section-animate" style={sectionTitle}>Career Paths</h2>
              <p className="section-animate" style={sectionSubtitle}>
                Clear progression tracks that help you grow from site execution to project leadership.
              </p>
            </div>
            <div className="careers-3col">
              {careerPaths.map((path, i) => (
                <div key={i} className="reveal-card" style={card} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px', fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}>{path.title}</h3>
                  <p style={{ color: '#6B7280', lineHeight: '1.75', marginBottom: '20px', fontSize: '15px' }}>{path.description}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {path.steps.map((step, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: '12px', background: '#F8F9FA', border: '1px solid #E5E7EB' }}>
                        <FaCheckCircle style={{ color: '#1fadbf', flexShrink: 0, fontSize: '14px' }} />
                        <span style={{ color: '#374151', fontWeight: 600, fontSize: '14px' }}>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits & Support ── */}
        <section ref={benefitsRef} style={{ padding: '120px 0', backgroundColor: '#FFFFFF' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <h2 className="section-animate" style={sectionTitle}>Benefits & Support</h2>
              <p className="section-animate" style={sectionSubtitle}>
                We take care of our people—on site, at home, and through every stage of growth.
              </p>
            </div>
            <div className="careers-3col">
              {benefits.map((b, i) => (
                <div key={i} className="reveal-card" style={cardGray} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                  <div style={{ fontSize: '38px', color: '#1fadbf', marginBottom: '16px' }}>{b.icon}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px', fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}>{b.title}</h3>
                  <p style={{ color: '#6B7280', lineHeight: '1.75', fontSize: '15px' }}>{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Current Openings ── */}
        <section id="openings" ref={openingsRef} style={{ padding: '120px 0', backgroundColor: '#F8F9FA' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 className="section-animate" style={sectionTitle}>Current Openings</h2>
              <p className="section-animate" style={sectionSubtitle}>
                Filter by department and experience level to find the best fit.
              </p>
            </div>

            {/* Filters */}
            <div className="reveal-card" style={{ ...card, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', marginBottom: '32px', cursor: 'default' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 700, marginBottom: '10px', color: '#374151', fontSize: '14px' }}>Department</label>
                <select className="careers-select" value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
                  <option value="all">All Departments</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Management">Management</option>
                  <option value="Business Development">Business Development</option>
                  <option value="Quality">Quality</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 700, marginBottom: '10px', color: '#374151', fontSize: '14px' }}>Experience Level</label>
                <select className="careers-select" value={selectedExperience} onChange={(e) => setSelectedExperience(e.target.value)}>
                  <option value="all">All Levels</option>
                  <option value="0-2 years">Entry Level (0-2 years)</option>
                  <option value="3-5 years">Mid Level (3-5 years)</option>
                  <option value="5-8 years">Senior Level (5-8 years)</option>
                  <option value="8-12 years">Lead Level (8+ years)</option>
                </select>
              </div>
            </div>

            {/* Job cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px' }}>
              {filteredJobs.length ? (
                filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="job-card"
                    style={card}
                    onMouseEnter={hoverOn}
                    onMouseLeave={hoverOff}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', alignItems: 'flex-start', marginBottom: '12px' }}>
                      <h3 style={{ fontSize: '20px', fontWeight: 900, margin: 0, fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}>{job.title}</h3>
                      <span style={{ fontSize: '12px', fontWeight: 800, color: '#1fadbf', background: 'rgba(31,173,191,0.12)', padding: '6px 12px', borderRadius: '999px', whiteSpace: 'nowrap' }}>{job.type}</span>
                    </div>

                    <div className="job-meta-row" style={{ marginBottom: '14px' }}>
                      <span className="job-meta-pill"><FaBriefcase style={{ color: '#1fadbf' }} /> {job.department}</span>
                      <span className="job-meta-pill"><FaClock style={{ color: '#1fadbf' }} /> {job.experience}</span>
                      <span className="job-meta-pill"><FaMapMarkerAlt style={{ color: '#1fadbf' }} /> {job.location}</span>
                    </div>

                    <p style={{ color: '#6B7280', lineHeight: '1.75', marginBottom: '16px', fontSize: '15px' }}>{job.description}</p>

                    <div style={{ marginBottom: '20px' }}>
                      <strong style={{ color: '#374151', fontSize: '14px' }}>Requirements:</strong>
                      <ul style={{ marginTop: '10px', paddingLeft: 0, listStyle: 'none', display: 'grid', gap: '8px' }}>
                        {job.requirements.map((req, idx) => (
                          <li key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', color: '#4B5563', fontSize: '14px' }}>
                            <FaCheckCircle style={{ color: '#1fadbf', marginTop: '3px', flexShrink: 0 }} />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button type="button" className="btn btn-primary" onClick={() => handleApply(job.title)} style={{ width: '100%', justifyContent: 'center' }}>
                      Apply Now
                    </button>
                  </div>
                ))
              ) : (
                <div className="reveal-card" style={{ ...card, gridColumn: '1 / -1', textAlign: 'center', cursor: 'default' }}>
                  <p style={{ color: '#6B7280', fontSize: '16px', lineHeight: '1.8' }}>
                    No openings match your filters. Try adjusting your selection or check back soon.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section ref={testimonialsRef} style={{ padding: '120px 0', backgroundColor: '#FFFFFF' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <h2 className="section-animate" style={sectionTitle}>What Our Team Says</h2>
              <p className="section-animate" style={sectionSubtitle}>
                A culture built on safety, ownership, and continuous improvement.
              </p>
            </div>
            <div className="careers-3col">
              {testimonials.map((t, i) => (
                <div key={i} className="reveal-card" style={cardGray} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '16px', background: 'rgba(31,173,191,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1fadbf', fontSize: '20px', fontWeight: 900, fontFamily: "'Poppins', sans-serif", flexShrink: 0 }}>
                      {t.name?.[0] || 'V'}
                    </div>
                    <div>
                      <div style={{ fontWeight: 900, color: '#1F2937', fontFamily: "'Poppins', sans-serif", fontSize: '16px' }}>{t.name}</div>
                      <div style={{ color: '#6B7280', fontSize: '13px' }}>{t.position}</div>
                      <div style={{ color: '#9CA3AF', fontSize: '12px', marginTop: '2px' }}>{t.experience}</div>
                    </div>
                  </div>
                  <p style={{ color: '#4B5563', lineHeight: '1.85', fontSize: '15px' }}>"{t.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Apply Now ── */}
        <section ref={applyRef} style={{ padding: '120px 0', backgroundColor: '#F8F9FA' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <h2 className="section-animate" style={sectionTitle}>Apply Now</h2>
              <p className="section-animate" style={sectionSubtitle}>Start your journey with Vedansh Infra today.</p>
            </div>

            <div id="apply-form" className="form-card" style={{ maxWidth: '900px', margin: '0 auto', ...card, padding: '40px', cursor: 'default' }}>
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, marginBottom: '10px', color: '#374151', fontSize: '14px' }}>Full Name *</label>
                    <input className="careers-input" type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, marginBottom: '10px', color: '#374151', fontSize: '14px' }}>Email *</label>
                    <input className="careers-input" type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, marginBottom: '10px', color: '#374151', fontSize: '14px' }}>Phone *</label>
                    <input className="careers-input" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, marginBottom: '10px', color: '#374151', fontSize: '14px' }}>Position Applied For *</label>
                    <select className="careers-select" name="position" value={formData.position} onChange={handleInputChange} required>
                      <option value="">Select Position</option>
                      {jobOpenings.map((job) => (<option key={job.id} value={job.title}>{job.title}</option>))}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, marginBottom: '10px', color: '#374151', fontSize: '14px' }}>Total Experience *</label>
                    <select className="careers-select" name="experience" value={formData.experience} onChange={handleInputChange} required>
                      <option value="">Select Experience</option>
                      <option value="0-2 years">0-2 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5-8 years">5-8 years</option>
                      <option value="8-12 years">8-12 years</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, marginBottom: '10px', color: '#374151', fontSize: '14px' }}>Current Location *</label>
                    <input className="careers-input" type="text" name="currentLocation" value={formData.currentLocation} onChange={handleInputChange} required />
                  </div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ display: 'block', fontWeight: 700, marginBottom: '10px', color: '#374151', fontSize: '14px' }}>Resume (PDF/DOC) *</label>
                    <input className="careers-input" type="file" name="resume" onChange={handleFileChange} required />
                    <p style={{ marginTop: '8px', color: '#9CA3AF', fontSize: '13px' }}>Please upload your latest resume. (Demo version — not uploaded to server.)</p>
                  </div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ display: 'block', fontWeight: 700, marginBottom: '10px', color: '#374151', fontSize: '14px' }}>Cover Letter / Message</label>
                    <textarea className="careers-textarea" rows="6" name="coverLetter" value={formData.coverLetter} onChange={handleInputChange} placeholder="Tell us why you're a great fit…" />
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '28px' }}>
                  <button type="submit" className="btn btn-primary" style={{ paddingLeft: '44px', paddingRight: '44px' }}>Submit Application</button>
                </div>

                <div style={{ marginTop: '20px', textAlign: 'center', color: '#9CA3AF', fontSize: '14px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <FaPhone style={{ color: '#1fadbf' }} /> +91 XXXXX XXXXX
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <FaEnvelope style={{ color: '#1fadbf' }} /> career@vedansh.in
                  </span>
                </div>
              </form>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}