import { Link, Navigate, useParams } from "react-router-dom";
import { PortfolioFooter, PortfolioHeader } from "@/components/PortfolioChrome";
import { projects } from "@/lib/portfolio";

const fashionImages = {
  journey: "https://cdn.builder.io/api/v1/image/assets%2Fa98f46cecf9b46458c97a073c7e06eda%2F43e4f8a4f6c045669ea228fd92447af4?format=webp&width=800&height=1200",
  focusGroup: "https://cdn.builder.io/api/v1/image/assets%2Fa98f46cecf9b46458c97a073c7e06eda%2Fc4d834228de8482294c3e5d4742908ca?format=webp&width=800&height=1200",
  wireframes: "https://cdn.builder.io/api/v1/image/assets%2Fa98f46cecf9b46458c97a073c7e06eda%2F7f6cad2bdec04e6a9b9d55ef7f4c68a3?format=webp&width=800&height=1200",
  uiDesign: "https://cdn.builder.io/api/v1/image/assets%2Fa98f46cecf9b46458c97a073c7e06eda%2F95ff034e9dd44318b953dd95e1bc984e?format=webp&width=800&height=1200",
  mobileListing: "https://cdn.builder.io/api/v1/image/assets%2Fa98f46cecf9b46458c97a073c7e06eda%2Ffe9b9c96b6254a72a294d0d599d51e4a?format=webp&width=800&height=1200",
  mobileProduct: "https://cdn.builder.io/api/v1/image/assets%2Fa98f46cecf9b46458c97a073c7e06eda%2Fe8d83136869e4d1c9982e88ad9bdbdb8?format=webp&width=800&height=1200",
  mobileCheckout: "https://cdn.builder.io/api/v1/image/assets%2Fa98f46cecf9b46458c97a073c7e06eda%2Fc513eccf1d8246dd80c6e4860d4f5384?format=webp&width=800&height=1200",
  valueOne: "https://cdn.builder.io/api/v1/image/assets%2Fa98f46cecf9b46458c97a073c7e06eda%2F2499835828fb4ee38db040f587cca28b?format=webp&width=800&height=1200",
  valueTwo: "https://cdn.builder.io/api/v1/image/assets%2Fa98f46cecf9b46458c97a073c7e06eda%2F7166ea835f454c9e89f580529c4772b5?format=webp&width=800&height=1200",
  valueThree: "https://cdn.builder.io/api/v1/image/assets%2Fa98f46cecf9b46458c97a073c7e06eda%2Fee6967a999a54d6fa19842e2ef45d9fe?format=webp&width=800&height=1200",
  finalProduct: "https://cdn.builder.io/api/v1/image/assets%2Fa98f46cecf9b46458c97a073c7e06eda%2F4d0305cf917940fbb0f92f5ad7dbb124?format=webp&width=800&height=1200",
  hero: "https://cdn.builder.io/api/v1/image/assets%2Fa98f46cecf9b46458c97a073c7e06eda%2F9fcd4bf80a614a09b27d8cadba80bd16?format=webp&width=800&height=1200",
};

const processSteps = ["Research", "UX Design", "Branding", "UI Design", "User Testing", "Hand-off Dev"];

const valueCards = [
  {
    number: "01",
    image: fashionImages.valueOne,
    alt: "Illustration of a product launch workflow",
    copy: "After testing in all environments, we deploy the women's fashion app to the target audience.",
  },
  {
    number: "02",
    image: fashionImages.valueTwo,
    alt: "Illustration of a user reviewing a digital product",
    copy: "Monitor user feedback, analytics, and performance metrics to evaluate the app's success.",
  },
  {
    number: "03",
    image: fashionImages.valueThree,
    alt: "Illustration of a continuous improvement process",
    copy: "Continuously iterate and improve the design based on user feedback and evolving needs.",
  },
];

