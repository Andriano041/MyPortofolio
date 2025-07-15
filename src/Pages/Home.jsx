import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import ProfileCard from "../Components/ProfileCard";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import styles from "../styles/Home.module.css";

// Import icons
import htmlIcon from "../assets/img/html.png";
import cssIcon from "../assets/img/Css.png";
import jsIcon from "../assets/img/js.png";
import reactIcon from "../assets/img/React.png";
import figmaIcon from "../assets/img/figma.png";

export default function Home() {
  const fullText = "Hi, I'm Andriano Gs.";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === fullText.length) {
          setIsDeleting(true);
          setSpeed(100);
        }
      } else {
        setDisplayText(fullText.substring(0, index - 1));
        setIndex(index - 1);
        if (index - 1 === 0) {
          setIsDeleting(false);
          setSpeed(150);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <div className={styles.pageWrapper}>
      <Navbar active="home" />

      {/* HOME SECTION */}
      <section id="home" className={styles.home}>
        <div className={styles.content}>
          <div>
            <h1 className={styles.fadeInTextH1}>Welcome, Friends!</h1>
            <h2 className={styles.typingName}>
              <span className={styles.orange}>{displayText}</span>
              <span className={styles.cursor}>|</span>
            </h2>
            <p className={styles.fadeInTextP}>
              I’m a web designer, creative thinker, and UI/UX enthusiast passionate about turning ideas into engaging, human‑centered digital experiences.
            </p>

            <div className={`${styles.techStack} ${styles.fadeInStack}`}>
              <h3>Tech Stack</h3>
              <div className={styles.stackList}>
                <div className={styles.stackItem}><img src={htmlIcon} alt="HTML" /></div>
                <div className={styles.stackItem}><img src={cssIcon} alt="CSS" /></div>
                <div className={styles.stackItem}><img src={jsIcon} alt="JavaScript" /></div>
                <div className={styles.stackItem}><img src={reactIcon} alt="React" /></div>
                <div className={styles.stackItem}><img src={figmaIcon} alt="Figma" /></div>
              </div>
            </div>

            <div className={`${styles.buttonGroup} ${styles.fadeInButtons}`}>
              <Button>Download CV</Button>
              <Button>View My Project</Button>
            </div>
          </div>
          <ProfileCard />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className={styles.section}>
        <h2>About</h2>
        <p>I am passionate about designing and developing modern web applications with great user experience. I love exploring new technologies and turning ideas into digital products.</p>
      </section>

      {/* PROJECT SECTION */}
      <section id="project" className={styles.section}>
        <h2>Projects</h2>
        <p>Here are some of my favorite projects, built using React, JavaScript, and more.</p>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className={styles.section}>
        <h2>Contact</h2>
        <p>Feel free to contact me via email at example@email.com or through social media.</p>
      </section>

      <Footer />
    </div>
  );
}
