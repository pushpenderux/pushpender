import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
  Layers3,
  Mail,
  Menu,
  MousePointer2,
  ScanLine,
  Sparkles,
  X,
} from "lucide-react";

const resumeUrl = "https://drive.google.com/file/d/1__8G6ZHDYltuZUdplqrhPwu8yfFoEAL1/view?usp=sharing";

const projects = [
  {
    number: "01",
    category: "Product design · 2020—24",
    client: "Shop LC",
    title: "A clearer path to checkout",
    description:
      "A web and mobile UX overhaul that made the shopping journey easier to understand, from the first product interaction to a more confident checkout.",
    tags: ["UX / UI", "Research", "WCAG"],
    tone: "blue",
    size: "large",
  },
  {
    number: "02",
    category: "Creative systems · 2024—26",
    client: "Angara Ecommerce",
    title: "Making good ideas move faster",
    description:
      "An AI-augmented creative workflow for turning early concepts into polished campaign assets without losing the human point of view.",
    tags: ["AI workflows", "Systems"],
    tone: "lime",
    size: "small",
  },
  {
    number: "03",
    category: "Visual design · 2018—20",
    client: "Crystaltech Esolutions",
    title: "Design that earns attention",
    description:
      "Social campaigns, e-commerce landing pages, and seasonal systems with a stronger visual point of view.",
    tags: ["Visual design", "Campaigns"],
    tone: "lavender",
    size: "small",
  },
];

const experience = [
  {
    date: "2024—26",
    role: "Creative Designer",
    company: "Angara Ecommerce",
    copy: "Spearheaded AI-augmented creative workflows, blending design fundamentals with generative tools to accelerate ideation, concept visualization, and high-quality asset production.",
  },
  {
    date: "2020—24",
    role: "Product Designer",
    company: "Shop LC",
    copy: "Partnered with developers, stakeholders, and conversion teams to shape promotional experiences across web and mobile. Led UX/UI overhauls, A/B testing, and accessible interface design aligned with ADA and WCAG standards.",
  },
  {
    date: "2018—20",
    role: "Graphic Designer",
    company: "Crystaltech Esolutions",
    copy: "Designed social campaigns, e-commerce landing pages, and seasonal promotional systems that helped brands communicate with more consistency across digital touchpoints.",
  },
  {
    date: "2014—18",
    role: "Senior Client Relationship Manager",
    company: "Travel & Visa Services",
    copy: "Managed visa processing across Dubai and Schengen countries, balancing detailed documentation, client relationships, and competitive travel coordination.",
  },
];

const skills = [
  "User-centered design",
  "User research",
  "Interaction design",
  "Wireframing",
  "Prototyping",
  "User testing",
  "Design systems",
  "Design thinking",
  "Sprint planning",
  "Ideation",
  "Data analysis",
  "Motion design",
];

const tools = ["Figma", "Photoshop", "Sketch", "Illustrator", "InDesign", "Framer", "Uizard", "Relume", "Cursor", "Claude"];

