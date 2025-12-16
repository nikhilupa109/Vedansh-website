import { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCounterAnimation } from '../hooks/useCounterAnimation';
import { useMagneticButton } from '../hooks/useMagneticButton';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

  // Refs
  const heroRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroTitleRef = useRef(null);
  const servicesRef = useRef(null);
  const featuredRef = useRef(null);
  const industriesRef = useRef(null);
  const achievementsRef = useRef(null);
  const visionRef = useRef(null);

  // Counter animations
  const counter1 = useCounterAnimation(279000, { duration: 2.5, suffix: '+' });
  const counter2 = useCounterAnimation(150, { duration: 2 });
  const counter3 = useCounterAnimation(98, { duration: 2, suffix: '%' });
  const counter4 = useCounterAnimation(0, { duration: 1.5 });

  // Magnetic buttons
  const magneticBtn1 = useMagneticButton(0.3);
  const magneticBtn2 = useMagneticButton(0.25);
  const magneticBtn3 = useMagneticButton(0.3);

  const notableAchievements = [
    {
      id: 1,
      title: 'Installation of 5 nos. WHR Boilers and Auxiliaries & Piping in record time',
      meta: 'Kutch Copper Ltd., Mundra (Adani Group)',
      logo: '/logos/adani.png',
      period: '2023–25'
    },
    {
      id: 2,
      title: 'Erection of 150 mtr. elevation FGD stack',
      meta: 'Kutch Copper Ltd., Mundra (Adani Group)',
      logo: '/logos/adani.png',
      period: '2023–25'
    },
    {
      id: 3,
      title: 'Supply, Installation, Testing and Commissioning of 220KVA Solar PV Plant Substation',
      meta: 'Barmer, Rajasthan',
      logo: null,
      period: '2023–25'
    },
    {
      id: 4,
      title: 'Erection of multiple vessels with individual weight of 300 MT plus of FGD package',
      meta: 'Kutch Copper Ltd., Mundra (Adani Group)',
      logo: '/logos/adani.png',
      period: '2023–25'
    },
    {
      id: 5,
      title: 'Secured Contract and executing work of 4,00,000 sq.mtr. of roof and wall sheeting with complete supply',
      meta: 'Mundra Petrochem Ltd., Mundra (Adani Group)',
      logo: '/logos/adani.png',
      period: '2023–25'
    },
    {
      id: 6,
      title: 'Secured Contract and executing work of all mechanical erection, testing and commissioning',
      meta: 'E-waste Recycling Plant (Greenfield) of HINDALCO Industries Ltd., Bharuch (Aditya Birla group)',
      logo: '/logos/hindalco.png',
      period: '2023–25'
    },
    {
      id: 7,
      title: 'Secured Contract and executing installation of complete Electrical and Instrumentation package',
      meta: 'Mundra Petrochem Ltd., Mundra (Adani Group)',
      logo: '/logos/adani.png',
      period: '2023–25'
    },
    {
      id: 8,
      title: 'Set up and brought under production a workshop for fabrication and supply of critical steel components',
      meta: 'Chittorgarh',
      logo: '/public/logo.png',
      period: '2023–25'
    },
  ];

  // Helpers for Achievement Cards (make the numbers feel "big" and scannable)
  const extractMetric = (title = '') => {
    // Grab the first meaningful numeric chunk + unit (e.g., "150 mtr.", "300 MT", "4,00,000 sq.mtr.", "220KVA", "1000 MW")
    const m = title.match(/(\d[\d,]*\s*(?:nos\.?|mtr\.?|m\b|MT\b|MW\b|KVA\b|kVA\b|sq\.?mtr\.?|sq\.?m\b|Cr\b|%|\+)?)/);
    const metric = m ? m[1].replace(/\s+/g, ' ').trim() : null;

    // Create a shorter headline by removing the metric chunk once (if it exists)
    let headline = title;
    if (metric) {
      headline = title.replace(m[1], '').replace(/\s{2,}/g, ' ').trim();
      headline = headline.replace(/^[-–:,\s]+/, '');
      // Avoid ultra-short headlines
      if (headline.length < 12) headline = title;
    }
    return { metric, headline };
  };

  const getTags = (title = '') => {
    const t = title.toLowerCase();
    const tags = [];
    if (t.includes('electrical') || t.includes('instrumentation') || t.includes('e&i')) tags.push('E&I');
    if (t.includes('commissioning')) tags.push('Commissioning');
    if (t.includes('fabrication') || t.includes('workshop')) tags.push('Fabrication');
    if (t.includes('erection')) tags.push('Erection');
    if (t.includes('boiler') || t.includes('piping') || t.includes('vessel') || t.includes('mechanical')) tags.push('Mechanical');
    if (t.includes('solar') || t.includes('pv') || t.includes('urja') || t.includes('power')) tags.push('Renewables');
    return [...new Set(tags)].slice(0, 3);
  };


  // TEXT SPLIT ANIMATION - Character by character WITH proper word boundaries
