import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare, 
  ArrowUpRight 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Trigger direct mailto with user's inputted details
    const subjectLine = encodeURIComponent(formState.subject || `Portfolio Contact from ${formState.name}`);
    const bodyContent = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    
    window.location.href = `mailto:${personalInfo.email}?subject=${subjectLine}&body=${bodyContent}`;
    
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag section-tag-violet">
            <MessageSquare size={14} />
            Let's Connect
          </span>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an opportunity, want to discuss software development, or connect professionally, 
            feel free to reach out!
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-grid">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="contact-info-panel glass-card">
            
            <div className="contact-panel-header">
              <span className="contact-avail-pill">
                <span className="avail-pulse" />
                <span>Open for Full-time Roles &amp; Collaborations</span>
              </span>
              <h3 className="contact-panel-title">Let's build something impactful together.</h3>
              <p className="contact-panel-desc">
                I am actively looking for software developer opportunities where I can apply my 
                knowledge in Java, Python, web technologies, and AI/Cybersecurity.
              </p>
            </div>

            {/* Contact Channels */}
            <div className="contact-channels-list">
              
              {/* Email Card */}
              <div className="channel-card">
                <div className="channel-icon-box email-box">
                  <Mail size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Direct Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="channel-value">
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="channel-copy-btn"
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="channel-card">
                <div className="channel-icon-box location-box">
                  <MapPin size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Current Location</span>
                  <span className="channel-value">{personalInfo.location}</span>
                </div>
              </div>

              {/* LinkedIn Card */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card channel-link-card"
              >
                <div className="channel-icon-box linkedin-box">
                  <LinkedinIcon size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">LinkedIn Profile</span>
                  <span className="channel-value">mahasin-shaik-383339356</span>
                </div>
                <ArrowUpRight size={18} className="channel-arrow" />
              </a>

              {/* GitHub Card */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card channel-link-card"
              >
                <div className="channel-icon-box github-box">
                  <GithubIcon size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">GitHub Repositories</span>
                  <span className="channel-value">Mahasin-120316</span>
                </div>
                <ArrowUpRight size={18} className="channel-arrow" />
              </a>

            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="contact-form-panel glass-card">
            <h3 className="form-panel-title">Send Me A Message</h3>
            <p className="form-panel-subtitle">
              Fill in your details below to compose an instant email to me.
            </p>

            {formSubmitted && (
              <div className="form-success-banner">
                <Check size={18} className="success-icon" />
                <span>Opening your email client... Thank you for reaching out!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. John Doe"
                    value={formState.name}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="e.g. john@example.com"
                    value={formState.email}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="e.g. Software Developer Opportunity / Discussion"
                  value={formState.subject}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Hello Mahasin, I came across your portfolio..."
                  value={formState.message}
                  onChange={handleInputChange}
                  className="form-input form-textarea"
                />
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
