import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  const internship = experienceData[0];

  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Briefcase size={14} />
            Professional Experience
          </span>
          <h2 className="section-title">
            Internship &amp; <span className="gradient-text">Practical Training</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software development exposure across the full stack during my professional internship.
          </p>
        </div>

        {/* Experience Showcase Card */}
        <div className="experience-container">
          <div className="experience-card glass-card">
            
            <div className="exp-card-header">
              <div className="exp-company-logo">
                <Building2 size={28} className="company-icon" />
              </div>

              <div className="exp-heading-info">
                <div className="exp-meta-row">
                  <span className="exp-type-tag">{internship.type}</span>
                  <div className="exp-duration-badge">
                    <Calendar size={13} />
                    <span>{internship.duration} Duration</span>
                  </div>
                </div>

                <h3 className="exp-role-title">{internship.role}</h3>
                <h4 className="exp-company-name">{internship.company}</h4>
              </div>
            </div>

            <p className="exp-overview-text">
              {internship.description}
            </p>

            {/* Structured Learning & Practical Exposure Areas */}
            <div className="exp-exposure-section">
              <h5 className="exposure-heading">
                <Sparkles size={16} className="text-cyan" />
                <span>Core Learning Exposure &amp; Technical Competencies:</span>
              </h5>

              <div className="exposure-grid">
                {internship.exposurePoints.map((point, index) => (
                  <div key={index} className="exposure-item">
                    <CheckCircle2 size={16} className="exposure-check" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack used/learned */}
            <div className="exp-tags-wrapper">
              <span className="exp-tags-label">Technologies &amp; Concepts Covered:</span>
              <div className="exp-tags-cloud">
                {internship.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="exp-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
