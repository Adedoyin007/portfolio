import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  Cloud,
  Terminal,
  Server,
  Code2,
  Database,
  Container,
  Menu,
  X,
  ChevronDown,
  Cpu,
  ShieldCheck,
  GitBranch,
  ExternalLink
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import "./App.css";

const CV_LINK = "https://docs.google.com/document/d/1n4uXEQy84JXSVeA_ARQsCyOqiofcJbV0zpIuTRQnovk/edit?usp=sharing";

const projects = [
  {
    number: "01",
    category: "CLOUD INFRASTRUCTURE",
    title: "High Availability Drupal on AWS",
    description: "Designed and deployed a Drupal application infrastructure using Terraform, VPC networking, load balancing, Auto Scaling and RDS.",
    stack: ["AWS", "Terraform", "EC2", "ALB", "RDS"],
    icon: Cloud
  },
  {
    number: "02",
    category: "MONITORING & OBSERVABILITY",
    title: "Robot Shop Monitoring",
    description: "Implemented observability for a Kubernetes microservices application using metrics, logs, tracing and alerting.",
    stack: ["Kubernetes", "Prometheus", "Grafana", "Loki", "Jaeger"],
    icon: Cpu
  },
  {
    number: "03",
    category: "INFRASTRUCTURE MONITORING",
    title: "AWS Infrastructure Monitoring",
    description: "Deployed Prometheus and Grafana on EC2 with Node Exporter to monitor server resource utilisation and infrastructure health.",
    stack: ["AWS EC2", "Prometheus", "Grafana", "Linux"],
    icon: Server
  },
  {
    number: "04",
    category: "CONTAINER ORCHESTRATION",
    title: "Kubernetes Application",
    description: "Containerised and deployed a multi-service voting application using Docker, Kubernetes and infrastructure automation.",
    stack: ["Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    icon: Container
  }
];

const skillGroups = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["Amazon Web Services", "Microsoft Azure"]
  },
  {
    title: "Infrastructure & Automation",
    icon: Terminal,
    skills: ["Terraform", "Ansible", "Linux", "Bash"]
  },
  {
    title: "Containers & Orchestration",
    icon: Container,
    skills: ["Docker", "Kubernetes", "Helm"]
  },
  {
    title: "CI/CD & Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub", "GitHub Actions"]
  },
  {
    title: "Monitoring & Observability",
    icon: Cpu,
    skills: ["Prometheus", "Grafana", "Loki", "Jaeger"]
  },
  {
    title: "Programming & Databases",
    icon: Database,
    skills: ["Python", "Bash", "SQL", "DynamoDB"]
  }
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Contact", "#contact"]
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <span className="logo-symbol">A.</span>
        <span>ADED<span className="blue">OYIN</span></span>
      </a>

      <div className={`nav-links ${open ? "show" : ""}`}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}

        <a
          href={CV_LINK}
          className="nav-contact"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          My CV <ExternalLink size={15} />
        </a>

        <a
          href="#contact"
          className="nav-contact"
          onClick={() => setOpen(false)}
        >
          Let's Talk <ArrowUpRight size={15} />
        </a>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X /> : <Menu />}
      </button>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero section-container" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="availability">
          <span className="status-dot" />
          CLOUD & DEVOPS ENGINEERING
        </div>

        <p className="hero-intro">HELLO, I'M</p>

        <h1>
          Emmanuel
          <br />
          <span className="gradient-text">Adedoyin.</span>
        </h1>

        <h2>
          Building the cloud.
          <br />
          Automating the future.
        </h2>

        <p className="hero-description">
          Cloud and DevOps engineering enthusiast focused on building
          scalable infrastructure, automating deployments and improving
          system reliability through modern cloud technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            Explore My Work <ArrowUpRight size={18} />
          </a>

          <a
            href={CV_LINK}
            className="secondary-btn"
            target="_blank"
            rel="noreferrer"
          >
            View My CV <ExternalLink size={18} />
          </a>

          <a href="#contact" className="secondary-btn">
            Get In Touch
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/Adedoyin007" target="_blank" rel="noreferrer">
            <FaGithub size={19} /> GitHub
          </a>

          <a href="mailto:emmanuel.adedoyin079@gmail.com">
            <Mail size={19} /> Email
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "420px",
          height: "500px",
          overflow: "hidden",
          borderRadius: "24px",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 25px 80px rgba(0,0,0,0.4)"
        }}
      >
        <img
          src={`${import.meta.env.BASE_URL}potriait.jpeg`}
          alt="Emmanuel Adedoyin"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 25%"
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            padding: "24px",
            background: "linear-gradient(transparent, rgba(8,13,25,0.95))",
            color: "#ffffff"
          }}
        >
          <span className="status-dot" />
          <span style={{ marginLeft: "9px", fontSize: "12px", letterSpacing: "1px" }}>
            CLOUD & DEVOPS ENGINEERING
          </span>
          <h3 style={{ margin: "10px 0 0", fontSize: "23px" }}>
            Emmanuel Adedoyin
          </h3>
        </div>
      </motion.div>

      <a href="#about" className="scroll-indicator">
        SCROLL TO EXPLORE <ChevronDown size={16} />
      </a>
    </section>
  );
}

