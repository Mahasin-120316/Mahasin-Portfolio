import React from 'react';
import { 
  Award, 
  Cloud, 
  Network, 
  Cpu, 
  Database, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import './Certifications.css';

const iconMap = {
  Cloud: Cloud,
  Network: Network,
  Cpu: Cpu,
  Database: Database,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck
};

export default function Certifications() {
  return (
    <section className="section cert-section" id="certifications">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Award size={14} />
            Verified Learning
          </span>
          <h2 className="section-title">
            Certifications &amp; <span className="gradient-text">Specialized Training</span>
          </h2>
          <p className="section-subtitle">
            Industry and academic certifications validating skills across Cloud, Networking, 
            Cybersecurity, Databases, and Artificial Intelligence.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="cert-grid">
          {certificationsData.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Award;

            return (
              <div key={index} className="cert-card glass-card">
                <div className="cert-card-top">
                  <div className="cert-icon-wrapper">
                    <IconComponent size={22} className="cert-icon" />
                  </div>
                  <span className="cert-category-badge">{item.category}</span>
                </div>

                <div className="cert-info">
                  <h3 className="cert-title">{item.title}</h3>
                  <p className="cert-issuer">Issued by <strong>{item.issuer}</strong></p>
                </div>

                <div className="cert-card-footer">
                  <div className="cert-status-chip">
                    <CheckCircle size={13} className="cert-check" />
                    <span>Completed &amp; Verified</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
