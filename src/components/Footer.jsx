import React from 'react';
import { 
  ArrowUp, 
  Heart, 
  Mail, 
  Sparkles,
  MapPin
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        
        {/* Top Footer Section */}
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-brand">
              <div className="brand-monogram">MH</div>
              <div>
                <span className="footer-brand-name">{personalInfo.name}</span>
                <span className="footer-brand-title">Aspiring Software Developer</span>
              </div>
            </div>

            <p className="footer-tagline">
              <Sparkles size={14} className="tagline-icon" />
              <span>"{personalInfo.tagline.replace(/"/g, '')}"</span>
            </p>

            <div className="footer-location-tag">
              <MapPin size={14} />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="footer-nav-link"
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="footer-social-col">
            <h4 className="footer-col-title">Connect</h4>
            <div className="footer-social-links">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon footer-icon-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon footer-icon-btn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-icon footer-icon-btn"
                aria-label="Email Mahasin"
              >
                <Mail size={18} />
              </a>
            </div>

            <p className="footer-connect-note">
              Always eager to discuss clean code, software engineering, and AI/cybersecurity innovations.
            </p>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
