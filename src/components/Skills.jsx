import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Database, 
  Binary, 
  ShieldAlert, 
  Wrench, 
  Layers, 
  CheckCircle2,
  TerminalSquare
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import './Skills.css';

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Database: Database,
  Binary: Binary,
  ShieldAlert: ShieldAlert,
  Wrench: Wrench
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Layers size={14} />
            Technical Expertise
          </span>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Core Competencies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, frameworks, core computer science concepts, 
            and cybersecurity tools I work with.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="skills-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`skill-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((group, index) => {
            const IconComponent = iconMap[group.icon] || Code2;
            return (
              <div key={index} className="skill-card glass-card">
                <div className="skill-card-header">
                  <div className="skill-icon-wrap">
                    <IconComponent size={22} className="skill-category-icon" />
                  </div>
                  <div className="skill-category-info">
                    <h3 className="skill-category-title">{group.category}</h3>
                    <span className="skill-count">{group.skills.length} skills</span>
                  </div>
                </div>

                <div className="skill-tags-cloud">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-pill">
                      <span className="skill-pill-bullet" />
                      <span className="skill-pill-name">{skill}</span>
                    </div>
                  ))}
                </div>

                <div className="skill-card-footer">
                  <div className="skill-footer-badge">
                    <CheckCircle2 size={13} className="check-icon" />
                    <span>Verified Knowledge &amp; Projects</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* IDE & Tools Special Highlight Banner */}
        <div className="skills-banner glass-card">
          <div className="banner-icon-box">
            <TerminalSquare size={26} className="banner-icon" />
          </div>
          <div className="banner-content">
            <h4 className="banner-title">Development Environment &amp; Modern Workflows</h4>
            <p className="banner-desc">
              Proficient in Git &amp; GitHub version control workflows, terminal scripting, and modern IDEs including 
              <strong className="text-white"> VS Code</strong>, <strong className="text-white">PyCharm</strong>, and 
              <strong className="text-white"> Antigravity IDE</strong> for scalable engineering.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
