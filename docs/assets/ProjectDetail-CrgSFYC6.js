import{a as e,i as t,n,r,s as i,t as a}from"./index-C-jEY99a.js";import{n as o,t as s}from"./ScrollTrigger-QVAB6i91.js";import{A as c,S as l,c as u,d,f,h as p,k as m,n as h,s as g,t as _,x as v}from"./fa-B4iwqdVm.js";import{n as y,t as b}from"./projects-BFwIHkC5.js";var x=i(),S=a();o.registerPlugin(s);var C={"Adani Infrastructure Management Services Ltd":`/logos/adani.png`,"Adani Kutch Copper Limited":`/logos/adani.png`,"Hindalco Industries Limited":`/logos/hindalco.png`,"Hindalco Industries Ltd - Birla Copper Unit":`/logos/aditya-birla.png`,"Hindustan Zinc Ltd":`/logos/hindustan-zinc.png`,"Jindal Urban Waste Management Jaipur Ltd":`/logos/jindal.png`,"Jindal Urban Waste Management Jodhpur Ltd":`/logos/jindal.png`,"Kutch Copper Tubes Ltd":`/logos/adani.png`,"Mundra Petrochem Ltd":`/logos/adani.png`,"Sprng Akshay Urja Pvt Ltd":`/logos/sprng.png`,"Sprng Natural Power Source Pvt Ltd":`/logos/sprng.png`,"Sprng Power Earth Pvt Ltd":`/logos/sprng.png`,"UltraTech Nathdwara Cement Ltd":`/logos/ultratech.png`},w=()=>{let{slug:i}=e();t();let a=r().state?.project,s=b(i)||a,w=s?.clientLogo||C[s?.client],T=(0,x.useRef)(null),E=(0,x.useRef)(null),D=(0,x.useRef)(null),O=(0,x.useRef)(null),k=(0,x.useRef)(null);if((0,x.useEffect)(()=>{if(window.scrollTo(0,0),!s)return;let e=T.current?.querySelectorAll(`.animate-fade-in`);e&&o.fromTo(e,{y:60,opacity:0},{y:0,opacity:1,duration:1,stagger:.2,ease:`power3.out`,delay:.3});let t=E.current?.querySelectorAll(`.info-card`);t&&o.fromTo(t,{scale:.8,opacity:0},{scale:1,opacity:1,duration:.6,stagger:.1,ease:`back.out(1.5)`,scrollTrigger:{trigger:E.current,start:`top 80%`}});let n=D.current?.querySelectorAll(`.detail-card`);n&&o.fromTo(n,{y:80,opacity:0},{y:0,opacity:1,duration:.8,stagger:.2,ease:`power3.out`,scrollTrigger:{trigger:D.current,start:`top 75%`}});let r=O.current?.querySelectorAll(`.highlight-item`);r&&o.fromTo(r,{y:60,opacity:0,scale:.9},{y:0,opacity:1,scale:1,duration:.7,stagger:.15,ease:`back.out(1.5)`,scrollTrigger:{trigger:O.current,start:`top 80%`}});let i=k.current?.querySelectorAll(`.feature-card`);i&&o.fromTo(i,{y:60,opacity:0,scale:.95},{y:0,opacity:1,scale:1,duration:.6,stagger:.1,ease:`back.out(1.5)`,scrollTrigger:{trigger:k.current,start:`top 80%`}})},[s,i]),!s)return(0,S.jsxs)(`div`,{style:{minHeight:`60vh`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,padding:`120px 20px 80px`},children:[(0,S.jsx)(`h2`,{style:{fontSize:`32px`,fontWeight:`700`,color:`#1F2937`,marginBottom:`16px`},children:`Project Not Found`}),(0,S.jsx)(`p`,{style:{fontSize:`18px`,color:`#6B7280`,marginBottom:`32px`},children:`The project you're looking for doesn't exist or has been moved.`}),(0,S.jsxs)(n,{to:`/projects`,style:{display:`inline-flex`,alignItems:`center`,gap:`8px`,padding:`14px 32px`,background:`linear-gradient(135deg, #1fadbf 0%, #16a085 100%)`,color:`white`,textDecoration:`none`,borderRadius:`10px`,fontWeight:`600`,fontSize:`16px`,transition:`all 0.3s ease`},children:[(0,S.jsx)(_,{}),`Back to Projects`]})]});let A=s?y(s,3):[];return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`style`,{children:`
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
          transform: translateY(-5px);
          box-shadow: 0 12px 28px rgba(31, 173, 191, 0.15);
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
          transform: translateY(-8px);
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
          transform: translateY(-8px);
          box-shadow: 0 16px 32px rgba(31, 173, 191, 0.15);
        }

        .feature-card {
          cursor: default;
        }

        .feature-card:hover {
          border-color: #1fadbf !important;
          transform: translateY(-8px);
          box-shadow: 0 16px 32px rgba(31, 173, 191, 0.15);
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
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(31, 173, 191, 0.15);
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
      `}),(0,S.jsx)(`section`,{ref:T,style:{background:`linear-gradient(135deg, #F8F9FA 0%, #E5E7EB 100%)`,padding:`140px 0 80px`,position:`relative`,overflow:`hidden`},children:(0,S.jsxs)(`div`,{className:`container`,children:[(0,S.jsxs)(n,{to:`/projects`,className:`back-btn animate-fade-in`,children:[(0,S.jsx)(_,{}),`Back to Projects`]}),(0,S.jsxs)(`div`,{style:{marginTop:`40px`,maxWidth:`1000px`},children:[(0,S.jsx)(`div`,{className:`animate-fade-in`,style:{display:`inline-block`,padding:`8px 20px`,background:`rgba(31, 173, 191, 0.1)`,color:`#1fadbf`,borderRadius:`8px`,fontSize:`14px`,fontWeight:`700`,marginBottom:`20px`,textTransform:`uppercase`,letterSpacing:`0.5px`},children:s.category}),(0,S.jsx)(`h1`,{className:`animate-fade-in`,style:{fontSize:`clamp(32px, 5vw, 56px)`,fontWeight:`900`,color:`#1F2937`,marginBottom:`20px`,lineHeight:`1.2`,fontFamily:`'Poppins', sans-serif`},children:s.title}),(0,S.jsx)(`div`,{className:`animate-fade-in`,style:{fontSize:`20px`,color:`#6B7280`,lineHeight:`1.7`,marginBottom:`32px`,maxWidth:`800px`},children:s.description}),(0,S.jsxs)(`div`,{className:`animate-fade-in`,style:{display:`flex`,flexWrap:`wrap`,gap:`20px`,alignItems:`center`},children:[(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,S.jsx)(g,{style:{color:`#1fadbf`,fontSize:`20px`}}),w&&(0,S.jsx)(`img`,{src:w,alt:`${s.client} logo`,loading:`lazy`,style:{height:`32px`,width:`auto`,maxWidth:`140px`,objectFit:`contain`,marginLeft:`8px`,opacity:.9}}),(0,S.jsx)(`span`,{style:{fontSize:`16px`,color:`#1F2937`,fontWeight:`600`},children:s.client})]}),(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,S.jsx)(l,{style:{color:`#1fadbf`,fontSize:`20px`}}),(0,S.jsx)(`span`,{style:{fontSize:`16px`,color:`#1F2937`,fontWeight:`600`},children:s.location})]})]})]})]})}),(0,S.jsx)(`section`,{ref:E,style:{padding:`60px 0`,background:`white`,marginTop:`-40px`,position:`relative`,zIndex:1},children:(0,S.jsx)(`div`,{className:`container`,children:(0,S.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(220px, 1fr))`,gap:`24px`,maxWidth:`1000px`},children:[s.orderDate&&(0,S.jsxs)(`div`,{className:`info-card`,children:[(0,S.jsx)(u,{style:{fontSize:`28px`,color:`#1fadbf`,marginBottom:`12px`}}),(0,S.jsx)(`div`,{style:{fontSize:`13px`,color:`#6B7280`,marginBottom:`4px`},children:`Order Date`}),(0,S.jsx)(`div`,{style:{fontSize:`18px`,fontWeight:`700`,color:`#1F2937`},children:s.orderDate})]}),s.completion&&(0,S.jsxs)(`div`,{className:`info-card`,children:[(0,S.jsx)(f,{style:{fontSize:`28px`,color:`#1fadbf`,marginBottom:`12px`}}),(0,S.jsx)(`div`,{style:{fontSize:`13px`,color:`#6B7280`,marginBottom:`4px`},children:`Completion`}),(0,S.jsx)(`div`,{style:{fontSize:`18px`,fontWeight:`700`,color:`#1F2937`},children:s.completion})]}),s.year&&(0,S.jsxs)(`div`,{className:`info-card`,children:[(0,S.jsx)(u,{style:{fontSize:`28px`,color:`#1fadbf`,marginBottom:`12px`}}),(0,S.jsx)(`div`,{style:{fontSize:`13px`,color:`#6B7280`,marginBottom:`4px`},children:`Project Year`}),(0,S.jsx)(`div`,{style:{fontSize:`18px`,fontWeight:`700`,color:`#1F2937`},children:s.year})]}),s.status&&(0,S.jsxs)(`div`,{className:`info-card`,children:[(0,S.jsx)(d,{style:{fontSize:`28px`,color:`#10B981`,marginBottom:`12px`}}),(0,S.jsx)(`div`,{style:{fontSize:`13px`,color:`#6B7280`,marginBottom:`4px`},children:`Status`}),(0,S.jsx)(`div`,{style:{fontSize:`18px`,fontWeight:`700`,color:`#10B981`},children:s.status})]})]})})}),(0,S.jsx)(`section`,{style:{padding:`80px 0`,background:`#F8F9FA`},children:(0,S.jsxs)(`div`,{className:`container`,children:[(0,S.jsx)(`h2`,{style:{fontSize:`36px`,fontWeight:`800`,color:`#1F2937`,marginBottom:`16px`,fontFamily:`'Poppins', sans-serif`},children:`Scope of Work`}),(0,S.jsx)(`p`,{style:{fontSize:`18px`,color:`#6B7280`,marginBottom:`32px`,maxWidth:`700px`},children:`Comprehensive services and deliverables for this project`}),(0,S.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`12px`},children:s.scope.map((e,t)=>(0,S.jsx)(`span`,{className:`scope-badge`,children:e},t))})]})}),(0,S.jsx)(`section`,{ref:D,style:{padding:`80px 0`,background:`white`},children:(0,S.jsxs)(`div`,{className:`container`,style:{maxWidth:`1000px`},children:[(0,S.jsx)(`h2`,{style:{fontSize:`36px`,fontWeight:`800`,color:`#1F2937`,marginBottom:`48px`,fontFamily:`'Poppins', sans-serif`},children:`Project Details`}),(0,S.jsx)(`div`,{className:`detail-card`,style:{background:`linear-gradient(135deg, #EBF8FF 0%, #DBEAFE 100%)`,border:`2px solid #93C5FD`,boxShadow:`0 4px 20px rgba(59, 130, 246, 0.1)`},children:(0,S.jsxs)(`div`,{style:{position:`relative`,zIndex:1},children:[(0,S.jsx)(`div`,{className:`detail-icon`,style:{background:`linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)`},children:(0,S.jsx)(v,{style:{color:`white`}})}),(0,S.jsx)(`h3`,{style:{fontSize:`28px`,fontWeight:`700`,color:`#1E40AF`,marginBottom:`16px`,fontFamily:`'Poppins', sans-serif`},children:`📋 Project Overview`}),(0,S.jsx)(`p`,{style:{fontSize:`17px`,color:`#1E3A8A`,lineHeight:`1.8`},children:s.details.overview})]})}),(0,S.jsx)(`div`,{className:`detail-card`,style:{background:`linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%)`,border:`2px solid #FCA5A5`,boxShadow:`0 4px 20px rgba(239, 68, 68, 0.1)`},children:(0,S.jsxs)(`div`,{style:{position:`relative`,zIndex:1},children:[(0,S.jsx)(`div`,{className:`detail-icon`,style:{background:`linear-gradient(135deg, #EF4444 0%, #DC2626 100%)`},children:(0,S.jsx)(p,{style:{color:`white`}})}),(0,S.jsx)(`h3`,{style:{fontSize:`28px`,fontWeight:`700`,color:`#991B1B`,marginBottom:`16px`,fontFamily:`'Poppins', sans-serif`},children:`⚠️ The Challenge`}),(0,S.jsx)(`p`,{style:{fontSize:`17px`,color:`#7F1D1D`,lineHeight:`1.8`},children:s.details.challenge})]})}),(0,S.jsx)(`div`,{className:`detail-card`,style:{background:`linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)`,border:`2px solid #86EFAC`,boxShadow:`0 4px 20px rgba(34, 197, 94, 0.1)`},children:(0,S.jsxs)(`div`,{style:{position:`relative`,zIndex:1},children:[(0,S.jsx)(`div`,{className:`detail-icon`,style:{background:`linear-gradient(135deg, #22C55E 0%, #16A34A 100%)`},children:(0,S.jsx)(m,{style:{color:`white`}})}),(0,S.jsx)(`h3`,{style:{fontSize:`28px`,fontWeight:`700`,color:`#166534`,marginBottom:`16px`,fontFamily:`'Poppins', sans-serif`},children:`💡 Our Solution`}),(0,S.jsx)(`p`,{style:{fontSize:`17px`,color:`#14532D`,lineHeight:`1.8`},children:s.details.solution})]})}),(0,S.jsx)(`div`,{className:`detail-card`,style:{background:`linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 100%)`,border:`2px solid #5EEAD4`,boxShadow:`0 4px 20px rgba(20, 184, 166, 0.1)`},children:(0,S.jsxs)(`div`,{style:{position:`relative`,zIndex:1},children:[(0,S.jsx)(`div`,{className:`detail-icon`,style:{background:`linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)`},children:(0,S.jsx)(c,{style:{color:`white`}})}),(0,S.jsx)(`h3`,{style:{fontSize:`28px`,fontWeight:`700`,color:`#115E59`,marginBottom:`16px`,fontFamily:`'Poppins', sans-serif`},children:`🏆 Results & Outcome`}),(0,S.jsx)(`p`,{style:{fontSize:`17px`,color:`#134E4A`,lineHeight:`1.8`},children:s.details.outcome})]})})]})}),s.highlights&&s.highlights.length>0&&(0,S.jsx)(`section`,{ref:O,style:{padding:`80px 0`,background:`#F8F9FA`},children:(0,S.jsxs)(`div`,{className:`container`,children:[(0,S.jsx)(`h2`,{style:{fontSize:`36px`,fontWeight:`800`,color:`#1F2937`,marginBottom:`16px`,fontFamily:`'Poppins', sans-serif`,textAlign:`center`},children:`Key Highlights`}),(0,S.jsx)(`p`,{style:{fontSize:`18px`,color:`#6B7280`,marginBottom:`48px`,textAlign:`center`,maxWidth:`700px`,margin:`0 auto 48px`},children:`Major achievements and standout features of this project`}),(0,S.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(280px, 1fr))`,gap:`24px`,maxWidth:`1200px`,margin:`0 auto`},children:s.highlights.map((e,t)=>(0,S.jsxs)(`div`,{className:`highlight-item`,children:[(0,S.jsx)(`div`,{style:{width:`56px`,height:`56px`,borderRadius:`12px`,background:`linear-gradient(135deg, #1fadbf 0%, #16a085 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,marginBottom:`20px`},children:(0,S.jsx)(d,{style:{fontSize:`28px`,color:`white`}})}),(0,S.jsx)(`h3`,{style:{fontSize:`20px`,fontWeight:`700`,color:`#1F2937`,marginBottom:`12px`,fontFamily:`'Poppins', sans-serif`},children:e.title}),(0,S.jsx)(`p`,{style:{fontSize:`15px`,color:`#6B7280`,lineHeight:`1.6`},children:e.description})]},t))})]})}),s.keyFeatures&&s.keyFeatures.length>0&&(0,S.jsx)(`section`,{ref:k,style:{padding:`80px 0`,background:`white`},children:(0,S.jsxs)(`div`,{className:`container`,children:[(0,S.jsx)(`h2`,{style:{fontSize:`36px`,fontWeight:`800`,color:`#1F2937`,marginBottom:`16px`,fontFamily:`'Poppins', sans-serif`,textAlign:`center`},children:`Key Features`}),(0,S.jsx)(`p`,{style:{fontSize:`18px`,color:`#6B7280`,marginBottom:`48px`,textAlign:`center`,maxWidth:`700px`,margin:`0 auto 48px`},children:`Technical capabilities and project specifications`}),(0,S.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(320px, 1fr))`,gap:`24px`,maxWidth:`1200px`,margin:`0 auto`},children:s.keyFeatures.map((e,t)=>(0,S.jsxs)(`div`,{className:`feature-card`,style:{background:`linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)`,padding:`28px`,borderRadius:`16px`,border:`2px solid #E5E7EB`,transition:`all 0.4s ease`,position:`relative`,overflow:`hidden`},children:[(0,S.jsx)(`div`,{style:{position:`absolute`,top:0,left:0,width:`4px`,height:`100%`,background:`linear-gradient(180deg, #1fadbf 0%, #16a085 100%)`}}),(0,S.jsx)(`div`,{style:{position:`absolute`,top:`16px`,right:`16px`,width:`32px`,height:`32px`,borderRadius:`50%`,background:`rgba(31, 173, 191, 0.1)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`14px`,fontWeight:`700`,color:`#1fadbf`},children:t+1}),(0,S.jsx)(`div`,{style:{width:`48px`,height:`48px`,borderRadius:`12px`,background:`linear-gradient(135deg, #1fadbf 0%, #16a085 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,marginBottom:`20px`},children:(0,S.jsx)(d,{style:{fontSize:`24px`,color:`white`}})}),(0,S.jsx)(`p`,{style:{fontSize:`16px`,color:`#1F2937`,fontWeight:`600`,lineHeight:`1.6`,margin:0,paddingRight:`40px`},children:e})]},t))})]})}),A&&A.length>0&&(0,S.jsx)(`section`,{style:{padding:`80px 0`,background:`#F8F9FA`},children:(0,S.jsxs)(`div`,{className:`container`,children:[(0,S.jsx)(`h2`,{style:{fontSize:`36px`,fontWeight:`800`,color:`#1F2937`,marginBottom:`16px`,fontFamily:`'Poppins', sans-serif`,textAlign:`center`},children:`Related Projects`}),(0,S.jsx)(`p`,{style:{fontSize:`18px`,color:`#6B7280`,marginBottom:`48px`,textAlign:`center`,maxWidth:`700px`,margin:`0 auto 48px`},children:`Explore more projects in similar categories`}),(0,S.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(320px, 1fr))`,gap:`32px`,maxWidth:`1200px`,margin:`0 auto`},children:A.map(e=>(0,S.jsx)(n,{to:`/projects/${e.slug}`,state:{project:e},className:`related-project-card`,style:{textDecoration:`none`},children:(0,S.jsxs)(`div`,{style:{padding:`28px`},children:[(0,S.jsx)(`div`,{style:{display:`inline-block`,padding:`6px 14px`,background:`rgba(31, 173, 191, 0.1)`,color:`#1fadbf`,borderRadius:`6px`,fontSize:`12px`,fontWeight:`700`,marginBottom:`16px`,textTransform:`uppercase`},children:e.category}),(0,S.jsx)(`h3`,{style:{fontSize:`20px`,fontWeight:`700`,color:`#1F2937`,marginBottom:`12px`,fontFamily:`'Poppins', sans-serif`,lineHeight:`1.3`},children:e.title}),(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,marginBottom:`12px`},children:[(0,S.jsx)(l,{style:{color:`#1fadbf`,fontSize:`14px`}}),(0,S.jsx)(`span`,{style:{fontSize:`14px`,color:`#6B7280`,fontWeight:`500`},children:e.location})]}),(0,S.jsxs)(`p`,{style:{fontSize:`14px`,color:`#6B7280`,lineHeight:`1.6`,marginBottom:`20px`},children:[e.description.substring(0,120),`...`]}),(0,S.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`8px`,color:`#1fadbf`,fontWeight:`600`,fontSize:`14px`},children:[`View Details`,(0,S.jsx)(h,{})]})]})},e.id))})]})}),(0,S.jsx)(`section`,{style:{padding:`100px 0`,background:`linear-gradient(135deg, #1F2937 0%, #111827 100%)`,textAlign:`center`,color:`white`},children:(0,S.jsxs)(`div`,{className:`container`,children:[(0,S.jsx)(`h2`,{style:{fontSize:`42px`,fontWeight:`800`,marginBottom:`20px`,fontFamily:`'Poppins', sans-serif`},children:`Let's Build Something Great Together`}),(0,S.jsx)(`p`,{style:{fontSize:`20px`,marginBottom:`40px`,maxWidth:`700px`,margin:`0 auto 40px`,opacity:.9},children:`Have a project in mind? Our team is ready to deliver excellence`}),(0,S.jsxs)(`div`,{style:{display:`flex`,gap:`20px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,S.jsxs)(n,{to:`/contact`,style:{display:`inline-flex`,alignItems:`center`,gap:`10px`,padding:`16px 40px`,background:`linear-gradient(135deg, #1fadbf 0%, #16a085 100%)`,color:`white`,textDecoration:`none`,borderRadius:`12px`,fontWeight:`700`,fontSize:`16px`,transition:`all 0.3s ease`},children:[`Get in Touch`,(0,S.jsx)(h,{})]}),(0,S.jsx)(n,{to:`/projects`,style:{display:`inline-flex`,alignItems:`center`,gap:`10px`,padding:`16px 40px`,background:`transparent`,color:`white`,textDecoration:`none`,borderRadius:`12px`,fontWeight:`700`,fontSize:`16px`,border:`2px solid white`,transition:`all 0.3s ease`},children:`View All Projects`})]})]})})]})};export{w as default};