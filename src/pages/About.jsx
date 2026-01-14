import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaShieldAlt,
  FaStar,
  FaHandshake,
  FaLightbulb,
  FaCheckCircle,
  FaLeaf,
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const BASE = import.meta.env.BASE_URL || '/';
const asset = (p) => {
  const s = String(p || '');
  if (!s) return '';
  if (/^(?:[a-z]+:)?\/\//i.test(s) || s.startsWith('data:')) return s;
  if (s.startsWith(BASE)) return s;
  const clean = s.replace(/^\/+/, '').replace(/^public\//i, '');
  return `${BASE}${clean}`;
};

// Show only team-1 and team-2 in “Our Team in Action”
const TEAM_ACTION_PHOTOS = [1, 2];

// Fallback team data
const fallbackTeam = [
  { name: 'Lokendra Upadhyay', position: 'Managing Director', initials: 'LU' },
  { name: 'K.V. Chamy', position: 'Head - Business Development', initials: 'KC' },
  {
    name: 'Siddhartha Majumder',
    position: 'Chief Advisor - Projects',
    initials: 'SM',
  },
  { name: 'Arun Shrimali', position: 'Head – Civil Projects', initials: 'AS' },
  {
    name: 'D.K. Gupta',
    position: 'Technical Head - Electrical',
    initials: 'DG',
  },
  {
    name: 'R.C. Rathore',
    position: 'Head - Planning & Execution',
    initials: 'RR',
  },
  {
    name: 'Santosh Giri',
    position: 'Head - Project Commercial',
    initials: 'SG',
  },
  { name: 'Amit Kr. Singh', position: 'Sr. Manager - EHS', initials: 'AS' },
  {
    name: 'Nikhil Upadhyay',
    position: 'Sr. Manager - Internal Control',
    initials: 'NU',
  },
  { name: 'Pragnesh Prajapati', position: 'Sr. Manager – Projects', initials: 'PP' },
];

const projectGradients = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
  'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)',
  'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
];

const teamGradients = [
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
  'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
  'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
];

// Smart Image Component - tries multiple filename patterns
const SmartImage = ({ num, type, gradient }) => {
  const [currentAttempt, setCurrentAttempt] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getImagePatterns = (n, t) => {
    const folder = t === 'project' ? 'projects' : 'team';
    const prefix = t === 'project' ? 'project' : 'team';
    const nn = String(n);
    const nn2 = String(n).padStart(2, '0');

    return [
      `/images/${folder}/${prefix}-${nn}.jpg`,
      `/images/${folder}/${prefix}-${nn}.png`,
      `/images/${folder}/${prefix}-${nn}.jpeg`,
      `/images/${folder}/${prefix}-${nn}.webp`,
      `/images/${folder}/${prefix}${nn}.jpg`,
      `/images/${folder}/${prefix}${nn}.png`,
      `/images/${folder}/${prefix}_${nn}.jpg`,
      `/images/${folder}/${prefix}_${nn}.png`,
      `/images/${folder}/${prefix}-${nn2}.jpg`,
      `/images/${folder}/${prefix}${nn2}.jpg`,
    ];
  };

  const patterns = getImagePatterns(num, type);
  const currentPath = patterns[currentAttempt];

  const handleError = () => {
    if (currentAttempt < patterns.length - 1) {
      setCurrentAttempt((prev) => prev + 1);
    } else {
      setImageLoaded(false);
    }
  };

  const handleLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      {!imageLoaded && currentAttempt >= patterns.length - 1 && (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: gradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: 24,
            fontWeight: 800,
          }}
        >
          {num}
        </div>
      )}

      {currentAttempt < patterns.length && (
        <img
          src={asset(currentPath)}
          alt={`${type} ${num}`}
          onError={handleError}
          onLoad={handleLoad}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: imageLoaded ? 'block' : 'none',
          }}
        />
      )}
    </>
  );
};

