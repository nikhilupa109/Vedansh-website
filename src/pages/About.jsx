import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaShieldAlt, FaStar, FaHandshake, FaLightbulb, FaCheckCircle, FaLeaf } from 'react-icons/fa';
import { HiCheckCircle } from 'react-icons/hi';

gsap.registerPlugin(ScrollTrigger);

// Fallback team data
const fallbackTeam = [
  { name: 'Lokendra Upadhyay', position: 'Managing Director', initials: 'LU' },
  { name: 'K.V. Chamy', position: 'Head - Business Development', initials: 'KC' },
  { name: 'Siddhartha Majumder', position: 'Chief Advisor - Projects', initials: 'SM' },
  { name: 'Arun Shrimali', position: 'Head – Civil Projects', initials: 'AS' },
  { name: 'D.K. Gupta', position: 'Technical Head - Electrical', initials: 'DG' },
  { name: 'R.C. Rathore', position: 'Head - Planning & Execution', initials: 'RR' },
  { name: 'Santosh Giri', position: 'Head - Project Commercial', initials: 'SG' },
  { name: 'Amit Kr. Singh', position: 'Sr. Manager - EHS', initials: 'AS' },
  { name: 'Nikhil Upadhyay', position: 'Sr. Manager - Internal Control', initials: 'NU' },
  { name: 'Pragnesh Prajapati', position: 'Sr. Manager – Projects', initials: 'PP' },
];

