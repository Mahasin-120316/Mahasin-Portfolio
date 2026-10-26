import React, { useState } from 'react';
import { 
  ArrowDown, 
  Mail, 
  MapPin, 
  Terminal, 
  Sparkles, 
  Code2, 
  ShieldCheck, 
  Copy, 
  Check, 
  FileCode2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('java');
  const [copiedCode, setCopiedCode] = useState(false);

  const javaCode = `// Mahasin Humaira - Profile Model
public class DeveloperProfile {
    private String name = "Shaik Mahasin Humaira";
    private String degree = "B.Tech CSE (2026)";
    private double cgpa = 8.4;
    private String location = "Bengaluru, India";

    private String[] technicalStack = {
        "Java", "Python", "React.js",
        "SQL", "Cybersecurity", "Machine Learning"
    };

    public void corePhilosophy() {
        System.out.println("Learning with purpose.");
        System.out.println("Building with passion.");
    }
}`;

  const pythonCode = `# Cyber & ML Model Overview
class AttackClassifier:
    """UNSW-NB15 DDoS Detection Pipeline"""
    def __init__(self, team_lead="Shaik Mahasin"):
        self.dataset = "UNSW-NB15"
        self.models = ["SVM", "RandomForest", "XGBoost"]
        self.status = "Model Evaluated"
        self.role = team_lead

    def predict_threat(self, flow_metrics):
        # Classifies normal vs malicious DDoS traffic
        return "Anomaly Detected: Alert Triggered"`;

  const currentCode = activeTab === 'java' ? javaCode : pythonCode;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-mesh-background" aria-hidden="true" />
      <div className="container hero-container">
        
        {/* Left Column: Introductions & CTAs */}
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="pulse-indicator">
              <span className="pulse-dot" />
              <span className="pulse-ring" />
            </span>
            <span className="status-text">{personalInfo.status}</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <br />
            <span className="gradient-text hero-name">{personalInfo.name}</span>
          </h1>

          <p className="hero-professional-title">
            {personalInfo.title}
          </p>

          <blockquote className="hero-tagline">
            <span className="quote-mark">“</span>
            {personalInfo.tagline.replace(/"/g, '')}
            <span className="quote-mark">”</span>
          </blockquote>

          <p className="hero-intro">
            A Computer Science & Engineering graduate interested in software development, 
            problem-solving, Artificial Intelligence, and Cybersecurity. Building a solid 
            foundation across Java, Python, and web technologies with an eagerness to craft reliable, 
            purposeful software solutions.
          </p>

          <div className="hero-location-row">
            <div className="hero-location-badge">
              <MapPin size={16} className="location-icon" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="hero-education-badge">
              <Sparkles size={16} className="sparkle-icon" />
              <span>B.Tech CSE '26 • CGPA 8.4/10</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <a
              href="#projects"
              className="btn btn-primary hero-btn-main"
              onClick={(e) => scrollToSection(e, 'projects')}
            >
              <span>Explore My Work</span>
              <ArrowDown size={18} />
            </a>

            <a
              href="#contact"
              className="btn btn-secondary hero-btn-sub"
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              <Mail size={18} />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Social Links Row */}
          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <div className="social-links-list">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-icon"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Code Terminal / IDE Card */}
        <div className="hero-visual">
          <div className="code-terminal-card glass-card">
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="control-dot red" />
                <span className="control-dot yellow" />
                <span className="control-dot green" />
              </div>

              {/* IDE Tabs */}
              <div className="terminal-tabs">
                <button
                  type="button"
                  className={`tab-btn ${activeTab === 'java' ? 'active' : ''}`}
                  onClick={() => setActiveTab('java')}
                >
                  <Code2 size={14} className="tab-icon java-icon" />
                  <span>DeveloperProfile.java</span>
                </button>
                <button
                  type="button"
                  className={`tab-btn ${activeTab === 'python' ? 'active' : ''}`}
                  onClick={() => setActiveTab('python')}
                >
                  <ShieldCheck size={14} className="tab-icon python-icon" />
                  <span>AttackClassifier.py</span>
                </button>
              </div>

              <button
                type="button"
                className="copy-btn"
                onClick={handleCopyCode}
                title="Copy snippet"
                aria-label="Copy snippet"
              >
                {copiedCode ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
              </button>
            </div>

            {/* Code Body */}
            <div className="terminal-body">
              <pre className="code-block">
                <code>{currentCode}</code>
              </pre>
            </div>

            {/* IDE Footer Status Bar */}
            <div className="terminal-footer">
              <div className="footer-status-item">
                <Terminal size={13} className="footer-icon" />
                <span>JDK 21 / Python 3.11</span>
              </div>
              <div className="footer-status-item">
                <span className="build-dot" />
                <span>Diagnostics: 0 Errors</span>
              </div>
              <div className="footer-status-item branch-info">
                <FileCode2 size={13} />
                <span>UTF-8</span>
              </div>
            </div>
          </div>

          {/* Floating Aesthetic Badges */}
          <div className="floating-badge badge-cyber">
            <ShieldCheck size={18} className="badge-icon-cyber" />
            <div>
              <span className="badge-mini-title">AI & Cybersecurity</span>
              <span className="badge-sub">DDoS Detection • SVM • XGBoost</span>
            </div>
          </div>

          <div className="floating-badge badge-dev">
            <Code2 size={18} className="badge-icon-dev" />
            <div>
              <span className="badge-mini-title">Java & Full Stack</span>
              <span className="badge-sub">OOP • DSA • React • MySQL</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
