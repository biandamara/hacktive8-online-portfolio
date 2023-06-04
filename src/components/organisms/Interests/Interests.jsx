import React from "react";

import data from "../../../assets/data/data.json";

// import styles
import styles from "./Interests.module.css";

export default function Interest() {
  const interests = data.sections.interests;
  const description = data.sections.interests.description;

  return (
    <div className={`${styles.interests}`} id={`interest`}>
      {/* section title - start */}
      <div className={`p-3`}>
        <h2
          className={`fw-bold`}
          // data-aos={`fade-down`}
          // data-aos-duration={`1000`}
          // data-aos-delay={`1000`}
          // data-aos-once={`true`}
        >
          {interests.title}
        </h2>
      </div>
      {/* section title - end */}

      {/* section description - start */}
      <div>
        {description.map((item, index) => (
          <div
            className={`row ${styles.item}`}
            key={index}
            // data-aos={`zoom-out`}
            // data-aos-duration={`1000`}
            // data-aos-once={`true`}
          >
            {/* logo - start */}
            <div className={`col-2 d-flex justify-content-center`}>
              <img
                className={`${styles.logo}`}
                src={item.logo}
                alt={``}
                // data-aos={`fade-left`}
                // data-aos-duration={`1000`}
                // data-aos-delay={`1000`}
                // data-aos-once={`true`}
              ></img>
            </div>
            {/* logo - end */}

            {/* description - start */}
            <div
              className={`col-10`}
              // data-aos={`zoom-out`}
              // data-aos-duration={`1000`}
              // data-aos-delay={`1000`}
              // data-aos-once={`true`}
            >
              {/* title - start */}
              <div>
                <h3>{item.name}</h3>
              </div>
              {/* title - end */}

              {/* story - start */}
              <div>
                <p>
                  {item.description} <a href={item.url}>{item.note}</a>
                </p>
              </div>
              {/* story - end */}
            </div>
            {/* description - end */}
          </div>
        ))}
      </div>
      {/* section description - end */}
    </div>
  );
}
