import { useState, useRef, useEffect } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaCheckCircle,
  FaUser,
  FaBuilding,
  FaProjectDiagram
} from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  const heroRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

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
    const infoCards = infoRef.current?.querySelectorAll('.info-item');
    if (infoCards) {
      gsap.fromTo(infoCards,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 80%'
          }
        }
      );
    }

    // Form animation
    if (formRef.current) {
      gsap.fromTo(formRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 75%'
          }
        }
      );
    }

    // Map animation
    if (mapRef.current) {
      gsap.fromTo(mapRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 75%'
          }
        }
      );
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });

    try {
      // Simulate API call - Replace with your actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Form submitted:', formData);

      setFormStatus({ submitting: false, submitted: true, error: false });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: false });
      }, 5000);
    } catch (error) {
      setFormStatus({ submitting: false, submitted: false, error: true });
    }
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Call Us',
      primary: '+91 89551 77870',
      secondary: 'Mon-Sat, 9:00 AM - 6:00 PM'
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      primary: 'info@vedansh.in',
      secondary: 'We reply within 24 hours'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      primary: 'F-16, Block-II, Ambe Market',
      secondary: 'Chittorgarh - 312001, Rajasthan'
    }
  ];

  const projectTypes = [
    'EPC Projects',
    'Electrical Works',
    'Mechanical Works',
    'Solar/Renewable Energy',
    'Plant Operations & Maintenance',
    'Other'
  ];

  return (
    <>
      <style>{`
        .info-item {
          background: white;
          padding: 32px;
          border-radius: 16px;
          border: 2px solid #E5E7EB;
          text-align: center;
          transition: all 0.3s ease;
        }

        .info-item:hover {
          border-color: #1fadbf;
          transform: translateY(-8px);
          box-shadow: 0 12px 28px rgba(31, 173, 191, 0.15);
        }

        .info-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 20px;
          border-radius: 16px;
          background: linear-gradient(135deg, #1fadbf 0%, #16a085 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .info-item:hover .info-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .form-input,
        .form-textarea,
        .form-select {
          width: 100%;
          padding: 14px 18px;
          border: 2px solid #E5E7EB;
          border-radius: 12px;
          font-size: 15px;
          font-family: inherit;
          transition: all 0.3s ease;
          background: white;
        }

        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
          outline: none;
          border-color: #1fadbf;
          box-shadow: 0 0 0 4px rgba(31, 173, 191, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 140px;
        }

        .submit-btn {
          width: 100%;
          padding: 16px 32px;
          background: linear-gradient(135deg, #1fadbf 0%, #16a085 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(31, 173, 191, 0.3);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .map-container {
          border-radius: 20px;
          overflow: hidden;
          border: 3px solid #E5E7EB;
          transition: all 0.3s ease;
        }

        .map-container:hover {
          border-color: #1fadbf;
          box-shadow: 0 12px 28px rgba(31, 173, 191, 0.15);
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
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
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 
              className="animate-fade-in"
              style={{ 
                fontSize: 'clamp(36px, 6vw, 56px)',
                fontWeight: '900',
                color: '#1F2937',
                marginBottom: '20px',
                lineHeight: '1.2',
                fontFamily: "'Poppins', sans-serif"
              }}
            >
              Get In Touch
            </h1>

            <p 
              className="animate-fade-in"
              style={{ 
                fontSize: '20px',
                color: '#6B7280',
                lineHeight: '1.7',
                maxWidth: '700px',
                margin: '0 auto'
              }}
            >
              Get in touch with our team of experts. We're here to discuss how we can bring your industrial infrastructure vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {contactInfo.map((info, idx) => (
              <div key={idx} className="info-item">
                <div className="info-icon">
                  <info.icon style={{ fontSize: '28px', color: 'white' }} />
                </div>
                <h3 style={{ 
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#1F2937',
                  marginBottom: '12px',
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  {info.title}
                </h3>
                <p style={{ 
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#1fadbf',
                  marginBottom: '8px'
                }}>
                  {info.primary}
                </p>
                <p style={{ 
                  fontSize: '14px',
                  color: '#6B7280'
                }}>
                  {info.secondary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Our Office Section */}
      <section style={{ padding: '80px 0', background: '#F8F9FA' }}>
        <div className="container">
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            {/* Map & Trust Section */}
            <div ref={mapRef}>
              <h2 style={{ 
                fontSize: '36px',
                fontWeight: '800',
                color: '#1F2937',
                marginBottom: '16px',
                fontFamily: "'Poppins', sans-serif"
              }}>
                Visit Our Office
              </h2>
              <p style={{ 
                fontSize: '18px',
                color: '#6B7280',
                marginBottom: '32px'
              }}>
                Come meet us at our Chittorgarh office or reach out anytime.
              </p>

              {/* Google Map */}
              <div className="map-container" style={{ marginBottom: '32px', height: '400px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.7562489147446!2d74.62736!3d24.87995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUyJzQ4LjAiTiA3NMKwMzcnMzguNSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vedansh Infra Location"
                />
              </div>

              {/* Why Choose Us */}
              <div style={{
                background: 'white',
                padding: '32px',
                borderRadius: '20px',
                border: '2px solid #E5E7EB'
              }}>
                <h3 style={{ 
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#1F2937',
                  marginBottom: '20px',
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Why Partner With Us
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #1fadbf 0%, #16a085 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <FaCheckCircle style={{ color: 'white', fontSize: '20px' }} />
                    </div>
                    <div>
                      <h4 style={{ 
                        fontSize: '16px',
                        fontWeight: '700',
                        color: '#1F2937',
                        marginBottom: '6px'
                      }}>
                        19+ Years Experience
                      </h4>
                      <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6' }}>
                        Nearly two decades of delivering excellence in industrial infrastructure.
                      </p>
                    </div>
                  </div>

                  <div style={{ 
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #1fadbf 0%, #16a085 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <FaCheckCircle style={{ color: 'white', fontSize: '20px' }} />
                    </div>
                    <div>
                      <h4 style={{ 
                        fontSize: '16px',
                        fontWeight: '700',
                        color: '#1F2937',
                        marginBottom: '6px'
                      }}>
                        ISO Certified Quality
                      </h4>
                      <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6' }}>
                        ISO 9001, 14001, 45001 certified with IBR approval for quality assurance.
                      </p>
                    </div>
                  </div>

                  <div style={{ 
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #1fadbf 0%, #16a085 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <FaCheckCircle style={{ color: 'white', fontSize: '20px' }} />
                    </div>
                    <div>
                      <h4 style={{ 
                        fontSize: '16px',
                        fontWeight: '700',
                        color: '#1F2937',
                        marginBottom: '6px'
                      }}>
                        250+ Projects Delivered
                      </h4>
                      <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6' }}>
                        Successfully completed major projects across India's industrial sectors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Send Us a Message Section */}
      <section style={{ padding: '80px 0', background: '#F8F9FA' }}>
        <div className="container">
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            {/* Contact Form */}
            <div ref={formRef}>
              <h2 style={{ 
                fontSize: '36px',
                fontWeight: '800',
                color: '#1F2937',
                marginBottom: '16px',
                fontFamily: "'Poppins', sans-serif"
              }}>
                Send Us a Message
              </h2>
              <p style={{ 
                fontSize: '18px',
                color: '#6B7280',
                marginBottom: '32px'
              }}>
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} style={{ 
                background: 'white',
                padding: '40px',
                borderRadius: '20px',
                border: '2px solid #E5E7EB',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}>
                <div>
                  <label style={{ 
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '8px'
                  }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="John Doe"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={{ 
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '8px'
                    }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label style={{ 
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '8px'
                    }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ 
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '8px'
                  }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your Company Ltd."
                  />
                </div>

                <div>
                  <label style={{ 
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '8px'
                  }}>
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="form-select"
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type, idx) => (
                      <option key={idx} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ 
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '8px'
                  }}>
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                {formStatus.submitted && (
                  <div style={{
                    padding: '16px',
                    background: '#D1FAE5',
                    border: '2px solid #34D399',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    color: '#065F46'
                  }}>
                    <FaCheckCircle style={{ fontSize: '20px' }} />
                    <span style={{ fontWeight: '600' }}>
                      Thank you! We'll get back to you within 24 hours.
                    </span>
                  </div>
                )}

                {formStatus.error && (
                  <div style={{
                    padding: '16px',
                    background: '#FEE2E2',
                    border: '2px solid #F87171',
                    borderRadius: '12px',
                    color: '#991B1B',
                    fontWeight: '600'
                  }}>
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className="submit-btn"
                >
                  {formStatus.submitting ? (
                    <>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        border: '3px solid rgba(255,255,255,0.3)',
                        borderTop: '3px solid white',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaCheckCircle />
                    </>
                  )}
                </button>
              </form>
            </div>

                      </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
