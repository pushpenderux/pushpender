import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Download,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

const workItems = [
  {
    number: "01",
    type: "Product design / e-commerce",
    title: "A clearer path to checkout",
    company: "Shop LC",
    description:
      "A web and mobile UX overhaul that brought focus to the shopping journey, from the first product interaction through a simpler, more confident checkout.",
    tags: ["UX / UI", "Research", "Accessibility"],
    accent: "mint",
  },
  {
    number: "02",
    type: "Creative systems / generative AI",
    title: "Making good ideas move faster",
    company: "Angara Ecommerce",
    description:
      "A practical AI-augmented creative workflow for turning early concepts into high-quality campaign assets while keeping every output on-brand and business-ready.",
    tags: ["AI workflows", "Art direction", "Systems"],
    accent: "peach",
  },
  {
    number: "03",
    type: "Visual design / campaigns",
    title: "Design that earns attention",
    company: "Crystaltech Esolutions",
    description:
      "Targeted social graphics, landing pages, and seasonal campaign systems designed to give digital engagement a stronger visual point of view.",
    tags: ["Visual design", "E-commerce", "Campaigns"],
    accent: "lavender",
  },
];

const experience = [
  {
    year: "2024 — 2026",
    role: "Creative Designer",
    company: "Angara Ecommerce",
    copy: "Spearheaded AI-augmented creative workflows, blending strong design fundamentals with generative tools to accelerate ideation and concept visualization. Built repeatable pipelines for high-quality, on-brand asset production.",
  },
  {
    year: "2020 — 2024",
    role: "Product Designer",
    company: "Shop LC",
    copy: "Partnered with developers, stakeholders, and conversion teams to shape high-converting promotional experiences across web and mobile. Led UX/UI overhauls, structured A/B testing, and accessible interface design aligned with ADA and WCAG standards.",
  },
  {
    year: "2018 — 2020",
    role: "Graphic Designer",
    company: "Crystaltech Esolutions",
    copy: "Designed social campaigns, e-commerce landing pages, and seasonal promotional systems that helped brands communicate with more consistency across digital touchpoints.",
  },
  {
    year: "2014 — 2018",
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
  "Data analysis",
  "Motion design",
  "Design systems",
  "Design thinking",
  "Sprint planning",
  "Ideation",
];

const tools = [
  "Figma",
  "Adobe Photoshop",
  "Sketch",
  "Illustrator",
  "InDesign",
  "Premiere Rush",
  "Lightroom",
  "Framer",
];

const aiTools = [
  "Uizard",
  "Emergent",
  "Galileo AI",
  "Relume",
  "Davis & Devin AI",
  "Cursor",
  "Magnific",
  "Claude",
];

function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <div className="section-label">
      <span className="section-label__index">{index}</span>
      <span>{children}</span>
    </div>
  );
}

