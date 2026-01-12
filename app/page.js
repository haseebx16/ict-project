'use client';

import { useEffect, useState } from 'react';

const portfolioData = {
  haseeb: {
    name: 'Abdul Haseeb',
    title: 'Software Engineer',
    tagline: 'I build exceptional digital experiences with clean code and creative solutions',
    about: [
      "I'm a passionate software engineer with a love for creating innovative solutions and elegant user experiences. My journey in tech started with curiosity and has evolved into a career dedicated to building scalable, performant applications.",
      "When I'm not coding, I enjoy contributing to open-source projects, exploring new technologies, and sharing knowledge with the developer community. I believe in writing clean, maintainable code and staying up-to-date with industry best practices.",
    ],
    experience: '4+ Years',
    projectsCount: '53+',
    clientsCount: '30+',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'TypeScript', level: 75 },
      { name: 'Python', level: 85 },
      { name: 'Next.js', level: 80 },
    ],
    techStack: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'Python', 'Next.js'],
    projects: [
      {
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with payment integration',
        tech: ['React', 'Node.js', 'MongoDB'],
        link: '#',
      },
      {
        title: 'Real-time Chat App',
        description: 'Scalable chat application with WebRTC and Socket.io',
        tech: ['Next.js', 'Socket.io', 'WebRTC'],
        link: '#',
      },
      {
        title: 'Task Management System',
        description: 'Collaborative project management tool with real-time updates',
        tech: ['React', 'Express', 'PostgreSQL'],
        link: '#',
      },
    ],
    email: 'haseebhamid554@gmail.com',
    github: 'https://github.com/haseebx16',
    linkedin: 'https://linkedin.com/abdul-haseeb-hamid/',
  },
  hunaid: {
    name: 'Hunaid',
    title: 'Junior Database Manager',
    tagline: 'Managing and optimizing data systems with precision and efficiency',
    about: [
      "I'm a passionate junior database manager with a strong foundation in data management and database administration. My journey in tech started with a fascination for how data drives business decisions.",
      "I specialize in database design, optimization, and maintenance. I enjoy working with SQL databases, ensuring data integrity, and creating efficient database structures that support scalable applications.",
    ],
    experience: '3 Years',
    projectsCount: '15+',
    clientsCount: '10+',
    skills: [
      { name: 'SQL', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'Database Design', level: 80 },
      { name: 'Data Analysis', level: 75 },
    ],
    techStack: ['SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Python', 'Excel'],
    projects: [
      {
        title: 'E-Commerce Database System',
        description: 'Designed and implemented a scalable database schema for an e-commerce platform',
        tech: ['MySQL', 'PHP', 'Python'],
        link: '#',
      },
      {
        title: 'Data Warehouse Solution',
        description: 'Built a data warehouse for business intelligence and reporting',
        tech: ['PostgreSQL', 'ETL', 'Python'],
        link: '#',
      },
      {
        title: 'Database Migration Project',
        description: 'Migrated legacy database to modern SQL server with zero downtime',
        tech: ['MySQL', 'SQL Server', 'ETL'],
        link: '#',
      },
    ],
    email: 'hunaid@example.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  faiz: {
    name: 'Faiz',
    title: 'Frontend Developer',
    tagline: 'Creating beautiful and intuitive user interfaces with modern web technologies',
    about: [
      "I'm a senior frontend developer with 5 years of experience crafting exceptional user experiences. I specialize in building responsive, performant, and accessible web applications.",
      "My expertise lies in React, Next.js, and modern CSS frameworks. I'm passionate about creating pixel-perfect designs that not only look great but also provide seamless user experiences across all devices.",
    ],
    experience: '5+ Years',
    projectsCount: '80+',
    clientsCount: '50+',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 95 },
      { name: 'CSS/SCSS', level: 90 },
      { name: 'UI/UX Design', level: 85 },
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Figma'],
    projects: [
      {
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with payment integration and admin dashboard',
        tech: ['React', 'Next.js', 'Stripe'],
        link: '#',
      },
      {
        title: 'SaaS Dashboard',
        description: 'Complex admin dashboard with real-time analytics and data visualization',
        tech: ['React', 'TypeScript', 'Chart.js'],
        link: '#',
      },
      {
        title: 'Mobile Banking App',
        description: 'Responsive banking application with secure authentication and transactions',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        link: '#',
      },
    ],
    email: 'faiz@example.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  asghar: {
    name: 'Asghar',
    title: 'Day Trader',
    tagline: 'Navigating financial markets with data-driven strategies and analytical precision',
    about: [
      "I'm a professional day trader with extensive experience in financial markets. I specialize in analyzing market trends, managing risk, and executing profitable trading strategies.",
      "My approach combines technical analysis, market sentiment evaluation, and disciplined risk management. I thrive on the fast-paced nature of day trading and the constant learning it demands.",
    ],
    experience: '3+ Years',
    projectsCount: '1000+',
    clientsCount: '25+',
    skills: [
      { name: 'Technical Analysis', level: 90 },
      { name: 'Risk Management', level: 85 },
      { name: 'Market Analysis', level: 88 },
      { name: 'Python Trading', level: 75 },
      { name: 'Data Analysis', level: 80 },
      { name: 'Strategy Development', level: 85 },
    ],
    techStack: ['Python', 'TradingView', 'Excel', 'MetaTrader', 'Pine Script', 'Bloomberg'],
    projects: [
      {
        title: 'Automated Trading Bot',
        description: 'Developed an algorithmic trading system using Python and market APIs',
        tech: ['Python', 'APIs', 'Data Analysis'],
        link: '#',
      },
      {
        title: 'Market Analysis Dashboard',
        description: 'Custom dashboard for real-time market analysis and trade monitoring',
        tech: ['Python', 'Streamlit', 'APIs'],
        link: '#',
      },
      {
        title: 'Trading Strategy Framework',
        description: 'Built a framework for backtesting and optimizing trading strategies',
        tech: ['Python', 'Pandas', 'NumPy'],
        link: '#',
      },
    ],
    email: 'asghar@example.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activePortfolio, setActivePortfolio] = useState('haseeb');

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentPortfolio = portfolioData[activePortfolio];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-900 to-black text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              ICT Group Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Portfolio Switcher Buttons */}
      <div className="fixed top-16 w-full z-40 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActivePortfolio('haseeb')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activePortfolio === 'haseeb'
                  ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-blue-400 hover:text-blue-400'
              }`}
            >
              View Haseeb's
            </button>
            <button
              onClick={() => setActivePortfolio('hunaid')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activePortfolio === 'hunaid'
                  ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-blue-400 hover:text-blue-400'
              }`}
            >
              View Hunaid's
            </button>
            <button
              onClick={() => setActivePortfolio('faiz')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activePortfolio === 'faiz'
                  ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-blue-400 hover:text-blue-400'
              }`}
            >
              View Faiz's
            </button>
            <button
              onClick={() => setActivePortfolio('asghar')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activePortfolio === 'asghar'
                  ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-blue-400 hover:text-blue-400'
              }`}
            >
              View Asghar's
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center space-y-6 transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <div className="inline-block">
              <span className="text-sm font-mono text-blue-400 bg-blue-400/10 px-4 py-2 rounded-full border border-blue-400/20">
                {currentPortfolio.title}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Hello, I'm
              </span>
              <br />
              <span className="text-gray-100">{currentPortfolio.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              {currentPortfolio.tagline}
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-gray-700 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              {currentPortfolio.about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-50"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Experience</span>
                    <span className="text-2xl font-bold text-blue-400">{currentPortfolio.experience}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Projects Completed</span>
                    <span className="text-2xl font-bold text-purple-400">{currentPortfolio.projectsCount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Happy Clients</span>
                    <span className="text-2xl font-bold text-pink-400">{currentPortfolio.clientsCount}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {currentPortfolio.skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-semibold">{skill.name}</span>
                  <span className="text-gray-500 text-sm">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
                    style={{ width: mounted ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <div className="mt-16 grid grid-cols-3 md:grid-cols-6 gap-8">
            {currentPortfolio.techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500 transition-all hover:transform hover:scale-110"
              >
                <div className="text-3xl mb-2">💻</div>
                <span className="text-sm text-gray-400">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {currentPortfolio.projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3 text-blue-400">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-3 py-1 bg-gray-700 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={`mailto:${currentPortfolio.email}`}
              className="px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105"
            >
              Send Email
            </a>
            <a
              href={currentPortfolio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gray-700 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all"
            >
              GitHub
            </a>
            <a
              href={currentPortfolio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gray-700 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>© {new Date().getFullYear()} {currentPortfolio.name}. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