function StudyFigure({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}) {
  return (
    <figure className={`fashion-figure ${className}`}>
      <div className="fashion-figure__frame">
        <img src={src} alt={alt} />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function WomensFashionCaseStudy() {
  return (
    <main className="site-shell case-study-shell fashion-case-study-shell">
      <PortfolioHeader />
      <article className="case-study case-study--fashion">
        <Link className="case-study__back" to="/#work">Back to Work</Link>

        <header className="fashion-hero">
          <div className="fashion-hero__copy">
            <div className="case-study__kicker">
              <span>Case study / 01</span>
              <span>Product design</span>
            </div>
            <p className="fashion-eyebrow">Womens fashion app</p>
            <h1>Women's Fashion App <em>Case Study</em></h1>
            <p className="fashion-hero__summary">
              Women's Fashion is a digital platform designed to cater to women's fashion needs and preferences.
            </p>
          </div>
          <div className="fashion-hero__visual">
            <img src={fashionImages.hero} alt="Women's fashion app experience across mobile screens" />
          </div>
        </header>

        <section className="fashion-overview" aria-labelledby="fashion-overview-title">
          <div className="fashion-section-heading">
            <p className="fashion-section-number">01 / Context</p>
            <h2 id="fashion-overview-title">About this Project</h2>
          </div>
          <div className="fashion-overview__copy">
            <p>
              This app aims to provide an engaging and personalized shopping experience for women, offering a wide range of clothing, accessories, and styling tips.
            </p>
            <p>
              By employing my expertise in design principles and usability standards, I crafted a new interface that streamlined the overall visual hierarchy and enhanced the user flow.
            </p>
          </div>
        </section>

        <section className="fashion-facts" aria-label="Project summary">
          <div className="fashion-fact">
            <h3>Problem</h3>
            <p>The women's fashion app lacks personalization, intuitive navigation, social engagement, comprehensive product information, and brand consistency, hindering its ability to provide a tailored and engaging shopping experience for women.</p>
          </div>
          <div className="fashion-fact">
            <h3>Solution</h3>
            <p>The app's user interface is carefully crafted to be visually appealing, reflecting the latest design trends while maintaining a seamless and intuitive user experience. The color palette, typography, and graphical elements create a feminine and stylish ambiance that resonates with the target audience.</p>
          </div>
          <div className="fashion-fact fashion-fact--details">
            <div><h3>Tools</h3><p>Illustrator<br />Figma<br />Photoshop</p></div>
            <div><h3>Team</h3><p>1 UX designer<br />6 developers<br />2 project managers</p></div>
            <div><h3>My Role</h3><p>User researcher<br />Wireframe creator<br />Usability tester</p></div>
            <div><h3>Timeline</h3><p>Overall: 8+ weeks<br />Discovery and Research: 2+ weeks<br />Design and testing: 6 weeks</p></div>
          </div>
        </section>

        <section className="fashion-process" aria-labelledby="fashion-process-title">
          <div className="fashion-section-heading">
            <p className="fashion-section-number">02 / Method</p>
            <h2 id="fashion-process-title">My Design Process</h2>
          </div>
          <ol className="fashion-process__steps">
            {processSteps.map((step, index) => (
              <li key={step}>
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </section>

        <section className="fashion-content-section" aria-labelledby="fashion-journey-title">
          <div className="fashion-journey-layout">
            <div className="fashion-journey-layout__copy">
              <div className="fashion-section-heading">
                <p className="fashion-section-number">03 / Research</p>
                <h2 id="fashion-journey-title">User Journey</h2>
              </div>
              <div className="fashion-copy-block">
                <p>
                  To achieve our business goal, our primary focus was to ensure a seamless checkout process for our users. To identify areas for improvement, we created a user journey map based on the current state. Through this analysis, we identified two unnecessary steps and potential drop-off points in the flow. By eliminating these elements in the new design, we enhanced the checkout experience and improved conversion rates. The streamlined process now allows users to proceed swiftly to the checkout screen without encountering hiccups along the way.
                </p>
                <p>
                  With the help of Hotjar and UXCam, we checked heatmaps, user feedback surveys, and analytics data to gain better insights into user behavior and validate the effectiveness of the mapped journeys.
                </p>
              </div>
            </div>
            <StudyFigure src={fashionImages.journey} alt="User journey map for the women's fashion checkout experience" caption="User Journey Map" className="fashion-figure--journey" />
          </div>
          <StudyFigure src={fashionImages.focusGroup} alt="Focus group results comparing three design solutions" caption="Focus Group Result" className="fashion-figure--research" />
        </section>

        <section className="fashion-content-section" aria-labelledby="fashion-wireframes-title">
          <div className="fashion-wireframes-layout">
            <div className="fashion-wireframes-layout__copy">
              <div className="fashion-section-heading">
                <p className="fashion-section-number">04 / UX Design</p>
                <h2 id="fashion-wireframes-title">Wireframes</h2>
              </div>
              <div className="fashion-copy-block">
                <p>
                  Using Figma, I translated my first sketches into low-fidelity wireframes. Then, I improved them by adding relevant stock images and copy provided by the marketing team. At this stage, the wireframes were defined enough for user testing. Based on four tests, I made a few alterations and moved on to creating high-fidelity prototypes.
                </p>
              </div>
            </div>
            <StudyFigure src={fashionImages.wireframes} alt="Low-fidelity wireframe for the women's fashion product listing experience" caption="A rough low-fidelity mockup" className="fashion-figure--wireframes" />
          </div>
        </section>

        <section className="fashion-content-section fashion-ui-section" aria-labelledby="fashion-ui-title">
          <div className="fashion-ui-layout">
            <div className="fashion-ui-layout__copy">
              <div className="fashion-section-heading">
                <p className="fashion-section-number">05 / UI Design</p>
                <h2 id="fashion-ui-title">UI Design</h2>
              </div>
              <div className="fashion-copy-block">
                <p>
                  Once the usability issues were resolved, I moved on to designing the final screens in Figma. My goal was to create a visual identity aligned with the brand's values and message. I checked the competition and took a deep dive into my catalog of references for inspiration, then designed high-fidelity mockups with attention to typography, colors, imagery, and branding elements.
                </p>
              </div>
            </div>
            <StudyFigure src={fashionImages.mobileListing} alt="Women's fashion mobile product listing screen" caption="Product Landing Page mockup" className="fashion-figure--ui" />
          </div>
          <div className="fashion-mobile-grid" aria-label="Mobile app screens">
            <img src={fashionImages.mobileListing} alt="Women's fashion mobile product listing screen" />
            <img src={fashionImages.mobileProduct} alt="Women's fashion mobile product detail screen" />
            <img src={fashionImages.mobileCheckout} alt="Women's fashion mobile checkout screen" />
          </div>
        </section>

        <section className="fashion-value-section" aria-labelledby="fashion-value-title">
          <div className="fashion-section-heading">
            <p className="fashion-section-number">06 / Product thinking</p>
            <h2 id="fashion-value-title">Project Value Mindset</h2>
          </div>
          <p className="fashion-value-section__intro">
            As a product designer, the primary objective is to create an app that seamlessly integrates fashion, style, and usability. This involves collaborating with developers, researchers, and stakeholders to understand user needs, conduct user testing, and iterate on the design to ensure an exceptional user experience.
          </p>
          <div className="fashion-value-grid">
            {valueCards.map((card) => (
              <article className="fashion-value-card" key={card.number}>
                <img src={card.image} alt={card.alt} />
                <h3>{card.number}</h3>
                <p>{card.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="fashion-final-section" aria-label="Final product">
          <StudyFigure src={fashionImages.finalProduct} alt="Final women's fashion app product screens" caption="Women's fashion app final product" className="fashion-figure--final" />
        </section>
      </article>
      <section className="case-study__contact"><div><p className="section-kicker section-kicker--light"><span>Next step</span></p><h2>Have a similar problem?</h2></div><a className="button button--light" href="mailto:pushpender.sharmaoffical@outlook.com">Contact me</a></section>
      <PortfolioFooter />
    </main>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  if (project.slug === "shop-lc-checkout") {
    return <WomensFashionCaseStudy />;
  }

  const isAngaraProject = project.slug === "angara-creative-workflows";
  const clientLabel = project.client;
  const visualImage = isAngaraProject
    ? "https://cdn.builder.io/api/v1/image/assets%2Fa98f46cecf9b46458c97a073c7e06eda%2F2f2997cd85b246a5b0d09fd653dffd56?format=webp&width=800&height=1200"
    : "https://cdn.builder.io/api/v1/image/assets%2Fa98f46cecf9b46458c97a073c7e06eda%2F350641d0258d42a694edd7b549dd4ba2?format=webp&width=800&height=1200";

  return (
    <main className="site-shell case-study-shell">
      <PortfolioHeader />
      <article className="case-study">
        <Link className="case-study__back" to="/#work">Back to Work</Link>
        <div className="case-study__hero">
          <div className={`case-study__kicker${isAngaraProject ? " case-study__kicker--number-only" : ""}`}>{!isAngaraProject && <span>Case study</span>}<span>{project.number}</span></div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="case-study__meta"><div><strong>Client</strong><span>{clientLabel}</span></div><div><strong>Period</strong><span>{project.period}</span></div><div><strong>Focus</strong><span>{project.tags.join(", ")}</span></div></div>
        </div>
        <div className={`case-study__visual case-study__visual--${project.tone}`}><img className="case-study__visual-image" src={visualImage} alt={`${clientLabel} project visual`} /></div>
        <div className="case-study__body"><aside><p>Project role</p><strong>Product design and UX strategy</strong><p>Outcome</p><strong>{project.outcome}</strong></aside><div className="case-study__copy"><h2>The challenge</h2><p>Every digital experience has a moment where a user decides whether to continue. This project focused on making that moment clearer, more useful, and easier to act on.</p><h2>The approach</h2><p>{project.detail}</p><h2>What mattered</h2><p>The work balanced user needs, business goals, and technical feasibility. Each decision was made to reduce uncertainty and help the next action feel natural.</p></div></div>
      </article>
      <section className="case-study__contact"><div><p className="section-kicker section-kicker--light"><span>Next step</span></p><h2>Have a similar problem?</h2></div><a className="button button--light" href="mailto:pushpender.sharmaoffical@outlook.com">Contact me</a></section>
      <PortfolioFooter />
    </main>
  );
}
