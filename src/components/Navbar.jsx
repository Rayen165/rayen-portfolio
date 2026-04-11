import { useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showLanguages, setShowLanguages] = useState(false);
  const { t, i18n } = useTranslation();

  const navItems = [
    { key: "home", link: "#home" },
    { key: "about", link: "#about" },

    
    

    { key: "skills", link: "#skills" },
    { key: "projects", link: "#projects" },
    { key: "work", link: "#experience" },
    { key: "contact", link: "#contact" },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShowLanguages(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Rayen<span>.Software Engineer</span>
      </div>

      <div className="navbar-links">
        {navItems.map((item) => (
          <a
            key={item.key}
            href={item.link}
            onClick={() => setActiveSection(item.key)}
            className={
              activeSection === item.key
                ? "nav-link active"
                : "nav-link"
            }
          >
            {t(`nav.${item.key}`)}
          </a>
        ))}
      </div>

      <div className="navbar-actions">
       
        <div className="language-wrapper">
          <button
            className="lang-btn"
            onClick={() => setShowLanguages(!showLanguages)}
          >
            🌐 {t("buttons.language")}
          </button>

          {showLanguages && (
            <div className="language-menu">
              <div onClick={() => changeLanguage("en")}>English</div>
              <div onClick={() => changeLanguage("fr")}>Français</div>
              <div onClick={() => changeLanguage("de")}>Deutsch</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;