function SectionHeading({ label, title, highlight }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{label}</p>
      <h2>
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section-container section-block">
      <SectionHeading label="GET TO KNOW ME" title="About" highlight="Me." />

      <div className="about-grid">
        <div className="about-main">
          <h3>
            Engineering solutions.
            <br />
            <span className="blue">Creating possibilities.</span>
          </h3>

          <p>
            I am Emmanuel Adedoyin, an aspiring Cloud and DevOps Engineer
            passionate about cloud infrastructure, automation and
            technology-driven solutions.
          </p>

          <p>
            My technical journey involves practical experience with AWS,
            infrastructure as code, containerisation, Kubernetes,
            continuous integration and infrastructure monitoring.
          </p>

          <p>
            I enjoy learning by building real-world projects, solving
            infrastructure challenges and continuously developing my
            engineering capabilities.
          </p>

          <a href="#experience" className="text-link">
            More About My Journey <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <Cloud />
            <h3>Cloud</h3>
            <p>Infrastructure & Deployment</p>
          </div>

          <div className="stat-card">
            <Code2 />
            <h3>Automation</h3>
            <p>Infrastructure as Code</p>
          </div>

          <div className="stat-card">
            <ShieldCheck />
            <h3>Reliability</h3>
            <p>Monitoring & Observability</p>
          </div>

          <div className="stat-card">
            <Container />
            <h3>DevOps</h3>
            <p>Containers & CI/CD</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-container section-block">
      <SectionHeading
        label="MY TECHNICAL TOOLKIT"
        title="Skills &"
        highlight="Technologies."
      />

      <p className="section-description">
        Technologies I use and continue to develop through hands-on
        engineering projects and practical learning.
      </p>

      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.div
              className="skill-card"
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Icon size={27} className="skill-icon" />
              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map(skill => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-container section-block">
      <SectionHeading
        label="WHAT I'VE BUILT"
        title="Featured"
        highlight="Projects."
      />

      <p className="section-description">
        Practical engineering projects demonstrating my experience
        building, deploying and monitoring cloud infrastructure.
      </p>

      <div className="projects-grid">
        {projects.map(project => {
          const Icon = project.icon;

          return (
            <motion.article
              className="project-card"
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="project-top">
                <span>{project.number} / PROJECT</span>
                <Icon size={30} className="project-icon blue" />
              </div>

              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-stack">
                {project.stack.map(item => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <a
                href="https://github.com/Adedoyin007"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on GitHub <ExternalLink size={16} />
              </a>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-container section-block">
      <SectionHeading
        label="MY PROFESSIONAL JOURNEY"
        title="Experience &"
        highlight="Education."
      />

      <div className="timeline">
        <div className="timeline-item">
          <span className="timeline-dot" />
          <p className="timeline-date">SEPTEMBER 2026 — PRESENT</p>
          <h3>Bincom Academy</h3>
          <h4>IT Infrastructure & DevOps Apprenticeship</h4>
          <p>
            Gaining practical experience in IT infrastructure and DevOps
            through hands-on technical projects, cloud infrastructure
            assignments and automation. Also facilitating beginner-level
            Infrastructure and DevOps learning sessions.
          </p>
        </div>

        <div className="timeline-item">
          <span className="timeline-dot" />
          <p className="timeline-date">CLOUD COMPUTING</p>
          <h3>3MTT</h3>
          <h4>Cloud Computing Programme</h4>
          <p>
            Participated in the 3 Million Technical Talent programme,
            developing foundational knowledge and practical skills in
            cloud computing and modern technology.
          </p>
        </div>

        <div className="timeline-item">
          <span className="timeline-dot" />
          <p className="timeline-date">DEVOPS ENGINEERING</p>
          <h3>TS Academy</h3>
          <h4>DevOps Engineering Training</h4>
          <p>
            Developed practical DevOps skills through project-based
            learning, including containerisation, Kubernetes,
            infrastructure automation and application monitoring.
          </p>
        </div>

        <div className="timeline-item">
          <span className="timeline-dot" />
          <p className="timeline-date">MARCH 2026 — SEPTEMBER 2026</p>
          <h3>Haut-Hub</h3>
          <h4>Cloud Computing Training</h4>
          <p>
            Completed cloud computing training covering cloud concepts,
            infrastructure and practical cloud engineering skills.
          </p>
        </div>

        <div className="timeline-item">
          <span className="timeline-dot" />
          <p className="timeline-date">AWS TRAINING</p>
          <h3>Amazon Web Services</h3>
          <h4>AWS Cloud Practitioner Essentials</h4>
          <p>
            Completed the AWS Cloud Practitioner Essentials learning
            course, covering fundamental cloud concepts, AWS services,
            security, architecture and cloud economics.
          </p>
        </div>

        <div className="timeline-item">
          <span className="timeline-dot" />
          <p className="timeline-date">2018</p>
          <h3>Adekunle Ajasin University</h3>
          <h4>B.Ed. Educational Management</h4>
          <p>
            Bachelor of Education in Educational Management,
            Akungba-Akoko, Ondo State, Nigeria.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-container section-block">
      <div className="contact-card">
        <p className="eyebrow">LET'S CONNECT</p>

        <h2>
          Have a project in mind?
          <br />
          <span className="gradient-text">Let's build something.</span>
        </h2>

        <p>
          Open to cloud engineering opportunities, DevOps roles,
          collaborations and conversations about technology.
        </p>

        <a href="mailto:emmanuel.adedoyin079@gmail.com" className="primary-btn">
          Send Me an Email <Mail size={18} />
        </a>

        <div className="contact-socials">
          <a href="https://github.com/Adedoyin007" target="_blank" rel="noreferrer">
            <FaGithub size={19} /> GitHub
          </a>

          <a href="mailto:emmanuel.adedoyin079@gmail.com">
            <Mail /> Email
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="logo">
        <span className="logo-symbol">A.</span>
        ADED<span className="blue">OYIN</span>
      </a>

      <p>Designed & built by Emmanuel Adedoyin © {new Date().getFullYear()}</p>
      <a href="#home">Back to top ↑</a>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
