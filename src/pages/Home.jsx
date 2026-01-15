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

  // ✅ BASE URL SAFE (works in local + GitHub Pages /Vedansh-website/)
  const BASE = import.meta.env.BASE_URL || '/';

  // Lightbox for Certification images
  const [lightbox, setLightbox] = useState({ open: false, src: '', alt: '' });

  // Logo slider refs
  const logosSectionRef = useRef(null);
  const logosViewportRef = useRef(null);
  const logosAutoTimerRef = useRef(null);
  const logosIsHoveringRef = useRef(false);
  const logosIsDraggingRef = useRef(false);
  const logosDragStartXRef = useRef(0);
  const logosDragStartScrollRef = useRef(0);

  // Client logos (served from /public/logos)
  const clientLogos = [
    'adani',
    'aditya-birla',
    'binani',
    'chambal',
    'heidelberg',
    'hindalco',
    'hindustan-zinc',
    'jindal',
    'larsen-toubro',
    'mp-birla',
    'pidilite',
    'sprng',
    'tata',
    'ucwl',
    'ultratech'
  ];

  // Refs
  const heroRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroTitleRef = useRef(null);
  const servicesRef = useRef(null);
  const achievementsRef = useRef(null);
  const visionRef = useRef(null);
  const certRef = useRef(null);

  // Counter animations (kept for compatibility with existing hooks)
  useCounterAnimation(279000, { duration: 2.5, suffix: '+' });
  useCounterAnimation(150, { duration: 2 });
  useCounterAnimation(98, { duration: 2, suffix: '%' });
  useCounterAnimation(0, { duration: 1.5 });

  // Magnetic buttons
  const magneticBtn1 = useMagneticButton(0.3);
  const magneticBtn2 = useMagneticButton(0.25);
  const magneticBtn3 = useMagneticButton(0.3);

  // ✅ Recent Notable Achievements (3x3 grid + photo space in cards)
  const notableAchievements = [
    {
      id: 1,
      title: 'Installation of 5 nos. WHR Boilers and Auxiliaries & Piping in record time',
      meta: 'Kutch Copper Ltd., Mundra (Adani Group)',
      logo: `${BASE}logos/adani.png`,
      period: '2023–25',
      photo: `${BASE}images/achievements/a1.jpg` // add your image URL later if needed
    },
    {
      id: 2,
      title: 'Erection of 150 mtr. elevation FGD stack',
      meta: 'Kutch Copper Ltd., Mundra (Adani Group)',
      logo: `${BASE}logos/adani.png`,
      period: '2023–25',
      photo: `${BASE}images/achievements/a2.jpg`
    },
    {
      id: 3,
      title: 'Supply, Installation, Testing and Commissioning of 220KVA Solar PV Plant Substation',
      meta: 'Barmer, Rajasthan',
      logo: '',
      period: '2023–25',
      photo: `${BASE}images/achievements/a3.jpg`
    },
    {
      id: 4,
      title: 'Erection of multiple vessels with individual weight of 300 MT plus of FGD package',
      meta: 'Kutch Copper Ltd., Mundra (Adani Group)',
      logo: `${BASE}logos/adani.png`,
      period: '2023–25',
      photo: `${BASE}images/achievements/a4.jpg`
    },
    {
      id: 5,
      title: 'Executing 4,00,000 sq.mtr. of roof and wall sheeting with complete supply',
      meta: 'Mundra Petrochem Ltd., Mundra (Adani Group)',
      logo: `${BASE}logos/adani.png`,
      period: '2023–25',
      photo: `${BASE}images/achievements/a5.jpg`
    },
    {
      id: 6,
      title: 'Mechanical erection, testing and commissioning — Greenfield E‑waste Recycling Plant',
      meta: 'HINDALCO Industries Ltd., Bharuch (Aditya Birla Group)',
      logo: `${BASE}logos/hindalco.png`,
      period: '2023–25',
      photo: ''
    },
    {
      id: 7,
      title: 'Installation of complete Electrical and Instrumentation package',
      meta: 'Mundra Petrochem Ltd., Mundra (Adani Group)',
      logo: `${BASE}logos/adani.png`,
      period: '2023–25',
      photo: ''
    },
    {
      id: 8,
      title: 'Fabrication workshop set up for supply of critical steel components',
      meta: 'Chittorgarh',
      logo: `${BASE}logo.png`,
      period: '2023–25',
      photo: ''
    },
    {
      id: 9,
      title: 'Boiler & pipeline execution support for fast-track plant timelines',
      meta: 'Multiple industrial sites',
      logo: '',
      period: '2023–25',
      photo: ''
    }
  ];

  // ==========
  // GSAP (keep existing animations)
  // ==========

  // Text split animation (safe: keeps word boundaries)
  useEffect(() => {
    if (!heroTitleRef.current) return;

    const title = heroTitleRef.current;
    const text = title.textContent || '';
    title.innerHTML = '';
    title.style.whiteSpace = 'normal';

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
      ease: 'back.out(1.7)',
      delay: 0.5,
      onStart: () => {
        allChars.forEach((char) => {
          char.style.transform = 'translateY(50px) rotateX(-90deg)';
        });
      }
    });
  }, []);

  // Page entry animation
  useEffect(() => {
    setIsLoaded(false);

    const pageTimeline = gsap.timeline({
      onComplete: () => setIsLoaded(true)
    });

    pageTimeline.from('body', {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.inOut'
    });

    return () => {
      pageTimeline.kill();
    };
  }, [location.pathname]);

  // Parallax hero
  useEffect(() => {
    if (!heroRef.current || !heroBgRef.current || !heroContentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(heroBgRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        }
      });

      gsap.to(heroContentRef.current, {
        yPercent: -20,
        opacity: 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      });

      const heroLines = heroContentRef.current.querySelectorAll('.hero-line:not(.hero-title)');
      gsap.from(heroLines, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'expo.out',
        delay: 0.3
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // ClipPath reveal animations for cards
  useEffect(() => {
    const sections = [
      { ref: servicesRef, selector: '.service-card' },
      { ref: achievementsRef, selector: '.achievement-card' },
    ];

    const contexts = sections.map(({ ref, selector }) => {
      if (!ref.current) return null;

      const ctx = gsap.context(() => {
        const cards = ref.current.querySelectorAll(selector);
        if (cards.length > 0) {
          gsap.from(cards, {
            clipPath: 'inset(100% 0% 0% 0%)',
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.12,
            ease: 'expo.out',
            immediateRender: false,
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 75%',
              toggleActions: 'play none none none'
            }
          });
        }
      }, ref);

      return ctx;
    });

    return () => {
      contexts.forEach((ctx) => ctx?.revert());
    };
  }, []);

  // Vision section reveal
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

  // Client logo slider (step-scroll + drag + arrows)
  useEffect(() => {
    if (!logosSectionRef.current || !logosViewportRef.current) return;

    const viewport = logosViewportRef.current;

    // Slower + smoother tuning
    const AUTO_INTERVAL_MS = 3500; // was 650
    const SCROLL_DURATION = 2.6;
    const SNAP_DURATION = 1.5;
    const STEP_MULTIPLIER = 0.75;

    const getStep = () => {
      const first = viewport.querySelector('.logo-item');
      if (!first) return 380;

      const track = viewport.querySelector('.logo-scroll') || viewport;
      const styles = window.getComputedStyle(track);
      const gap = parseInt(styles.gap || styles.columnGap || '24', 10) || 24;

      return first.getBoundingClientRect().width + gap;
    };

    const animateScrollTo = (left, duration = SCROLL_DURATION) => {
      gsap.killTweensOf(viewport);
      gsap.to(viewport, {
        scrollLeft: left,
        duration,
        ease: 'power1.inOut',
        overwrite: 'auto'
      });
    };

    const snapToNearest = () => {
      const step = getStep();
      const target = Math.round(viewport.scrollLeft / step) * step;
      animateScrollTo(target, SNAP_DURATION);
    };

    const stepScroll = (dir = 1) => {
      const step = getStep();
      const max = viewport.scrollWidth - viewport.clientWidth;
      const delta = step * STEP_MULTIPLIER;

      if (dir > 0 && viewport.scrollLeft >= max - delta) {
        animateScrollTo(0, SCROLL_DURATION);
        return;
      }
      if (dir < 0 && viewport.scrollLeft <= 0) {
        animateScrollTo(max, SCROLL_DURATION);
        return;
      }

      const next = Math.max(0, Math.min(max, viewport.scrollLeft + dir * delta));
      animateScrollTo(next, SCROLL_DURATION);
    };

    const startAuto = () => {
      stopAuto();

      logosAutoTimerRef.current = window.setInterval(() => {
        if (logosIsHoveringRef.current) return;
        if (logosIsDraggingRef.current) return;
        stepScroll(1);
      }, AUTO_INTERVAL_MS);
    };

    const stopAuto = () => {
      if (logosAutoTimerRef.current) {
        window.clearInterval(logosAutoTimerRef.current);
        logosAutoTimerRef.current = null;
      }
    };

    const onEnter = () => (logosIsHoveringRef.current = true);

    const onLeave = () => {
      logosIsHoveringRef.current = false;
      snapToNearest();
    };

    viewport.addEventListener('mouseenter', onEnter);
    viewport.addEventListener('mouseleave', onLeave);

    const ctx = gsap.context(() => {
      gsap.from(logosSectionRef.current, {
        y: 24,
        opacity: 0,
        duration: 1,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: logosSectionRef.current,
          start: 'top 80%'
        }
      });
    }, logosSectionRef);

    startAuto();

    return () => {
      stopAuto();
      viewport.removeEventListener('mouseenter', onEnter);
      viewport.removeEventListener('mouseleave', onLeave);
      ctx.revert();
    };
  }, []);

  const onLogoPointerDown = (e) => {
    const viewport = logosViewportRef.current;
    if (!viewport) return;

    gsap.killTweensOf(viewport);
    logosIsDraggingRef.current = true;
    viewport.classList.add('dragging');
    logosDragStartXRef.current = e.clientX;
    logosDragStartScrollRef.current = viewport.scrollLeft;
  };

  const onLogoPointerMove = (e) => {
    const viewport = logosViewportRef.current;
    if (!viewport) return;
    if (!logosIsDraggingRef.current) return;
    const dx = e.clientX - logosDragStartXRef.current;
    viewport.scrollLeft = logosDragStartScrollRef.current - dx;
  };

  const onLogoPointerUp = () => {
    const viewport = logosViewportRef.current;
    if (!viewport) return;
    logosIsDraggingRef.current = false;
    viewport.classList.remove('dragging');

    const first = viewport.querySelector('.logo-item');
    if (!first) return;
    const track = viewport.querySelector('.logo-scroll') || viewport;
    const styles = window.getComputedStyle(track);
    const gap = parseInt(styles.gap || styles.columnGap || '24', 10) || 24;
    const step = first.getBoundingClientRect().width + gap;

    const target = Math.round(viewport.scrollLeft / step) * step;
    gsap.killTweensOf(viewport);
    gsap.to(viewport, { scrollLeft: target, duration: 1.1, ease: 'power1.inOut', overwrite: 'auto' });
  };

  const logoStepScroll = (dir) => {
    const viewport = logosViewportRef.current;
    if (!viewport) return;

    const first = viewport.querySelector('.logo-item');
    if (!first) return;

    const track = viewport.querySelector('.logo-scroll') || viewport;
    const styles = window.getComputedStyle(track);
    const gap = parseInt(styles.gap || styles.columnGap || '24', 10) || 24;

    const step = first.getBoundingClientRect().width + gap;
    const delta = step * 0.85;
    const max = viewport.scrollWidth - viewport.clientWidth;

    const animateTo = (left) => {
      gsap.killTweensOf(viewport);
      gsap.to(viewport, { scrollLeft: left, duration: 1.9, ease: 'power1.inOut', overwrite: 'auto' });
    };

    if (dir > 0 && viewport.scrollLeft >= max - delta) {
      animateTo(0);
      return;
    }

    if (dir < 0 && viewport.scrollLeft <= 0) {
      animateTo(max);
      return;
    }

    animateTo(Math.max(0, Math.min(max, viewport.scrollLeft + dir * delta)));
  };

  // Lightbox close (ESC)
  useEffect(() => {
    if (!lightbox.open) return;

    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox({ open: false, src: '', alt: '' });
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox.open]);

  const openCertLightbox = (src, alt) => {
    if (!src) return;
    setLightbox({ open: true, src, alt: alt || 'Certificate' });
  };

  return (
    <>
      {/* Page-level tweaks (kept inside Home.jsx so you don’t have to chase CSS) */}
      <style>{`
        /* Achievements: 3x3 grid on desktop */
        .achievements-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; margin-top: 56px; }
        @media (max-width: 1100px) { .achievements-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 640px) { .achievements-grid { grid-template-columns: 1fr; } }

        /* Achievements card photo space */
        .achievement-photo { height: 160px; border-radius: 16px; overflow: hidden; background: linear-gradient(135deg, rgba(31,173,191,0.18), rgba(17,24,39,0.06)); border: 1px solid rgba(0,0,0,0.06); }
        .achievement-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }

        /* Logos bigger */
        .logo-item { width: 380px !important; height: 190px !important; }
        .logo-item img { width: 90% !important; height: 90% !important; }

        /* Vision layout + justified text */
        .vision-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 48px; margin-top: 64px; align-items: start; }
        @media (max-width: 960px) { .vision-grid { grid-template-columns: 1fr; } }
        .vision-narrative { color: #4B5563; line-height: 1.85; font-size: 17px; text-align: justify; }
        .vision-narrative p { text-align: justify; }

        /* Lightbox */
        .lightbox-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.82); z-index: 999999; display: grid; place-items: center; padding: 24px; }
        .lightbox-card { max-width: min(1100px, 92vw); max-height: 88vh; background: #0B1220; border-radius: 18px; border: 1px solid rgba(255,255,255,0.12); overflow: hidden; box-shadow: 0 30px 100px rgba(0,0,0,0.5); }
        .lightbox-bar { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 12px 14px; background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.9); font-weight: 700; }
        .lightbox-close { border: 0; background: rgba(255,255,255,0.12); color: #fff; width: 38px; height: 38px; border-radius: 12px; cursor: pointer; font-size: 18px; }
        .lightbox-img { width: 100%; height: auto; max-height: 78vh; object-fit: contain; display: block; background: #0B1220; }
      `}</style>

      {/* Hero Section */}
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
        {/* ✅ HOME HERO IMAGE (1300 MT crane lifting stack) */}
        <div
          ref={heroBgRef}
          style={{
            position: 'absolute',
            top: '-20%',
            left: 0,
            width: '100%',
            height: '120%',
            backgroundImage: `url("${BASE}images/hero/home-crane.jpg"), url("https://source.unsplash.com/1920x1080/?crane,industrial,lifting")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
          }}
        >
          {/* Dark overlay for readability */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.50) 45%, rgba(0,0,0,0.62) 100%)',
            }}
          />
          {/* Subtle teal pattern tint */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231fadbf' fill-opacity='0.10'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              opacity: 0.35,
            }}
          />
        </div>

        {/* Hero Content */}
        <div
          ref={heroContentRef}
          style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            padding: '0 24px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          <div className="hero-line" style={{ marginBottom: '24px' }}>
            <div
              className="hero-pill"
              style={{
                display: 'inline-block',
                background: '#1fadbf',
                color: 'white',
                padding: '10px 22px',
                borderRadius: '999px',
                fontSize: '14px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginTop: '28px'
              }}
            >
              INDUSTRIAL EXCELLENCE SINCE 2006
            </div>
          </div>

          <h1
            ref={heroTitleRef}
            className="hero-line hero-title"
            style={{
              fontSize: 'clamp(40px, 8vw, 80px)',
              fontWeight: '900',
              lineHeight: '1.08',
              marginBottom: '28px',
              color: '#FFFFFF',
              fontFamily: "'Poppins', sans-serif",
              perspective: '1000px',
              whiteSpace: 'normal',
              textShadow: '0 18px 40px rgba(0,0,0,0.45)'
            }}
          >
            Engineering solutions for modern industry
          </h1>

          <p
            className="hero-line"
            style={{
              fontSize: 'clamp(18px, 2vw, 22px)',
              color: 'rgba(255,255,255,0.88)',
              marginBottom: '46px',
              lineHeight: '1.7',
              maxWidth: '820px',
              marginLeft: 'auto',
              marginRight: 'auto',
              textShadow: '0 10px 24px rgba(0,0,0,0.35)'
            }}
          >
            Vedansh Infra Services delivers world-class EPC, plant erection, electrical EPC, fabrication and maintenance services across India&apos;s industrial sectors.
          </p>

          <div className="hero-line" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link ref={magneticBtn1} to="/projects" className="btn btn-primary">
              View Our Work
            </Link>
            <Link
              ref={magneticBtn2}
              to="/about"
              className="btn btn-secondary"
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: '#FFFFFF',
                border: '1px solid rgba(255,255,255,0.55)',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)'
              }}
            >
              Our Expertise
            </Link>
          </div>
        </div>
      </section>

      {/* Comprehensive industrial services (✅ updated to 5 items) */}
      <section style={{ padding: '120px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <h2 className="section-title">Comprehensive industrial services.</h2>
          <p className="section-description">
            From concept to completion, we deliver integrated solutions across the entire project lifecycle.
          </p>

          <div
            ref={servicesRef}
            className="services-grid"
          >
            {[
              {
                title: 'Mechanical Plant Erection',
                desc: 'Heavy mechanical erection of industrial plants with precision installation, alignment and commissioning support.',
                img: `${BASE}images/services/mechanical-plant-erection.jpg`
              },
              {
                title: 'Boilers and Pipeline',
                desc: 'Boiler erection assistance, piping fabrication/installation, and site execution to accelerate plant timelines.',
                img: `${BASE}images/services/boilers-and-pipeline.jpg`
              },
              {
                title: 'Electrical and Substation EPC',
                desc: 'EPC delivery for electrical packages, substations, testing, commissioning, and integrated E&I execution.',
                img: `${BASE}images/services/electrical-substation-epc.jpg`
              },
              {
                title: 'Operation & Maintenance',
                desc: 'O&M services designed to increase uptime, improve reliability and extend the life of critical assets.',
                img: `${BASE}images/services/operations-maintenance.jpg`
              },
              {
                title: 'Fabrication Workshop',
                desc: 'Fabrication capability for critical steel components with quality checks and reliable, repeatable output.',
                img: `${BASE}images/services/fabrication-workshop.jpg`
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
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    y: -12,
                    scale: 1.03,
                    boxShadow: '0 25px 50px rgba(31, 173, 191, 0.2)',
                    duration: 0.4,
                    ease: 'power1.inOut'
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    y: 0,
                    scale: 1,
                    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                    duration: 0.4,
                    ease: 'power1.inOut'
                  });
                }}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                  onError={(e) => {
                    const el = e.currentTarget;
                    const tried = (el.dataset.tried || '').split(',').filter(Boolean);
                    const order = ['jpg', 'png', 'jpeg', 'webp'];
                    const src = el.getAttribute('src') || '';
                    const m = src.match(/\.(jpg|png|jpeg|webp)(\?.*)?$/i);
                    const currentExt = (m?.[1] || '').toLowerCase();
                    const base = src.replace(/\.(jpg|png|jpeg|webp)(\?.*)?$/i, '');
                    const nextExt = order.find((ext) => ext !== currentExt && !tried.includes(ext));
                    if (!nextExt) {
                      // Final fallback: hide broken image area gracefully
                      el.style.display = 'none';
                      return;
                    }
                    if (currentExt) tried.push(currentExt);
                    el.dataset.tried = tried.join(',');
                    el.setAttribute('src', `${base}.${nextExt}`);
                  }}
                />
                <div style={{ padding: '34px' }}>
                  <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '14px', fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: '#6B7280', lineHeight: '1.7', marginBottom: '20px', fontSize: '15px' }}>
                    {service.desc}
                  </p>
                  <Link to="/services" style={{ color: '#1fadbf', fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Notable Achievements (✅ consistent fonts + photo space) */}
      <section style={{ padding: '120px 0', backgroundColor: '#F8F9FA' }}>
        <div className="container">
          <h2 className="section-title">Recent Notable Achievements.</h2>
          <p className="section-description">
            Notable work delivered during 2023–25 across EPC, erection, E&amp;I, fabrication, and commissioning.
          </p>

          <div ref={achievementsRef} className="achievements-grid">
            {notableAchievements.filter((a) => a.id <= 5).map((a) => (
              <div
                key={a.id}
                className="achievement-card"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '24px',
                  padding: '18px',
                  boxShadow: '0 18px 46px rgba(17, 24, 39, 0.10)',
                  overflow: 'hidden'
                }}
              >
                {/* Photo space */}
                <div className="achievement-photo">
                  {a.photo ? <img src={a.photo} alt={a.title} loading="lazy" /> : null}
                </div>

                {/* Header row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '16px' }}>
                  <div
                    style={{
                      height: '34px',
                      width: '34px',
                      borderRadius: '999px',
                      backgroundColor: 'rgba(31, 173, 191, 0.14)',
                      display: 'grid',
                      placeItems: 'center',
                      fontWeight: 900,
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
                      style={{ height: 18, width: 'auto', objectFit: 'contain', opacity: 0.95 }}
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
                        fontSize: '12px'
                      }}
                      aria-label="Vedansh"
                    >
                      V
                    </div>
                  )}

                  <div style={{ marginLeft: 'auto', fontSize: '12px', fontWeight: 800, color: '#111827', opacity: 0.8 }}>
                    {a.period}
                  </div>
                </div>

                {/* Title + meta */}
                <h3 style={{ margin: '14px 0 0 0', fontSize: '18px', lineHeight: 1.25, fontWeight: 900, color: '#111827' }}>
                  {a.title}
                </h3>
                <p style={{ margin: '10px 0 0 0', fontSize: '14px', lineHeight: 1.65, color: '#4B5563' }}>
                  {a.meta}
                </p>

                {/* CTA */}
                <div style={{ marginTop: '18px' }}>
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
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos (step-scroll + drag + arrows) */}
      <section
        ref={logosSectionRef}
        style={{
          padding: '100px 0',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E5E7EB'
        }}
      >
        <div className="container">
          <p
            style={{
              textAlign: 'center',
              fontSize: '13px',
              fontWeight: '700',
              color: '#080808ff',
              
              letterSpacing: '2.5px',
              marginBottom: '60px'
            }}
          >
            Trusted By India&apos;s Industrial Leaders
          </p>

          <div className="logo-slider">
            <button
              type="button"
              className="logo-arrow left"
              aria-label="Scroll logos left"
              onClick={() => logoStepScroll(-1)}
            >
              ‹
            </button>

            <div
              ref={logosViewportRef}
              className="logo-scroll-container"
              onPointerDown={onLogoPointerDown}
              onPointerMove={onLogoPointerMove}
              onPointerUp={onLogoPointerUp}
              onPointerLeave={onLogoPointerUp}
            >
              <div className="logo-scroll">
                {clientLogos.map((logo, i) => (
                  <div key={i} className="logo-item">
                    <img src={`${BASE}logos/${logo}.png`} alt={`${logo} logo`} />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="logo-arrow right"
              aria-label="Scroll logos right"
              onClick={() => logoStepScroll(1)}
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Vision For Tomorrow (✅ better layout + justified text + headings like screenshot) */}
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

          <div className="vision-grid">
            {/* Narrative */}
            <div className="vision-narrative">
              <p className="vision-animate" style={{ marginBottom: '18px' }}>
                By the end of FY 2029-30, we aim to achieve an annual turnover exceeding INR 500 crore, and generate a combined mechanical and electrical execution value of approximately INR 1,800 crore during the period 2025-26 to 2029-30.
              </p>
              <p className="vision-animate" style={{ marginBottom: '18px' }}>
                Our goal is to deliver excellence across sectors such as metals (both ferrous and non-ferrous), power, oil &amp; gas, and defence — serving both public and private enterprises with highest standards of quality, reliability, and integrity.
              </p>
              <p className="vision-animate" style={{ marginBottom: '0px' }}>
                To support this ambition, we have already established a state-of-the-art steel fabrication unit in Chittorgarh — purpose-built to meet large-scale infrastructure requirements for major organizations.
              </p>
            </div>

            {/* Targets / Cards */}
            <div style={{ display: 'grid', gap: '22px' }}>
              <div className="vision-animate" style={{ fontSize: '22px', fontWeight: 900, color: '#111827', marginTop: '6px' }}>
                Annual revenue by 2029–30
              </div>
              <div
                className="vision-card"
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: '24px',
                  padding: '26px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.06)'
                }}
              >
                <div style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '10px' }}>
                </div>
                <div style={{ fontSize: '40px', fontWeight: 900, color: '#1fadbf', lineHeight: '1.1', fontFamily: "'Poppins', sans-serif" }}>
                  INR 500+ Cr
                </div>
                <div style={{ marginTop: '8px', color: '#4B5563', fontSize: '15px', lineHeight: '1.6' }}>
                  Annual turnover goal as we scale operations and expand execution capacity.
                </div>
              </div>

              <div className="vision-animate" style={{ fontSize: '22px', fontWeight: 900, color: '#111827', marginTop: '8px' }}>
                Total Executed Value by 2029–30
              </div>
              <div
                className="vision-card"
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: '24px',
                  padding: '26px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.06)'
                }}
              >
                <div style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '10px' }}>
                </div>
                <div style={{ fontSize: '40px', fontWeight: 900, color: '#111827', lineHeight: '1.1', fontFamily: "'Poppins', sans-serif" }}>
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
                  padding: '26px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.06)'
                }}
              >
                <div style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0F172A', opacity: 0.65, marginBottom: '10px' }}>
                  Focus Areas
                </div>
                <div style={{ fontSize: '18px', fontWeight: 900, color: '#0F172A', marginBottom: '8px' }}>
              
                </div>
                <ul style={{ margin: 0, paddingLeft: '18px', color: '#374151', lineHeight: '1.8', fontSize: '15px' }}>
                  <li>Fabrication Unit</li>
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

      {/* Quality Certifications (✅ click to enlarge images) */}
      <section ref={certRef} style={{ padding: '120px 0', backgroundColor: '#F8F9FA' }}>
        <div className="container">
          <h2 className="section-title">Quality Certifications</h2>
          <p className="section-description">
            Our systems and site execution follow globally recognized quality, safety, and compliance standards.
          </p>

          <style>{`
            .cert-grid { display: grid; grid-template-columns: repeat(3, minmax(320px, 1fr)); gap: 28px; margin-top: 54px; }
            @media (max-width: 1100px) { .cert-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
            @media (max-width: 640px) { .cert-grid { grid-template-columns: 1fr; } }
          `}</style>

          {(() => {
            const certs = [
              { name: 'ISO 9001:2015', desc: 'Quality Management System', img: `${BASE}certificates/iso-9001.jpg` },
              { name: 'ISO 14001:2015', desc: 'Environmental Management', img: `${BASE}certificates/iso-14001.jpg` },
              { name: 'ISO 45001:2018', desc: 'Health & Safety Management', img: `${BASE}certificates/iso-45001.jpg` },
              { name: 'IBR Approval', desc: 'Boiler Erector Certificate', img: `${BASE}certificates/ibr-approval.jpg` },
              { name: 'Electrical Contractor', desc: 'Licensed Electrical Contractor', img: `${BASE}certificates/electrical-contractor.jpg` },
              { name: 'Electrical Contractor (Gujarat)', desc: 'Licensed Electrical Contractor', img: `${BASE}certificates/electrical-contractor-gujarat.jpg` }
            ];

            return (
              <div className="cert-grid">
                {certs.map((cert, i) => (
                  <div
                    key={cert.name + i}
                    style={{
                      background: '#fff',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                      border: '1px solid #E5E7EB'
                    }}
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, { y: -10, boxShadow: '0 25px 50px rgba(31, 173, 191, 0.18)', duration: 0.35, ease: 'power1.inOut' });
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, { y: 0, boxShadow: '0 8px 24px rgba(0,0,0,0.08)', duration: 0.35, ease: 'power1.inOut' });
                    }}
                  >
                    <div style={{ padding: '22px 22px 0 22px' }}>
                      <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1FADBf', marginBottom: 12 }}>
                        Certification
                      </div>
                    </div>

                    <div style={{ padding: '0 22px 16px 22px' }}>
                      <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0F172A', margin: 0, lineHeight: 1.15 }}>
                        {cert.name}
                      </h3>
                      <p style={{ margin: '10px 0 0 0', color: '#4B5563', fontSize: 15, lineHeight: 1.7 }}>
                        {cert.desc}
                      </p>
                    </div>

                    <div style={{ padding: '0 22px 22px 22px' }}>
                      <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)' }}>
                        <img
                          src={cert.img}
                          alt={cert.name}
                          style={{ width: '100%', height: '340px', objectFit: 'contain', display: 'block', background: '#FFFFFF', cursor: 'zoom-in' }}
                          loading="lazy"
                          onClick={() => openCertLightbox(cert.img, cert.name)}
                          onError={(e) => {
                            const el = e.currentTarget;
                            if (el.dataset.fallbackTried === '1') {
                              el.style.display = 'none';
                              return;
                            }
                            el.dataset.fallbackTried = '1';
                            if (el.src.endsWith('.png')) el.src = el.src.replace('.png', '.jpg');
                            else if (el.src.endsWith('.jpg')) el.src = el.src.replace('.jpg', '.png');
                            else el.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
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
            <p>Let&apos;s discuss how Vedansh Infra can bring expertise, reliability, and excellence to your industrial vision.</p>
            <div>
              <Link ref={magneticBtn3} to="/contact" className="btn btn-primary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox.open && (
        <div className="lightbox-overlay" role="dialog" aria-modal="true" onClick={() => setLightbox({ open: false, src: '', alt: '' })}>
          <div className="lightbox-card" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-bar">
              <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{lightbox.alt}</div>
              <button className="lightbox-close" onClick={() => setLightbox({ open: false, src: '', alt: '' })} aria-label="Close">
                ✕
              </button>
            </div>
            <img className="lightbox-img" src={lightbox.src} alt={lightbox.alt} />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