function WindowBar({ index, label }: { index: string; label: string }) {
  return (
    <div className="window-bar">
      <div className="window-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <span className="window-bar__label">{index} / {label}</span>
      <span className="window-bar__status">Available for select projects</span>
    </div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="site-header">
        <Link to="/" className="brand-mark" aria-label="Pushpender Sharma home">
          <span>PS</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link to="/#work">Work</Link>
          <Link to="/#experience">Experience</Link>
          <Link to="/#about">About</Link>
          <a className="nav-resume" href="https://drive.google.com/file/d/1__8G6ZHDYltuZUdplqrhPwu8yfFoEAL1/view?usp=sharing" target="_blank" rel="noreferrer">
            Resume <ArrowUpRight size={13} strokeWidth={2.5} />
          </a>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <Link to="/#work" onClick={closeMenu}>Work <ArrowUpRight size={15} /></Link>
            <Link to="/#experience" onClick={closeMenu}>Experience <ArrowUpRight size={15} /></Link>
            <Link to="/#about" onClick={closeMenu}>About <ArrowUpRight size={15} /></Link>
            <a href="https://drive.google.com/file/d/1__8G6ZHDYltuZUdplqrhPwu8yfFoEAL1/view?usp=sharing" target="_blank" rel="noreferrer" onClick={closeMenu}>Resume <ArrowUpRight size={15} /></a>
          </nav>
        )}
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__eyebrow">Pushpender Sharma <span>·</span> UX Designer</div>
        <h1 id="hero-title">
          Designing <em>intuitive</em>
          <br className="hero-break" /> digital products
        </h1>
        <p className="hero__intro">
          User-centered product designer and UX strategist with 6+ years of experience turning complex journeys into clear, high-converting digital experiences.
        </p>
        <div className="hero__actions">
          <Link className="button button--dark" to="/#work">View my work <ArrowDownRight size={16} /></Link>
          <a className="button button--outline" href="https://drive.google.com/file/d/1__8G6ZHDYltuZUdplqrhPwu8yfFoEAL1/view?usp=sharing" target="_blank" rel="noreferrer">Download resume <Download size={15} /></a>
        </div>
        <div className="hero__rule" aria-hidden="true" />
        <div className="hero__side-note">Scroll to explore <ArrowDownRight size={15} /></div>
      </section>

      <section className="marquee-strip" aria-label="Areas of practice">
        <div>UX strategy <span>✳</span> product design <span>✳</span> creative systems <span>✳</span> accessible by default <span>✳</span> UX strategy <span>✳</span></div>
      </section>

      <section className="page-section work-section" id="work">
        <div className="section-heading-row">
          <div>
            <SectionLabel index="01" >Selected work</SectionLabel>
            <h2>Thoughtful design,<br /><span>useful outcomes.</span></h2>
          </div>
          <p className="section-heading-row__note">A few chapters from a career spent making digital experiences feel simpler, sharper, and more human.</p>
        </div>
        <div className="work-grid">
          {workItems.map((item) => (
            <article className={`work-card work-card--${item.accent}`} key={item.number}>
              <div className="work-card__topline">
                <span>{item.number}</span>
                <span>{item.type}</span>
              </div>
              <div className="work-card__visual" aria-hidden="true">
                <div className="visual-orbit visual-orbit--one" />
                <div className="visual-orbit visual-orbit--two" />
                <div className="visual-window">
                  <div className="visual-window__top"><span /><span /><span /></div>
                  <div className="visual-window__body">
                    <div className="visual-line visual-line--short" />
                    <div className="visual-line" />
                    <div className="visual-line visual-line--tiny" />
                    <div className="visual-block" />
                  </div>
                </div>
                <span className="visual-number">{item.number}</span>
              </div>
              <div className="work-card__content">
                <p className="work-card__company">{item.company}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section about-section" id="about">
        <WindowBar index="02" label="About me" />
        <div className="about-grid">
          <div className="about-intro">
            <SectionLabel index="02" >A little context</SectionLabel>
            <h2>Design is how I make room for <span>better decisions.</span></h2>
            <p>I’m a product designer who enjoys the space between a messy problem and a clear next step. My work brings together research, visual craft, and a healthy respect for the details that make an experience feel effortless.</p>
            <p>More recently, I’ve been exploring generative AI as a creative partner — not to replace taste or empathy, but to give good ideas more room to grow.</p>
          </div>
          <div className="about-note">
            <div className="about-note__symbol"><Sparkles size={23} /></div>
            <p>“The best interfaces don’t ask for attention. They earn trust.”</p>
            <span>— working principle</span>
          </div>
        </div>
      </section>

      <section className="page-section experience-section" id="experience">
        <div className="section-heading-row section-heading-row--experience">
          <div>
            <SectionLabel index="03" >Experience</SectionLabel>
            <h2>A practice built<br /><span>over time.</span></h2>
          </div>
          <p className="section-heading-row__note">Six-plus years of moving between product thinking, visual design, and the teams that bring ideas to life.</p>
        </div>
        <div className="experience-list">
          {experience.map((item, index) => (
            <article className="experience-item" key={item.company}>
              <div className="experience-item__year">{item.year}</div>
              <div className="experience-item__number">0{index + 1}</div>
              <div className="experience-item__body">
                <h3>{item.role}</h3>
                <p className="experience-item__company">{item.company}</p>
                <p>{item.copy}</p>
              </div>
              <ArrowUpRight className="experience-item__arrow" size={21} />
            </article>
          ))}
        </div>
      </section>

      <section className="page-section toolkit-section">
        <div className="toolkit-intro">
          <SectionLabel index="04" >Toolkit</SectionLabel>
          <h2>Curious by nature.<br /><span>Practical by design.</span></h2>
          <p>The methods and tools I reach for when the right answer is still taking shape.</p>
        </div>
        <div className="toolkit-columns">
          <div className="toolkit-column">
            <h3>Skills <span>({skills.length})</span></h3>
            <div className="pill-grid">{skills.map((skill) => <span key={skill}><Check size={12} />{skill}</span>)}</div>
          </div>
          <div className="toolkit-column">
            <h3>Software</h3>
            <div className="pill-grid pill-grid--light">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
            <h3 className="toolkit-subheading">AI tools</h3>
            <div className="pill-grid pill-grid--coral">{aiTools.map((tool) => <span key={tool}>{tool}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="resume-cta" id="resume">
        <div className="resume-cta__top">
          <SectionLabel index="05" >Let’s work together</SectionLabel>
          <span className="resume-cta__available"><i /> Open to thoughtful collaborations</span>
        </div>
        <h2>Have a good problem<br />to solve?</h2>
        <p>For a closer look at my experience, process, and the work behind the work, take a look at my resume.</p>
        <a className="button button--light" href="https://drive.google.com/file/d/1__8G6ZHDYltuZUdplqrhPwu8yfFoEAL1/view?usp=sharing" target="_blank" rel="noreferrer">View my resume <ArrowUpRight size={16} /></a>
        <div className="resume-cta__footer">
          <span>Pushpender Sharma · UX Designer</span>
          <a href="mailto:pushpender.sharmaoffical@outlook.com">pushpender.sharmaoffical@outlook.com</a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </section>
    </main>
  );
}
