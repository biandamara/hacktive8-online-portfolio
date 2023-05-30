import React from "react";

// import component
import Navigation from "../components/Navigation.jsx";
import Header from "../components/Header.jsx";
import About from "../components/About.jsx";
import Experience from "../components/Experience.jsx";
import Education from "../components/Education.jsx";
import Skills from "../components/Skills.jsx";
import Interests from "../components/Interests.jsx";
// import Awards from "../components/Awards.jsx";

// import styles
import styles from "../assets/styles/Home.module.css";

export default function Home() {
  return (
    <div className={`${styles.home}`}>
      <div className={`row row-cols-1 row-cols-lg-2 p-3`}>
        {/* navigation - start */}
        <div className={`col col-lg-2`}>
          <div className={`sticky-top`}>
            <Header></Header>
            <Navigation></Navigation>
          </div>
        </div>
        {/* navigation - end */}

        {/* section - start */}
        <div className={`col col-lg-10 ${styles.section}`}>
          <div className="py-2" id="about">
            <About></About>
          </div>
          <div className="py-2" id="experience">
            <Experience></Experience>
          </div>
          <div className="py-2" id="education">
            <Education></Education>
          </div>
          <div className="py-2" id="skills">
            <Skills></Skills>
          </div>
          <div className="py-2" id="interest">
            <Interests></Interests>
          </div>
        </div>
        {/* section - end */}
      </div>
    </div>
  );
}
