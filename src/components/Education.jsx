import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2 
} from 'lucide-react';
import { educationData } from '../data/portfolioData';
import './Education.css';

export default function Education() {
  const edu = educationData[0];

  const coreSubjects = [
    'Object-Oriented Programming (OOP)',
    'Data Structures & Algorithms (DSA)',
    'Database Management Systems (DBMS)',
    'Computer Networks',
    'Operating Systems',
    'Software Engineering Principles'
  ];

  return (
    <section className="section education-section" id="education">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag section-tag-violet">
            <GraduationCap size={14} />
            Academic Background
          </span>
          <h2 className="section-title">
            Education &amp; <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Formal undergraduate academic qualification in Computer Science and Engineering.
          </p>
        </div>

        {/* Education Card */}
        <div className="education-container">
          <div className="education-card glass-card">
            
            <div className="edu-top-row">
              <div className="edu-icon-container">
                <GraduationCap size={32} className="edu-cap-icon" />
              </div>

              <div className="edu-headline">
                <div className="edu-status-badge">
                  <span>Undergraduate Program</span>
                </div>
                <h3 className="edu-degree-title">{edu.degree}</h3>
                <h4 className="edu-institution-title">{edu.institution}</h4>
              </div>

              {/* CGPA Score Badge */}
              <div className="edu-score-card">
                <span className="score-label">Cumulative GPA</span>
                <span className="score-value">8.4<span className="score-max">/10</span></span>
                <div className="score-tag">
                  <Award size={12} />
                  <span>Strong Standing</span>
                </div>
              </div>
            </div>

            {/* Info bar */}
            <div className="edu-info-bar">
              <div className="info-bar-item">
                <Calendar size={15} className="info-icon" />
                <span>Graduation Year: <strong>{edu.graduationYear}</strong></span>
              </div>
              <div className="info-bar-item">
                <MapPin size={15} className="info-icon" />
                <span>Location: <strong>{edu.location}</strong></span>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div className="edu-coursework-block">
              <h5 className="coursework-heading">
                <BookOpen size={16} className="text-violet" />
                <span>Foundational Subjects &amp; Core Curriculum:</span>
              </h5>

              <div className="coursework-tags-grid">
                {coreSubjects.map((subject, idx) => (
                  <div key={idx} className="coursework-tag">
                    <CheckCircle2 size={14} className="coursework-check" />
                    <span>{subject}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
