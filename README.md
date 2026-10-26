# Shaik Mahasin Humaira — Developer Portfolio

> *"Learning with purpose. Building with passion."*

A modern, high-performance, responsive developer portfolio website built for **Shaik Mahasin Humaira** (Aspiring Software Developer | Java Developer | AI & Cybersecurity Enthusiast) using **React**, **Vite**, and **custom Vanilla CSS**.

---

## 🌟 Highlights & Features

- **Dark Navy / Charcoal Theme**: Deep palette (`#080b12`, `#0d121f`) with glassmorphism card surfaces and violet/blue glow accents.
- **Interactive Hero Section**: Includes status pill, professional title, location badge, direct CTAs, and an interactive code terminal tabbed interface (Java & Python).
- **About Section**: Detailed background overview, verified education credentials, and core engineering philosophy.
- **Categorized Skills Matrix**: Filterable skills across Programming, Frontend, Databases, Computer Science Fundamentals, AI & Cybersecurity, and Developer Tools.
- **Academic & Practice Projects**:
  - *Machine Learning-Based Classification and Prediction Technique for DDoS Attacks* (UNSW-NB15 dataset, SVM, Random Forest, XGBoost, Python, Tkinter — Team Lead)
  - *Student Practice Tracker* (Java OOP practice project)
  - *Bank Management System* (Java banking logic and OOP architecture)
- **Professional Experience**: In-depth breakdown of the 8-week *Python Full Stack Development Internship* at ExcelR Edtech Pvt. Ltd.
- **Education Card**: B.Tech in Computer Science and Engineering from PVKK Institute of Technology, Anantapur (Graduation: 2026, CGPA: 8.4/10).
- **Verified Certifications & Learning**: AWS Cloud Practitioner Essentials, Cisco Networking Academy, NPTEL Digital Image Processing, MongoDB CRUD in Python, Generative AI, and Deloitte Cyber Job Simulation.
- **Contact & Connect**: Direct email with one-click copy, interactive message composer that triggers email clients, and verified GitHub & LinkedIn profile links.
- **Responsive Navigation**: Sticky glassmorphic navbar with active section detection and mobile slide-out navigation drawer.
- **Zero Hallucination Guarantee**: All statistics, skills, coursework, and project attributes strictly adhere to confirmed background information without exaggerated or unverified claims.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | [React 19](https://react.dev/) |
| **Build Tool & Dev Server** | [Vite 8](https://vitejs.dev/) |
| **Styling** | Custom Vanilla CSS (Design Tokens, Glassmorphism, CSS Grid & Flexbox) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Typography** | Google Fonts (*Plus Jakarta Sans* & *JetBrains Mono*) |

---

## 📁 Project Structure

```text
Mahasin-Portfolio/
├── public/
│   ├── favicon.svg            # Custom MH branded glowing SVG favicon
│   └── icons.svg
├── src/
│   ├── assets/                # Static assets & graphics
│   ├── components/            # Reusable React UI sections
│   │   ├── Navbar.jsx / .css  # Sticky navigation with mobile drawer
│   │   ├── Hero.jsx / .css    # Hero section with interactive code terminal
│   │   ├── About.jsx / .css   # Biography, education overview, and pillars
│   │   ├── Skills.jsx / .css  # Filterable skills cards & tools banner
│   │   ├── Projects.jsx / .css# Project showcase with CSS mockups
│   │   ├── Experience.jsx/.css# Full-stack internship details
│   │   ├── Education.jsx/.css # Degree, CGPA 8.4/10, and coursework
│   │   ├── Certifications.jsx/.css # Credentials & specialized training
│   │   ├── Contact.jsx / .css # Direct contact channels & email form
│   │   └── Footer.jsx / .css  # Footer with quick links & back-to-top
│   ├── data/
│   │   └── portfolioData.js   # Centralized portfolio data
│   ├── App.jsx / .css         # Main application component
│   ├── index.css              # Global design system, variables & tokens
│   └── main.jsx               # Application entry point
├── index.html                 # SEO meta tags, fonts, and root container
├── package.json               # Scripts and dependencies
├── vite.config.js             # Vite configuration
└── .gitignore                 # Node, Vite, secrets & environment ignores
```

---

## 🚀 Getting Started (Run Locally)

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (v9 or higher)

### 1. Clone the repository

```bash
git clone https://github.com/Mahasin-120316/Mahasin-Portfolio.git
cd Mahasin-Portfolio
```

### 2. Install dependencies

```bash
npm install
```

> **Note for Windows PowerShell users:** If PowerShell script execution policies block `npm`, run `npm.cmd install` instead.

### 3. Start development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the portfolio.

---

## 📦 Production Build

To compile and optimize the application for production:

```bash
npm run build
```

This generates production-ready static assets in the `dist/` directory.

To test the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment Options

### Deploying to Vercel (Recommended)

1. Push your repository to GitHub.
2. Visit [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import the `Mahasin-Portfolio` repository.
4. Framework preset will automatically detect **Vite**.
5. Click **"Deploy"**.

### Deploying to Netlify

1. Visit [Netlify](https://www.netlify.com/) and select **"Add new site" -> "Import an existing project"**.
2. Select your GitHub repository.
3. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **"Deploy site"**.

### Deploying to GitHub Pages

1. In `vite.config.js`, set `base: '/Mahasin-Portfolio/'`.
2. Build the project using `npm run build`.
3. Deploy the `dist/` folder using `gh-pages` or GitHub Actions.

---

## 📬 Contact & Profiles

- **Developer:** Shaik Mahasin Humaira
- **Location:** Bengaluru, Karnataka, India
- **Email:** [mahasinshaik2005@gmail.com](mailto:mahasinshaik2005@gmail.com)
- **LinkedIn:** [linkedin.com/in/mahasin-shaik-383339356](https://www.linkedin.com/in/mahasin-shaik-383339356)
- **GitHub:** [github.com/Mahasin-120316](https://github.com/Mahasin-120316)

---

&copy; 2026 Shaik Mahasin Humaira. All rights reserved.
