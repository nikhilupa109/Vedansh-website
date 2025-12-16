import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaMapMarkerAlt, FaRupeeSign, FaCheckCircle, FaClock, FaTools, FaArrowRight
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

// Optional: map client names to logo paths (recommended place: /public/logos/*)
// Example:
// const CLIENT_LOGOS = {
//   'Hindalco Industries Limited': '/logos/hindalco.png',
// };
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

const Projects = () => {
  const [activeTab, setActiveTab] = useState('ongoing');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);

  // Character animation for title
  useEffect(() => {
    if (!heroTitleRef.current) return;

    const title = heroTitleRef.current;
    const text = title.textContent;
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

      // Add normal (wrappable) space between words
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

  const ongoingProjects = [
    {
      id: 1,
      slug: 'hindalco-e-waste-copper-smelter',
      client: 'Hindalco Industries Limited',
      location: 'Pakhajan, Gujarat',
      description: 'Mechanical Supply including Fabrication and services of Erection and Commissioning for green field, Hindalco E-waste and secondary copper smelter facility',
      orderDate: 'Nov 2025',
      completion: 'Dec 2026',
      category: 'Mechanical',
      scope: ['Fabrication', 'Erection', 'Commissioning', 'E-waste Facility'],
    },
    {
      id: 2,
      slug: 'mundra-petrochem-gpvc-complex',
      client: 'Mundra Petrochem Ltd',
      location: 'Mundra, Gujarat',
      description: 'Execution of complete Electrical works i.e. Erection, testing commissioning of GPVC Complex for 1 MMTPA Green PVC Project',
      orderDate: 'Jun 2025',
      completion: 'Dec 2026',
      category: 'Electrical',
      scope: ['HV/LV Installation', 'Testing', 'Commissioning', 'GPVC Complex'],
    },
    {
      id: 3,
      slug: 'hzl-substation-debari',
      client: 'Hindustan Zinc Ltd',
      location: 'Debari, Rajasthan',
      description: 'EPC of 220kV & 132kV Substation Work and 132kV Line Replacement Work at Debari for Roaster-6 Power Arrangement Project',
      orderDate: 'Jun 2023',
      completion: 'Dec 2025',
      category: 'EPC',
      scope: ['220kV Substation', '132kV Substation', 'Line Replacement', 'Full EPC'],
    },
    {
      id: 4,
      slug: 'mundra-petrochem-cac2-sheeting',
      client: 'Mundra Petrochem Ltd',
      location: 'Mundra, Gujarat',
      description: 'Supply, Erection & Mechanical completion of Sheeting Works on various Pre-Engineered Buildings (PEBs) Structures of Calcium Carbide (CaC2) unit',
      orderDate: 'Jun 2025',
      completion: 'May 2026',
      category: 'Mechanical',
      scope: ['PEB Structures', 'Sheeting Work', 'CaC2 Unit', 'Mechanical Completion'],
    },
    {
      id: 5,
      slug: 'hzl-zawar-mines-om',
      client: 'Hindustan Zinc Ltd',
      location: 'Zawar Mines, Rajasthan',
      description: 'O&M Electrical of Surface & Underground at Zawar Mines',
      orderDate: 'Sep 2022',
      completion: 'Nov 2025',
      category: 'O&M',
      scope: ['Annual Maintenance', 'Surface Operations', 'Underground Operations', 'Electrical O&M'],
    },
    {
      id: 6,
      slug: 'sprng-solar-pooling-substation',
      client: 'Sprng Power Earth Pvt Ltd',
      location: 'Banaskantha, Gujarat',
      description: 'EPC for 220kV Pooling Substation (GIS) at Padan for 250 MW Solar PV Plant',
      orderDate: 'Dec 2024',
      completion: 'Dec 2025',
      category: 'Renewables',
      scope: ['220kV GIS', 'Solar Pooling Station', 'Installation', 'Commissioning'],
    },
    {
      id: 7,
      slug: 'kctl-plant-om-manpower',
      client: 'Kutch Copper Tubes Ltd',
      location: 'Mundra, Gujarat',
      description: 'O&M Manpower deployment at KCTL Plant',
      orderDate: 'Jun 2025',
      completion: 'Jun 2026',
      category: 'O&M',
      scope: ['Manpower Supply', 'Plant Operations', 'Maintenance Services', 'Annual Contract'],
    },
    {
      id: 8,
      slug: 'jindal-wte-boiler-jodhpur',
      client: 'Jindal Urban Waste Management Jodhpur Ltd',
      location: 'Jodhpur, Rajasthan',
      description: 'Erection, Testing and Commissioning of Boiler at WtE Plant',
      orderDate: 'Aug 2025',
      completion: 'Jul 2026',
      category: 'Mechanical',
      scope: ['Boiler Erection', 'WtE Plant', 'Testing', 'Commissioning'],
    },
    {
      id: 9,
      slug: 'adani-kawai-thermal-plant',
      client: 'Adani Infrastructure Management Services Ltd',
      location: 'Kawai, Rajasthan',
      description: 'Operation assistance services for Main Plant and BOP area for 36 months at 2 X 660 MW Kawai Thermal Power Plant',
      orderDate: 'Apr 2025',
      completion: 'Apr 2028',
      category: 'O&M',
      scope: ['Operation Services', '2x660 MW TPP', 'BOP Area', 'Main Plant'],
    },
    {
      id: 10,
      slug: 'hzl-line-replacement-zawar',
      client: 'Hindustan Zinc Ltd',
      location: 'Zawar Mines, Rajasthan',
      description: 'Supply, Installation, testing and commissioning of 33kV & 11kV line replacement work',
      orderDate: 'Mar 2025',
      completion: 'Jan 2026',
      category: 'Electrical',
      scope: ['33kV Line', '11kV Line', 'Earth Pits', 'Testing & Commissioning'],
    }
  ];

  const majorExecutedProjects = [
    {
      id: 1,
      slug: 'adani-kutch-copper-mundra',
      client: 'Adani Kutch Copper Limited',
      location: 'Mundra, Gujarat',
      description: 'Erection, Testing, Commissioning and PG Support for Mechanical, Insulation, Electrical & Instrumentation of WHRB, FSF & PSC Boilers, FGD System, Plant Steam Piping, and PMR Plant',
      category: 'EPC',
      scope: ['1 No. FSF Boiler', '4 Nos. PSC Boilers', 'FGD System', 'PMR Plant', 'Steam Piping'],
      status: 'Completed',
      year: '2023-2024'
    },
    {
      id: 2,
      slug: 'jindal-wte-boiler-jaipur',
      client: 'Jindal Urban Waste Management Jaipur Ltd',
      location: 'Jaipur, Rajasthan',
      description: 'Erection, Testing, and Commissioning of 65 TPH Waste to Heat Energy Boilers',
      category: 'Mechanical',
      scope: ['65 TPH Boiler', 'Waste-to-Energy', 'Complete Erection', 'Commissioning'],
      status: 'Completed',
      year: '2023'
    },
    {
      id: 3,
      slug: 'ultratech-bulk-loading-nathdwara',
      client: 'UltraTech Nathdwara Cement Ltd',
      location: 'Nathdwara, Rajasthan',
      description: 'Electrical Works for Bulk Loading Project and Fabrication and Erection Works of Structure & Equipment',
      category: 'Electrical',
      scope: ['Bulk Loading', 'Structural Fabrication', 'Equipment Erection', 'Electrical Installation'],
      status: 'Completed',
      year: '2021-2024'
    },
    {
      id: 4,
      slug: 'hindalco-motor-alignment-dahej',
      client: 'Hindalco Industries Ltd - Birla Copper Unit',
      location: 'Dahej, Gujarat',
      description: 'Dismantling, Erection & Alignment of Motor at CU-III Smelter and Fabrication & Erection of Water Pipeline at Jetty',
      category: 'Mechanical',
      scope: ['Motor Alignment', 'Dismantling', 'Water Pipeline', 'Jetty Work'],
      status: 'Completed',
      year: '2021-2022'
    },
    {
      id: 5,
      slug: 'hzl-roaster-substation-debari',
      client: 'Hindustan Zinc Ltd',
      location: 'Debari, Rajasthan',
      description: '220kV & 132kV Substation Work - EPC Work for Roaster-6 Power Arrangement Project',
      category: 'EPC',
      scope: ['220kV Substation', '132kV Substation', 'Full EPC Scope', 'Power Arrangement'],
      status: 'Ongoing',
      year: '2023-2025'
    },
    {
      id: 6,
      slug: 'sprng-solar-pooling-barmer',
      client: 'Sprng Natural Power Source Pvt Ltd',
      location: 'Barmer, Rajasthan',
      description: '220kV Solar PV Plant Pooling Substation - EPC Work',
      category: 'Renewables',
      scope: ['220kV Pooling Station', 'Solar Integration', 'Full EPC', 'Testing & Commissioning'],
      status: 'Completed',
      year: '2023-2024'
    },
    {
      id: 7,
      slug: 'hzl-rzo-plant-chittorgarh',
      client: 'Hindustan Zinc Ltd',
      location: 'Chittorgarh, Rajasthan',
      description: 'EPC for Electrical & Instrumentation Works of RZO Plant',
      category: 'EPC',
      scope: ['EI Works', 'RZO Plant', 'Complete Installation', 'Commissioning'],
      status: 'Completed',
      year: '2023'
    },
    {
      id: 8,
      slug: 'sprng-switchyard-200mw-barmer',
      client: 'Sprng Natural Power Source Pvt Ltd',
      location: 'Barmer, Rajasthan',
      description: 'Erection, Testing, Commissioning of 33/220kV Switchyard for 200 MW Solar PV Plant',
      category: 'Renewables',
      scope: ['33/220kV Switchyard', '200 MW Solar', 'Complete Erection', 'T&C'],
      status: 'Completed',
      year: '2023-2024'
    }
  ];

  const upcomingProjects = [
    {
      id: 1,
      slug: 'hzl-switchyard-gis-debari',
      client: 'Hindustan Zinc Ltd',
      location: 'Debari, Rajasthan',
      description: 'EPC for 220kV Outdoor Switchyard cum Transformer Yard and 220kV Indoor GIS at HZL Zinc Smelter',
category: 'EPC',
      scope: ['220kV Switchyard', '220kV GIS', 'Transformer Yard', 'Indoor & Outdoor'],
      status: 'Under Finalization'
    },
    {
      id: 2,
      slug: 'sprng-gis-substation-fatehgarh',
      client: 'Sprng Akshay Urja Pvt Ltd',
      location: 'Fatehgarh, Rajasthan',
      description: 'Installation, Testing & Commissioning of 33/400kV GIS Substation for 800MW Solar Project',
category: 'Renewables',
      scope: ['33/400kV GIS', '800 MW Solar', 'Installation', 'Commissioning'],
      status: 'Under Finalization'
    },
    {
      id: 3,
      slug: 'hindalco-converter-replacement-dahej',
      client: 'Hindalco Industries Limited',
      location: 'Dahej, Gujarat',
      description: 'Replacement of Converter and associated systems and installation of additional cooling water line during shutdown',
category: 'Mechanical',
      scope: ['Converter Replacement', 'Cooling Water Line', 'Shutdown Work', 'System Integration'],
      status: 'Under Finalization'
    }
  ];

  const categories = ['all', 'EPC', 'Electrical', 'Mechanical', 'O&M', 'Renewables'];

  const getFilteredProjects = () => {
    let projects = activeTab === 'ongoing' ? ongoingProjects : 
                   activeTab === 'executed' ? majorExecutedProjects : upcomingProjects;

    if (selectedCategory !== 'all') {
      projects = projects.filter(p => p.category === selectedCategory);
    }
    return projects;
  };

  const stats = [
    { value: '₹226+ Cr', label: 'Current Portfolio Value', icon: FaRupeeSign },
    { value: '18+', label: 'Ongoing Projects', icon: FaClock },
    { value: '250+', label: 'Projects Completed', icon: FaCheckCircle },
    { value: '₹245+ Cr', label: 'Upcoming Projects', icon: FaTools }
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
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
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
    'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
  ];

  // Smart Image Component - tries multiple filename patterns
  const SmartImage = ({ num, type, gradient }) => {
    const [currentAttempt, setCurrentAttempt] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);

    // All possible filename patterns to try
    const getImagePatterns = (num, type) => {
      const folder = type === 'project' ? 'projects' : 'team';
      const prefix = type === 'project' ? 'project' : 'team';

      return [
        `/images/${folder}/${prefix}-${num}.jpg`,
        `/images/${folder}/${prefix}${num}.jpg`,
        `/images/${folder}/${prefix}_${num}.jpg`,
        `/images/${folder}/${prefix}-${num}.JPG`,
        `/images/${folder}/${prefix}${num}.JPG`,
        `/images/${folder}/${prefix.toUpperCase()}-${num}.jpg`,
        `/images/${folder}/${prefix.toUpperCase()}${num}.jpg`,
        `/images/${folder}/${num}.jpg`,
        `/images/${folder}/img${num}.jpg`,
        `/images/${folder}/image${num}.jpg`,
        `/images/${folder}/${prefix}-${String(num).padStart(2, '0')}.jpg`,
        `/images/${folder}/${prefix}${String(num).padStart(2, '0')}.jpg`
      ];
    };

    const patterns = getImagePatterns(num, type);
    const currentPath = patterns[currentAttempt];

    const handleError = () => {
      if (currentAttempt < patterns.length - 1) {
        setCurrentAttempt(prev => prev + 1);
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
          <div style={{
            width: '100%',
            height: '100%',
            background: gradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            {num}
          </div>
        )}
        {currentAttempt < patterns.length && (
          <img 
            src={currentPath}
            alt={`${type} ${num}`}
            onError={handleError}
            onLoad={handleLoad}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              display: imageLoaded ? 'block' : 'none'
            }}
          />
        )}
      </>
    );
  };

  return (
    <>
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
          box-shadow: 0 16px 40px rgba(31, 173, 191, 0.3);
        }

        .team-photo-card {
          flex-shrink: 0;
          width: 350px;
          height: 280px;
          margin: 0 16px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          transition: all 0.4s ease;
        }

        .team-photo-card:hover {
          transform: translateY(-12px) scale(1.05);
          box-shadow: 0 16px 40px rgba(245, 87, 108, 0.3);
        }

        .view-details-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #1fadbf 0%, #16a085 100%);
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          margin-top: 20px;
        }

        .view-details-btn:hover {
          transform: translateX(5px);
          box-shadow: 0 8px 20px rgba(31, 173, 191, 0.4);
        }

        .view-details-btn svg {
          transition: transform 0.3s ease;
        }

        .view-details-btn:hover svg {
          transform: translateX(5px);
        }
      `}</style>

      {/* Hero Section */}
      <section ref={heroRef} style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #F8F9FA 0%, #E5E7EB 100%)', paddingTop: '100px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1 ref={heroTitleRef} style={{ fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: '900', marginBottom: '28px', fontFamily: "'Poppins', sans-serif", color: '#1F2937', lineHeight: '1.1', perspective: '1000px' }}>
              Delivering excellence across India's industrial landscape
            </h1>
            <p className="hero-animate" style={{ fontSize: '22px', color: '#6B7280', lineHeight: '1.7', maxWidth: '750px', margin: '0 auto 40px' }}>
              From mega power plants to renewable energy installations, our project portfolio showcases 19 years of engineering excellence and successful execution.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px', maxWidth: '1200px', margin: '0 auto' }}>
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  background: 'linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)',
                  padding: '40px',
                  borderRadius: '20px',
                  textAlign: 'center',
                  border: '2px solid #E5E7EB',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#1fadbf';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(31, 173, 191, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <stat.icon style={{ fontSize: '48px', color: '#1fadbf', marginBottom: '16px' }} />
                <div style={{ fontSize: '36px', fontWeight: '800', color: '#1F2937', marginBottom: '8px', fontFamily: "'Poppins', sans-serif" }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '16px', color: '#6B7280', fontWeight: '600' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section style={{ padding: '100px 0', backgroundColor: '#1F2937', overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '16px', fontFamily: "'Poppins', sans-serif", color: '#FFFFFF' }}>
            Glimpse of Our Projects
          </h2>
          <p style={{ fontSize: '18px', color: '#E5E7EB', maxWidth: '700px', margin: '0 auto' }}>
            A visual journey through our successful project executions across India
          </p>
        </div>

        <div className="auto-scroll-container">
          <div className="auto-scroll-track">
            {[1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12].map((num, index) => (
              <div key={index} className="photo-card">
                <SmartImage 
                  num={num} 
                  type="project" 
                  gradient={projectGradients[(num - 1) % 12]}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM GALLERY */}
      <section style={{ padding: '100px 0', backgroundColor: '#F8F9FA', overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '16px', fontFamily: "'Poppins', sans-serif", color: '#1F2937' }}>
            Our Team in Action
          </h2>
          <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '700px', margin: '0 auto' }}>
            The dedicated professionals behind every successful project delivery
          </p>
        </div>

        <div className="auto-scroll-container">
          <div className="auto-scroll-track" style={{ animationDuration: '35s', animationDirection: 'reverse' }}>
            {[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10].map((num, index) => (
              <div key={index} className="team-photo-card">
                <SmartImage 
                  num={num} 
                  type="team" 
                  gradient={teamGradients[(num - 1) % 10]}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section style={{ padding: '120px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '60px', flexWrap: 'wrap' }}>
            {['ongoing', 'executed', 'upcoming'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '16px 40px',
                  fontSize: '18px',
                  fontWeight: '700',
                  fontFamily: "'Poppins', sans-serif",
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: activeTab === tab ? 'linear-gradient(135deg, #1fadbf 0%, #16a085 100%)' : '#F8F9FA',
                  color: activeTab === tab ? '#FFFFFF' : '#6B7280',
                  boxShadow: activeTab === tab ? '0 8px 20px rgba(31, 173, 191, 0.3)' : 'none',
                  textTransform: 'capitalize'
                }}
              >
                {tab === 'ongoing' ? 'Ongoing Projects' : tab === 'executed' ? 'Executed Projects' : 'Upcoming Projects'}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '60px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '10px 24px',
                  fontSize: '14px',
                  fontWeight: '600',
                  borderRadius: '8px',
                  border: `2px solid ${selectedCategory === cat ? '#1fadbf' : '#E5E7EB'}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: selectedCategory === cat ? 'rgba(31, 173, 191, 0.1)' : '#FFFFFF',
                  color: selectedCategory === cat ? '#1fadbf' : '#6B7280',
                  textTransform: 'capitalize'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))', gap: '32px' }}>
            {getFilteredProjects().map((project) => (
              <div
                key={project.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '32px',
                  border: '1px solid #E5E7EB',
                  transition: 'all 0.4s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(31, 173, 191, 0.15)';
                  e.currentTarget.style.borderColor = '#1fadbf';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#E5E7EB';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(31, 173, 191, 0.1)', color: '#1fadbf', borderRadius: '6px', fontSize: '12px', fontWeight: '700', marginBottom: '0px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {project.category}
                </div>
                  {(project.clientLogo || CLIENT_LOGOS[project.client]) && (
                    <img
                      src={project.clientLogo || CLIENT_LOGOS[project.client]}
                      alt={`${project.client} logo`}
                      loading="lazy"
                      style={{
                        height: '34px',
                        width: 'auto',
                        maxWidth: '140px',
                        objectFit: 'contain',
                        opacity: 0.9,
                        filter: 'grayscale(0%)'
                      }}
                    />
                  )}
                </div>

                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#1F2937', marginBottom: '12px', fontFamily: "'Poppins', sans-serif", lineHeight: '1.3' }}>
                  {project.client}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <FaMapMarkerAlt style={{ color: '#1fadbf', fontSize: '16px' }} />
                  <span style={{ fontSize: '14px', color: '#6B7280', fontWeight: '600' }}>{project.location}</span>
                </div>

                <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: '1.6', marginBottom: '20px' }}>
                  {project.description}
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: '#1F2937', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Scope of Work:</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.scope.map((item, idx) => (
                      <span key={idx} style={{ fontSize: '12px', padding: '4px 12px', background: '#F8F9FA', color: '#4B5563', borderRadius: '6px', border: '1px solid #E5E7EB' }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', paddingTop: '20px', borderTop: '1px solid #E5E7EB' }}>
{project.orderDate && (
                    <div>
                      <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '4px' }}>Order Date</div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#1F2937' }}>{project.orderDate}</div>
                    </div>
                  )}
                  {project.completion && (
                    <div>
                      <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '4px' }}>Completion</div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#1F2937' }}>{project.completion}</div>
                    </div>
                  )}
                  {project.year && (
                    <div>
                      <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '4px' }}>Year</div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#1F2937' }}>{project.year}</div>
                    </div>
                  )}
                  {project.status && (
                    <div>
                      <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '4px' }}>Status</div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: project.status === 'Completed' ? '#10B981' : '#1fadbf' }}>{project.status}</div>
                    </div>
                  )}
                </div>


                {/* View Details Button */}
                <Link to={`/projects/${project.slug}`} state={{ project }} className="view-details-btn">
                  View Details
                  <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to start your next project?</h2>
            <p>Let's discuss how our proven execution capabilities can bring your vision to life.</p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '32px' }}>
              <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
              <Link to="/services" className="btn btn-secondary">Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
