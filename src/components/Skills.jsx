import React from "react";

// import styles
import styles from "../assets/styles/Skills.module.css";

export default function Skills() {
  return (
    <div
      className={`${styles.skills}`}
      data-aos={`fade-up`}
      data-aos-duration={`1000`}
      data-aos-once={`true`}
    >
      <h3
        data-aos={`fade-down`}
        data-aos-duration={`1000`}
        data-aos-delay={`1000`}
        data-aos-once={`true`}
      >
        Skills
      </h3>

      {/* stack - start */}
      <div className={`text-center ${styles.logos}`}>
        <img
          src={`https://res.cloudinary.com/biandamara/image/upload/v1665735728/Portfolio%20Web/Icons/html_p9ksca.png`}
          alt={``}
          data-aos={`flip-left`}
          data-aos-duration={`1000`}
          data-aos-delay={`1000`}
          data-aos-once={`true`}
        />
        <img
          src={`https://res.cloudinary.com/biandamara/image/upload/v1665735727/Portfolio%20Web/Icons/css_mfydus.png`}
          alt={``}
          data-aos={`flip-left`}
          data-aos-duration={`1000`}
          data-aos-delay={`1200`}
          data-aos-once={`true`}
        />
        <img
          src={`https://res.cloudinary.com/biandamara/image/upload/v1665735727/Portfolio%20Web/Icons/javascript_rn4mqp.png`}
          alt={``}
          data-aos={`flip-left`}
          data-aos-duration={`1000`}
          data-aos-delay={`1400`}
          data-aos-once={`true`}
        />
        <img
          src={`https://res.cloudinary.com/biandamara/image/upload/v1665735728/Portfolio%20Web/Icons/git_etdhqk.png`}
          alt={``}
          data-aos={`flip-left`}
          data-aos-duration={`1000`}
          data-aos-delay={`1600`}
          data-aos-once={`true`}
        />
        <img
          src={`https://res.cloudinary.com/biandamara/image/upload/v1665735728/Portfolio%20Web/Icons/node_ufkqsb.png`}
          alt={``}
          data-aos={`flip-left`}
          data-aos-duration={`1000`}
          data-aos-delay={`1800`}
          data-aos-once={`true`}
        />
        <img
          src={`https://res.cloudinary.com/biandamara/image/upload/v1665735728/Portfolio%20Web/Icons/express_ek4xho.png`}
          alt={``}
          data-aos={`flip-left`}
          data-aos-duration={`1000`}
          data-aos-delay={`2000`}
          data-aos-once={`true`}
        />
        <img
          src={`https://res.cloudinary.com/biandamara/image/upload/v1665735728/Portfolio%20Web/Icons/postgresql_h006xx.png`}
          alt={``}
          data-aos={`flip-left`}
          data-aos-duration={`1000`}
          data-aos-delay={`2200`}
          data-aos-once={`true`}
        />
        <img
          src={`https://res.cloudinary.com/biandamara/image/upload/v1665735729/Portfolio%20Web/Icons/react_pw5srt.png`}
          alt={``}
          data-aos={`flip-left`}
          data-aos-duration={`1000`}
          data-aos-delay={`2400`}
          data-aos-once={`true`}
        />
        <img
          src={`https://res.cloudinary.com/biandamara/image/upload/v1665735728/Portfolio%20Web/Icons/next_ul8vjc.png`}
          alt={``}
          data-aos={`flip-left`}
          data-aos-duration={`1000`}
          data-aos-delay={`2600`}
          data-aos-once={`true`}
        />
        <img
          src={`https://res.cloudinary.com/biandamara/image/upload/v1665735728/Portfolio%20Web/Icons/redux_gbcoub.png`}
          alt={``}
          data-aos={`flip-left`}
          data-aos-duration={`1000`}
          data-aos-delay={`2800`}
          data-aos-once={`true`}
        />
      </div>
      {/* stack - end */}
    </div>
  );
}