useEffect(() => {
  if (!heroTitleRef.current) return;

  const title = heroTitleRef.current;
  const text = title.textContent;
  title.innerHTML = '';
  // Allow wrapping between words (prevents the heading from stretching off-screen)
  title.style.whiteSpace = 'normal';

  // Split by words first, then split each word into characters
  const words = text.split(' ');
  const allChars = [];

  words.forEach((word, wordIndex) => {
    // Create a wrapper for each word
    const wordSpan = document.createElement('span');
    wordSpan.style.display = 'inline-block';
    wordSpan.style.whiteSpace = 'nowrap'; // Keep word together
    
    // Split word into characters
    word.split('').forEach((char) => {
      const charSpan = document.createElement('span');
      charSpan.textContent = char;
      charSpan.style.display = 'inline-block';
      charSpan.style.opacity = '0';
      wordSpan.appendChild(charSpan);
      allChars.push(charSpan);
    });
    
    title.appendChild(wordSpan);
    
    // Add normal space after word (except last word) so the heading can wrap
    if (wordIndex < words.length - 1) {
      title.appendChild(document.createTextNode(' '));
    }
  });

  // Animate all characters
  gsap.to(allChars, {
    opacity: 1,
    y: 0,
    rotationX: 0,
    duration: 0.8,
    stagger: 0.02,
    ease: "back.out(1.7)",
    delay: 0.5,
    onStart: () => {
      allChars.forEach(char => {
        char.style.transform = 'translateY(50px) rotateX(-90deg)';
      });
    }
  });
}, []);



  // PAGE ENTRY ANIMATION
  useEffect(() => {
    setIsLoaded(false);

    const pageTimeline = gsap.timeline({
      onComplete: () => setIsLoaded(true)
    });

    // Fade in entire page
    pageTimeline.from('body', {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut"
    });

    return () => {
      pageTimeline.kill();
    };
  }, [location.pathname]);

  // PARALLAX HERO with enhanced effects
  useEffect(() => {
    if (!heroRef.current || !heroBgRef.current || !heroContentRef.current) return;

    const ctx = gsap.context(() => {
      // Multi-layer parallax
      gsap.to(heroBgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        }
      });

      gsap.to(heroContentRef.current, {
        yPercent: -20,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      });

      // Hero content initial animation
      const heroLines = heroContentRef.current.querySelectorAll('.hero-line:not(.hero-title)');
      gsap.from(heroLines, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "expo.out",
        delay: 0.3
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  // CLIPPATH REVEAL ANIMATIONS for cards
  useEffect(() => {
    const cardSections = [
      { ref: servicesRef, selector: '.service-card' },
      { ref: featuredRef, selector: '.project-card' },
      { ref: industriesRef, selector: '.industry-card' },
      { ref: achievementsRef, selector: '.achievement-card' }
    ];

    const contexts = cardSections.map(({ ref, selector }) => {
      if (!ref.current) return null;

      const ctx = gsap.context(() => {
        const cards = ref.current.querySelectorAll(selector);
        if (cards.length > 0) {
          gsap.from(cards, {
            clipPath: "inset(100% 0% 0% 0%)",
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.15,
            ease: "expo.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 75%",
              toggleActions: "play none none none"
            }
          });
        }
      }, ref);

      return ctx;
    });

    return () => {
      contexts.forEach(ctx => ctx?.revert());
    };
  }, []);

  // Vision section reveal (keeps content visible even if ScrollTrigger misses a tick)
  useEffect(() => {
    if (!visionRef.current) return;

    const ctx = gsap.context(() => {
      const lines = visionRef.current.querySelectorAll('.vision-animate');
      const cards = visionRef.current.querySelectorAll('.vision-card');

      if (lines.length) {
        gsap.from(lines, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: visionRef.current,
            start: 'top 75%',
          }
        });
      }

      if (cards.length) {
        gsap.from(cards, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.14,
          ease: 'expo.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: visionRef.current,
            start: 'top 75%',
          }
        });
      }
    }, visionRef);

    return () => ctx.revert();
  }, []);

  // ENHANCED HOVER ANIMATIONS
  const handleCardHover = (e, scale = 1.05) => {
    gsap.to(e.currentTarget, {
      y: -12,
      scale: scale,
      boxShadow: '0 25px 50px rgba(31, 173, 191, 0.2)',
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleCardLeave = (e) => {
    gsap.to(e.currentTarget, {
      y: 0,
      scale: 1,
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      duration: 0.4,
      ease: "power2.out"
    });
  };

  return (
    <>
      {/* Hero Section with Advanced Parallax */}
      <section 
        ref={heroRef}
        style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '100px',
          paddingBottom: '80px',
        }}
      >
        {/* Multi-layer Parallax Background */}
        <div
          ref={heroBgRef}
          style={{
            position: 'absolute',
            top: '-20%',
            left: 0,
            width: '100%',
            height: '120%',
            background: 'linear-gradient(135deg, #F8F9FA 0%, #E5E7EB 100%)',
            zIndex: 0,
          }}
        >
          <div style={{
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231fadbf' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
  opacity: 0.4,
}} />

        </div>

        {/* Hero Content */}
        <div ref={heroContentRef} style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px', maxWidth: '1000px', margin: '0 auto' }}>
          <div className="hero-line" style={{ marginBottom: '24px' }}>
            <div style={{
              display: 'inline-block',
              background: '#1fadbf',
              color: 'white',
              padding: '8px 20px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              INDUSTRIAL EXCELLENCE SINCE 2006
            </div>
          </div>

          {/* Title with Character Animation */}
          <h1 
           ref={heroTitleRef}
  className="hero-line hero-title" 
  style={{
    fontSize: 'clamp(40px, 8vw, 80px)',
    fontWeight: '900',
    lineHeight: '1.1',
    marginBottom: '32px',
    color: '#1F2937',
    fontFamily: "'Poppins', sans-serif",
    perspective: '1000px',
    whiteSpace: 'normal',
    wordSpacing: 'normal',
            }}
          >
            Engineering solutions for modern industry
          </h1>

          <p className="hero-line" style={{
            fontSize: 'clamp(18px, 2vw, 22px)',
            color: '#6B7280',
            marginBottom: '48px',
            lineHeight: '1.7',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Vedansh Infra Services delivers world-class EPC, Plant Erection, and Project Management services across India's industrial sectors.
          </p>

          <div className="hero-line" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link ref={magneticBtn1} to="/projects" className="btn btn-primary">
              View Our Work
            </Link>
            <Link ref={magneticBtn2} to="/about" className="btn btn-secondary">
              Our Expertise
            </Link>
          </div>
        </div>
      </section>

      {/* Services with ClipPath Reveal */}
      <section style={{ padding: '120px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <h2 className="section-title">Comprehensive industrial services.</h2>
          <p className="section-description">
            From concept to completion, we deliver integrated solutions across the entire project lifecycle.
          </p>

          <div ref={servicesRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px', marginTop: '60px' }}>
            {[
              {
                title: 'EPC Project Management',
                desc: 'Complete engineering, procurement, and construction services with expert oversight ensuring on-time, on-budget delivery.',
                img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=400&fit=crop&q=80'
              },
              {
                title: 'Plant Erection & Commissioning',
                desc: 'Precision installation and commissioning of heavy industrial plants with comprehensive testing and quality assurance.',
                img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=400&fit=crop&q=80'
              },
              {
                title: 'Operation & Maintenance',
                desc: 'Comprehensive O&M services to maximize asset lifespan and improve operational efficiency across your facilities.',
                img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=400&fit=crop&q=80'
              }
            ].map((service, i) => (
              <div 
                key={i}
                className="service-card" 
                style={{ 
                  backgroundColor: '#FFFFFF', 
                  borderRadius: '20px', 
                  overflow: 'hidden', 
                  border: '1px solid #E5E7EB', 
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)', 
                  cursor: 'pointer',
                  clipPath: 'inset(0% 0% 0% 0%)'
                }}
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
              >
                <img src={service.img} alt={service.title} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                <div style={{ padding: '40px' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px', fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: '#6B7280', lineHeight: '1.7', marginBottom: '24px', fontSize: '16px' }}>
                    {service.desc}
                  </p>
                  <Link to="/services" style={{ color: '#1fadbf', fontWeight: '600', textDecoration: 'none', fontSize: '15px' }}>
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Notable Achievements */}
<section style={{ padding: '120px 0', backgroundColor: '#F8F9FA' }}>
  <div className="container">
    <h2 className="section-title">Recent Notable Achievements.</h2>
    <p className="section-description">
      Notable work delivered during 2023–25 across EPC, erection, E&amp;I, fabrication, and commissioning.
    </p>

    <div
      ref={featuredRef}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '22px',
        marginTop: '56px'
      }}
    >
      {notableAchievements.map((a) => {
        const { metric, headline } = extractMetric(a.title);
        const tags = getTags(a.title);

        return (
          <div
            key={a.id}
            className="project-card"
            style={{
              background: 'linear-gradient(180deg, rgba(31, 173, 191, 0.10) 0%, rgba(255, 255, 255, 0) 42%), #FFFFFF',
              border: '1px solid #E5E7EB',
              borderTop: '4px solid #1FADBF',
              borderRadius: '24px',
              padding: '26px',
              boxShadow: '0 22px 60px rgba(17, 24, 39, 0.10)',
              transition: 'all 0.35s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 30px 80px rgba(17, 24, 39, 0.16)';
              e.currentTarget.style.borderColor = '#CFF3F6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0px)';
              e.currentTarget.style.boxShadow = '0 22px 60px rgba(17, 24, 39, 0.10)';
              e.currentTarget.style.borderColor = '#E5E7EB';
            }}
          >
            {/* Top Row: badge + client + period */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap',
                marginBottom: '18px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: '1 1 220px', minWidth: 0 }}>
                <div
                  style={{
                    height: '34px',
                    width: '34px',
                    borderRadius: '999px',
                    backgroundColor: 'rgba(31, 173, 191, 0.14)',
                    display: 'grid',
                    placeItems: 'center',
                    fontWeight: 800,
                    color: '#0F172A',
                    fontSize: '13px',
                    flex: '0 0 auto'
                  }}
                >
                  {a.id}
                </div>

                {a.logo ? (
                  <img
                    src={a.logo}
                    alt="client logo"
                    style={{ height: 18, width: 'auto', objectFit: 'contain', opacity: 0.95, flex: '0 0 auto' }}
                    loading="lazy"
                  />
                ) : (
                  <div
                    style={{
                      height: 22,
                      width: 22,
                      borderRadius: '999px',
                      backgroundColor: 'rgba(31, 173, 191, 0.14)',
                      display: 'grid',
                      placeItems: 'center',
                      fontWeight: 900,
                      color: '#0F172A',
                      fontSize: '12px',
                      flex: '0 0 auto'
                    }}
                    aria-label="Vedansh"
                  >
                    V
                  </div>
                )}

                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 900,
                    letterSpacing: '1.6px',
                    textTransform: 'uppercase',
                    color: '#0F172A',
                    opacity: 0.6,
                    whiteSpace: 'nowrap'
                  }}
                >
                  Achievement
                </div>
              </div>

              <div
                style={{
                  padding: '8px 12px',
                  borderRadius: '999px',
                  fontSize: '12px',
                  fontWeight: 800,
                  border: '1px solid #E5E7EB',
                  color: '#111827',
                  backgroundColor: '#FFFFFF',
                  whiteSpace: 'nowrap',
                  marginLeft: 'auto',
                  flex: '0 0 auto'
                }}
              >
                {a.period || '2023–25'}
              </div>
            </div>

            {/* Impact Metric */}
            {metric && (
              <div style={{ fontSize: '44px', lineHeight: 1, fontWeight: 900, color: '#1FADBF', letterSpacing: '-0.02em', marginBottom: '10px' }}>
                {metric}
              </div>
            )}

            {/* Headline */}
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 900,
                color: '#111827',
                margin: 0,
                lineHeight: 1.2,
                letterSpacing: '-0.02em'
              }}
            >
              {headline || a.title}
            </h3>

            {/* Meta */}
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#4B5563', margin: '12px 0 0 0' }}>{a.meta}</p>

            {/* Tags */}
            {tags.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '12px',
                      fontWeight: 800,
                      padding: '7px 10px',
                      borderRadius: '999px',
                      border: '1px solid #E5E7EB',
                      backgroundColor: '#FFFFFF',
                      color: '#0F172A'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA */}
            <div style={{ marginTop: '22px' }}>
              <Link
                to="/projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontWeight: 900,
                  fontSize: '14px',
                  color: '#111827',
                  textDecoration: 'none'
                }}
              >
                View related projects <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* Client Logos */}
<section style={{ padding: '100px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB', overflow: 'hidden' }}>
  <div className="container">
    <p style={{ textAlign: 'center', fontSize: '13px', fontWeight: '700', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '2.5px', marginBottom: '60px' }}>
      TRUSTED BY INDIA'S INDUSTRIAL LEADERS
    </p>
    <div className="logo-scroll-container">
      <div className="logo-scroll">
        {['adani', 'larsen-toubro', 'hindustan-zinc', 'pidilite', 'hindalco', 'ultratech', 'tata', 'heidelberg', 'aditya-birla', 'chambal', 'mp-birla', 'binani', 'ucwl'].map((logo, i) => (
          <div key={i} className="logo-item">
            <img src={"/logos/" + logo + ".png"} alt={logo + " logo"} />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {['adani', 'larsen-toubro', 'hindustan-zinc', 'pidilite', 'hindalco', 'ultratech', 'tata', 'heidelberg', 'aditya-birla', 'chambal', 'mp-birla', 'binani', 'ucwl'].map((logo, i) => (
          <div key={"dup-" + i} className="logo-item">
            <img src={"/logos/" + logo + ".png"} alt={logo + " logo"} />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Vision For Tomorrow */}
      <section
        ref={visionRef}
        style={{
          padding: '120px 0',
          background: 'linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)',
          borderBottom: '1px solid #E5E7EB'
        }}
      >
        <div className="container">
          <h2 className="section-title vision-animate">Vision For Tomorrow</h2>
          <p className="section-description vision-animate" style={{ maxWidth: '980px' }}>
            At Vedansh, we are driven by a bold and clear vision — to evolve into a leading, specialized EPC and plant-installation powerhouse.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '48px',
              marginTop: '64px',
              alignItems: 'start'
            }}
          >
            {/* Narrative */}
            <div style={{ color: '#4B5563', lineHeight: '1.85', fontSize: '17px' }}>
              <p className="vision-animate" style={{ marginBottom: '18px' }}>
                By the end of FY 2029-30, we aim to achieve an annual turnover exceeding INR 500 crore, and generate a combined mechanical and electrical execution value of approximately INR 1,800 crore during the period 2025-26 to 2029-30.
              </p>
              <p className="vision-animate" style={{ marginBottom: '18px' }}>
                Our goal is to deliver excellence across sectors such as metals (both ferrous and non-ferrous), power, oil &amp; gas, and defence — serving both public and private enterprises with highest standards of quality, reliability, and integrity.
              </p>
              <p className="vision-animate" style={{ marginBottom: '18px' }}>
                To support this ambition, we have already established a state-of-the-art steel fabrication unit in Chittorgarh — purpose-built to meet large-scale infrastructure requirements for major organizations.
              </p>
              <p className="vision-animate" style={{ marginBottom: '18px' }}>
                Over the next three years, we will significantly expand both our facilities and human resources, scaling up sustainably to meet growing demand and deliver on our promise of excellence.
              </p>
              <p className="vision-animate" style={{ marginBottom: 0, fontWeight: 700, color: '#1F2937' }}>
                With dedication, innovation, and unwavering commitment to quality, Vedansh is poised to build the infrastructure of tomorrow.
              </p>
            </div>

            {/* Highlights */}
            <div style={{ display: 'grid', gap: '18px' }}>
              <div
                className="vision-card"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '24px',
                  padding: '28px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  marginBottom: '18px'
                }}
              >
                <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '10px' }}>
                  FY 2029–30 Target
                </div>
                <div style={{ fontSize: '40px', fontWeight: '900', color: '#1fadbf', lineHeight: '1.1', fontFamily: "'Poppins', sans-serif" }}>
                  INR 500+ Cr
                </div>
                <div style={{ marginTop: '8px', color: '#4B5563', fontSize: '15px', lineHeight: '1.6' }}>
                  Annual turnover goal as we scale operations and expand execution capacity.
                </div>
              </div>

              <div
                className="vision-card"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '24px',
                  padding: '28px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  marginBottom: '18px'
                }}
              >
                <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '10px' }}>
                  2025–26 to 2029–30
                </div>
                <div style={{ fontSize: '40px', fontWeight: '900', color: '#111827', lineHeight: '1.1', fontFamily: "'Poppins', sans-serif" }}>
                  ~INR 1,800 Cr
                </div>
                <div style={{ marginTop: '8px', color: '#4B5563', fontSize: '15px', lineHeight: '1.6' }}>
                  Combined mechanical &amp; electrical execution value target across major projects.
                </div>
              </div>

              <div
                className="vision-card"
                style={{
                  background: 'linear-gradient(135deg, rgba(31,173,191,0.10) 0%, rgba(22,160,133,0.08) 100%)',
                  border: '1px solid rgba(31, 173, 191, 0.25)',
                  borderRadius: '24px',
                  padding: '28px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.06)'
                }}
              >
                <div style={{ fontSize: '18px', fontWeight: '800', color: '#1F2937', marginBottom: '10px', fontFamily: "'Poppins', sans-serif" }}>
                  Focus Sectors
                </div>
                <ul style={{ margin: 0, paddingLeft: '18px', color: '#374151', lineHeight: '1.8', fontSize: '15px' }}>
                  <li>Metals (ferrous &amp; non-ferrous)</li>
                  <li>Power</li>
                  <li>Oil &amp; gas</li>
                  <li>Defence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Certifications */}
      <section style={{ padding: '120px 0', backgroundColor: '#F8F9FA' }}>
        <div className="container">
          <h2 className="section-title">Quality Certifications</h2>
          <p className="section-description">
            Our systems and site execution follow globally recognized quality, safety, and compliance standards.
          </p>

          {/* Local responsive styles just for this section */}
          <style>{`
            .cert-grid-iso { display: grid; grid-template-columns: repeat(3, minmax(320px, 1fr)); gap: 28px; }
            .cert-grid-other { display: grid; grid-template-columns: repeat(3, minmax(320px, 1fr)); gap: 28px; }
            @media (max-width: 1100px) {
              .cert-grid-iso { grid-template-columns: repeat(2, minmax(0, 1fr)); }
              .cert-grid-other { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            }
@media (max-width: 640px) {
              .cert-grid-iso { grid-template-columns: 1fr; }
              .cert-grid-other { grid-template-columns: 1fr; }
            }
          `}</style>

          {(() => {
            const isoCerts = [
              { name: 'ISO 9001:2015', desc: 'Quality Management System', img: '/certificates/iso-9001.png' },
              { name: 'ISO 14001:2015', desc: 'Environmental Management', img: '/certificates/iso-14001.png' },
              { name: 'ISO 45001:2018', desc: 'Health & Safety Management', img: '/certificates/iso-45001.png' }
            ];

            const otherCerts = [
              { name: 'IBR Approval', desc: 'Boiler Erector Certificate', img: '/certificates/ibr-approval.png' },
              { name: 'Electrical Contractor', desc: 'Licensed Electrical Contractor', img: '/certificates/electrical-contractor.png' },
              { name: 'Electrical Contractor (Gujarat)', desc: 'Licensed Electrical Contractor', img: '/certificates/electrical-contractor-gujarat.png' }
            ];

            const Card = (cert, i, imgHeight = 300) => (
              <div
                key={cert.name + i}
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                  border: '1px solid #E5E7EB',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    y: -12,
                    boxShadow: '0 25px 50px rgba(31, 173, 191, 0.18)',
                    duration: 0.35,
                    ease: "power2.out"
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    y: 0,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                    duration: 0.35,
                    ease: "power2.out"
                  });
                }}
              >
                <div style={{ padding: '22px 22px 0 22px' }}>
                  <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1FADBf', marginBottom: 12 }}>
                    Certification
                  </div>
                </div>

                <div style={{ padding: '0 22px 20px 22px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0F172A', margin: 0, lineHeight: 1.15 }}>
                      {cert.name}
                    </h3>
                  </div>
                  <p style={{ margin: '10px 0 0 0', color: '#4B5563', fontSize: 15, lineHeight: 1.7 }}>
                    {cert.desc}
                  </p>
                </div>

                <div style={{ padding: '0 22px 20px 22px' }}>
                  <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)' }}>
                    <img
                      src={cert.img}
                      alt={cert.name}
                      style={{ width: '100%', height: `${imgHeight}px`, objectFit: 'contain', display: 'block', background: '#FFFFFF' }}
                      loading="lazy"
                      onError={(e) => {
                        const el = e.currentTarget;
                        if (el.dataset.fallbackTried === '1') {
                          el.style.display = 'none';
                          return;
                        }
                        el.dataset.fallbackTried = '1';
                        if (el.src.endsWith('.png')) {
                          el.src = el.src.replace('.png', '.jpg');
                        } else if (el.src.endsWith('.jpg')) {
                          el.src = el.src.replace('.jpg', '.png');
                        } else {
                          el.style.display = 'none';
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            );

            return (
              <div style={{ marginTop: '60px' }}>
                {/* ISO row (one line on desktop) */}
                <div style={{ marginBottom: 34 }}>
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0F172A', opacity: 0.65 }}>
                      ISO Certifications
                    </div>
                    <div style={{ marginTop: 6, fontSize: 13, color: '#6B7280', lineHeight: 1.5 }}>
                      Validated management systems
                    </div>
                  </div>

                  <div className="cert-grid-iso">
                    {isoCerts.map((c, i) => Card(c, i, 300))}
                  </div>
                </div>

                {/* Other certifications */}
                <div>
                  <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0F172A', opacity: 0.65, marginBottom: 14 }}>
                    Other Certifications
                  </div>

                  <div className="cert-grid-other">
                    {otherCerts.map((c, i) => Card(c, i + 100, 360))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>


      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to build your next project?</h2>
            <p>Let's discuss how Vedansh Infra can bring expertise, reliability, and excellence to your industrial vision.</p>
            <div>
              <Link ref={magneticBtn3} to="/contact" className="btn btn-primary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