const About = () => {
  const [teamData, setTeamData] = useState(fallbackTeam);

  const heroRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroTitleRef = useRef(null);

  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const certificationsRef = useRef(null);
  const industryRef = useRef(null);
  const revenueRef = useRef(null);

  // Try to import team data dynamically
  useEffect(() => {
    const loadTeamData = async () => {
      try {
        const module = await import('../data/team');
        if (module?.teamMembers?.length) setTeamData(module.teamMembers);
      } catch (e) {
        // fallback
      }
    };
    loadTeamData();
  }, []);

  // Character animation for title
  useEffect(() => {
    if (!heroTitleRef.current) return;

    const title = heroTitleRef.current;
    const text = title.textContent || '';
    title.innerHTML = '';

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
      ease: 'back.out(1.7)',
      delay: 0.3,
      onStart: () => {
        allChars.forEach((char) => {
          char.style.transform = 'translateY(50px) rotateX(-90deg)';
        });
      },
    });
  }, []);

  // Parallax hero
  useEffect(() => {
    if (!heroRef.current || !heroBgRef.current || !heroContentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(heroBgRef.current, {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      gsap.to(heroContentRef.current, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Hero entrance animation
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

  // Values animation
  useEffect(() => {
    if (!valuesRef.current) return;
    const ctx = gsap.context(() => {
      const elements = valuesRef.current.querySelectorAll('.value-card');
      if (!elements.length) return;

      gsap.from(elements, {
        clipPath: 'inset(100% 0% 0% 0%)',
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.12,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: valuesRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });
    }, valuesRef);

    return () => ctx.revert();
  }, []);

  // Story animation
  useEffect(() => {
    if (!storyRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.story-content', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: storyRef.current, start: 'top 70%' },
      });

      gsap.from('.milestone-box', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.5)',
        scrollTrigger: { trigger: '.milestone-box', start: 'top 80%' },
      });
    }, storyRef);

    return () => ctx.revert();
  }, []);

  // Industry bars animation
  useEffect(() => {
    if (!industryRef.current) return;
    const ctx = gsap.context(() => {
      const bars = industryRef.current.querySelectorAll('.industry-bar');
      gsap.from(bars, {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: industryRef.current, start: 'top 80%' },
      });
    }, industryRef);

    return () => ctx.revert();
  }, []);

  // Revenue bars animation
  useEffect(() => {
    if (!revenueRef.current) return;
    const ctx = gsap.context(() => {
      const bars = revenueRef.current.querySelectorAll('.revenue-bar');
      gsap.from(bars, {
        scaleY: 0,
        transformOrigin: 'bottom',
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: revenueRef.current, start: 'top 80%' },
      });
    }, revenueRef);

    return () => ctx.revert();
  }, []);

  // Certifications animation
  useEffect(() => {
    if (!certificationsRef.current) return;
    const ctx = gsap.context(() => {
      const elements = certificationsRef.current.querySelectorAll('.cert-badge');
      if (!elements.length) return;

      gsap.from(elements, {
        clipPath: 'inset(100% 0% 0% 0%)',
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.12,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: certificationsRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });
    }, certificationsRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      Icon: FaShieldAlt,
      title: 'Safety First',
      description:
        'Zero fatalities with industry-leading safety protocols. We never compromise on workplace safety.',
    },
    {
      Icon: FaStar,
      title: 'Quality Excellence',
      description:
        'Triple ISO certification and IBR approval ensure the highest standards in every aspect of our work.',
    },
    {
      Icon: FaHandshake,
      title: 'Client Partnership',
      description:
        'Long-term relationships built on trust, transparency, and consistent delivery.',
    },
    {
      Icon: FaLightbulb,
      title: 'Innovation',
      description:
        'Leveraging latest technologies and methodologies to deliver efficient, sustainable solutions.',
    },
    {
      Icon: FaCheckCircle,
      title: 'Integrity',
      description:
        'Ethical business practices and honest communication form the foundation of all our relationships.',
    },
    {
      Icon: FaLeaf,
      title: 'Sustainability',
      description:
        'Environmental responsibility is central to our operations, from planning through execution.',
    },
  ];

  const industries = [
    { name: 'Metal & Mining', percentage: 45, color: '#1fadbf' },
    { name: 'Power & Renewables', percentage: 22, color: '#16a085' },
    { name: 'Cement', percentage: 18, color: '#2DD4BF' },
    { name: 'Chemical & Fertilizers', percentage: 10, color: '#22D3EE' },
    { name: 'Infrastructure', percentage: 5, color: '#60A5FA' },
  ];

  const revenue = [
    { year: 'FY 21-22', amount: 0, height: 35, color: '#60A5FA' },
    { year: 'FY 22-23', amount: 16, height: 42, color: '#3B82F6' },
    { year: 'FY 23-24', amount: 102, height: 74, color: '#2563EB' },
    { year: 'FY 24-25', amount: 200, height: 100, color: '#1fadbf' },
  ];

  const certifications = [
    { name: 'ISO 9001:2015', desc: 'Quality Management System' },
    { name: 'ISO 14001:2015', desc: 'Environmental Management' },
    { name: 'ISO 45001:2018', desc: 'Health & Safety Management' },
    { name: 'IBR Approval', desc: 'Special Category Boiler Erector' },
  ];

  return (
    <>
      {/* HERO Section */}
      <section
        ref={heroRef}
        style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '160px',
          paddingBottom: '90px',
        }}
      >
        {/* Background */}
        <div
          ref={heroBgRef}
          style={{
            position: 'absolute',
            top: '-20%',
            left: 0,
            width: '100%',
            height: '120%',
            backgroundImage: `url(${asset('/images/heroabout.jpg')}), url(https://source.unsplash.com/1920x1080?industrial,construction,plant)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
          }}
        />
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.50) 45%, rgba(0,0,0,0.62) 100%)',
            zIndex: 1,
          }}
        />
        {/* Teal pattern tint */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231fadbf' fill-opacity='0.18'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-16 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            opacity: 0.35,
            zIndex: 2,
          }}
        />

        {/* Content */}
        <div
          ref={heroContentRef}
          className="container"
          style={{ position: 'relative', zIndex: 3, width: '100%' }}
        >
          <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'center' }}>
            <div className="hero-animate">
              <div
                style={{
                  display: 'inline-block',
                  background: 'rgba(31,173,191,0.22)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  color: '#ffffff',
                  padding: '10px 22px',
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: '0 14px 40px rgba(0,0,0,0.22)',
                  marginBottom: 22,
                }}
              >
                INDUSTRIAL EXCELLENCE SINCE 2006
              </div>
            </div>

            <h1
              ref={heroTitleRef}
              style={{
                fontSize: 'clamp(40px, 8vw, 80px)',
                fontWeight: 900,
                lineHeight: 1.08,
                marginBottom: 28,
                fontFamily: 'Poppins, sans-serif',
                color: '#ffffff',
                perspective: 1000,
                whiteSpace: 'normal',
                textShadow: '0 18px 40px rgba(0,0,0,0.45)',
              }}
            >
              Building India&apos;s industrial infrastructure since 2006
            </h1>

            <p
              className="hero-animate"
              style={{
                fontSize: 'clamp(18px, 2vw, 22px)',
                color: 'rgba(255,255,255,0.88)',
                lineHeight: 1.75,
                maxWidth: 780,
                margin: '0 auto 40px',
              }}
            >
              A leading EPC contractor delivering world-class plant erection, project
              management, and industrial solutions across India&apos;s core
              infrastructure sectors.
            </p>

            <div
              className="hero-animate"
              style={{
                display: 'flex',
                gap: 20,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link to="/projects" className="btn btn-primary">
                View Our Projects
              </Link>
              <Link
                to="/contact"
                className="btn btn-secondary"
                style={{
                  color: '#ffffff',
                  borderColor: 'rgba(255,255,255,0.55)',
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section style={{ padding: '100px 0', backgroundColor: '#1F2937', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontSize: 48, fontWeight: 800, marginBottom: 16, fontFamily: 'Poppins, sans-serif', color: '#FFFFFF' }}>
              Glimpse of Our Projects
            </h2>
            <p style={{ fontSize: 18, color: '#E5E7EB', maxWidth: 700, margin: '0 auto' }}>
              A visual journey through our successful project executions across India
            </p>
          </div>

          <div className="auto-scroll-container">
            <div className="auto-scroll-track">
              {[1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12].map((num, idx) => (
                <div key={idx} className="photo-card">
                  <SmartImage num={num} type="project" gradient={projectGradients[(num - 1) % projectGradients.length]} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM GALLERY section (STATIC) */}
      <section style={{ padding: '100px 0', backgroundColor: '#F8F9FA', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontSize: 48, fontWeight: 800, marginBottom: 16, fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}>
              Our Team in Action
            </h2>
            <p style={{ fontSize: 18, color: '#6B7280', maxWidth: 700, margin: '0 auto' }}>
              The dedicated professionals behind every successful project delivery
            </p>
          </div>

          <div className="team-static-grid">
            {TEAM_ACTION_PHOTOS.map((num) => (
              <div key={num} className="team-photo-card">
                <SmartImage num={num} type="team" gradient={teamGradients[(num - 1) % teamGradients.length]} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section style={{ padding: '60px 0', backgroundColor: '#1F2937' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 40,
              textAlign: 'center',
            }}
          >
            {[
              { value: '2006', label: 'Founded in Chittorgarh' },
              { value: '250', label: 'Projects Delivered' },
              { value: '20', label: 'Major Clients' },
              { value: '166Cr', label: 'Annual Turnover (FY24-25)' },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontSize: 48,
                    fontWeight: 900,
                    color: '#1fadbf',
                    marginBottom: 8,
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {s.value}
                </div>
                <p style={{ fontSize: 16, color: '#E5E7EB', fontWeight: 500 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section ref={storyRef} style={{ padding: '120px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
              gap: 80,
              alignItems: 'center',
            }}
          >
            <div className="story-content">
              <h2 style={{ fontSize: 48, fontWeight: 800, marginBottom: 28, fontFamily: 'Poppins, sans-serif', color: '#1F2937', lineHeight: 1.2 }}>
                From regional contractor to national leader
              </h2>

              <p style={{ fontSize: 18, color: '#6B7280', lineHeight: 1.8, marginBottom: 24 }}>
                <strong style={{ color: '#1F2937' }}>Founded in 2006</strong> in the industrial heartland of
                Chittorgarh, Rajasthan, Vedansh Infra Services began with a simple mission:
                deliver uncompromising quality in every industrial project we undertake.
              </p>

              <p style={{ fontSize: 18, color: '#6B7280', lineHeight: 1.8, marginBottom: 24 }}>
                Over 19 years, we&apos;ve evolved from a regional contractor into one of India&apos;s most trusted
                names in industrial EPC and plant erection, executing projects worth over 226 crores currently underway.
              </p>

              <p style={{ fontSize: 18, color: '#6B7280', lineHeight: 1.8 }}>
                With <strong style={{ color: '#1F2937' }}>77+ lakh safe man-hours</strong> and zero fatalities,
                we build lasting partnerships based on trust and consistent delivery.
              </p>
            </div>

            <div
              className="milestone-box"
              style={{
                background: 'linear-gradient(135deg, #1fadbf 0%, #16a085 100%)',
                borderRadius: 24,
                padding: 48,
                color: 'white',
                boxShadow: '0 20px 60px rgba(31, 173, 191, 0.30)',
              }}
            >
              <h3 style={{ fontSize: 28, fontWeight: 700, marginBottom: 36, fontFamily: 'Poppins, sans-serif' }}>
                Key Milestones
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                {[
                  { value: '77L', title: 'Safe Man-Hours', sub: 'Zero fatalities record' },
                  { value: '403 Cr', title: 'Cumulative Revenue', sub: 'Last 4 Years (FY21-25)' },
                  { value: '4', title: 'ISO Certifications', sub: 'Including IBR approval' },
                  { value: '226Cr', title: 'Ongoing Projects', sub: 'Major contracts underway' },
                ].map((m) => (
                  <div key={m.title}>
                    <div style={{ fontSize: 52, fontWeight: 900, marginBottom: 8, fontFamily: 'Poppins, sans-serif' }}>
                      {m.value}
                    </div>
                    <p style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>{m.title}</p>
                    <p style={{ fontSize: 15, opacity: 0.9 }}>{m.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVENUE */}
      <section ref={revenueRef} style={{ padding: '120px 0', backgroundColor: '#F8F9FA' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <h2 style={{ fontSize: 48, fontWeight: 800, marginBottom: 20, fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}>
              Consistent growth trajectory
            </h2>
            <p style={{ fontSize: 18, color: '#6B7280', maxWidth: 700, margin: '0 auto' }}>
              200% cumulative growth in 4 years, reflecting our expanding capabilities and client trust
            </p>
          </div>

          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: 24,
                marginBottom: 40,
              }}
            >
              {revenue.map((d) => (
                <div key={d.year} style={{ textAlign: 'center' }}>
                  <div style={{ height: 280, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', marginBottom: 16 }}>
                    <div
                      className="revenue-bar"
                      style={{
                        width: '100%',
                        maxWidth: 120,
                        height: `${d.height}%`,
                        background: `linear-gradient(to top, ${d.color}, ${d.color}cc)`,
                        borderRadius: '12px 12px 0 0',
                        boxShadow: '0 -4px 20px rgba(31, 173, 191, 0.20)',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        paddingTop: 16,
                      }}
                    >
                      <span style={{ fontSize: 20, fontWeight: 800, color: 'white', fontFamily: 'Poppins, sans-serif' }}>
                        {d.amount}
                      </span>
                    </div>
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#1F2937', fontFamily: 'Poppins, sans-serif' }}>
                    {d.year}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                textAlign: 'center',
                padding: 32,
                backgroundColor: 'white',
                borderRadius: 16,
                border: '2px solid #1fadbf',
              }}
            >
              <p style={{ fontSize: 18, color: '#1F2937', fontWeight: 600, marginBottom: 8 }}>
                <strong style={{ fontSize: 24, color: '#1fadbf' }}>200% Growth</strong> from FY 21-22 to FY 24-25
              </p>
              <p style={{ fontSize: 16, color: '#6B7280' }}>
                Demonstrating consistent performance and market expansion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section ref={valuesRef} style={{ padding: '120px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <h2 style={{ fontSize: 48, fontWeight: 800, marginBottom: 20, fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}>
              Values that drive us forward
            </h2>
            <p style={{ fontSize: 18, color: '#6B7280', maxWidth: 700, margin: '0 auto' }}>
              These core principles guide every decision we make and every project we deliver
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
            {values.map((v) => (
              <div
                key={v.title}
                className="value-card"
                style={{
                  background: '#F8F9FA',
                  padding: 48,
                  borderRadius: 24,
                  border: '1px solid #E5E7EB',
                  transition: 'all 0.3s ease',
                  clipPath: 'inset(0 0 0 0)',
                  opacity: 1,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.10)';
                  e.currentTarget.style.borderColor = '#1fadbf';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#E5E7EB';
                }}
              >
                <v.Icon style={{ fontSize: 48, color: '#1fadbf', marginBottom: 20 }} />
                <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: 16, color: '#6B7280', lineHeight: 1.7 }}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section style={{ padding: '120px 0', backgroundColor: '#F8F9FA' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <h2 style={{ fontSize: 48, fontWeight: 800, marginBottom: 20, fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}>
              Leadership Team
            </h2>
            <p style={{ fontSize: 18, color: '#6B7280', maxWidth: 700, margin: '0 auto' }}>
              Led by experienced professionals with decades of combined expertise in industrial project execution
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            {teamData.map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '40px 32px',
                  borderRadius: 20,
                  textAlign: 'center',
                  border: '1px solid #E5E7EB',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  opacity: 1,
                  transform: 'translateY(0)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(31, 173, 191, 0.15)';
                  e.currentTarget.style.borderColor = '#1fadbf';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                  e.currentTarget.style.borderColor = '#E5E7EB';
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1fadbf 0%, #16a085 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: 32,
                    fontWeight: 700,
                    color: 'white',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {member.initials}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}>
                  {member.name}
                </h3>
                <p style={{ fontSize: 15, color: '#1fadbf', fontWeight: 600 }}>{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY DISTRIBUTION */}
      <section ref={industryRef} style={{ padding: '120px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <h2 style={{ fontSize: 48, fontWeight: 800, marginBottom: 20, fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}>
              Diversified Portfolio
            </h2>
            <p style={{ fontSize: 18, color: '#6B7280', maxWidth: 700, margin: '0 auto' }}>
              Our diversified portfolio across major industrial sectors
            </p>
          </div>

          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            {industries.map((industry) => (
              <div key={industry.name} style={{ marginBottom: 32 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontSize: 18, fontWeight: 600, color: '#1F2937', fontFamily: 'Poppins, sans-serif' }}>
                    {industry.name}
                  </span>
                  <span style={{ fontSize: 18, fontWeight: 700, color: industry.color, fontFamily: 'Poppins, sans-serif' }}>
                    {industry.percentage}%
                  </span>
                </div>
                <div style={{ height: 16, backgroundColor: '#E5E7EB', borderRadius: 12, overflow: 'hidden' }}>
                  <div
                    className="industry-bar"
                    style={{
                      height: '100%',
                      width: `${industry.percentage}%`,
                      background: `linear-gradient(90deg, ${industry.color} 0%, ${industry.color}dd 100%)`,
                      borderRadius: 12,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section ref={certificationsRef} style={{ padding: '120px 0', backgroundColor: '#F8F9FA' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <h2 style={{ fontSize: 48, fontWeight: 800, marginBottom: 20, fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}>
              Certifications & approvals
            </h2>
            <p style={{ fontSize: 18, color: '#6B7280', maxWidth: 700, margin: '0 auto' }}>
              Industry-recognized certifications that validate our commitment to excellence
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 32, maxWidth: 1000, margin: '0 auto' }}>
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="cert-badge"
                style={{
                  background: '#FFFFFF',
                  padding: 40,
                  borderRadius: 20,
                  textAlign: 'center',
                  border: '2px solid #E5E7EB',
                  transition: 'all 0.3s ease',
                  clipPath: 'inset(0 0 0 0)',
                  opacity: 1,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#1fadbf';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <FaCheckCircle style={{ fontSize: 38, color: '#1fadbf', marginBottom: 14 }} />
                <h3 style={{ fontSize: 20, fontWeight: 800, color: '#1F2937', marginBottom: 10, fontFamily: 'Poppins, sans-serif' }}>
                  {cert.name}
                </h3>
                <p style={{ fontSize: 15, color: '#6B7280' }}>{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '90px 0', background: 'linear-gradient(135deg, rgba(31,173,191,0.15) 0%, rgba(17,24,39,0.05) 100%)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 44, fontWeight: 900, fontFamily: 'Poppins, sans-serif', color: '#1F2937', marginBottom: 16 }}>
            Let&apos;s build something great together
          </h2>
          <p style={{ fontSize: 18, color: '#6B7280', maxWidth: 820, margin: '0 auto 28px', lineHeight: 1.7 }}>
            Let&apos;s discuss how our 19 years of expertise can bring value to your industrial infrastructure goals.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Local CSS used by galleries */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .auto-scroll-container {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .auto-scroll-track {
          display: flex;
          animation: scroll-left 40s linear infinite;
          width: fit-content;
        }

        .auto-scroll-track:hover {
          animation-play-state: paused;
        }

        .photo-card {
          flex-shrink: 0;
          width: 400px;
          height: 300px;
          margin: 0 16px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          transition: all 0.4s ease;
        }

        .photo-card:hover {
          transform: translateY(-12px) scale(1.05);
          box-shadow: 0 16px 40px rgba(31, 173, 191, 0.30);
        }

        /* Static team gallery (no scroller) */
        .team-static-grid {
          display: flex;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
          padding: 0 20px;
        }

        /* Larger team photo cards */
        .team-photo-card {
          flex-shrink: 0;
          width: 520px;
          max-width: 100%;
          height: 360px;
          margin: 0;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 10px 28px rgba(0,0,0,0.12);
          transition: all 0.35s ease;
        }

        .team-photo-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 18px 48px rgba(245, 87, 108, 0.28);
        }

        @media (max-width: 768px) {
          .team-photo-card { height: 260px; }
          .photo-card { width: 320px; height: 240px; }
        }
      `}</style>
    </>
  );
};

export default About;