function SectionIntro({ number, eyebrow, title, copy }: { number: string; eyebrow: string; title: React.ReactNode; copy: string }) {
  return (
    <div className="section-intro">
      <div className="section-kicker"><span>{number}</span><span>{eyebrow}</span></div>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className={`project-card project-card--${project.size} project-card--${project.tone}`}>
      <div className="project-card__header">
        <span>{project.number}</span>
        <span>{project.category}</span>
      </div>
      <div className="project-card__art" aria-hidden="true">
        <div className="art-grid" />
        <div className="art-panel">
          <div className="art-panel__top"><i /><i /><i /></div>
          <div className="art-panel__content">
            <span className="art-label">{project.client}</span>
            <b>{project.number === "01" ? "Shop with confidence" : project.number === "02" ? "A faster first draft" : "Make it memorable"}</b>
            <span className="art-bar art-bar--wide" /><span className="art-bar" /><span className="art-bar art-bar--short" />
            <div className="art-button">Explore <ArrowUpRight size={11} /></div>
          </div>
        </div>
        <span className="art-stamp">{project.number}</span>
      </div>
      <div className="project-card__body">
        <p className="project-card__client">{project.client}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
    </article>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="site-header">
        <Link to="/" className="brand-mark" aria-label="Pushpender Sharma home">
          <span className="brand-mark__symbol">P</span>
          <span className="brand-mark__name">Pushpender Sharma</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link to="/#work">Work</Link>
          <Link to="/#about">About</Link>
          <Link to="/#experience">Experience</Link>
          <a className="nav-resume" href={resumeUrl} target="_blank" rel="noreferrer">Resume <ArrowUpRight size={14} /></a>
        </nav>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <Link to="/#work" onClick={closeMenu}>Work <ArrowUpRight size={17} /></Link>
            <Link to="/#about" onClick={closeMenu}>About <ArrowUpRight size={17} /></Link>
            <Link to="/#experience" onClick={closeMenu}>Experience <ArrowUpRight size={17} /></Link>
            <a href={resumeUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Resume <ArrowUpRight size={17} /></a>
          </nav>
        )}
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__orb hero__orb--one" aria-hidden="true" />
        <div className="hero__orb hero__orb--two" aria-hidden="true" />
        <div className="hero__content">
          <p className="eyebrow"><span className="eyebrow__dot" /> Product designer · UX strategist · AI explorer</p>
          <h1 id="hero-title">Good products feel <em>obvious.</em></h1>
          <p className="hero__summary">I’m Pushpender Sharma, a user-centered product designer who turns complex journeys into clear, useful digital experiences.</p>
          <div className="hero__actions">
            <Link className="button button--primary" to="/#work">Explore selected work <ArrowDownRight size={17} /></Link>
            <a className="text-link" href={resumeUrl} target="_blank" rel="noreferrer">Open résumé <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="hero__meta" aria-label="Professional summary">
          <span>Based in India</span><span>Available for select projects</span><span>6+ years shaping digital products</span>
        </div>
        <div className="hero__scroll" aria-hidden="true"><span>Scroll to explore</span><ArrowDownRight size={16} /></div>
      </section>

      <section className="proof-strip" aria-label="Capabilities">
        <div><strong>6+</strong><span>years of experience</span></div>
        <div><strong>Web + mobile</strong><span>product thinking</span></div>
        <div><strong>AI-assisted</strong><span>creative workflows</span></div>
        <div><strong>WCAG-minded</strong><span>accessible by default</span></div>
      </section>

      <section className="content-section work-section" id="work">
        <SectionIntro number="01" eyebrow="Selected work" title={<>From messy problem<br /><span>to meaningful product.</span></>} copy="A focused selection of projects across product design, e-commerce, creative systems, and visual communication." />
        <div className="project-grid">{projects.map((project) => <ProjectCard project={project} key={project.number} />)}</div>
      </section>

      <section className="content-section about-section" id="about">
        <div className="about__visual" aria-hidden="true">
          <div className="about__visual-card">
            <span className="about__visual-index">02 / approach</span>
            <div className="about__visual-icon"><MousePointer2 size={31} /></div>
            <p>Make the<br /><strong>next step</strong><br />feel natural.</p>
            <span className="about__visual-line" />
          </div>
        </div>
        <div className="about__copy">
          <div className="section-kicker"><span>02</span><span>About me</span></div>
          <h2>Empathy is a<br /><span>design tool.</span></h2>
          <p>I work in the space between a messy problem and a clear next step. My process combines research, visual craft, and the details that make an experience feel effortless.</p>
          <p>Recently, I’ve been exploring generative AI as a creative partner—not a replacement for taste or empathy, but a way to give good ideas more room to grow.</p>
          <div className="principles">
            <div><Layers3 size={18} /><span>Structure before polish</span></div>
            <div><ScanLine size={18} /><span>Clarity over decoration</span></div>
            <div><Sparkles size={18} /><span>Curiosity in every iteration</span></div>
          </div>
        </div>
      </section>

      <section className="content-section experience-section" id="experience">
        <SectionIntro number="03" eyebrow="Experience" title={<>A practice built<br /><span>over time.</span></>} copy="Moving between product thinking, visual design, and the teams that bring ideas to life." />
        <div className="experience-list">
          {experience.map((item, index) => (
            <article className="experience-item" key={`${item.company}-${item.date}`}>
              <div className="experience-item__number">0{index + 1}</div>
              <div className="experience-item__date">{item.date}</div>
              <div className="experience-item__content"><h3>{item.role}</h3><p className="experience-item__company">{item.company}</p><p>{item.copy}</p></div>
              <ArrowUpRight className="experience-item__arrow" size={20} />
            </article>
          ))}
        </div>
      </section>

      <section className="content-section toolkit-section" aria-labelledby="toolkit-title">
        <div className="toolkit__heading"><div className="section-kicker"><span>04</span><span>Toolkit</span></div><h2 id="toolkit-title">The tools are<br /><span>only half of it.</span></h2><p>The other half is knowing what to ask, what to test, and what to leave out.</p></div>
        <div className="toolkit__content">
          <div className="toolkit__group"><h3>What I do</h3><div className="skill-list">{skills.map((skill) => <span key={skill}><Check size={14} />{skill}</span>)}</div></div>
          <div className="toolkit__group"><h3>What I use</h3><div className="tool-list">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-section__top"><div className="section-kicker section-kicker--light"><span>05</span><span>Next step</span></div><span className="contact-status"><i /> Open to thoughtful collaborations</span></div>
        <div className="contact-section__content"><h2>Have a good<br /><em>problem to solve?</em></h2><div><p>Let’s make the next step feel obvious. For a closer look at my experience and process, start with my résumé.</p><a className="button button--light" href={resumeUrl} target="_blank" rel="noreferrer">View my résumé <ArrowUpRight size={17} /></a></div></div>
        <div className="contact-section__footer"><a href="mailto:pushpender.sharmaoffical@outlook.com"><Mail size={15} /> pushpender.sharmaoffical@outlook.com</a><span>Pushpender Sharma · UX Designer</span><span>© {new Date().getFullYear()}</span></div>
      </section>
    </main>
  );
}
