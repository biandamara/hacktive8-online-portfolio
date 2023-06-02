import React from "react";

// import organisms components
import About from "../../organisms/About/About";
import Experience from "../../organisms/Experience/Experience";
import Education from "../../organisms/Education/Education";
import Skills from "../../organisms/Skills/Skills";
import Interest from "../../organisms/Interests/Interests";

// import styles
import styles from "./Sections.module.css";

export default function Sections() {
  return (
    <section className={`${styles.sections}`}>
      <About></About>
      <Experience></Experience>
      <Education></Education>
      <Skills></Skills>
      <Interest></Interest>
    </section>
  );
}
