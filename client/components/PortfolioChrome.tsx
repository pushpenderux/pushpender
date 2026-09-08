import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Menu, X } from "lucide-react";

const resumeUrl = "https://drive.google.com/drive/folders/1h7oU7hN-NM4L60W2YLsIi19tlULZEre7";

export function PortfolioHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Link to="/" className="brand-mark" aria-label="Pushpender Sharma home"><span className="brand-mark__symbol">P</span><span className="brand-mark__name">Pushpender Sharma</span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link className="nav-work" to="/#work">Work</Link>
        <Link to="/#about">About</Link>
        <Link to="/#experience">Experience</Link>
        <Link to="/#contact">Contact</Link>
        <a className="nav-resume" href={resumeUrl} target="_blank" rel="noreferrer">Resume</a>
      </nav>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><Link to="/#work" onClick={closeMenu}>Work</Link><Link to="/#about" onClick={closeMenu}>About</Link><Link to="/#experience" onClick={closeMenu}>Experience</Link><Link to="/#contact" onClick={closeMenu}>Contact</Link><a href={resumeUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Resume</a></nav>}
    </header>
  );
}

export function PortfolioFooter() {
  return (
    <footer className="contact-section__footer">
      <a className="social-link" href="https://www.behance.net/pushpenderSh" target="_blank" rel="noreferrer"><span className="social-link__icon" aria-hidden="true">Be</span><span>Behance</span></a>
      <a className="social-link" href="https://www.linkedin.com/in/pushpender-sharma-ux/" target="_blank" rel="noreferrer"><span className="social-link__icon" aria-hidden="true">in</span><span>LinkedIn</span></a>
      <a className="social-link" href="https://www.instagram.com/pushpenderux/" target="_blank" rel="noreferrer"><span className="social-link__icon" aria-hidden="true">IG</span><span>Instagram</span></a>
      <a href="mailto:pushpender.sharmaoffical@outlook.com"><Mail size={15} /> pushpender.sharmaoffical@outlook.com</a>
      <span>Pushpender Sharma, UX Designer</span>
      <span>Copyright {new Date().getFullYear()}</span>
    </footer>
  );
}
