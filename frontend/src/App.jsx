import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [filter, setFilter] = useState('all');
  const [activeSection, setActiveSection] = useState('home');

  const skillsRef = useRef(null);
  const [skillsVisible, setSkillsVisible] = useState(false);

  const projects = [
    {
      id: 1,
      category: 'ml-sec',
      title: 'Phishing URL Detection',
      tag: 'Machine Learning / Security',
      description: 'Developed a Phishing URL Detection System using Machine Learning to identify malicious websites. Implemented algorithms such as SVM, Decision Tree, and Random Forest to classify URLs based on extracted features. Includes alert mechanism with alarm sound.',
      tech: ['Python', 'SVM', 'Random Forest', 'Machine Learning'],
      icon: 'fa-circle-exclamation',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80'
    },
    {
      id: 2,
      category: 'fullstack',
      title: 'Bank Transaction Management',
      tag: 'Full-Stack Java',
      description: 'Developed a secure and scalable Bank Transaction Management System using Spring Boot following layered architecture. Implemented account creation, deposit, withdrawal, fund transfer, balance enquiry, exception handling, and transaction safety validation.',
      tech: ['Spring Boot', 'Spring Data JPA', 'MySQL', 'REST APIs'],
      icon: 'fa-building-columns',
      image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=400&q=80'
    },
    {
      id: 3,
      category: 'fullstack',
      title: 'Student Management System',
      tag: 'Java Backend',
      description: 'Designed and developed a Student Management System to perform CRUD operations efficiently. Built RESTful APIs using Spring Boot and integrated them with a MySQL database. Followed layered architecture (Controller, Service, Repository) for better maintainability.',
      tech: ['Spring Boot', 'MySQL', 'RESTful API', 'Postman'],
      icon: 'fa-users-gear',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80'
    },
    {
      id: 4,
      category: 'frontend',
      title: 'Laptop Showroom Website',
      tag: 'Frontend Dev',
      description: 'Created a Laptop Showroom website using HTML, CSS, JavaScript with product catalog, search filter, responsive UI, and interactive features, demonstrating strong frontend development and user-focused design skills.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'UX Design'],
      icon: 'fa-store',
      image: '/laptop-showroom.png'
    },
    {
      id: 5,
      category: 'frontend',
      title: 'Online Zomato Clone',
      tag: 'Frontend Dev',
      description: 'Developed Online Zomato Web Application using HTML, CSS, JavaScript, implementing CRUD operations, authentication mockup, restaurant listings, food ordering layout, and fully responsive UI.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
      icon: 'fa-utensils',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80'
    }
  ];

  const coreSkills = [
    { name: 'Java (Core & Advance)', percentage: '90%' },
    { name: 'Spring Boot & JPA', percentage: '85%' },
    { name: 'Web Development (HTML, CSS, JS)', percentage: '92%' },
    { name: 'SQL (MySQL)', percentage: '80%' },
    { name: 'Python & C/C++', percentage: '75%' }
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

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! Thank you for reaching out.');
    e.target.reset();
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <>
      {/* Background Elements */}
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>
      <div className="bg-glow bg-glow-3"></div>

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
            <h2 className="hero-subtitle">Software Developer</h2>
            <p className="hero-description">
              Junior Software Developer at Mediawave Technology, Trichy. Computer Science graduate with strong fundamentals in programming, algorithms, and full-stack web development. Experienced in Java, Spring Boot, Web Development, and Cybersecurity.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work <i className="fa-solid fa-arrow-right"></i></a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img src="/profile.png" alt="Abraham M Portrait" className="hero-image" />
              <div className="floating-badge badge-1">
                <i className="fa-brands fa-java"></i>
                <span>Java</span>
              </div>
              <div className="floating-badge badge-2">
                <i className="fa-solid fa-code"></i>
                <span>Web Dev</span>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-down">
          <a href="#about"><i className="fa-solid fa-chevron-down animated-bounce"></i></a>
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
                I am a Junior Software Developer at Mediawave Technology, Trichy. As a passionate Computer Science graduate, I aim to contribute technical expertise, build robust web applications, and drive innovative software solutions. My journey spans across solid programming core principles, backend frameworks, and securing modern web applications.
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
                <p>Developing robust, scalable web applications and backend services. Contributing to full-stack development, software optimizations, and team collaborations on production deployments.</p>
                <div className="timeline-skills">
                  <span>Software Development</span>
                  <span>Full-Stack</span>
                  <span>Java / Spring Boot</span>
                  <span>Database Management</span>
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
            {['all', 'fullstack', 'frontend', 'ml-sec'].map((cat) => (
              <button 
                key={cat} 
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat === 'all' ? 'All Projects' : cat === 'fullstack' ? 'Full-Stack / Java' : cat === 'frontend' ? 'Frontend Web' : 'ML & Security'}
              </button>
            ))}
          </div>
          <div className="projects-grid reveal">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card card" style={{ animation: 'cardAppear 0.5s ease forwards' }}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-details">
                  <span className="project-tag">{project.tag}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t, idx) => <span key={idx}>{t}</span>)}
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
                  <i className="fa-solid fa-phone"></i>
                  <p>+91 9087997874</p>
                </div>
                <div className="contact-info-item">
                  <i className="fa-solid fa-envelope"></i>
                  <p>pabraham1028@gmail.com</p>
                </div>
                <div className="contact-info-item">
                  <i className="fa-solid fa-location-dot"></i>
                  <p>Dindigul, Tamil Nadu, India</p>
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
                <button type="submit" className="btn btn-primary btn-block">Send Message <i className="fa-solid fa-paper-plane"></i></button>
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
    </>
  );
}

export default App;
