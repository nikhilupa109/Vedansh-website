import{s as e,t}from"./index-C-jEY99a.js";import{n,t as r}from"./ScrollTrigger-QVAB6i91.js";import{S as i,d as a,m as o,w as s}from"./fa-B4iwqdVm.js";var c=e(),l=t();n.registerPlugin(r);var u=()=>{let[e,t]=(0,c.useState)({name:``,email:``,phone:``,company:``,projectType:``,message:``}),[r,u]=(0,c.useState)({submitting:!1,submitted:!1,error:!1}),d=(0,c.useRef)(null),f=(0,c.useRef)(null),p=(0,c.useRef)(null),m=(0,c.useRef)(null);(0,c.useEffect)(()=>{window.scrollTo(0,0);let e=d.current?.querySelectorAll(`.animate-fade-in`);e&&n.fromTo(e,{y:60,opacity:0},{y:0,opacity:1,duration:1,stagger:.2,ease:`power3.out`,delay:.3});let t=f.current?.querySelectorAll(`.info-item`);t&&n.fromTo(t,{y:80,opacity:0},{y:0,opacity:1,duration:.8,stagger:.15,ease:`power3.out`,scrollTrigger:{trigger:f.current,start:`top 80%`}}),p.current&&n.fromTo(p.current,{x:-60,opacity:0},{x:0,opacity:1,duration:1,ease:`power3.out`,scrollTrigger:{trigger:p.current,start:`top 75%`}}),m.current&&n.fromTo(m.current,{x:60,opacity:0},{x:0,opacity:1,duration:1,ease:`power3.out`,scrollTrigger:{trigger:m.current,start:`top 75%`}})},[]);let h=n=>{t({...e,[n.target.name]:n.target.value})};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`style`,{children:`
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
      `}),(0,l.jsx)(`section`,{ref:d,style:{background:`linear-gradient(135deg, #F8F9FA 0%, #E5E7EB 100%)`,padding:`140px 0 80px`,position:`relative`,overflow:`hidden`},children:(0,l.jsx)(`div`,{className:`container`,children:(0,l.jsxs)(`div`,{style:{textAlign:`center`,maxWidth:`800px`,margin:`0 auto`},children:[(0,l.jsx)(`h1`,{className:`animate-fade-in`,style:{fontSize:`clamp(36px, 6vw, 56px)`,fontWeight:`900`,color:`#1F2937`,marginBottom:`20px`,lineHeight:`1.2`,fontFamily:`'Poppins', sans-serif`},children:`Get In Touch`}),(0,l.jsx)(`p`,{className:`animate-fade-in`,style:{fontSize:`20px`,color:`#6B7280`,lineHeight:`1.7`,maxWidth:`700px`,margin:`0 auto`},children:`Get in touch with our team of experts. We're here to discuss how we can bring your industrial infrastructure vision to life.`})]})})}),(0,l.jsx)(`section`,{ref:f,style:{padding:`60px 0`,background:`white`,marginTop:`-40px`,position:`relative`,zIndex:1},children:(0,l.jsx)(`div`,{className:`container`,children:(0,l.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(280px, 1fr))`,gap:`24px`,maxWidth:`1000px`,margin:`0 auto`},children:[{icon:s,title:`Call Us`,primary:`+91 89551 77870`,secondary:`Mon-Sat, 9:00 AM - 6:00 PM`},{icon:o,title:`Email Us`,primary:`info@vedansh.in`,secondary:`We reply within 24 hours`},{icon:i,title:`Visit Us`,primary:`F-16, Block-II, Ambe Market`,secondary:`Chittorgarh - 312001, Rajasthan`}].map((e,t)=>(0,l.jsxs)(`div`,{className:`info-item`,children:[(0,l.jsx)(`div`,{className:`info-icon`,children:(0,l.jsx)(e.icon,{style:{fontSize:`28px`,color:`white`}})}),(0,l.jsx)(`h3`,{style:{fontSize:`18px`,fontWeight:`700`,color:`#1F2937`,marginBottom:`12px`,fontFamily:`'Poppins', sans-serif`},children:e.title}),(0,l.jsx)(`p`,{style:{fontSize:`18px`,fontWeight:`600`,color:`#1fadbf`,marginBottom:`8px`},children:e.primary}),(0,l.jsx)(`p`,{style:{fontSize:`14px`,color:`#6B7280`},children:e.secondary})]},t))})})}),(0,l.jsx)(`section`,{style:{padding:`80px 0`,background:`#F8F9FA`},children:(0,l.jsx)(`div`,{className:`container`,children:(0,l.jsx)(`div`,{style:{maxWidth:`1400px`,margin:`0 auto`},children:(0,l.jsxs)(`div`,{ref:m,children:[(0,l.jsx)(`h2`,{style:{fontSize:`36px`,fontWeight:`800`,color:`#1F2937`,marginBottom:`16px`,fontFamily:`'Poppins', sans-serif`},children:`Visit Our Office`}),(0,l.jsx)(`p`,{style:{fontSize:`18px`,color:`#6B7280`,marginBottom:`32px`},children:`Come meet us at our Chittorgarh office or reach out anytime.`}),(0,l.jsx)(`div`,{className:`map-container`,style:{marginBottom:`32px`,height:`400px`},children:(0,l.jsx)(`iframe`,{src:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.7562489147446!2d74.62736!3d24.87995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUyJzQ4LjAiTiA3NMKwMzcnMzguNSJF!5e0!3m2!1sen!2sin!4v1234567890`,width:`100%`,height:`100%`,style:{border:0},allowFullScreen:``,loading:`lazy`,referrerPolicy:`no-referrer-when-downgrade`,title:`Vedansh Infra Location`})}),(0,l.jsxs)(`div`,{style:{background:`white`,padding:`32px`,borderRadius:`20px`,border:`2px solid #E5E7EB`},children:[(0,l.jsx)(`h3`,{style:{fontSize:`24px`,fontWeight:`700`,color:`#1F2937`,marginBottom:`20px`,fontFamily:`'Poppins', sans-serif`},children:`Why Partner With Us`}),(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:`16px`},children:[(0,l.jsx)(`div`,{style:{width:`48px`,height:`48px`,borderRadius:`12px`,background:`linear-gradient(135deg, #1fadbf 0%, #16a085 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},children:(0,l.jsx)(a,{style:{color:`white`,fontSize:`20px`}})}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h4`,{style:{fontSize:`16px`,fontWeight:`700`,color:`#1F2937`,marginBottom:`6px`},children:`19+ Years Experience`}),(0,l.jsx)(`p`,{style:{fontSize:`14px`,color:`#6B7280`,lineHeight:`1.6`},children:`Nearly two decades of delivering excellence in industrial infrastructure.`})]})]}),(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:`16px`},children:[(0,l.jsx)(`div`,{style:{width:`48px`,height:`48px`,borderRadius:`12px`,background:`linear-gradient(135deg, #1fadbf 0%, #16a085 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},children:(0,l.jsx)(a,{style:{color:`white`,fontSize:`20px`}})}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h4`,{style:{fontSize:`16px`,fontWeight:`700`,color:`#1F2937`,marginBottom:`6px`},children:`ISO Certified Quality`}),(0,l.jsx)(`p`,{style:{fontSize:`14px`,color:`#6B7280`,lineHeight:`1.6`},children:`ISO 9001, 14001, 45001 certified with IBR approval for quality assurance.`})]})]}),(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:`16px`},children:[(0,l.jsx)(`div`,{style:{width:`48px`,height:`48px`,borderRadius:`12px`,background:`linear-gradient(135deg, #1fadbf 0%, #16a085 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},children:(0,l.jsx)(a,{style:{color:`white`,fontSize:`20px`}})}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h4`,{style:{fontSize:`16px`,fontWeight:`700`,color:`#1F2937`,marginBottom:`6px`},children:`250+ Projects Delivered`}),(0,l.jsx)(`p`,{style:{fontSize:`14px`,color:`#6B7280`,lineHeight:`1.6`},children:`Successfully completed major projects across India's industrial sectors.`})]})]})]})]})]})})})}),(0,l.jsx)(`section`,{style:{padding:`80px 0`,background:`#F8F9FA`},children:(0,l.jsx)(`div`,{className:`container`,children:(0,l.jsx)(`div`,{style:{maxWidth:`1400px`,margin:`0 auto`},children:(0,l.jsxs)(`div`,{ref:p,children:[(0,l.jsx)(`h2`,{style:{fontSize:`36px`,fontWeight:`800`,color:`#1F2937`,marginBottom:`16px`,fontFamily:`'Poppins', sans-serif`},children:`Send Us a Message`}),(0,l.jsx)(`p`,{style:{fontSize:`18px`,color:`#6B7280`,marginBottom:`32px`},children:`Fill out the form below and our team will get back to you within 24 hours.`}),(0,l.jsxs)(`form`,{onSubmit:async n=>{n.preventDefault(),u({submitting:!0,submitted:!1,error:!1});try{await new Promise(e=>setTimeout(e,2e3)),console.log(`Form submitted:`,e),u({submitting:!1,submitted:!0,error:!1}),t({name:``,email:``,phone:``,company:``,projectType:``,message:``}),setTimeout(()=>{u({submitting:!1,submitted:!1,error:!1})},5e3)}catch{u({submitting:!1,submitted:!1,error:!0})}},style:{background:`white`,padding:`40px`,borderRadius:`20px`,border:`2px solid #E5E7EB`,display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`label`,{style:{display:`block`,fontSize:`14px`,fontWeight:`600`,color:`#374151`,marginBottom:`8px`},children:`Full Name *`}),(0,l.jsx)(`input`,{type:`text`,name:`name`,value:e.name,onChange:h,required:!0,className:`form-input`,placeholder:`John Doe`})]}),(0,l.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`20px`},children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`label`,{style:{display:`block`,fontSize:`14px`,fontWeight:`600`,color:`#374151`,marginBottom:`8px`},children:`Email Address *`}),(0,l.jsx)(`input`,{type:`email`,name:`email`,value:e.email,onChange:h,required:!0,className:`form-input`,placeholder:`john@company.com`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`label`,{style:{display:`block`,fontSize:`14px`,fontWeight:`600`,color:`#374151`,marginBottom:`8px`},children:`Phone Number *`}),(0,l.jsx)(`input`,{type:`tel`,name:`phone`,value:e.phone,onChange:h,required:!0,className:`form-input`,placeholder:`+91 98765 43210`})]})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`label`,{style:{display:`block`,fontSize:`14px`,fontWeight:`600`,color:`#374151`,marginBottom:`8px`},children:`Company Name`}),(0,l.jsx)(`input`,{type:`text`,name:`company`,value:e.company,onChange:h,className:`form-input`,placeholder:`Your Company Ltd.`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`label`,{style:{display:`block`,fontSize:`14px`,fontWeight:`600`,color:`#374151`,marginBottom:`8px`},children:`Project Type *`}),(0,l.jsxs)(`select`,{name:`projectType`,value:e.projectType,onChange:h,required:!0,className:`form-select`,children:[(0,l.jsx)(`option`,{value:``,children:`Select a project type`}),[`EPC Projects`,`Electrical Works`,`Mechanical Works`,`Solar/Renewable Energy`,`Plant Operations & Maintenance`,`Other`].map((e,t)=>(0,l.jsx)(`option`,{value:e,children:e},t))]})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`label`,{style:{display:`block`,fontSize:`14px`,fontWeight:`600`,color:`#374151`,marginBottom:`8px`},children:`Project Details *`}),(0,l.jsx)(`textarea`,{name:`message`,value:e.message,onChange:h,required:!0,className:`form-textarea`,placeholder:`Tell us about your project requirements...`})]}),r.submitted&&(0,l.jsxs)(`div`,{style:{padding:`16px`,background:`#D1FAE5`,border:`2px solid #34D399`,borderRadius:`12px`,display:`flex`,alignItems:`center`,gap:`12px`,color:`#065F46`},children:[(0,l.jsx)(a,{style:{fontSize:`20px`}}),(0,l.jsx)(`span`,{style:{fontWeight:`600`},children:`Thank you! We'll get back to you within 24 hours.`})]}),r.error&&(0,l.jsx)(`div`,{style:{padding:`16px`,background:`#FEE2E2`,border:`2px solid #F87171`,borderRadius:`12px`,color:`#991B1B`,fontWeight:`600`},children:`Something went wrong. Please try again.`}),(0,l.jsx)(`button`,{type:`submit`,disabled:r.submitting,className:`submit-btn`,children:r.submitting?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`div`,{style:{width:`20px`,height:`20px`,border:`3px solid rgba(255,255,255,0.3)`,borderTop:`3px solid white`,borderRadius:`50%`,animation:`spin 1s linear infinite`}}),`Sending...`]}):(0,l.jsxs)(l.Fragment,{children:[`Send Message`,(0,l.jsx)(a,{})]})})]})]})})})})]})};export{u as default};