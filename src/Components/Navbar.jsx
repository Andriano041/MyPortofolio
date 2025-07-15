import React, { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    window.history.scrollRestoration = "manual"; // supaya saat refresh kembali ke atas
    window.scrollTo({ top: 0, behavior: "auto" });

    const handleScroll = () => {
      const sections = ["home", "about", "project", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (window.scrollY >= offsetTop - offsetHeight / 3) {
            current = id;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>My Portfolio</div>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={isMenuOpen ? styles.show : ""}>
        <li className={active === "home" ? styles.active : ""}>
          <a href="#home">Home</a>
        </li>
        <li className={active === "about" ? styles.active : ""}>
          <a href="#about">About</a>
        </li>
        <li className={active === "project" ? styles.active : ""}>
          <a href="#project">Project</a>
        </li>
        <li className={active === "contact" ? styles.active : ""}>
          <a href="#contact">Contact</a>
        </li>
        <li>
        <a href="#exit">Exit</a>
      </li>

      </ul>
    </nav>
  );
}
