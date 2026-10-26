import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Target, 
  Compass, 
  ShieldCheck, 
  Code2, 
  Cpu, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';
import './About.css';

export default function About() {
  const edu = educationData[0];

  const highlights = [
    {
      icon: Code2,
      title: 'Software Development',
      desc: 'Solid grasp of Object-Oriented Programming, clean code principles, and data structures in Java, Python, and C.',
      color: 'indigo'
    },
    {
      icon: ShieldCheck,
      title: 'Cybersecurity & AI',
      desc: 'Hands-on project experience in network anomaly detection and DDoS attack classification using machine learning.',
      color: 'cyan'
    },
    {
      icon: Cpu,
      title: 'Full Stack Foundations',
      desc: 'Practical exposure to backend APIs, React.js frontend, relational MySQL, and database operations.',
      color: 'violet'
    },
    {
      icon: Target,
      title: 'Purpose-Driven Growth',
      desc: 'Dedicated to continuous learning through verified coursework, certifications, and hands-on coding practice.',
      color: 'emerald'
    }
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag section-tag-violet">
            <Compass size={14} />
            About Me
          </span>
          <h2 className="section-title">
            Passionate About Technology, <br />
            <span className="gradient-text">Committed to Continuous Learning</span>
          </h2>
          <p className="section-subtitle">
            A closer look at my background, technical interests, and the engineering mindset I bring to every challenge.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="about-grid">
          
          {/* Left Column: Bio & Core Philosophy */}
          <div className="about-bio-card glass-card">
            <div className="bio-card-header">
              <div className="bio-avatar-ring">
                <span className="bio-avatar-text">{personalInfo.initials}</span>
              </div>
              <div>
                <h3 className="bio-name">{personalInfo.name}</h3>
                <p className="bio-title">Computer Science & Engineering Graduate</p>
              </div>
            </div>

            <div className="bio-quote-container">
              <span className="bio-quote-tag">Core Motto</span>
              <p className="bio-quote-text">"{personalInfo.tagline.replace(/"/g, '')}"</p>
            </div>

            <p className="about-bio-text">
              {personalInfo.aboutBio}
            </p>

            <p className="about-bio-text">
              Whether analyzing cyber threat datasets or implementing object-oriented models in Java, 
              I value clear architecture, discipline, and understanding the core mechanics behind every tool I use.
            </p>

            {/* Quick Metadata Matrix */}
            <div className="about-meta-matrix">
              <div className="meta-box">
                <MapPin size={18} className="meta-icon cyan" />
                <div>
                  <span className="meta-label">Location</span>
                  <span className="meta-val">{personalInfo.location}</span>
                </div>
              </div>

              <div className="meta-box">
                <GraduationCap size={18} className="meta-icon violet" />
                <div>
                  <span className="meta-label">Degree & Year</span>
                  <span className="meta-val">B.Tech CSE (Class of {edu.graduationYear})</span>
                </div>
              </div>

              <div className="meta-box">
                <Sparkles size={18} className="meta-icon emerald" />
                <div>
                  <span className="meta-label">Academic Performance</span>
                  <span className="meta-val">{edu.score}</span>
                </div>
              </div>
            </div>

            <div className="about-cta-row">
              <a href="#skills" className="btn btn-secondary about-cta-btn">
                <span>View My Technical Skills</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Focus Areas & Pillars */}
          <div className="about-pillars-container">
            <h3 className="pillars-heading">Key Focus Areas & Competencies</h3>
            
            <div className="pillars-list">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className={`pillar-card glass-card pillar-${item.color}`}>
                    <div className={`pillar-icon-box box-${item.color}`}>
                      <IconComponent size={22} />
                    </div>
                    <div className="pillar-info">
                      <h4 className="pillar-title">{item.title}</h4>
                      <p className="pillar-desc">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Academic Institute Card */}
            <div className="institute-highlight glass-card">
              <div className="institute-icon-box">
                <GraduationCap size={24} className="institute-icon" />
              </div>
              <div className="institute-content">
                <span className="institute-badge">Higher Education</span>
                <h4 className="institute-name">{edu.institution}</h4>
                <p className="institute-sub">{edu.degree} • {edu.location}</p>
                <div className="institute-score-chip">
                  <span>Graduating {edu.graduationYear}</span>
                  <span className="chip-divider">•</span>
                  <strong className="chip-score">{edu.score}</strong>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
