import Navbar from "./components/Navbar";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import bg from "./assets/bg.jpg";
import schoolImg from "./assets/project-school.png";
import parkingImg from "./assets/project-parking.png";
import todoImg from "./assets/project-todo.png";
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
      .sendForm("service_yqtq0ml", "template_lq4b1h9", form.current, {
        publicKey: "cmdph8t4BFMmacerJ",
      })
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
            <a
              href="https://github.com/Rayen165"
              target="_blank"
              rel="noreferrer"
            >
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
          <h1 className="hero-title">{t("hero.title")}</h1>

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
                    <span className="language-name">
                      {t("about.languages.arabic")}
                    </span>
                    <span className="language-level-text">
                      {t("about.levels.native")}
                    </span>
                  </div>
                  <div className="language-bar">
                    <div className="language-fill fill-arabic"></div>
                  </div>
                </div>

                <div className="language-item">
                  <div className="language-row">
                    <span className="language-name">
                      {t("about.languages.german")}
                    </span>
                    <span className="language-level-text">
                      {t("about.levels.fluent")}
                    </span>
                  </div>
                  <div className="language-bar">
                    <div className="language-fill fill-french"></div>
                  </div>
                </div>

                <div className="language-item">
                  <div className="language-row">
                    <span className="language-name">
                      {t("about.languages.french")}
                    </span>
                    <span className="language-level-text">
                      {t("about.levels.fluent")}
                    </span>
                  </div>
                  <div className="language-bar">
                    <div className="language-fill fill-english"></div>
                  </div>
                </div>

                <div className="language-item">
                  <div className="language-row">
                    <span className="language-name">
                      {t("about.languages.english")}
                    </span>
                    <span className="language-level-text">
                      {t("about.levels.intermediate")}
                    </span>
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
            <p className="skills-subtitle">{t("skills.subtitle")}</p>
            <h2 className="skills-main-title">{t("skills.title")}</h2>
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

     <section id="projects" className="premium-projects-section">
  <div className="premium-projects-header">
    <p className="premium-projects-label">{t("projectsSection.label")}</p>
    <h2 className="premium-projects-title">{t("projectsSection.title")}</h2>
  </div>

  <div className="premium-projects-grid">
    {/* PROJECT 1 */}
    <article className="premium-project-card">
      <div className="premium-project-image-wrap">
        <img
          src={schoolImg}
          alt={t("projectsSection.items.school.alt")}
          className="premium-project-image"
        />

        <div className="premium-project-top-actions">
          <a
            href="#"
            className="premium-project-float-btn"
            target="_blank"
            rel="noreferrer"
          >
            {t("projectsSection.live")}
          </a>

          <a
            href="#"
            className="premium-project-icon-btn"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="premium-project-content">
        <h3>{t("projectsSection.items.school.title")}</h3>

        <p>{t("projectsSection.items.school.description")}</p>

        <div className="premium-project-tags">
          <span className="tag-blue">#HTML</span>
          <span className="tag-white">#CSS</span>
          <span className="tag-green">#JavaScript</span>
          <span className="tag-orange">#Teamwork</span>
        </div>

        <div className="premium-project-buttons">
          <a href="#" target="_blank" rel="noreferrer" className="btn-live">
            {t("projectsSection.liveDemo")}
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="btn-code">
            {t("projectsSection.viewCode")}
          </a>
        </div>
      </div>
    </article>

    {/* PROJECT 2 */}
    <article className="premium-project-card">
      <div className="premium-project-image-wrap">
        <img
          src={parkingImg}
          alt={t("projectsSection.items.emensa.alt")}
          className="premium-project-image"
        />

        <div className="premium-project-top-actions">
          <a
            href="#"
            className="premium-project-float-btn"
            target="_blank"
            rel="noreferrer"
          >
            {t("projectsSection.live")}
          </a>

          <a
            href="#"
            className="premium-project-icon-btn"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="premium-project-content">
        <h3>{t("projectsSection.items.emensa.title")}</h3>

        <p>{t("projectsSection.items.emensa.description")}</p>

        <div className="premium-project-tags">
          <span className="tag-blue">#HTML</span>
          <span className="tag-white">#CSS</span>
          <span className="tag-green">#MariaDB</span>
          <span className="tag-orange">#WebApp</span>
        </div>

        <div className="premium-project-buttons">
          <a href="#" target="_blank" rel="noreferrer" className="btn-live">
            {t("projectsSection.liveDemo")}
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="btn-code">
            {t("projectsSection.viewCode")}
          </a>
        </div>
      </div>
    </article>

    {/* PROJECT 3 */}
    <article className="premium-project-card">
      <div className="premium-project-image-wrap">
        <img
          src={todoImg}
          alt={t("projectsSection.items.todo.alt")}
          className="premium-project-image"
        />

        <div className="premium-project-top-actions">
          <a
            href="#"
            className="premium-project-float-btn"
            target="_blank"
            rel="noreferrer"
          >
            {t("projectsSection.live")}
          </a>

          <a
            href="#"
            className="premium-project-icon-btn"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="premium-project-content">
        <h3>{t("projectsSection.items.todo.title")}</h3>

        <p>{t("projectsSection.items.todo.description")}</p>

        <div className="premium-project-tags">
          <span className="tag-blue">#React</span>
          <span className="tag-white">#CSS</span>
          <span className="tag-green">#JavaScript</span>
          <span className="tag-orange">#Frontend</span>
        </div>

        <div className="premium-project-buttons">
          <a href="#" target="_blank" rel="noreferrer" className="btn-live">
            {t("projectsSection.liveDemo")}
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="btn-code">
            {t("projectsSection.viewCode")}
          </a>
        </div>
      </div>
    </article>
  </div>
