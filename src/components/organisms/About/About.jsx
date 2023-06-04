import React from "react";

// import data json
import data from "../../../assets/data/data.json";

// import styles
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={`${styles.about}`} id={`about`}>
      {/* section title - start */}
      <div className="p-3">
        <h2
          className={`fw-bold`}
          // data-aos={`fade-down`}
          // data-aos-duration={`1000`}
          // data-aos-delay={`1000`}
          // data-aos-once={`true`}
        >
          {data.sections.about.title}
        </h2>
      </div>
      {/* section title - end */}

      {/* section description - start */}
      <div
      // data-aos={`zoom-out`}
      // data-aos-duration={`1000`}
      // data-aos-delay={`1000`}
      // data-aos-once={`true`}
      >
        {data.sections.about.description.map((item, index) => (
          <p key={index}>{item.line}</p>
        ))}
      </div>
      {/* section description - end */}
    </div>
  );
}
