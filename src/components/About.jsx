import React from "react";

// import styles
import styles from "../assets/styles/About.module.css";

export default function About() {
  return (
    <div
      className={`${styles.about}`}
      data-aos={`fade-up`}
      data-aos-duration={`1000`}
      data-aos-once={`true`}
    >
      {/* title - start */}
      <h3
        data-aos={`fade-down`}
        data-aos-duration={`1000`}
        data-aos-delay={`1000`}
        data-aos-once={`true`}
      >
        About
      </h3>
      {/* title - end */}

      <p
        data-aos={`zoom-out`}
        data-aos-duration={`1000`}
        data-aos-delay={`1000`}
        data-aos-once={`true`}
      >
        Hello! I'm a Front-end Developer who has expertise in the use of HTML,
        CSS, JavaScript, GIT, Node JS, Express JS, and web technologies such as
        React JS, Next JS, and Redux JS. I'm very interested in new challenges
        and excited when there is an opportunity to work on a project around web
        development.
      </p>

      <p
        data-aos={`zoom-out`}
        data-aos-duration={`1000`}
        data-aos-delay={`1000`}
        data-aos-once={`true`}
      >
        I'm also a psychology graduate. I'm interested in studying human
        behavior and the factors that influence it. Studying psychology has
        helped me better understand myself and why people act like they do in
        certain situations.
      </p>
    </div>
  );
}
