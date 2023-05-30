import React from "react";

// import styles
import styles from "../assets/styles/Navigation.module.css";

export default function Navigation() {
  return (
    <div className={`${styles.navigation}`}>
      {/* navigation bar - start */}
      <nav className="navbar navbar-expand-lg">
        <div>
          {/* button collapse - start  */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* button collapse - end  */}
        </div>

        {/* menu - start */}
        <div className={`collapse navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav row text-center">
            <li className="nav-item active">
              <a
                className="nav-link"
                href="#about"
                data-aos="fade-up"
                data-aos-duration={`1000`}
                data-aos-delay={`500`}
                data-aos-once={`true`}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#experience"
                data-aos="fade-up"
                data-aos-duration={`1000`}
                data-aos-delay={`800`}
                data-aos-once={`true`}
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#education"
                data-aos="fade-up"
                data-aos-duration={`1000`}
                data-aos-delay={`1100`}
                data-aos-once={`true`}
              >
                Education
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#skills"
                data-aos="fade-up"
                data-aos-duration={`1000`}
                data-aos-delay={`1400`}
                data-aos-once={`true`}
              >
                Skills
              </a>
            </li>
            <li
              className="nav-item"
              data-aos="fade-up"
              data-aos-duration={`1000`}
              data-aos-delay={`1700`}
              data-aos-once={`true`}
            >
              <a className="nav-link" href="#interest">
                Interests
              </a>
            </li>
          </ul>
        </div>
        {/* menu - end */}
      </nav>
      {/* navigation bar - end */}
    </div>
  );
}
