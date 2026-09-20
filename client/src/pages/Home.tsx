import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Download,
  FileText,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Phone,
  X,
} from "lucide-react";

const linkedinUrl = "https://linkedin.com/in/bidhanpk";
const cvUrl = "/assets/Bidhan-Kumar-PK-CV.pdf";
const portraitUrl = "/assets/bidhan-portrait.png";

const navItems = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Training", "training"],
  ["Contact", "contact"],
] as const;

const softwareSkills = [
  "MS Word",
  "MS Excel",
  "MS PowerPoint",
  "Data Entry",
  "Bangla & English Typing",
  "Google Docs / Sheets / Drive",
  "WordPress & Website Editing",
  "PDF Editing",
  "Windows",
  "Printing & Scanning",
  "Basic Hardware",
  "Software Installation",
];

const professionalSkills = [
  "Computer Operation",
  "Office Administration",
  "Documentation",
  "Communication",
  "Time Management",
  "Teamwork",
  "Problem Solving",
  "Responsibility",
  "Positive Attitude",
];

function SectionHeading({ eyebrow, title, detail }: { eyebrow: string; title: string; detail?: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {detail && <p>{detail}</p>}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container nav-wrap">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Bidhan Kumar PK home">
            <span className="brand-mark">B</span>
            <span>Bidhan Kumar PK</span>
          </a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav className={`nav-menu ${menuOpen ? "open" : ""}`} aria-label="Primary navigation">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
            ))}
            <a className="nav-cta" href={cvUrl} download="Bidhan-Kumar-PK-CV.pdf">
              <Download size={15} /> Download CV
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid container">
            <div className="hero-copy reveal-up">
              <div className="availability"><span className="status-dot" /> Open to professional opportunities</div>
              <p className="hero-kicker">Computer Operator · Naogaon, Bangladesh</p>
              <h1>Reliable systems.<br /><em>Thoughtful execution.</em></h1>
              <p className="hero-intro">I’m Bidhan Kumar PK, a detail-oriented Computer Operator with practical training in office applications, digital tools, documentation, and everyday technology support.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">Let’s connect <ArrowUpRight size={17} /></a>
                <a className="button button-quiet" href={linkedinUrl} target="_blank" rel="noreferrer">View LinkedIn <Linkedin size={17} /></a>
              </div>
              <div className="hero-meta">
                <span><MapPin size={15} /> Naogaon Sadar, Naogaon</span>
                <span><Mail size={15} /> bidhanpk17@gmail.com</span>
              </div>
            </div>
            <div className="hero-visual reveal-up" style={{ animationDelay: "90ms" }}>
              <div className="portrait-card">
                <div className="portrait-frame"><img src={portraitUrl} alt="Bidhan Kumar PK" /></div>
                <div className="portrait-caption"><span>Profile</span><strong>Bidhan Kumar PK</strong><small>Computer Operator</small></div>
              </div>
              <div className="hero-stamp"><span>01</span><span>Professional<br />profile</span></div>
              <div className="hero-line" />
            </div>
          </div>
          <div className="hero-bottom container"><span>Scroll to explore</span><span className="scroll-line" /></div>
        </section>

        <section id="about" className="section section-paper">
          <div className="container about-grid">
            <SectionHeading eyebrow="01 / About" title="A steady hand for the details that keep work moving." />
            <div className="about-body">
              <p className="lead">Dedicated, quick to learn, and committed to supporting organizational success through accurate, organized computer-based work.</p>
              <p>My experience is grounded in practical computer training and a strong foundation in office applications. I bring a positive attitude, clear communication, and a responsible approach to documentation, data entry, and day-to-day administrative support.</p>
              <div className="facts-row">
                <div><span className="fact-number">2018</span><span>HSC completed</span></div>
                <div><span className="fact-number">III</span><span>Computer Operation level</span></div>
                <div><span className="fact-number">02</span><span>Professional trainings</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section section-ink">
          <div className="container">
            <SectionHeading eyebrow="02 / Experience" title="Ready to contribute from day one." detail="My CV records practical training and readiness for a professional environment, rather than prior employment." />
            <div className="experience-card">
              <div className="experience-icon"><BriefcaseBusiness size={21} /></div>
              <div className="experience-main"><div className="experience-top"><h3>Fresher</h3><span>Current profile</span></div><p>Completed practical computer training with strong office application skills and readiness to perform efficiently in a professional environment.</p></div>
              <div className="experience-side"><span>Focus</span><strong>Computer<br />operation</strong></div>
            </div>
          </div>
        </section>

        <section id="education" className="section section-paper education-section">
          <div className="container two-column-grid">
            <div><SectionHeading eyebrow="03 / Education" title="A foundation built on practical learning." /></div>
            <div className="timeline-list">
              <div className="timeline-item"><div className="timeline-marker"><GraduationCap size={17} /></div><div><span className="timeline-year">2018</span><h3>Higher Secondary Certificate (HSC)</h3><p>GPA 3.25 / 5.00</p></div></div>
              <div className="timeline-item"><div className="timeline-marker"><GraduationCap size={17} /></div><div><span className="timeline-year">2015</span><h3>Secondary School Certificate (SSC)</h3></div></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-blue">
          <div className="container skills-grid">
            <div><SectionHeading eyebrow="04 / Skills" title="Tools I can put to work." detail="A practical toolkit for organized office work, communication, and digital operations." /></div>
            <div className="skill-groups">
              <div className="skill-group"><h3>Computer skills</h3><div className="skill-pills">{softwareSkills.map((skill) => <span key={skill}><Check size={13} />{skill}</span>)}</div></div>
              <div className="skill-group"><h3>Professional skills</h3><div className="skill-pills skill-pills-light">{professionalSkills.map((skill) => <span key={skill}><Check size={13} />{skill}</span>)}</div></div>
            </div>
          </div>
        </section>

        <section id="training" className="section section-paper training-section">
          <div className="container">
            <SectionHeading eyebrow="05 / Training" title="Practical training, applied with care." />
            <div className="training-grid">
              <article className="training-card"><span className="card-index">01</span><Monitor size={25} /><h3>Computer Operation Level-III</h3><p>NTSC</p></article>
              <article className="training-card training-card-accent"><span className="card-index">02</span><FileText size={25} /><h3>Digital Marketing &amp; Graphics Design</h3><p>e-Learning &amp; Earning Ltd.</p></article>
            </div>
            <div className="languages-line"><span>Languages</span><p><strong>Bengali</strong> Native <i /> <strong>English</strong> Basic Working Proficiency</p></div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div><SectionHeading eyebrow="06 / Contact" title="Let’s make the next step clear." detail="For opportunities, collaboration, or a conversation about how I can support your team, please reach out directly." /><a className="button button-primary" href={`mailto:bidhanpk17@gmail.com`}>Send an email <ArrowUpRight size={17} /></a></div>
            <div className="contact-details"><a href="mailto:bidhanpk17@gmail.com"><Mail size={19} /><span><small>Email</small>bidhanpk17@gmail.com</span><ChevronRight size={18} /></a><a href="tel:+8801793381366"><Phone size={19} /><span><small>Phone</small>+880 179 338 1366</span><ChevronRight size={18} /></a><a href={linkedinUrl} target="_blank" rel="noreferrer"><Linkedin size={19} /><span><small>LinkedIn</small>linkedin.com/in/bidhanpk</span><ChevronRight size={18} /></a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} Bidhan Kumar PK</span><span>Built for meaningful work.</span><a href="#top">Back to top ↑</a></div></footer>
    </div>
  );
}
