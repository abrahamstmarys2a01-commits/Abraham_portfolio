import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [filter, setFilter] = useState('all');
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  const skillsRef = useRef(null);
  const [skillsVisible, setSkillsVisible] = useState(false);

  const projects = [
    {
      id: 1,
      category: 'fullstack',
      title: 'Finance ERP Management System',
      tag: 'Full-Stack Web ERP',
      domain: 'Banking, NBFC & Microfinance',
      description: 'Comprehensive financial ERP system covering Gold Loan, Personal Loan, Vehicle Loan, Chit Funds, and MFI Loans with automated EMI collection, branch performance reports, and expense management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Git', 'GitHub'],
      icon: 'fa-coins',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80',
      details: {
        overview: 'An enterprise-grade Financial ERP platform tailored for non-banking financial institutions (NBFCs), chit funds, and microfinance agencies. Engineered to manage diverse loan portfolios, multi-branch cash handling, automated EMI collection schedules, and real-time operational expense auditing.',
        modules: [
          {
            title: 'Gold Loan Management',
            desc: 'Automated gold purity & weight valuation, loan-to-value (LTV) limits calculation, daily interest computation, and safe packet release workflows.'
          },
          {
            title: 'Personal & Vehicle Loans',
            desc: 'Borrower KYC verification, RC book validation, guarantor tracking, interest rate customization, and automated amortization schedules.'
          },
          {
            title: 'Chit Fund Management',
            desc: 'Subscriber auction management, monthly dividend calculations, bid winner payouts, and comprehensive chit ledger tracking.'
          },
          {
            title: 'Microfinance (MFI) Lending',
            desc: 'Group lending (JLG/SHG) coordination, weekly/monthly field agent collection logs, and customer credit health tracking.'
          },
          {
            title: 'EMI Collection & Reminders',
            desc: 'Automated daily/monthly collection logs, penalty calculator for delayed payments, digital receipt generation, and SMS/notification triggers.'
          },
          {
            title: 'Branch-Wise Reports & Expenses',
            desc: 'Centralized dashboard tracking branch collections, cashier settlements, operational expenditure logs (rent, bills, staff), and profit & loss statements.'
          }
        ],
        features: [
          'End-to-end multi-loan lifecycle management (Application → Appraisal → Disbursement → Closure)',
          'Automated EMI interest & penalty computation algorithms',
          'Consolidated multi-branch performance analytics and ledger export (Excel/PDF)',
          'Role-based security: Admin, Branch Manager, Cashier, and Field Collection Executive'
        ]
      }
    },
    {
      id: 2,
      category: 'fullstack',
      title: 'Architecture Website & Career Portal',
      tag: 'Full-Stack Web Application',
      domain: 'Architecture, 3D Design & Recruitment',
      description: 'Modern architecture showcase and job recruitment platform. Features interactive architectural design portfolios, project galleries, blueprint showcases, and an integrated job portal enabling candidates to view openings and apply for careers.',
      tech: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Git', 'GitHub'],
      icon: 'fa-compass-drafting',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
      details: {
        overview: 'A premium digital platform built for an architectural design studio. It serves a dual purpose: exhibiting high-end architectural designs, blueprints, and 3D visual walkthroughs to prospective clients, while serving as a dedicated hiring and job application portal for architects and designers.',
        modules: [
          {
            title: 'Design Showcase & Portfolio',
            desc: 'Categorized galleries for residential, commercial, and interior architecture with interactive image lightboxes and 3D floor plan viewers.'
          },
          {
            title: 'Career & Job Application Portal',
            desc: 'Live vacancy listings (Architect, 3D Modeler, Draftsman) where candidates can submit their profile, cover letter, resume, and portfolio links.'
          },
          {
            title: 'Client Project Inquiries',
            desc: 'Interactive form for potential clients to specify land dimensions, budget range, and design preferences for instant consultation scheduling.'
          },
          {
            title: 'Admin Management Dashboard',
            desc: 'Firm owners can post new project showcases, review candidate resumes, and manage customer inquiries directly from an admin panel.'
          }
        ],
        features: [
          'High-performance responsive image galleries with category-based filtering',
          'Secure file upload pipeline for candidate resumes and CAD design sheets via Firebase',
          'Automated email notifications to HR upon new job application submissions',
          'Modern minimalist architectural aesthetic with smooth scrolling and animations'
        ]
      }
    },
    {
      id: 3,
      category: 'fullstack',
      title: 'Academic Departments ERP',
      tag: 'Role-Based ERP System',
      domain: 'Higher Education & Institutional Management',
      description: 'Complete departmental ERP featuring 3 specialized role-based logins: HOD, Staff, and Student. Provides seamless management of department administration, academic schedules, student tracking, staff allocations, and institutional reporting with secure access control.',
      tech: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Git', 'GitHub'],
      icon: 'fa-graduation-cap',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80',
      details: {
        overview: 'An institutional department ERP platform engineered to eliminate manual paperwork and centralize college department workflows. Built around three independent role-specific portals (HOD, Staff, Student) with strict Role-Based Access Control (RBAC).',
        modules: [
          {
            title: 'HOD Executive Portal',
            desc: 'Overall department oversight, semester subject allocation to faculty members, master timetable approvals, and student academic performance audits.'
          },
          {
            title: 'Staff / Faculty Portal',
            desc: 'Daily subject-wise student attendance entry, internal continuous assessment marks logging, syllabus coverage monitoring, and leave applications.'
          },
          {
            title: 'Student Portal',
            desc: 'Personalized dashboard displaying real-time attendance percentage, internal exam results, class timetables, and department notice board circulars.'
          },
          {
            title: 'Automated Analytics & Alerts',
            desc: 'Automated warnings for students falling below mandatory 75% attendance threshold and automated internal GPA / grade predictions.'
          }
        ],
        features: [
          'Three dedicated login portals tailored with specific permissions and views',
          'Real-time student attendance calculation with low-attendance alert triggers',
          'Consolidated semester marks compilation and PDF report card generation',
          'Cloud-backed noticeboard with instant circular distribution'
        ]
      }
    },
    {
      id: 4,
      category: 'mobile',
      title: 'Lawyer ERP - Legal Practice Mobile App',
      tag: 'React Native Legal ERP',
      domain: 'Advocates, Law Chambers & Legal Practitioners (Vakkil)',
      description: 'Dedicated legal practice management mobile app built specifically for Lawyers and Advocates (Vakkil). Tracks court cases across benches, hearing dates, client dossiers, legal document vaults, and professional fee billing.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Mobile UI'],
      icon: 'fa-scale-balanced',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
      details: {
        overview: 'A specialized Mobile ERP system developed specifically for practicing Advocates and Legal Chambers (Vakkil). It digitalizes daily courtroom routines, replacing manual paper diaries with automated case hearing alerts, client communication logs, court causelist tracking, and legal fee management.',
        modules: [
          {
            title: 'Court Case & Docket Tracker',
            desc: 'Organizes cases by Suit/Case number, court name (District, High Court, Tribunals), bench, judge, petitioner vs. respondent, and current case stage.'
          },
          {
            title: 'Hearing Diary & Causelist Reminders',
            desc: 'Automated calendar tracking daily hearing dates, next stage proceedings (Arguments, Evidence, Cross-examination), and adjournment notices.'
          },
          {
            title: 'Client Dossier & Case History',
            desc: 'Comprehensive client directory linked directly to ongoing cases, contact details, past judgments, and courtroom notes.'
          },
          {
            title: 'Legal Document Repository',
            desc: 'Secure digital vault for scanned petitions, vakalath, plaints, affidavits, bail orders, and judgment certified copies.'
          },
          {
            title: 'Advocate Fee & Payment Tracker',
            desc: 'Tracks retainer fees, per-appearance hearing charges, court fee expenditures, milestone payments, and pending dues with receipts.'
          }
        ],
        features: [
          'Customized for courtroom workflows of practicing lawyers & advocates',
          'Push notifications for upcoming hearing dates and court calendar sync',
          'Offline-ready mobile app interface with automated cloud sync via Firebase',
          'Fast case search by client name, CNR number, FIR number, or case year'
        ]
      }
    },
    {
      id: 5,
      category: 'mobile',
      title: 'Smart Expense Tracker Mobile App',
      tag: 'React Native Mobile App',
      domain: 'Personal Finance & Small Business Budgeting',
      description: 'Cross-platform mobile expense and budget tracking application. Features income and expense categorization, recurring payment reminders, monthly budget thresholds, visual expenditure charts, and real-time cloud sync.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Mobile UI'],
      icon: 'fa-wallet',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80',
      details: {
        overview: 'A modern, intuitive personal finance and expense tracking mobile application built with React Native. Empowers users and small business owners to monitor daily cash flows, track category-wise spending habits, set spending caps, and visualize savings progress.',
        modules: [
          {
            title: 'Daily Income & Expense Logging',
            desc: 'Lightning-fast transaction recording with custom categories (Food, Travel, Utilities, Office, Subscriptions) and receipt photo uploads.'
          },
          {
            title: 'Category Budgets & Spending Limits',
            desc: 'Define monthly category thresholds with warning notifications when expenditures reach 80% and 100% of the allocated budget.'
          },
          {
            title: 'Visual Spending Analytics',
            desc: 'Interactive donut charts and month-over-month trend analysis showing exact expenditure distribution and savings percentages.'
          },
          {
            title: 'Recurring Bills & Due Date Reminders',
            desc: 'Automatic scheduling for recurring monthly bills (rent, loan EMI, subscriptions) with push reminders before due dates.'
          }
        ],
        features: [
          'Clean, minimalist mobile UI with responsive touch gestures and dark theme',
          'Real-time cloud database synchronization across devices via Firebase',
          'Export monthly financial statements in PDF and CSV format',
          'Multi-currency and offline transaction caching support'
        ]
      }
    },
    {
      id: 6,
      category: 'security',
      title: 'Phishing URL Detection System',
      tag: 'Final Year Project / Network Security',
      domain: 'Cyber Security & Machine Learning',
      description: 'College Final Year Project in Network Security utilizing Machine Learning (SVM, Random Forest) to detect malicious phishing websites with an automated audio alert alarm mechanism.',
      tech: ['Python', 'SVM', 'Random Forest', 'Scikit-learn', 'Flask', 'Machine Learning'],
      icon: 'fa-shield-halved',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
      details: {
        overview: 'My Academic Final Year Engineering Project developed in the domain of Network Security and Artificial Intelligence. The system protects end-users and organizational networks by inspecting web URLs in real time to identify and block malicious phishing sites before credential theft occurs.',
        modules: [
          {
            title: 'URL Feature Extraction Engine',
            desc: 'Extracts 30+ lexical, domain, and host-based features including URL length, IP address usage, presence of "@" symbol, suspicious hyphenation, sub-domain depth, and HTTPS token misuse.'
          },
          {
            title: 'ML Classification Pipeline',
            desc: 'Trained and benchmarked multiple machine learning algorithms including Support Vector Machines (SVM), Random Forest, and Decision Trees for high-accuracy threat classification.'
          },
          {
            title: 'Automated Alarm & Alert Mechanism',
            desc: 'Engineered an active defensive mechanism that triggers an audible alarm sound and prominent screen warning the instant a phishing URL is detected.'
          },
          {
            title: 'Real-Time Web Scanning Interface',
            desc: 'Interactive portal where users can enter any suspicious hyperlink to inspect its risk score, extracted parameter attributes, and benign/malicious verdict.'
          }
        ],
        features: [
          'High predictive accuracy on standardized benchmark phishing datasets',
          'Comprehensive lexical, domain-age, and WHOIS parameter analysis',
          'Real-time detection pipeline with low latency and instant threat categorization',
          'Audio sound alarm mechanism providing multi-sensory user warning'
        ]
      }
    }
  ];

  const coreSkills = [
    { name: 'React & React Native', percentage: '90%' },
    { name: 'Node.js & Express', percentage: '88%' },
    { name: 'MongoDB & Firebase', percentage: '86%' },
    { name: 'Java & Spring Boot', percentage: '82%' },
    { name: 'Web Development (HTML5, CSS3, JS)', percentage: '92%' },
    { name: 'Git & GitHub', percentage: '90%' }
  ];

  const aiTools = [
    { name: 'ChatGPT', icon: 'fa-brain' },
    { name: 'DeepSeek', icon: 'fa-robot' },
    { name: 'Claude', icon: 'fa-microchip' },
    { name: 'Gemini', icon: 'fa-wand-magic-sparkles' },
    { name: 'GitHub Copilot', icon: 'fa-github' },
    { name: 'Stitch', icon: 'fa-bolt' },
    { name: 'Antigravity', icon: 'fa-rocket' },
    { name: 'Lovable', icon: 'fa-heart' }
  ];

  useEffect(() => {
    // Intersection Observer for scroll reveal animations
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Scroll listener for active link highlight
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'home';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 250)) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);

    // Observer for skills bar progress trigger
    const skillsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSkillsVisible(true);
      }
    }, { threshold: 0.2 });

    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (skillsRef.current) {
        skillsObserver.disconnect();
      }
      revealObserver.disconnect();
    };
  }, []);

  // Keyboard and scroll lock for project details modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !message) {
      alert('Please fill in your Name and Message.');
      return;
    }

    const phoneNumber = '919087997874';
    const text = `*New Portfolio Contact Message*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email || 'Not provided')}%0A*Message:* ${encodeURIComponent(message)}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;

    window.open(whatsappUrl, '_blank');
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <>
      {/* Background Elements */}
      <div className="bg-glow-wrapper">
        <div className="bg-glow bg-glow-1"></div>
        <div className="bg-glow bg-glow-2"></div>
        <div className="bg-glow bg-glow-3"></div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="nav-container">
          <a href="#" className="logo">ABRAHAM<span>.M</span></a>
          <nav className={`nav-menu ${menuActive ? 'active' : ''}`}>
            {['home', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'].map((sec) => (
              <a 
                key={sec} 
                href={`#${sec}`} 
                className={`nav-link ${activeSection === sec ? 'active' : ''}`}
                onClick={() => setMenuActive(false)}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            ))}
          </nav>
          <div 
            className={`menu-toggle ${menuActive ? 'active' : ''}`} 
            id="mobile-menu"
            onClick={() => setMenuActive(!menuActive)}
          >
            <span className="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="badge-glow">Ready to Innovate</div>
            <h1 className="hero-title">Hi, I'm <span className="text-gradient">Abraham M</span></h1>
            <h2 className="hero-subtitle">Software Developer (1 Year Exp)</h2>
            <p className="hero-description">
              Junior Software Developer with 1 Year of professional experience at Mediawave Technology, Trichy. Computer Science graduate with strong fundamentals in programming, algorithms, and full-stack development. Experienced in React, React Native, Node.js, MongoDB, Firebase, and Java.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work <i className="fa-solid fa-arrow-right"></i></a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img src="/profile.png" alt="Abraham M Portrait" className="hero-image" />
              <div className="floating-badge badge-react">
                <i className="fa-brands fa-react"></i>
                <span>React / RN</span>
              </div>
              <div className="floating-badge badge-java">
                <i className="fa-brands fa-java"></i>
                <span>Java</span>
              </div>
              <div className="floating-badge badge-sql">
                <i className="fa-solid fa-database"></i>
                <span>SQL</span>
              </div>
              <div className="floating-badge badge-node">
                <i className="fa-brands fa-node-js"></i>
                <span>Node.js</span>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-down">
          <a href="#about"><i className="fa-solid fa-chevron-down animated-bounce"></i></a>
        </div>

        {/* Wave Animation Divider */}
        <div className="hero-waves-container">
          <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="wave-parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(99, 102, 241, 0.12)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(168, 85, 247, 0.18)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(56, 189, 248, 0.15)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="var(--bg-dark)" />
            </g>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section section-padding">
        <div className="section-container">
          <div className="section-header reveal">
            <h2 className="section-title">About Me</h2>
            <div className="section-divider"></div>
          </div>
          <div className="about-grid">
            <div className="about-info card reveal">
              <h3>My Story & Objectives</h3>
              <p>
                I am a Junior Software Developer with 1 Year of hands-on professional experience at Mediawave Technology, Trichy. As a passionate Computer Science graduate, I aim to contribute technical expertise, build robust web and mobile applications, and drive innovative software solutions. My journey spans across solid programming core principles, MERN stack, React Native, and securing modern web applications.
              </p>
              <div className="info-details">
                <div className="info-item">
                  <i className="fa-solid fa-location-dot"></i>
                  <div>
                    <span>Location</span>
                    <p>Dindigul, Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="fa-solid fa-envelope"></i>
                  <div>
                    <span>Email</span>
                    <p><a href="mailto:pabraham1028@gmail.com">pabraham1028@gmail.com</a></p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="fa-solid fa-phone"></i>
                  <div>
                    <span>Phone</span>
                    <p><a href="tel:9087997874">9087997874</a></p>
                  </div>
                </div>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/abraham-m-s-micheal-raj" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/abrahamstmarys2a01-commits" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
              </div>
            </div>
            <div className="education-container reveal">
              <h3>Education</h3>
              <div className="education-timeline">
                <div className="edu-card card">
                  <div className="edu-year">CGPA: 8.55</div>
                  <h4 className="edu-degree">BE (Computer Science and Engineering)</h4>
                  <p className="edu-school">N.S.N. College of Engineering & Technology</p>
                </div>
                <div className="edu-card card">
                  <div className="edu-year">Percentage: 70%</div>
                  <h4 className="edu-degree">HSE (Higher Secondary Education)</h4>
                  <p className="edu-school">St. Mary’s Hr. Sec. School, Dindigul</p>
                </div>
                <div className="edu-card card">
                  <div className="edu-year">Percentage: 69%</div>
                  <h4 className="edu-degree">SSLC (Secondary School Leaving Certificate)</h4>
                  <p class="edu-school">St. Mary’s Hr. Sec. School, Dindigul</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section section-padding">
        <div className="section-container">
          <div className="section-header reveal">
            <h2 className="section-title">Work & Internship Experience</h2>
            <div className="section-divider"></div>
          </div>
          <div className="timeline">
            <div className="timeline-item left reveal">
              <div className="timeline-dot"><i className="fa-solid fa-briefcase"></i></div>
              <div className="timeline-content card">
                <span className="timeline-date">May 2026 - Present</span>
                <h3>Junior Software Developer</h3>
                <h4 className="timeline-company">Mediawave Technology, Trichy</h4>
                <p>1 Year of hands-on professional software development experience. Developing robust, scalable web and mobile applications using React, React Native, Node.js, MongoDB, and Firebase, along with agile delivery and performance optimizations.</p>
                <div className="timeline-skills">
                  <span>1 Year Exp</span>
                  <span>Software Development</span>
                  <span>React & React Native</span>
                  <span>Node.js / Express</span>
                  <span>MongoDB & Firebase</span>
                </div>
              </div>
            </div>
            <div className="timeline-item right reveal">
              <div className="timeline-dot"><i className="fa-solid fa-laptop-code"></i></div>
              <div className="timeline-content card">
                <span className="timeline-date">7th Aug - 14th Sep 2024</span>
                <h3>Front End Development - Intern</h3>
                <h4 className="timeline-company">Hash Start Academy</h4>
                <p>Enthusiastic Computer Science graduate with hands-on experience in Front-End development and responsive web design. Participated in Agile sprint meetings, code reviews, and debugging.</p>
                <div className="timeline-skills">
                  <span>Front-End Dev</span>
                  <span>Responsive Design</span>
                  <span>Agile Workflow</span>
                  <span>Version Control</span>
                </div>
              </div>
            </div>
            <div className="timeline-item left reveal">
              <div className="timeline-dot"><i className="fa-solid fa-shield-halved"></i></div>
              <div className="timeline-content card">
                <span className="timeline-date">14th Jul - 14th Aug 2025</span>
                <h3>Cyber Security & Ethical Hacking - Intern</h3>
                <h4 className="timeline-company">Novi TechPvt. Ltd</h4>
                <p>Gained practical exposure to network security, penetration testing, and vulnerability assessment. Learned techniques for ethical hacking, system exploitation, and secure coding practices.</p>
                <div className="timeline-skills">
                  <span>Kali Linux</span>
                  <span>Wireshark</span>
                  <span>Metasploit</span>
                  <span>Nmap</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section section-padding">
        <div className="section-container">
          <div className="section-header reveal">
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-divider"></div>
          </div>
          <div className="project-filters reveal">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'fullstack', label: 'Full-Stack Web (React & Node.js)' },
              { id: 'mobile', label: 'Mobile Apps (React Native)' },
              { id: 'security', label: 'Final Year / Network Security' }
            ].map((cat) => (
              <button 
                key={cat.id} 
                className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="projects-grid reveal">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="project-card card" 
                style={{ animation: 'cardAppear 0.5s ease forwards' }}
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedProject(project); }}
                title="Click to view full project explanation"
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-details">
                  <span className="project-tag">
                    <i className={`fa-solid ${project.icon}`} style={{ marginRight: '6px' }}></i>
                    {project.tag}
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t, idx) => <span key={idx}>{t}</span>)}
                  </div>
                  <div className="project-tap-prompt">
                    <span><i className="fa-solid fa-circle-info"></i> View Full Explanation</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section section-padding" ref={skillsRef}>
        <div className="section-container">
          <div className="section-header reveal">
            <h2 className="section-title">Skills & Technologies</h2>
            <div className="section-divider"></div>
          </div>
          <div className="skills-grid">
            <div className="skills-card card reveal">
              <h3>Core Development Skills</h3>
              <div className="skill-list">
                {coreSkills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: skillsVisible ? skill.percentage : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="ai-tools-card card reveal">
              <h3>AI Tools & Productivity</h3>
              <p className="section-subtitle-small">Utilizing state-of-the-art AI assistants to build faster and write cleaner code.</p>
              <div className="tools-grid">
                {aiTools.map((tool, idx) => (
                  <div key={idx} className="tool-badge">
                    <i className={`fa-solid ${tool.icon}`}></i> {tool.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="achievements-section section-padding">
        <div className="section-container">
          <div className="section-header reveal">
            <h2 className="section-title">Achievements</h2>
            <div className="section-divider"></div>
          </div>
          <div className="achievements-grid">
            <div className="achievement-card card reveal">
              <div className="achievement-icon"><i className="fa-solid fa-trophy"></i></div>
              <h3>1st Place - Carrom</h3>
              <p className="achievement-sub">State-Level Competition</p>
              <p>Demonstrated strategic thinking, precision, focus, and competitive excellence to secure the title.</p>
            </div>
            <div className="achievement-card card reveal">
              <div className="achievement-icon"><i className="fa-solid fa-file-lines"></i></div>
              <h3>2nd Place - Paper Presentation</h3>
              <p className="achievement-sub">Christian College of Engineering & Technology</p>
              <p>Showcased an innovative E-mail Alert Message Web Application, emphasizing strong technical design, communication, and problem-solving skills.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="contact-section section-padding">
        <div className="section-container">
          <div className="section-header reveal">
            <h2 className="section-title">Get In Touch</h2>
            <div className="section-divider"></div>
          </div>
          <div className="contact-grid reveal">
            <div className="contact-card card">
              <h3>Contact Information</h3>
              <p>Have an exciting opportunity or project? Feel free to reach out using the form or direct channels.</p>
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <i className="fa-brands fa-whatsapp" style={{ color: '#25D366' }}></i>
                  <div>
                    <span>WhatsApp</span>
                    <p><a href="https://wa.me/919087997874" target="_blank" rel="noopener noreferrer">+91 9087997874</a></p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <i className="fa-solid fa-phone"></i>
                  <div>
                    <span>Phone</span>
                    <p><a href="tel:9087997874">+91 9087997874</a></p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <i className="fa-solid fa-envelope"></i>
                  <div>
                    <span>Email</span>
                    <p><a href="mailto:pabraham1028@gmail.com">pabraham1028@gmail.com</a></p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <i className="fa-solid fa-location-dot"></i>
                  <div>
                    <span>Location</span>
                    <p>Dindigul, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-container card">
              <form id="contact-form" onSubmit={handleContactSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" required placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" required placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" required placeholder="Describe your project or message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block btn-whatsapp">
                  Send via WhatsApp <i className="fa-brands fa-whatsapp"></i>
                </button>
                <p className="whatsapp-direct-hint">
                  <i className="fa-solid fa-bolt"></i> Direct WhatsApp message to <strong>+91 9087997874</strong>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p>&copy; 2026 Abraham M. All Rights Reserved.</p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/abraham-m-s-micheal-raj" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://github.com/abrahamstmarys2a01-commits" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
      </footer>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="project-modal-backdrop" 
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="modal-header-image">
              <img src={selectedProject.image} alt={selectedProject.title} />
              <div className="modal-header-overlay">
                <span className="project-tag">
                  <i className={`fa-solid ${selectedProject.icon}`} style={{ marginRight: '6px' }}></i>
                  {selectedProject.tag}
                </span>
                <h2>{selectedProject.title}</h2>
                {selectedProject.domain && (
                  <span className="modal-domain"><i className="fa-solid fa-briefcase"></i> {selectedProject.domain}</span>
                )}
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3><i className="fa-solid fa-file-lines"></i> Project Overview</h3>
                <p className="modal-overview-text">{selectedProject.details.overview}</p>
              </div>

              {selectedProject.details.modules && selectedProject.details.modules.length > 0 && (
                <div className="modal-section">
                  <h3><i className="fa-solid fa-cubes"></i> Core Modules & Features</h3>
                  <div className="modal-modules-grid">
                    {selectedProject.details.modules.map((mod, idx) => (
                      <div key={idx} className="modal-module-card">
                        <h4><i className="fa-solid fa-circle-check"></i> {mod.title}</h4>
                        <p>{mod.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.details.features && selectedProject.details.features.length > 0 && (
                <div className="modal-section">
                  <h3><i className="fa-solid fa-star"></i> Key Highlights</h3>
                  <ul className="modal-features-list">
                    {selectedProject.details.features.map((feat, idx) => (
                      <li key={idx}>
                        <i className="fa-solid fa-check"></i>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="modal-section">
                <h3><i className="fa-solid fa-code"></i> Technologies Used</h3>
                <div className="modal-tech-pills">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="modal-tech-pill">{t}</span>
                  ))}
                </div>
              </div>

              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setSelectedProject(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
