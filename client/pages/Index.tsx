import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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

const scrollTargets = [
  { number: "01", label: "Work", description: "Selected projects", target: "work" },
  { number: "02", label: "Experience", description: "Six plus years of practice", target: "experience" },
  { number: "03", label: "Toolkit", description: "Methods and tools", target: "toolkit" },
  { number: "04", label: "Contact", description: "Start a conversation", target: "contact" },
];

function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    document.documentElement.classList.add("reveal-ready");
    elements.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);
}

function SectionIntro({ number, eyebrow, title, copy }: { number: string; eyebrow: string; title: React.ReactNode; copy: string }) {
  return (
    <div className="section-intro">
      <div className="section-kicker"><span>{number}</span><span>{eyebrow}</span></div>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

function CosmicChatArtwork() {
  return (
    <div className="cosmic-art">
      <div className="cosmic-art__phone">
        <div className="cosmic-art__status"><span>9:41</span><span>Connected</span></div>
        <div className="cosmic-art__heading"><strong>Messages</strong><span>Search</span></div>
        <div className="cosmic-art__list">
          <div className="cosmic-art__chat"><span className="cosmic-art__avatar cosmic-art__avatar--violet">S</span><span><strong>Sarah Jenkins</strong><small>See you at the office tomorrow!</small></span><time>9:41</time></div>
          <div className="cosmic-art__chat"><span className="cosmic-art__avatar cosmic-art__avatar--blue">D</span><span><strong>Dev Team</strong><small>The new build is live...</small></span><time>8:32</time></div>
          <div className="cosmic-art__chat"><span className="cosmic-art__avatar cosmic-art__avatar--pink">M</span><span><strong>Mom</strong><small>Call me when you can.</small></span><time>Yesterday</time></div>
        </div>
        <div className="cosmic-art__nav"><span className="is-active">Chats</span><span>People</span><span>Settings</span></div>
      </div>
      <span className="cosmic-art__label">After</span>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const isExternal = "externalUrl" in project;
  const projectUrl = isExternal ? project.externalUrl : `/work/${project.slug}`;
  const projectImage = "image" in project ? project.image : undefined;
  const imageOnRight = project.number === "02";
  const linkLabel = project.number === "02" ? "View AI projects" : project.number === "03" ? "Learn more" : "View case study";
  const cardClassName = `project-card project-card--${project.tone}${imageOnRight ? " project-card--image-right" : ""}`;
  const cardContent = (
    <>
      <div className="project-card__art" aria-hidden="true">
        {"visual" in project && project.visual === "cosmic-after" && !projectImage ? <CosmicChatArtwork /> : projectImage ? <img className="project-card__image" src={projectImage} alt="" /> : <><div className="art-grid" /><div className="art-panel"><div className="art-panel__top"><i /><i /><i /></div><div className="art-panel__content"><span className="art-label">{project.client}</span><b>{project.feature}</b><span className="art-bar art-bar--wide" /><span className="art-bar" /><span className="art-bar art-bar--short" /><div className="art-button">View project</div></div></div><span className="art-stamp">{project.number}</span></>}
      </div>
      <div className="project-card__body">
        <div className="project-card__header"><span>{project.number}</span><span>{project.category} for {project.period}</span></div>
        <p className="project-card__client">{project.number === "01" ? "Womens Fashion" : project.client}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <span className="project-card__link">{linkLabel}</span>
      </div>
    </>
  );

  return isExternal ? (
    <a href={projectUrl} className={cardClassName} aria-label={`View ${project.client} project`} target="_blank" rel="noreferrer">{cardContent}</a>
  ) : (
    <Link to={projectUrl} className={cardClassName} aria-label={`View ${project.client} ${project.number === "02" ? "AI projects" : "case study"}`}>{cardContent}</Link>
  );
}

export default function Index() {
  useScrollReveal();
  const [activeSection, setActiveSection] = useState("work");

  useEffect(() => {
    const sections = scrollTargets
      .map(({ target }) => document.getElementById(target))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
        if (visibleEntry) setActiveSection(visibleEntry.target.id);
      },
      { threshold: [0.15, 0.35, 0.6], rootMargin: "-25% 0px -55%" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (target: string) => {
    const section = document.getElementById(target);
    if (!section) return;
    setActiveSection(target);
    section.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <main className="site-shell">
      <PortfolioHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__orb hero__orb--one" aria-hidden="true" /><div className="hero__orb hero__orb--two" aria-hidden="true" />
        <div className="hero__topline"><span>Independent UX practice</span><span>Portfolio / 2026</span></div>
        <div className="hero__content"><p className="eyebrow"><span className="eyebrow__dot" />Product designer, UX strategist, AI explorer</p><h1 id="hero-title">Good products<br /><em>feel obvious.</em></h1><p className="hero__summary">I am Pushpender Sharma, a user-centered product designer who turns complex journeys into clear, useful digital experiences.</p><div className="hero__signal"><span className="hero__signal-dot" />Available for thoughtful collaborations</div></div>
        <div className="hero__visual"><img className="hero__visual-image" src="https://cdn.builder.io/api/v1/image/assets%2Fa98f46cecf9b46458c97a073c7e06eda%2Fa0c604072c8e4338981d847d19a28d79?format=webp&width=800&height=1200" alt="Portrait of Pushpender Sharma" /></div>
        <div className="hero__meta"><span>Based in India</span><span>Available for select projects</span><span>Six plus years shaping digital products</span></div>
      </section>

      <section className="proof-strip" aria-labelledby="proof-title" data-reveal>
        <div className="proof-strip__inner">
          <div className="proof-strip__intro">
            <div className="proof-strip__label"><span>00</span><span>Scroll map</span></div>
            <h2 id="proof-title">Move through the <em>practice.</em></h2>
            <p>Use the numbered waypoints to jump between the parts of my work.</p>
          </div>
          <nav className="proof-nav" aria-label="Homepage sections">
            {scrollTargets.map((item) => (
              <button
                className={`proof-nav__item${activeSection === item.target ? " is-active" : ""}`}
                type="button"
                key={item.target}
                aria-current={activeSection === item.target ? "step" : undefined}
                onClick={() => scrollToSection(item.target)}
              >
                <span className="proof-nav__number">{item.number}</span>
                <span className="proof-nav__copy"><strong>{item.label}</strong><span>{item.description}</span></span>
                <span className="proof-nav__rule" aria-hidden="true" />
              </button>
            ))}
          </nav>
        </div>
      </section>

      <section className="content-section work-section" id="work" data-reveal><SectionIntro number="01" eyebrow="Work" title={<>From messy problem<br /><span>to meaningful product.</span></>} copy="Selected projects across product design, e-commerce, creative systems, and visual communication." /><div className="project-grid">{projects.map((project) => <ProjectCard project={project} key={project.slug} />)}</div></section>

      <section className="content-section experience-section" id="experience" data-reveal><SectionIntro number="02" eyebrow="Experience" title={<>A practice built<br /><span>over time.</span></>} copy="Moving between product thinking, visual design, and the teams that bring ideas to life." /><div className="experience-list">{experience.map((item, index) => <article className="experience-item" key={`${item.company}-${item.date}`} data-reveal><div className="experience-item__number">0{index + 1}</div><div className="experience-item__date">{item.date}</div><div className="experience-item__content"><h3>{item.role}</h3><p className="experience-item__company">{item.company}</p><p>{item.copy}</p></div></article>)}</div></section>

      <section className="content-section toolkit-section" id="toolkit" aria-labelledby="toolkit-title" data-reveal><div className="toolkit__heading"><div className="section-kicker"><span>03</span><span>Toolkit</span></div><h2 id="toolkit-title">The tools are<br /><span>only half of it.</span></h2><p>The other half is knowing what to ask, what to test, and what to leave out.</p></div><div className="toolkit__content"><div className="toolkit__group" data-reveal><h3>What I do</h3><div className="skill-list">{skills.map((skill) => <span key={skill}><Check size={14} />{skill}</span>)}</div></div><div className="toolkit__group" data-reveal><h3>What I use</h3><div className="tool-list">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div></div></section>

      <section className="contact-section" id="contact" data-reveal><div className="contact-section__top"><div className="section-kicker section-kicker--light"><span>04</span><span>Contact</span></div><span className="contact-status">Open to thoughtful collaborations</span></div><div className="contact-section__content"><h2>Have a good<br /><em>problem to solve?</em></h2><div><p>Let us make the next step feel obvious. Start with a project conversation or review my resume.</p><div className="contact-section__actions"><a className="button button--light" href="mailto:pushpender.sharmaoffical@outlook.com">Contact me</a><a className="button button--outline-light" href={resumeUrl} target="_blank" rel="noreferrer">View resume</a></div></div></div><PortfolioFooter /></section>
    </main>
  );
}
