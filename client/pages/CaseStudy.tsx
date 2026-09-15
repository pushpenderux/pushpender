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
  hero: "https://cdn.builder.io/api/v1/image/assets%2Fa98f46cecf9b46458c97a073c7e06eda%2F4ec2381e25d8410d8fd5a648a43a2f02?format=webp&width=800&height=1200",
};

const processSteps = ["Research", "UX Design", "Branding", "UI Design", "User Testing", "Hand-off Dev"];

const aiAvatarImage = "https://cdn.builder.io/api/v1/image/assets%2Fa98f46cecf9b46458c97a073c7e06eda%2F2f2997cd85b246a5b0d09fd653dffd56?format=webp&width=800&height=1200";

const avatarProcess = [
  ["01", "Define diversity targets", "A representative range of skin tones, face shapes, ages, and hair types."],
  ["02", "Generate base avatars", "Generative AI models create photorealistic base portraits for each target."],
  ["03", "Refine for realism", "Correct common AI artifacts in skin texture, hands, and facial symmetry."],
  ["04", "Standardize lighting and pose", "Render every avatar in consistent studio lighting and neutral poses."],
  ["05", "Curate the library", "Select and organize the final set into a reusable avatar library."],
] as const;

const avatarImpact = [
  ["Unlimited variations", "Generate new skin tones, poses, and styles instantly — no re-shoot required."],
  ["Faster turnaround", "Minutes instead of weeks, from concept to final image."],
  ["Lower cost per image", "No incremental studio or model cost for additional looks."],
  ["Consistent quality", "Uniform lighting and presentation across the entire catalog."],
] as const;

const avatarFuture = [
  ["Expand categories", "Extend beyond jewelry to apparel and accessories."],
  ["AR try-on", "Let customers preview pieces live through their camera."],
  ["Motion avatars", "Short video content of avatars showcasing pieces in motion."],
] as const;

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
          <div className="fashion-mobile-grid" role="group" aria-label="Mobile app screens">
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
      <section className="case-study__contact" aria-labelledby="fashion-contact-title"><div><p className="section-kicker section-kicker--light"><span>Next step</span></p><h2 id="fashion-contact-title">Have a similar problem?</h2></div><a className="button button--light" href="mailto:pushpender.sharmaoffical@outlook.com">Contact me</a></section>
      <PortfolioFooter />
    </main>
  );
}

