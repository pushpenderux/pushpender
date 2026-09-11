import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Menu, UserRound, X } from "lucide-react";

const resumeUrl = "https://drive.google.com/file/d/1__8G6ZHDYltuZUdplqrhPwu8yfFoEAL1/view";
const workUrl = "https://drive.google.com/drive/folders/17VkyuCkfRlNZqIZYW_hqgQ0ZmpEbH2tu";

export function PortfolioHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Link to="/" className="brand-mark" aria-label="Pushpender Sharma home"><span className="brand-mark__symbol">P</span><span className="brand-mark__name">Pushpender Sharma</span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a className="nav-work" href={workUrl} target="_blank" rel="noreferrer">Work</a>
        <Link to="/about">About</Link>
        <a href="https://www.linkedin.com/in/pushpender-sharma-ux/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://www.instagram.com/pushpenderux/" target="_blank" rel="noreferrer">Instagram</a>
        <a className="nav-resume" href={resumeUrl} target="_blank" rel="noreferrer">Resume</a>
      </nav>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><a href={workUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Work</a><Link to="/about" onClick={closeMenu}>About</Link><a href="https://www.linkedin.com/in/pushpender-sharma-ux/" target="_blank" rel="noreferrer" onClick={closeMenu}>LinkedIn</a><a href="https://www.instagram.com/pushpenderux/" target="_blank" rel="noreferrer" onClick={closeMenu}>Instagram</a><a href={resumeUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Resume</a></nav>}
    </header>
  );
}

export function PortfolioFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__identity">
        <span className="site-footer__avatar" aria-hidden="true"><UserRound size={28} strokeWidth={1.8} /></span>
        <span><strong>Pushpender Sharma</strong><small>UX Designer</small></span>
      </div>
      <nav className="site-footer__socials" aria-label="Social links">
        <a className="social-link" href="https://www.behance.net/pushpenderSh" target="_blank" rel="noreferrer"><span className="social-link__icon" aria-hidden="true">Be</span><span>Behance</span></a>
        <a className="social-link" href="https://www.linkedin.com/in/pushpender-sharma-ux/" target="_blank" rel="noreferrer"><span className="social-link__icon" aria-hidden="true">in</span><span>LinkedIn</span></a>
        <a className="social-link" href="https://www.instagram.com/pushpenderux/" target="_blank" rel="noreferrer"><span className="social-link__icon" aria-hidden="true">IG</span><span>Instagram</span></a>
      </nav>
      <a className="site-footer__email" href="mailto:pushpender.sharmaoffical@outlook.com"><span className="site-footer__email-icon" aria-hidden="true"><Mail size={19} strokeWidth={1.8} /></span><span>pushpender.sharmaoffical@outlook.com</span></a>
      <span className="site-footer__copyright">Copyright {new Date().getFullYear()}</span>
    </footer>
  );
}
