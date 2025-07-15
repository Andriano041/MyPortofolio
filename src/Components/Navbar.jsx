import React, { Component } from "react";
import styles from "../styles/Navbar.module.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  }

  render() {
    const { active } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <nav className={styles.navbar}>
        <div className={styles.logo}>My Portfolio</div>

        <div className={styles.menuToggle} onClick={this.toggleMenu}>
          &#9776;
        </div>

        <ul className={isMenuOpen ? styles.show : ""}>
          <li className={active === "home" ? styles.active : ""}>Home</li>
          <li className={active === "about" ? styles.active : ""}>About</li>
          <li className={active === "project" ? styles.active : ""}>Project</li>
          <li className={active === "contact" ? styles.active : ""}>Contact</li>
          <li>Exit</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
