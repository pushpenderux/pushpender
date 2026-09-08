import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { PortfolioFooter, PortfolioHeader } from "@/components/PortfolioChrome";
import { projects, resumeUrl } from "@/lib/portfolio";

const experience = [
  { date: "2024 to 2026", role: "Creative Designer", company: "Angara Ecommerce", copy: "Spearheaded AI-assisted creative workflows, blending design fundamentals with generative tools to accelerate ideation, concept visualization, and high-quality asset production." },
  { date: "2020 to 2024", role: "Product Designer", company: "Shop LC", copy: "Partnered with developers, stakeholders, and conversion teams to shape promotional experiences across web and mobile. Led UX and UI overhauls, A/B testing, and accessible interface design aligned with ADA and WCAG standards." },
  { date: "2018 to 2020", role: "Graphic Designer", company: "Crystaltech Esolutions", copy: "Designed social campaigns, e-commerce landing pages, and seasonal promotional systems that helped brands communicate with more consistency across digital touchpoints." },
  { date: "2014 to 2018", role: "Senior Client Relationship Manager", company: "Travel and Visa Services", copy: "Managed visa processing across Dubai and Schengen countries, balancing detailed documentation, client relationships, and competitive travel coordination." },
];

const skills = ["User-centered design", "User research", "Interaction design", "Wireframing", "Prototyping", "User testing", "Design systems", "Design thinking", "Sprint planning", "Ideation", "Data analysis", "Motion design"];
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
    <Link to={`/work/${project.slug}`} className={`project-card project-card--small project-card--${project.tone}`} aria-label={`View ${project.client} case study`}>
      <div className="project-card__header"><span>{project.number}</span><span>{project.category} for {project.period}</span></div>
      <div className="project-card__art" aria-hidden="true">
        {project.image ? <img className="project-card__image" src={project.image} alt="" /> : <><div className="art-grid" /><div className="art-panel"><div className="art-panel__top"><i /><i /><i /></div><div className="art-panel__content"><span className="art-label">{project.client}</span><b>{project.feature}</b><span className="art-bar art-bar--wide" /><span className="art-bar" /><span className="art-bar art-bar--short" /><div className="art-button">View project</div></div></div><span className="art-stamp">{project.number}</span></>}
      </div>
      <div className="project-card__body"><p className="project-card__client">{project.number === "01" ? "Women's fashion" : project.client}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><span className="project-card__link">View case study</span></div>
    </Link>
  );
}

export default function Index() {
  return (
    <main className="site-shell">
      <PortfolioHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__orb hero__orb--one" aria-hidden="true" /><div className="hero__orb hero__orb--two" aria-hidden="true" />
        <div className="hero__content"><p className="eyebrow">Product designer, UX strategist, AI explorer</p><h1 id="hero-title">Good products feel <em>obvious.</em></h1><p className="hero__summary">I am Pushpender Sharma, a user-centered product designer who turns complex journeys into clear, useful digital experiences.</p><div className="hero__actions"><Link className="button button--primary" to="/#work">Explore selected work</Link><a className="text-link" href="#contact">Start a conversation</a></div></div>
        <div className="hero__meta"><span>Based in India</span><span>Available for select projects</span><span>Six plus years shaping digital products</span></div>
      </section>

      <section className="proof-strip" aria-label="Capabilities"><div><strong>Six plus</strong><span>years of experience</span></div><div><strong>Web and mobile</strong><span>product thinking</span></div><div><strong>AI-assisted</strong><span>creative workflows</span></div><div><strong>WCAG-minded</strong><span>accessible by default</span></div></section>

      <section className="content-section work-section" id="work"><SectionIntro number="01" eyebrow="Work" title={<>From messy problem<br /><span>to meaningful product.</span></>} copy="Selected projects across product design, e-commerce, creative systems, and visual communication." /><div className="project-grid">{projects.map((project) => <ProjectCard project={project} key={project.slug} />)}</div></section>

      <section className="content-section experience-section" id="experience"><SectionIntro number="03" eyebrow="Experience" title={<>A practice built<br /><span>over time.</span></>} copy="Moving between product thinking, visual design, and the teams that bring ideas to life." /><div className="experience-list">{experience.map((item, index) => <article className="experience-item" key={`${item.company}-${item.date}`}><div className="experience-item__number">0{index + 1}</div><div className="experience-item__date">{item.date}</div><div className="experience-item__content"><h3>{item.role}</h3><p className="experience-item__company">{item.company}</p><p>{item.copy}</p></div></article>)}</div></section>

      <section className="content-section toolkit-section" aria-labelledby="toolkit-title"><div className="toolkit__heading"><div className="section-kicker"><span>04</span><span>Toolkit</span></div><h2 id="toolkit-title">The tools are<br /><span>only half of it.</span></h2><p>The other half is knowing what to ask, what to test, and what to leave out.</p></div><div className="toolkit__content"><div className="toolkit__group"><h3>What I do</h3><div className="skill-list">{skills.map((skill) => <span key={skill}><Check size={14} />{skill}</span>)}</div></div><div className="toolkit__group"><h3>What I use</h3><div className="tool-list">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div></div></section>

      <section className="contact-section" id="contact"><div className="contact-section__top"><div className="section-kicker section-kicker--light"><span>05</span><span>Contact</span></div><span className="contact-status">Open to thoughtful collaborations</span></div><div className="contact-section__content"><h2>Have a good<br /><em>problem to solve?</em></h2><div><p>Let us make the next step feel obvious. Start with a project conversation or review my resume.</p><div className="contact-section__actions"><a className="button button--light" href="mailto:pushpender.sharmaoffical@outlook.com">Contact me</a><a className="button button--outline-light" href={resumeUrl} target="_blank" rel="noreferrer">View resume</a></div></div></div><PortfolioFooter /></section>
    </main>
  );
}
