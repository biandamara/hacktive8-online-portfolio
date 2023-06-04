import React from "react";

// import data json
import data from "../../../assets/data/data.json";

// import styles
import styles from "./Skills.module.css";

export default function Skills() {
  const skills = data.sections.skills;
  const description = data.sections.skills.description;

  return (
    <div className={`${styles.skills}`} id={`skills`}>
      {/* section title - start */}
      <div className={`p-3`}>
        <h3
          className={`fw-bold`}
          // data-aos={`fade-down`}
          // data-aos-duration={`1000`}
          // data-aos-delay={`1000`}
          // data-aos-once={`true`}
        >
          {skills.title}
        </h3>
      </div>
      {/* section title - end */}

      {/* section description - start */}
      <div className={`row text-center ${styles.logos}`}>
        {description.map((item, index) => (
          <div className={`col`} key={index}>
            <img
              src={item.logo}
              alt={``}
              // data-aos={`flip-left`}
              // data-aos-duration={`1000`}
              // data-aos-delay={`1000`}
              // data-aos-once={`true`}
            ></img>
          </div>
        ))}
      </div>
      {/* section description - start */}
    </div>
  );
}
