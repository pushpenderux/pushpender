import { Link } from "react-router-dom";
import { PortfolioFooter, PortfolioHeader } from "@/components/PortfolioChrome";
import { resumeUrl } from "@/lib/portfolio";

const profileImage = "https://cdn.builder.io/api/v1/image/assets%2Fa98f46cecf9b46458c97a073c7e06eda%2Ffce18046efec458db80fca6f6542bef4?format=webp&width=800&height=1200";
const uxResearchImage = "https://cdn.builder.io/api/v1/image/assets%2Fa98f46cecf9b46458c97a073c7e06eda%2F1872cfcfeb7140deb402c7b589e43156?format=webp&width=800&height=1200";
const wireframingImage = "https://cdn.builder.io/api/v1/image/assets%2Fa98f46cecf9b46458c97a073c7e06eda%2F215026b63b134cf0a50b5532bf7f8ec1?format=webp&width=800&height=1200";
const usabilityTestingImage = "https://cdn.builder.io/api/v1/image/assets%2Fa98f46cecf9b46458c97a073c7e06eda%2F0ac606715fc74c9f99570824a3cf250d?format=webp&width=800&height=1200";
const outdoorsReference = "https://cdn.builder.io/api/v1/image/assets%2Fa98f46cecf9b46458c97a073c7e06eda%2Fe89e96a406b44777a3ccc9e73d1a8528?format=webp&width=800&height=1200";

const capabilities = [
  { title: "UX Research", copy: "Conduct user research to understand target audiences, their needs, and their pain points.", position: "left", image: uxResearchImage },
  { title: "Wireframing", copy: "Develop detailed wireframes that outline the layout, structure, and key elements of each screen.", position: "center", image: wireframingImage },
  { title: "Usability Testing", copy: "Conduct usability tests with target users to gather feedback on design and functionality.", position: "right", image: usabilityTestingImage },
];

export default function About() {
  return (
    <main className="site-shell about-page">
      <PortfolioHeader />
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-profile">
          <img src={profileImage} alt="Pushpender Sharma outdoors in a snowy mountain landscape" />
          <p className="about-profile__greeting">Hi there, nice to meet you.</p>
        </div>
        <div className="about-introduction">
          <p className="about-eyebrow">About me</p>
          <h1 id="about-title">A designer focused on useful, thoughtful experiences.</h1>
          <p>I am a <strong>UX Designer with more than six years of experience</strong> designing intuitive, accessible, and visually engaging digital products across <strong>mobile apps, web applications, and e-commerce.</strong> I enjoy working across the full product experience, from understanding user needs and defining problems to creating user flows, wireframes, prototypes, and polished interfaces.</p>
          <p>I bring together <strong>user research, interaction design, visual design, content, and business goals</strong> to create thoughtful and cohesive experiences. I enjoy understanding user behavior, solving real-world problems, and turning complex challenges into simple, meaningful solutions.</p>
          <p>I work closely with <strong>product managers, developers, researchers, and stakeholders</strong> using collaboration, feedback, and iterative design to create products that are valuable to both users and businesses.</p>
          <div className="about-actions"><Link className="button button--primary" to="/#work">View my work</Link><a className="button button--secondary" href={resumeUrl} target="_blank" rel="noreferrer">View resume</a></div>
        </div>
      </section>

      <section className="about-capabilities" aria-labelledby="capabilities-title">
        <div className="about-section-heading"><p className="about-eyebrow">How I work</p><h2 id="capabilities-title">From questions to confident decisions.</h2></div>
        <div className="capability-grid">{capabilities.map((capability) => <article className="capability-card" key={capability.title}><div className={`capability-card__image capability-card__image--${capability.position}`}><img src={capability.image} alt={`${capability.title} project reference`} /></div><h3>{capability.title}</h3><p>{capability.copy}</p></article>)}</div>
      </section>

      <section className="about-personal" aria-labelledby="personal-title"><div><p className="about-eyebrow">Beyond the screen</p><h2 id="personal-title">What I do when I am not working</h2><p className="about-personal__intro">Beyond my computer screen, you will find me on outdoor adventures, playing sports, or enjoying coffee at a specialty cafe.</p><div className="about-list"> <p>Discovering unfamiliar places through outdoor adventures.</p><p>Playing football and table tennis.</p><p>Finding a quiet cafe for a good cup of coffee.</p></div></div><img src={outdoorsReference} alt="Pushpender Sharma on an outdoor mountain adventure" /></section>

      <section className="about-cta"><div><p className="about-eyebrow">Next step</p><h2>Want to work together?</h2></div><a className="button button--primary" href="mailto:pushpender.sharmaoffical@outlook.com">Contact me</a></section>
      <PortfolioFooter />
    </main>
  );
}
