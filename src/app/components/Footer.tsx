import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock, ArrowUp, ChevronRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-bg-overlay"></div>

      {/* Newsletter Section */}
      <div className="newsletter-wrapper">
        <div className="newsletter-container">
          <div className="newsletter-box">
            <div className="newsletter-text">
              <div className="newsletter-label">
                <div className="newsletter-bar"></div>
                <span className="newsletter-label-text">Newsletter</span>
              </div>
              <h3 className="newsletter-heading">Support LCEO Monthly</h3>
            </div>
            <div className="newsletter-form-wrapper">
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-button">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="footer-columns">
          {/* Column 1: Logo & About */}
          <div className="footer-col-1-brand">
            <div className="footer-logo-link" onClick={() => onNavigate('home')}>
              <div className="footer-logo-icon">
                <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 45L22.8 42.8C11.8 32.6 4.5 25.8 4.5 17.5C4.5 10.7 9.7 5.5 16.5 5.5C20.3 5.5 24 7.3 25 10.1C26 7.3 29.7 5.5 33.5 5.5C40.3 5.5 45.5 10.7 45.5 17.5C45.5 25.8 38.2 32.6 27.2 42.8L25 45Z" fill="var(--primary)" />
                  <path d="M15 25C15 25 20 15 25 25" stroke="#122f2b" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <span className="footer-logo-text">LCEO<span className="footer-logo-dot">.</span></span>
            </div>
            <p className="footer-desc">
              LCEO non-profit organization dedicated to creating lasting impact through clean water, free education, healthcare, and community development.
            </p>
            <div className="footer-socials">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="social-icon-link">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Latest Posts */}
          <div>
            <div className="footer-heading-wrapper">
              <h4 className="footer-heading">Latest Updates</h4>
              <div className="footer-heading-bar"></div>
            </div>
            <ul className="footer-list latest-posts-list">
              {[
                { t: 'Placing Children at The Heart Of Social Accountability', d: 'Jan 15, 2026' },
                { t: 'Cash Transfers in Africa Evidence On The Impact', d: 'Jan 10, 2026' },
                { t: 'Children in Kigali Go Back To a Safe Learning Environment', d: 'Jan 05, 2026' }
              ].map((item, i) => (
                <li key={i} className="post-item">
                  <h5 className="post-title">
                    {item.t}
                  </h5>
                  <div className="post-meta">
                    <Calendar size={12} className="footer-logo-dot" />
                    {item.d}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: About Us Links */}
          <div>
            <div className="footer-heading-wrapper">
              <h4 className="footer-heading">About Us</h4>
              <div className="footer-heading-bar"></div>
            </div>
            <ul className="footer-list links-list">
              {[
                { l: 'Who we are', id: 'about' },
                { l: 'How We Help', id: 'how-we-work' },
                { l: 'Strategic Plan', id: 'strategic-direction' },
                { l: 'Help & FAQ\'s', id: 'resources' },
                { l: 'Contact Us', id: 'get-involved' },
              ].map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="footer-link-btn"
                  >
                    <span className="chevron-icon">
                      <ChevronRight size={14} />
                    </span>
                    {link.l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Headquarters */}
          <div>
            <div className="footer-heading-wrapper">
              <h4 className="footer-heading">Headquarters</h4>
              <div className="footer-heading-bar"></div>
            </div>
            <ul className="footer-list contact-list">
              <li className="contact-item">
                <div className="contact-icon-wrapper">
                  <MapPin size={18} fill="currentColor" className="footer-logo-dot" />
                </div>
                <span className="contact-text">962 Fifth Avenue, 3rd Floor<br />New York, NY10022</span>
              </li>
              <li className="contact-item">
                <div className="contact-icon-wrapper">
                  <Mail size={18} fill="currentColor" className="footer-logo-dot" />
                </div>
                <a href="mailto:hello@dynamiclayers.net" className="contact-link">
                  hello@dynamiclayers.net
                </a>
              </li>
              <li className="contact-item">
                <div className="contact-icon-wrapper">
                  <Phone size={18} fill="currentColor" className="footer-logo-dot" />
                </div>
                <a href="tel:+123456789101" className="contact-link">
                  (+123) 456 789 101
                </a>
              </li>
              <li className="contact-item">
                <div className="contact-icon-wrapper">
                  <Clock size={18} className="footer-logo-dot" />
                </div>
                <span className="contact-text">Mon - Sat: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-content">
          <p className="copyright-text">
            © {new Date().getFullYear()} LCEO Nonprofit. All Rights Reserved
          </p>
          <button
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} strokeWidth={3} />
          </button>
        </div>
      </div>
    </footer>
  );
}
