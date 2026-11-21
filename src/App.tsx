import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Check, ChevronRight, Code2, ExternalLink, GraduationCap, MapPin, Menu, X } from 'lucide-react'
import { certifications, navItems, profile, projects, skillGroups, validExternalUrl } from './data/portfolio'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.2, 0.5] })
    navItems.forEach(({ id }) => { const node = document.getElementById(id); if (node) observer.observe(node) })
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const socialLinks = [
    ...(validExternalUrl(profile.githubUrl) ? [{ label: 'GitHub', href: profile.githubUrl }] : []),
    ...(validExternalUrl(profile.linkedinUrl) ? [{ label: 'LinkedIn', href: profile.linkedinUrl }] : []),
  ]

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <div className="nav-shell">
        <a className="wordmark" href="#home" aria-label="Vasudha Kalyani, home" onClick={closeMenu}><span className="wordmark-short">VK.</span><span className="wordmark-full">Vasudha Kalyani</span></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav id="primary-navigation" className={`primary-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {navItems.map(({ label, id }) => <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined} onClick={closeMenu}>{label}</a>)}
        </nav>
      </div>
    </header>

    <main id="main">
      <section className="hero section-shell" id="home" aria-labelledby="hero-title">
        <div className="hero-photo-wrap">
          <img className="hero-photo" src={profile.profileImage} alt="Portrait of Vasudha Kalyani" width="500" height="500" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Hello, I'm</p>
          <h1 id="hero-title">{profile.name}<span className="heading-period">.</span></h1>
          <p className="hero-role">AI &amp; ML Engineer <span aria-hidden="true">|</span> GenAI Developer</p>
          <p className="hero-intro">I build practical AI-powered applications, from machine learning workflows to RAG-based products and backend systems.</p>
          <p className="hero-location">Computer Science graduate <span aria-hidden="true">·</span> Bangalore, India</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore projects <ArrowDown size={16} /></a>
            <a className="button button-secondary" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
          </div>
          {socialLinks.length > 0 && <div className="hero-socials">{socialLinks.map(({ label, href }) => <a href={href} target="_blank" rel="noopener noreferrer" key={label}>{label}<ExternalLink size={13} /></a>)}</div>}
        </div>
        <a className="scroll-cue" href="#about" aria-label="Scroll to About"><span>Scroll to explore</span><ChevronRight size={15} /></a>
      </section>

      <section className="content-section section-shell" id="about" aria-labelledby="about-title">
        <SectionHeading eyebrow="A little about me" title="About" id="about-title" />
        <div className="about-layout">
          <p className="about-copy">I’m a Computer Science graduate specializing in Artificial Intelligence and Machine Learning. I enjoy building useful applications that bring together machine learning, Generative AI, retrieval-augmented generation, and backend engineering. My project experience includes AI-powered career recommendations, repository intelligence, educational image generation, and computer-vision-based attendance systems. I value clear problem-solving, collaboration, and building reliable solutions that are practical to use.</p>
          <div className="areas-panel"><h3>Areas I work with</h3><div className="area-list"><span>Generative AI &amp; RAG</span><span>Machine Learning</span><span>Backend Development</span><span>Vector Search</span></div></div>
        </div>
        <div className="experience-card">
          <div className="experience-icon"><BriefcaseBusiness size={19} /></div>
          <div className="experience-main"><div className="experience-top"><div><p className="eyebrow">Experience</p><h3>AI Intern — Pneumonia Detection Project</h3></div><span className="date-pill">Feb — Mar 2026</span></div><p className="experience-company">Edunet-TechSaksham</p><ul className="experience-list"><li>Presented an AI-based healthcare product through structured demonstrations and translated technical features for non-technical audiences.</li><li>Handled questions and feedback across demo sessions, working to defined goals and review cycles under mentor guidance.</li><li>Maintained structured documentation and project updates.</li></ul></div>
        </div>
      </section>

      <section className="content-section section-shell" id="education" aria-labelledby="education-title">
        <SectionHeading eyebrow="Academic background" title="Education" id="education-title" />
        <article className="education-card"><div className="education-icon"><GraduationCap size={23} /></div><div className="education-body"><div className="education-top"><div><h3>Alliance University</h3><p>B.Tech — Computer Science (Artificial Intelligence &amp; Machine Learning)</p></div><span className="date-pill">Sep 2022 — 2026</span></div><div className="education-meta"><span><MapPin size={15} />Bangalore, Karnataka</span><span className="cgpa"><strong>8.2</strong> CGPA</span></div></div></article>
      </section>

      <section className="content-section section-shell" id="skills" aria-labelledby="skills-title">
        <SectionHeading eyebrow="Tools &amp; strengths" title="Skills" id="skills-title" />
        <div className="skills-grid">{skillGroups.map((group, index) => <article className="skill-card" key={group.title}><div className="skill-card-head"><span className="skill-index">0{index + 1}</span><h3>{group.title}</h3></div><div className="skill-chips">{group.skills.map((skill) => <span className="chip" key={skill}>{skill}</span>)}</div></article>)}</div>
      </section>

      <section className="content-section projects-section section-shell" id="projects" aria-labelledby="projects-title">
        <SectionHeading eyebrow="Selected work" title="Projects" id="projects-title" />
        <div className="projects-grid">{projects.map((project, index) => <article className="project-card" key={project.slug}><div className="project-card-top"><span className="project-index">0{index + 1} / 04</span><Code2 size={18} aria-hidden="true" /></div><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="project-tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><ul className="project-highlights">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul><div className="project-footer">{validExternalUrl(project.githubUrl) ? <a className="text-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub <ExternalLink size={14} /></a> : <span className="link-unavailable"><span className="link-dot" />Repository link coming soon</span>}{validExternalUrl(project.demoUrl) && <a className="text-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live demo <ExternalLink size={14} /></a>}</div></article>)}</div>
      </section>

      <section className="content-section section-shell" id="certifications" aria-labelledby="certifications-title">
        <SectionHeading eyebrow="Learning &amp; development" title="Certifications" id="certifications-title" />
        <div className="cert-list">{certifications.map((item, index) => <article className="cert-item" key={item.name}><span className="cert-check"><Check size={16} /></span><div className="cert-details"><h3>{item.name}</h3><p>{item.issuer}{item.year ? ` · ${item.year}` : ''}</p></div><span className="cert-number">0{index + 1}</span>{validExternalUrl(item.credentialUrl) && <a href={item.credentialUrl} className="text-link" target="_blank" rel="noopener noreferrer">View credential <ExternalLink size={14} /></a>}</article>)}</div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="contact-inner section-shell"><div className="contact-intro"><p className="eyebrow">Have a good one in mind?</p><h2 id="contact-title">Let’s build something useful.</h2><p>Have an opportunity, project idea, or question? Feel free to reach out.</p><a className="button button-light" href={`mailto:${profile.email}`}>Say hello <ArrowUpRight size={16} /></a></div><div className="contact-details"><div className="contact-detail"><span className="contact-label">Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div><div className="contact-detail"><span className="contact-label">Phone</span><a href={profile.phoneHref}>{profile.phoneDisplay}</a></div><div className="contact-detail"><span className="contact-label">Location</span><span>{profile.location}</span></div>{validExternalUrl(profile.linkedinUrl) && <div className="contact-detail"><span className="contact-label">LinkedIn</span><a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">Visit profile <ExternalLink size={14} /></a></div>}{validExternalUrl(profile.githubUrl) && <div className="contact-detail"><span className="contact-label">GitHub</span><a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">Visit profile <ExternalLink size={14} /></a></div>}</div></div></section>
    </main>

    <footer className="site-footer"><div className="footer-inner section-shell"><p>© {new Date().getFullYear()} Vasudha Kalyani</p><span>Designed and built with care.</span><a href="#home">Back to top <ArrowUpRight size={14} /></a></div></footer>
  </>
}

function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id: string }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2 id={id}>{title}<span className="heading-period">.</span></h2></div><span className="section-rule" aria-hidden="true" /></div>
}

export default App
