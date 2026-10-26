import React from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  ShieldAlert, 
  Code2, 
  Layers, 
  Award, 
  Terminal, 
  Cpu, 
  CheckCircle,
  Database
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag section-tag-violet">
            <FolderGit2 size={14} />
            Academic &amp; Practical Work
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects &amp; Systems</span>
          </h2>
          <p className="section-subtitle">
            Academic research and practical software development projects applying machine learning, 
            cybersecurity concepts, and Java object-oriented principles.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project, index) => {
            const isLead = project.role === 'Team Lead';
            const isMLProject = project.id === 'ddos-ml-classification';

            return (
              <article key={project.id} className="project-card glass-card">
                
                {/* Visual Banner Preview - CSS Crafted aesthetic interface */}
                <div className="project-visual-banner">
                  {isMLProject ? (
                    <div className="banner-ui banner-ml">
                      <div className="banner-top-bar">
                        <div className="terminal-mini-dots">
                          <span className="dot red" />
                          <span className="dot yellow" />
                          <span className="dot green" />
                        </div>
                        <span className="banner-dataset-tag">Dataset: UNSW-NB15</span>
                        <span className="banner-tech-tag">Python + Tkinter</span>
                      </div>
                      <div className="banner-body-visual">
                        <div className="telemetry-block">
                          <ShieldAlert size={28} className="threat-icon" />
                          <div>
                            <span className="telemetry-title">DDoS Attack Classification</span>
                            <span className="telemetry-sub">Multi-Model Performance Analysis</span>
                          </div>
                        </div>
                        <div className="model-chips-row">
                          <span className="model-chip">SVM</span>
                          <span className="model-chip">Random Forest</span>
                          <span className="model-chip">XGBoost</span>
                          <span className="model-chip highlight">Model Evaluation</span>
                        </div>
                      </div>
                    </div>
                  ) : project.id === 'student-practice-tracker' ? (
                    <div className="banner-ui banner-java">
                      <div className="banner-top-bar">
                        <div className="terminal-mini-dots">
                          <span className="dot red" />
                          <span className="dot yellow" />
                          <span className="dot green" />
                        </div>
                        <span className="banner-dataset-tag">Language: Java</span>
                        <span className="banner-tech-tag">OOP Concepts</span>
                      </div>
                      <div className="banner-body-visual">
                        <div className="telemetry-block">
                          <Code2 size={28} className="java-code-icon" />
                          <div>
                            <span className="telemetry-title">StudentPracticeTracker.java</span>
                            <span className="telemetry-sub">Practice Activity &amp; Concept Application</span>
                          </div>
                        </div>
                        <div className="code-snippet-preview">
                          <code>class PracticeActivity &#123; void trackStudentPractice() &#125;</code>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="banner-ui banner-bank">
                      <div className="banner-top-bar">
                        <div className="terminal-mini-dots">
                          <span className="dot red" />
                          <span className="dot yellow" />
                          <span className="dot green" />
                        </div>
                        <span className="banner-dataset-tag">Language: Java</span>
                        <span className="banner-tech-tag">OOP Architecture</span>
                      </div>
                      <div className="banner-body-visual">
                        <div className="telemetry-block">
                          <Database size={28} className="bank-code-icon" />
                          <div>
                            <span className="telemetry-title">BankManagementSystem.java</span>
                            <span className="telemetry-sub">Banking Logic &amp; OOP Foundations</span>
                          </div>
                        </div>
                        <div className="code-snippet-preview">
                          <code>class BankAccount &#123; applyBankingLogic(); &#125;</code>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="project-content">
                  
                  <div className="project-badges-row">
                    <span className="project-category-badge">{project.badge}</span>
                    {isLead && (
                      <span className="project-role-badge">
                        <Award size={13} />
                        Team Lead
                      </span>
                    )}
                  </div>

                  <h3 className="project-card-title">{project.title}</h3>

                  <p className="project-description">{project.description}</p>

                  {/* Confirmed features list */}
                  <div className="project-key-aspects">
                    <span className="aspects-heading">Key Project Focus:</span>
                    <ul className="aspects-list">
                      {project.features.map((feat, fIdx) => (
                        <li key={fIdx} className="aspect-item">
                          <CheckCircle size={14} className="aspect-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack pills */}
                  <div className="project-tech-stack">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="project-card-footer">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary project-link-btn"
                    >
                      <GithubIcon size={16} />
                      <span>View GitHub Profile</span>
                    </a>
                  </div>

                </div>

              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