function AiAvatarCaseStudy() {
  return (
    <main className="site-shell case-study-shell ai-case-study-shell">
      <PortfolioHeader />
      <article className="case-study ai-case-study">
        <Link className="case-study__back" to="/#work">Back to Work</Link>

        <header className="ai-case-study__hero">
          <div className="ai-case-study__hero-copy">
            <div className="case-study__kicker case-study__kicker--number-only"><span>02</span></div>
            <p className="ai-case-study__eyebrow">AI product case study</p>
            <h1>Reimagining Jewelry Photography <em>with AI Avatars</em></h1>
            <p className="ai-case-study__summary">Photorealistic AI models wearing real jewelry — without a physical photoshoot.</p>
          </div>
          <div className="ai-case-study__hero-media">
            <img src={aiAvatarImage} alt="AI avatar models styled with jewelry" />
          </div>
          <div className="ai-case-study__meta">
            <div><strong>Client</strong><span>Angara Ecommerce</span></div>
            <div><strong>Role</strong><span>Creative designer and AI workflow lead</span></div>
            <div><strong>Focus</strong><span>AI imagery, art direction, and systems</span></div>
          </div>
        </header>

        <section className="ai-section ai-overview" aria-labelledby="ai-overview-title">
          <div className="ai-section__heading">
            <p>Overview</p>
            <h2 id="ai-overview-title">From a product photo to a catalog-ready image.</h2>
          </div>
          <div className="ai-section__copy">
            <p>This case study looks at an AI-powered pipeline that takes a simple product photo of a jewelry piece — a ring, necklace, or pair of earrings cut out on a transparent PNG — and generates photorealistic images of it being worn by an AI avatar model.</p>
            <p>The result is styled, lit, and framed like a professional catalog shot, without booking a model, renting a studio, or setting up a single camera.</p>
          </div>
        </section>

        <section className="ai-section ai-problem" aria-labelledby="ai-problem-title">
          <div className="ai-section__heading">
            <p>The problem</p>
            <h2 id="ai-problem-title">The true cost of a traditional shoot.</h2>
          </div>
          <div className="ai-problem-grid">
            <article><span>01</span><h3>Studio rental</h3><p>Booking a professional studio and lighting setup for every session.</p></article>
            <article><span>02</span><h3>Model fees</h3><p>Paying and scheduling professional models for each look.</p></article>
            <article><span>03</span><h3>Camera and crew</h3><p>Equipment, photographers, and production staff on-site.</p></article>
            <article><span>04</span><h3>Limited variety</h3><p>Re-shooting for every new skin tone, pose, or style.</p></article>
          </div>
        </section>

        <section className="ai-section ai-solution" aria-labelledby="ai-solution-title">
          <div className="ai-section__heading">
            <p>The solution</p>
            <h2 id="ai-solution-title">AI avatars, wearing your jewelry.</h2>
          </div>
          <div className="ai-solution__content">
            <p>Upload a transparent PNG of the piece. The engine composites it onto a photorealistic AI avatar, matching lighting, skin tone, and pose automatically.</p>
            <ul>
              <li>No studio booking</li>
              <li>No model scheduling</li>
              <li>Unlimited looks, on demand</li>
            </ul>
          </div>
        </section>

        <section className="ai-section ai-process" aria-labelledby="ai-process-title">
          <div className="ai-section__heading">
            <p>The process</p>
            <h2 id="ai-process-title">From product photo to studio shot.</h2>
          </div>
          <ol className="ai-process__grid">
            <li><span>01</span><h3>Upload</h3><p>Add a transparent PNG of the jewelry piece.</p></li>
            <li><span>02</span><h3>Select avatar</h3><p>Choose skin tone, pose, and styling.</p></li>
            <li><span>03</span><h3>AI compositing</h3><p>Lighting, shadow, and fit rendered automatically.</p></li>
            <li><span>04</span><h3>Export</h3><p>Download production-ready images.</p></li>
          </ol>
        </section>

        <section className="ai-section ai-avatar-creation" aria-labelledby="ai-avatar-title">
          <div className="ai-section__heading">
            <p>Avatar creation</p>
            <h2 id="ai-avatar-title">How the AI avatars were created.</h2>
            <p className="ai-section__note">A reusable pipeline for building a diverse, consistent avatar library.</p>
          </div>
          <ol className="ai-avatar-steps">
            {avatarProcess.map(([number, title, copy]) => (
              <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>
            ))}
          </ol>
        </section>

        <section className="ai-section ai-result" aria-labelledby="ai-result-title">
          <div className="ai-section__heading">
            <p>The result</p>
            <h2 id="ai-result-title">See it in action.</h2>
          </div>
          <div className="ai-output-grid">
            <article className="ai-output-card ai-output-card--portrait"><span>01</span><h3>Portrait-led jewelry look</h3><p>Photorealistic styling designed to make the piece feel wearable and aspirational.</p></article>
            <article className="ai-output-card ai-output-card--detail"><span>02</span><h3>Detail-forward composition</h3><p>Close framing keeps the jewelry legible while preserving natural skin and light.</p></article>
            <article className="ai-output-card ai-output-card--lifestyle"><span>03</span><h3>Lifestyle-ready variation</h3><p>New poses and contexts can be created without rebuilding the production setup.</p></article>
          </div>
        </section>

        <section className="ai-section ai-comparison" aria-labelledby="ai-comparison-title">
          <div className="ai-section__heading">
            <p>What this replaces</p>
            <h2 id="ai-comparison-title">A lighter production model.</h2>
          </div>
          <div className="ai-comparison-table-wrap">
            <table className="ai-comparison-table">
              <thead><tr><th scope="col">Cost item</th><th scope="col">Traditional</th><th scope="col">AI avatars</th></tr></thead>
              <tbody>
                <tr><th scope="row">Model fees</th><td>Required</td><td>Eliminated</td></tr>
                <tr><th scope="row">Studio rental</th><td>Required</td><td>Eliminated</td></tr>
                <tr><th scope="row">Camera and equipment</th><td>Required</td><td>Eliminated</td></tr>
                <tr><th scope="row">Retouching</th><td>Days</td><td>Minutes</td></tr>
                <tr><th scope="row">Turnaround per look</th><td>1–2 weeks</td><td>Minutes</td></tr>
              </tbody>
            </table>
          </div>
          <p className="ai-section__note">The comparison reflects the production model described in the case study; final costs and timelines depend on the workflow and approval process.</p>
        </section>

        <section className="ai-section ai-impact" aria-labelledby="ai-impact-title">
          <div className="ai-section__heading">
            <p>The impact</p>
            <h2 id="ai-impact-title">Why it matters.</h2>
          </div>
          <div className="ai-impact-grid">
            {avatarImpact.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </section>

        <section className="ai-section ai-future" aria-labelledby="ai-future-title">
          <div className="ai-section__heading">
            <p>What's next</p>
            <h2 id="ai-future-title">Future scope.</h2>
          </div>
          <ol className="ai-future-list">
            {avatarFuture.map(([title, copy], index) => <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}
          </ol>
        </section>
      </article>
      <section className="case-study__contact ai-case-study__contact" aria-labelledby="ai-contact-title"><div><p className="section-kicker section-kicker--light"><span>Next step</span></p><h2 id="ai-contact-title">Let's talk about what AI-generated imagery can do for your next collection.</h2></div><a className="button button--light" href="mailto:pushpender.sharmaoffical@outlook.com">Contact me</a></section>
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

  if (project.slug === "angara-creative-workflows") {
    return <AiAvatarCaseStudy />;
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
      <section className="case-study__contact" aria-labelledby="fashion-contact-title"><div><p className="section-kicker section-kicker--light"><span>Next step</span></p><h2 id="fashion-contact-title">Have a similar problem?</h2></div><a className="button button--light" href="mailto:pushpender.sharmaoffical@outlook.com">Contact me</a></section>
      <PortfolioFooter />
    </main>
  );
}
