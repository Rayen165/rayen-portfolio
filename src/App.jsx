import Navbar from "./components/Navbar";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import bg from "./assets/bg.jpg";
import { FiExternalLink } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import {
  FaGamepad,
  FaMusic,
  FaFutbol,
  FaFilm,
  FaLaptopCode,
} from "react-icons/fa";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
  FaJsSquare,
  FaJava,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiGraphql,
  SiMysql,
  SiCplusplus,
  SiLinux,
} from "react-icons/si";

import workspace from "./assets/workspace.png";
import "./App.css";

function App() {
  const { t, i18n } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_yqtq0ml",
      "template_lq4b1h9",
      form.current,
      {
        publicKey: "cmdph8t4BFMmacerJ",
      }
    )
    .then(
      () => {
        alert("Message envoyé ✅");
        form.current.reset();
      },
      (error) => {
        console.log("FAILED...", error);
        alert(`Erreur ❌ ${error?.text || "Vérifie la console"}`);
      }
    );
};

  const getSequence = () => {
    if (i18n.language === "fr") {
      return [
        "Développeur logiciel",
        1500,
        "Développeur Full-Stack",
        1500,
        "Passionné de React & Java",
        1500,
        "Résolveur de problèmes",
        1500,
      ];
    }

    if (i18n.language === "de") {
      return [
        "Softwareentwickler",
        1500,
        "Full-Stack-Entwickler",
        1500,
        "React & Java Enthusiast",
        1500,
        "Problemlöser",
        1500,
      ];
    }

    return [
      "Software Developer",
      1500,
      "Full-Stack Developer",
      1500,
      "React & Java Enthusiast",
      1500,
      "Problem Solver",
      1500,
    ];
  };

  const skills = [
    { icon: <FaHtml5 />, color: "#f97316", name: "HTML5" },
    { icon: <FaCss3Alt />, color: "#0ea5e9", name: "CSS3" },
    { icon: <FaJsSquare />, color: "#facc15", name: "JavaScript" },
    { icon: <SiTypescript />, color: "#3b82f6", name: "TypeScript" },
    { icon: <FaReact />, color: "#67e8f9", name: "React" },
    { icon: <SiTailwindcss />, color: "#38bdf8", name: "Tailwind CSS" },
    { icon: <FaNodeJs />, color: "#4ade80", name: "Node.js" },
    { icon: <SiGraphql />, color: "#d4d4d4", name: "GraphQL" },
    { icon: <FaGitAlt />, color: "#f97316", name: "Git" },
    { icon: <FaJava />, color: "#f59e0b", name: "Java" },
    { icon: <SiMysql />, color: "#60a5fa", name: "MySQL" },
    { icon: <SiCplusplus />, color: "#3b82f6", name: "C++" },
    { icon: <SiLinux />, color: "#e5e7eb", name: "Linux" },
  ];

  return (
    <div className="app-shell">
      <Navbar />

      <section id="home" className="hero-section">
        <div className="hero-left">
          <div className="social-icons">
            <a href="https://github.com/Rayen165" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rayen-chatti-292107266/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>

          <p className="hero-greeting">{t("hero.hello")}</p>
          <h1 className="hero-title">Rayen Chati</h1>

          <div className="hero-divider" />

          <div className="hero-typing">
            <TypeAnimation
              key={i18n.language}
              sequence={getSequence()}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="hero-description">{t("hero.description")}</p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-btn hero-btn-primary">
              {t("buttons.viewProjects")}
            </a>

            <a href="#contact" className="hero-btn hero-btn-outline">
              {t("buttons.contactMe")}
            </a>

            <a href="/cv.pdf" download className="hero-btn hero-btn-dark">
              {t("buttons.downloadCv")} ⬇
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img src={workspace} alt="workspace" className="hero-image" />
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-left">
            <h2 className="about-title">{t("about.title")}</h2>
            <p className="about-text">{t("about.description")}</p>

            <div className="about-languages">
              <h3 className="languages-title">{t("about.languagesTitle")}</h3>

              <div className="languages-list">
                <div className="language-item">
                  <div className="language-row">
                    <span className="language-name">{t("about.languages.arabic")}</span>
                    <span className="language-level-text">{t("about.levels.native")}</span>
                  </div>
                  <div className="language-bar">
                    <div className="language-fill fill-arabic"></div>
                  </div>
                </div>

                <div className="language-item">
                  <div className="language-row">
                    <span className="language-name">{t("about.languages.german")}</span>
                    <span className="language-level-text">{t("about.levels.fluent")}</span>
                  </div>
                  <div className="language-bar">
                    <div className="language-fill fill-french"></div>
                  </div>
                </div>

                <div className="language-item">
                  <div className="language-row">
                    <span className="language-name">{t("about.languages.french")}</span>
                    <span className="language-level-text">{t("about.levels.fluent")}</span>
                  </div>
                  <div className="language-bar">
                    <div className="language-fill fill-english"></div>
                  </div>
                </div>

                <div className="language-item">
                  <div className="language-row">
                    <span className="language-name">{t("about.languages.english")}</span>
                    <span className="language-level-text">{t("about.levels.intermediate")}</span>
                  </div>
                  <div className="language-bar">
                    <div className="language-fill fill-german"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="about-card">
              <h3>🎓 FH Aachen</h3>
              <p>{t("about.study")}</p>
            </div>

            <div className="about-card">
              <h3>💻 Projects</h3>
              <p>{t("about.projects")}</p>
            </div>

            <div className="about-card">
              <h3>🚀 Goals</h3>
              <p>{t("about.goals")}</p>
            </div>
          </div>
        </div>

        <div className="about-hobbies">
          <h3 className="hobbies-title">{t("about.hobbiesTitle")}</h3>

          <div className="hobbies-grid">
            {[
              { name: t("about.hobbies.gaming"), icon: <FaGamepad /> },
              { name: t("about.hobbies.music"), icon: <FaMusic /> },
              { name: t("about.hobbies.football"), icon: <FaFutbol /> },
              { name: t("about.hobbies.coding"), icon: <FaLaptopCode /> },
              { name: t("about.hobbies.movies"), icon: <FaFilm /> },
            ].map((hobby, i) => (
              <div className="hobby-card" key={i}>
                {hobby.icon}
                <p>{hobby.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="skills-section"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="skills-overlay">
          <div className="skills-section-header">
            <p className="skills-subtitle">Technologies I work with</p>
            <h2 className="skills-main-title">My Skills</h2>
            <div className="skills-main-divider"></div>
          </div>

          <div className="skills-showcase-grid">
            {skills.map((skill, index) => (
              <div
                className="skill-orb"
                key={index}
                style={{ "--skill-color": skill.color }}
              >
                <div className="skill-orb-inner">
                  <span className="skill-icon">{skill.icon}</span>
                </div>
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="projects-header">
          <p className="projects-label">PORTFOLIO</p>
          <h2 className="projects-title">Projets récents</h2>
        </div>

        <div className="projects-list">
          <article className="project-item">
            <h3>E-Commerce Platform</h3>
            <p>
              Application full-stack avec React, Node.js et PostgreSQL.
              Authentification, panier et paiement intégrés.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
            </div>

            <div className="project-links">
              <a href="#" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="Live Demo">
                <FiExternalLink />
              </a>
            </div>
          </article>

          <article className="project-item">
            <h3>Task Manager App</h3>
            <p>
              Application de gestion de tâches avec drag &amp; drop,
              filtres et notifications en temps réel.
            </p>

            <div className="project-tags">
              <span>TypeScript</span>
              <span>React</span>
              <span>Firebase</span>
            </div>

            <div className="project-links">
              <a href="#" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="Live Demo">
                <FiExternalLink />
              </a>
            </div>
          </article>

          <article className="project-item">
            <h3>Algorithm Visualizer</h3>
            <p>
              Visualisation interactive d'algorithmes de tri et de recherche
              en C++ et JavaScript.
            </p>

            <div className="project-tags">
              <span>C++</span>
              <span>JavaScript</span>
              <span>Canvas API</span>
            </div>

            <div className="project-links">
              <a href="#" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="Live Demo">
                <FiExternalLink />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <p className="contact-label">CONTACT</p>
          <h2 className="contact-title">Travaillons ensemble</h2>

          <div className="contact-info">
            <div className="contact-info-item">
              <span className="contact-info-icon">✉</span>
              <span>rayenchatti0@gmail.com</span>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-icon">⌖</span>
              <span>Disponible à distance</span>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="contact-row">
              <input type="text" name="name" placeholder="Nom" required />
              <input type="email" name="email" placeholder="Email" required />
            </div>

            <textarea
              name="message"
              placeholder="Votre message..."
              required
            ></textarea>

            <button type="submit" className="contact-btn">
              <span>✈</span>
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;