</section>
      <section id="experience" className="experience-section">
        <div className="experience-header">
          <p className="experience-subtitle">{t("experience.subtitle")}</p>
          <h2 className="experience-title">{t("experience.title")}</h2>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          <div className="timeline-row left">
            <div className="timeline-card">
              <h3>{t("experience.items.algorithms.title")}</h3>
              <h4>{t("experience.items.algorithms.place")}</h4>
              <ul>
                <li>{t("experience.items.algorithms.point1")}</li>
                <li>{t("experience.items.algorithms.point2")}</li>
              </ul>
            </div>

            <div className="timeline-center">
              <div className="timeline-circle"></div>
            </div>

            <div className="timeline-date">
              {t("experience.items.algorithms.date")}
            </div>
          </div>

          <div className="timeline-row right">
            <div className="timeline-date">
              {t("experience.items.bank.date")}
            </div>

            <div className="timeline-center">
              <div className="timeline-circle"></div>
            </div>

            <div className="timeline-card">
              <h3>{t("experience.items.bank.title")}</h3>
              <h4>{t("experience.items.bank.place")}</h4>
              <ul>
                <li>{t("experience.items.bank.point1")}</li>
                <li>{t("experience.items.bank.point2")}</li>
              </ul>
            </div>
          </div>

          <div className="timeline-row left">
            <div className="timeline-card">
              <h3>{t("experience.items.servicenow.title")}</h3>
              <h4>{t("experience.items.servicenow.place")}</h4>
              <ul>
                <li>{t("experience.items.servicenow.point1")}</li>
                <li>{t("experience.items.servicenow.point2")}</li>
              </ul>
            </div>

            <div className="timeline-center">
              <div className="timeline-circle"></div>
            </div>

            <div className="timeline-date">
              {t("experience.items.servicenow.date")}
            </div>
          </div>

          <div className="timeline-row right">
            <div className="timeline-date">
              {t("experience.items.webapp.date")}
            </div>

            <div className="timeline-center">
              <div className="timeline-circle"></div>
            </div>

            <div className="timeline-card">
              <h3>{t("experience.items.webapp.title")}</h3>
              <h4>{t("experience.items.webapp.place")}</h4>
              <ul>
                <li>{t("experience.items.webapp.point1")}</li>
                <li>{t("experience.items.webapp.point2")}</li>
              </ul>
            </div>
          </div>

          <div className="timeline-row left">
            <div className="timeline-card">
              <h3>{t("experience.items.linux.title")}</h3>
              <h4>{t("experience.items.linux.place")}</h4>
              <ul>
                <li>{t("experience.items.linux.point1")}</li>
                <li>{t("experience.items.linux.point2")}</li>
              </ul>
            </div>

            <div className="timeline-center">
              <div className="timeline-circle"></div>
            </div>

            <div className="timeline-date">
              {t("experience.items.linux.date")}
            </div>
          </div>

          
        </div>
      </section>

      <section id="contact" className="contact-section">
  <div className="contact-bg-animation">
    <span className="contact-orb contact-orb-1"></span>
    <span className="contact-orb contact-orb-2"></span>
    <span className="contact-orb contact-orb-3"></span>
  </div>

  <div className="contact-container">
          <p className="contact-label">{t("contact.label")}</p>
          <h2 className="contact-title">{t("contact.title")}</h2>

          <div className="contact-info">
            <div className="contact-info-item">
              <span className="contact-info-icon">✉</span>
              <span>rayenchatti0@gmail.com</span>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-icon">⌖</span>
              <span>{t("contact.remote")}</span>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="contact-row">
              <input type="text" name="name" placeholder={t("contact.name")} required />
              <input
                type="email"
                name="email"
                placeholder={t("contact.email")}
                required
              />
            </div>

            <textarea
              name="message"
              placeholder={t("contact.message")}
              required
            ></textarea>

            <button type="submit" className="contact-btn">
              <span>✈</span>
              {t("contact.send")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;