const About = () => {
  const [teamData, setTeamData] = useState(fallbackTeam);

  const heroRef = useRef(null);
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
        if (module.teamMembers && module.teamMembers.length > 0) {
          setTeamData(module.teamMembers);
        }
      } catch (error) {
        console.log('Using fallback team data');
      }
    };

    loadTeamData();
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

  // Values animation
  useEffect(() => {
    if (!valuesRef.current) return;

    const ctx = gsap.context(() => {
      const elements = valuesRef.current.querySelectorAll('.value-card');
      if (elements.length > 0) {
        gsap.from(elements, {
          clipPath: "inset(100% 0% 0% 0%)",
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.12,
          ease: "expo.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        });
      }
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
        ease: "power3.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 70%",
        }
      });

      gsap.from('.milestone-box', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: '.milestone-box',
          start: "top 80%",
        }
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
        transformOrigin: "left",
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: industryRef.current,
          start: "top 80%",
        }
      });
    }, industryRef);

    return () => ctx.revert();
  }, []);

  // Revenue trajectory animation
  useEffect(() => {
    if (!revenueRef.current) return;

    const ctx = gsap.context(() => {
      const bars = revenueRef.current.querySelectorAll('.revenue-bar');
      gsap.from(bars, {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: revenueRef.current,
          start: "top 80%",
        }
      });
    }, revenueRef);

    return () => ctx.revert();
  }, []);

  // Certifications animation
  useEffect(() => {
    if (!certificationsRef.current) return;

    const ctx = gsap.context(() => {
      const elements = certificationsRef.current.querySelectorAll('.cert-badge');
      if (elements.length > 0) {
        gsap.from(elements, {
          clipPath: "inset(100% 0% 0% 0%)",
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.12,
          ease: "expo.out",
          scrollTrigger: {
            trigger: certificationsRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        });
      }
    }, certificationsRef);

    return () => ctx.revert();
  }, []);

  const values = [
    { Icon: FaShieldAlt, title: 'Safety First', description: 'Zero fatalities with industry-leading safety protocols. We never compromise on workplace safety.' },
    { Icon: FaStar, title: 'Quality Excellence', description: 'Triple ISO certification and IBR approval ensure the highest standards in every aspect of our work.' },
    { Icon: FaHandshake, title: 'Client Partnership', description: 'Long-term relationships built on trust, transparency, and consistent delivery.' },
    { Icon: FaLightbulb, title: 'Innovation', description: 'Leveraging latest technologies and methodologies to deliver efficient, sustainable solutions.' },
    { Icon: FaCheckCircle, title: 'Integrity', description: 'Ethical business practices and honest communication form the foundation of all our relationships.' },
    { Icon: FaLeaf, title: 'Sustainability', description: 'Environmental responsibility is central to our operations, from planning through execution.' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #F8F9FA 0%, #E5E7EB 100%)', paddingTop: '100px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 ref={heroTitleRef} style={{ fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: '900', marginBottom: '28px', fontFamily: "'Poppins', sans-serif", color: '#1F2937', lineHeight: '1.1', perspective: '1000px' }}>
              Building India's industrial infrastructure since 2006
            </h1>
            <p className="hero-animate" style={{ fontSize: '22px', color: '#6B7280', lineHeight: '1.7', maxWidth: '750px', margin: '0 auto 40px' }}>
              A leading EPC contractor delivering world-class plant erection, project management, and industrial solutions across India's core infrastructure sectors.
            </p>
            <div className="hero-animate" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/projects" className="btn btn-primary">View Our Projects</Link>
              <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section style={{ padding: '60px 0', backgroundColor: '#1F2937' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center' }}>
            <div><div style={{ fontSize: '48px', fontWeight: '900', color: '#1fadbf', marginBottom: '8px', fontFamily: "'Poppins', sans-serif" }}>2006</div><p style={{ fontSize: '16px', color: '#E5E7EB', fontWeight: '500' }}>Founded in Chittorgarh</p></div>
            <div><div style={{ fontSize: '48px', fontWeight: '900', color: '#1fadbf', marginBottom: '8px', fontFamily: "'Poppins', sans-serif" }}>250+</div><p style={{ fontSize: '16px', color: '#E5E7EB', fontWeight: '500' }}>Projects Delivered</p></div>
            <div><div style={{ fontSize: '48px', fontWeight: '900', color: '#1fadbf', marginBottom: '8px', fontFamily: "'Poppins', sans-serif" }}>20+</div><p style={{ fontSize: '16px', color: '#E5E7EB', fontWeight: '500' }}>Major Clients</p></div>
            <div><div style={{ fontSize: '48px', fontWeight: '900', color: '#1fadbf', marginBottom: '8px', fontFamily: "'Poppins', sans-serif" }}>₹166Cr</div><p style={{ fontSize: '16px', color: '#E5E7EB', fontWeight: '500' }}>Annual Turnover (FY24-25)</p></div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section ref={storyRef} style={{ padding: '120px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <div className="story-content">
              <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '28px', fontFamily: "'Poppins', sans-serif", color: '#1F2937', lineHeight: '1.2' }}>From regional contractor to national leader</h2>
              <p style={{ fontSize: '18px', color: '#6B7280', lineHeight: '1.8', marginBottom: '24px' }}><strong style={{ color: '#1F2937' }}>Founded in 2006</strong> in the industrial heartland of Chittorgarh, Rajasthan, Vedansh Infra Services began with a simple mission: deliver uncompromising quality in every industrial project we undertake.</p>
              <p style={{ fontSize: '18px', color: '#6B7280', lineHeight: '1.8', marginBottom: '24px' }}>Over 19 years, we've evolved from a regional contractor into one of India's most trusted names in industrial EPC and plant erection, executing projects worth over ₹226 crores currently underway.</p>
              <p style={{ fontSize: '18px', color: '#6B7280', lineHeight: '1.8' }}>With <strong style={{ color: '#1F2937' }}>77+ lakh safe man-hours</strong> and zero fatalities, we build lasting partnerships based on trust and consistent delivery.</p>
            </div>
            <div className="milestone-box" style={{ background: 'linear-gradient(135deg, #1fadbf 0%, #16a085 100%)', borderRadius: '24px', padding: '48px', color: 'white', boxShadow: '0 20px 60px rgba(31, 173, 191, 0.3)' }}>
              <h3 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '36px', fontFamily: "'Poppins', sans-serif" }}>Key Milestones</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div><div style={{ fontSize: '52px', fontWeight: '900', marginBottom: '8px', fontFamily: "'Poppins', sans-serif" }}>77L+</div><p style={{ fontSize: '18px', fontWeight: '600', marginBottom: '4px' }}>Safe Man-Hours</p><p style={{ fontSize: '15px', opacity: '0.9' }}>Zero fatalities record</p></div>
                <div><div style={{ fontSize: '52px', fontWeight: '900', marginBottom: '8px', fontFamily: "'Poppins', sans-serif" }}>₹403 Cr</div><p style={{ fontSize: '18px', fontWeight: '600', marginBottom: '4px' }}>Cumulative Revenue</p><p style={{ fontSize: '15px', opacity: '0.9' }}>Last 4 Years (FY21-25)</p></div>
                <div><div style={{ fontSize: '52px', fontWeight: '900', marginBottom: '8px', fontFamily: "'Poppins', sans-serif" }}>4</div><p style={{ fontSize: '18px', fontWeight: '600', marginBottom: '4px' }}>ISO Certifications</p><p style={{ fontSize: '15px', opacity: '0.9' }}>Including IBR approval</p></div>
                <div><div style={{ fontSize: '52px', fontWeight: '900', marginBottom: '8px', fontFamily: "'Poppins', sans-serif" }}>₹226Cr+</div><p style={{ fontSize: '18px', fontWeight: '600', marginBottom: '4px' }}>Ongoing Projects</p><p style={{ fontSize: '15px', opacity: '0.9' }}>Major contracts underway</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Growth Trajectory */}
      <section ref={revenueRef} style={{ padding: '120px 0', backgroundColor: '#F8F9FA' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '20px', fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}>Consistent growth trajectory</h2>
            <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '700px', margin: '0 auto' }}>Nearly 3x revenue growth in 4 years, reflecting our expanding capabilities and client trust</p>
          </div>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '24px', marginBottom: '40px' }}>
              {[
                { year: 'FY 21-22', amount: '₹57 Cr', height: 35, color: '#60A5FA' },
                { year: 'FY 22-23', amount: '₹66 Cr', height: 40, color: '#3B82F6' },
                { year: 'FY 23-24', amount: '₹115 Cr', height: 70, color: '#2563EB' },
                { year: 'FY 24-25', amount: '₹166 Cr', height: 100, color: '#1fadbf' }
              ].map((data, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ height: '280px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', marginBottom: '16px' }}>
                    <div 
                      className="revenue-bar"
                      style={{ 
                        width: '100%', 
                        maxWidth: '120px',
                        height: data.height + '%', 
                        background: 'linear-gradient(to top, ' + data.color + ', ' + data.color + 'cc)',
                        borderRadius: '12px 12px 0 0',
                        boxShadow: '0 -4px 20px rgba(31, 173, 191, 0.2)',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        paddingTop: '16px'
                      }}
                    >
                      <span style={{ fontSize: '20px', fontWeight: '800', color: 'white', fontFamily: "'Poppins', sans-serif" }}>
                        {data.amount}
                      </span>
                    </div>
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: '#1F2937', fontFamily: "'Poppins', sans-serif" }}>
                    {data.year}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', padding: '32px', backgroundColor: 'white', borderRadius: '16px', border: '2px solid #1fadbf' }}>
              <p style={{ fontSize: '18px', color: '#1F2937', fontWeight: '600', marginBottom: '8px' }}>
                <strong style={{ fontSize: '24px', color: '#1fadbf' }}>192% Growth</strong> from FY 21-22 to FY 24-25
              </p>
              <p style={{ fontSize: '16px', color: '#6B7280' }}>
                Demonstrating consistent performance and market expansion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} style={{ padding: '120px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '20px', fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}>Values that drive us forward</h2>
            <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '700px', margin: '0 auto' }}>These core principles guide every decision we make and every project we deliver</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {values.map((value, i) => (
              <div key={i} className="value-card" style={{ background: '#F8F9FA', padding: '48px', borderRadius: '24px', border: '1px solid #E5E7EB', transition: 'all 0.3s ease', clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-12px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.1)'; e.currentTarget.style.borderColor = '#1fadbf'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#E5E7EB'; }}>
                <value.Icon style={{ fontSize: '48px', color: '#1fadbf', marginBottom: '20px' }} />
                <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px', fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}>{value.title}</h3>
                <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.7' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section style={{ padding: '120px 0', backgroundColor: '#F8F9FA' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '20px', fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}>
              Leadership Team
            </h2>
            <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '700px', margin: '0 auto' }}>
              Led by experienced professionals with decades of combined expertise in industrial project execution
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {teamData.map((member, index) => (
              <div 
                key={index}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '40px 32px',
                  borderRadius: '20px',
                  textAlign: 'center',
                  border: '1px solid #E5E7EB',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  opacity: 1,
                  transform: 'translateY(0)'
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
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1fadbf 0%, #16a085 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '32px',
                  fontWeight: '700',
                  color: 'white',
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  {member.initials}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}>
                  {member.name}
                </h3>
                <p style={{ fontSize: '15px', color: '#1fadbf', fontWeight: '600' }}>
                  {member.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Distribution */}
      <section ref={industryRef} style={{ padding: '120px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '20px', fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}>Industry expertise</h2>
            <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '700px', margin: '0 auto' }}>Our diversified portfolio across major industrial sectors</p>
          </div>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {[
              { name: 'Metal & Mining', percentage: 45, color: '#1fadbf' },
              { name: 'Power & Renewables', percentage: 22, color: '#16a085' },
              { name: 'Cement', percentage: 18, color: '#2DD4BF' },
              { name: 'Chemical & Fertilizers', percentage: 10, color: '#22D3EE' },
              { name: 'Infrastructure', percentage: 5, color: '#60A5FA' }
            ].map((industry, i) => (
              <div key={i} style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937', fontFamily: "'Poppins', sans-serif" }}>{industry.name}</span>
                  <span style={{ fontSize: '18px', fontWeight: '700', color: industry.color, fontFamily: "'Poppins', sans-serif" }}>{industry.percentage}%</span>
                </div>
                <div style={{ height: '16px', backgroundColor: '#E5E7EB', borderRadius: '12px', overflow: 'hidden' }}>
                  <div className="industry-bar" style={{ height: '100%', width: industry.percentage + '%', background: 'linear-gradient(90deg, ' + industry.color + ' 0%, ' + industry.color + 'dd 100%)', borderRadius: '12px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section ref={certificationsRef} style={{ padding: '120px 0', backgroundColor: '#F8F9FA' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '20px', fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}>Certifications & approvals</h2>
            <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '700px', margin: '0 auto' }}>Industry-recognized certifications that validate our commitment to excellence</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px', maxWidth: '1000px', margin: '0 auto' }}>
            {[
              { name: 'ISO 9001:2015', desc: 'Quality Management System' },
              { name: 'ISO 14001:2015', desc: 'Environmental Management' },
              { name: 'ISO 45001:2018', desc: 'Health & Safety Management' },
              { name: 'IBR Approval', desc: 'Special Category Boiler Erector' }
            ].map((cert, i) => (
              <div key={i} className="cert-badge" style={{ background: '#FFFFFF', padding: '40px', borderRadius: '20px', textAlign: 'center', border: '2px solid #E5E7EB', transition: 'all 0.3s ease', clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#1fadbf'; e.currentTarget.style.transform = 'scale(1.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.transform = 'scale(1)'; }}>
                <HiCheckCircle style={{ fontSize: '64px', color: '#1fadbf', marginBottom: '16px' }} />
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}>{cert.name}</h3>
                <p style={{ fontSize: '15px', color: '#6B7280' }}>{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to start your next project?</h2>
            <p>Let's discuss how our 19 years of expertise can bring value to your industrial infrastructure goals.</p>
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

export default About;
