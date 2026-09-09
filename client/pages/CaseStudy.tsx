import { Link, Navigate, useParams } from "react-router-dom";
import { PortfolioFooter, PortfolioHeader } from "@/components/PortfolioChrome";
import { projects } from "@/lib/portfolio";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const isAngaraProject = project.slug === "angara-creative-workflows";
  const clientLabel = project.slug === "shop-lc-checkout" ? "Womens Fashion" : project.client;
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
        <div className="case-study__body"><aside><p>Project role</p><strong>Product design and UX strategy</strong><p>Outcome</p><strong>{project.outcome}</strong></aside><div className="case-study__copy"><h2>The challenge</h2><p>Every digital experience has a moment where a user decides whether to continue. This project focused on making that moment clearer, more useful, and easier to act on.</p><h2>The approach</h2><p>{project.detail}</p><h2>What mattered</h2><p>The work balanced user needs, business goals, and technical feasibility. Each decision was made to reduce uncertainty and help the next action feel natural.</p>{project.slug === "shop-lc-checkout" && <a className="button button--primary case-study__source" href="https://www.instagram.com/pushpenderux/p/Cwmo9yXLlWX/" target="_blank" rel="noreferrer">View original project reference</a>}</div></div>
      </article>
      <section className="case-study__contact"><div><p className="section-kicker section-kicker--light"><span>Next step</span></p><h2>Have a similar problem?</h2></div><a className="button button--light" href="mailto:pushpender.sharmaoffical@outlook.com">Contact me</a></section>
      <PortfolioFooter />
    </main>
  );
}
