import React from "react";

// import data
import data from "../../../assets/data/data.json";

// import styles
import styles from "./Experience.module.css";

export default function Experience() {
  const experience = data.sections.experience;
  const description = data.sections.experience.description;

  return (
    <div className={`${styles.experience}`} id={`experience`}>
      {/* section title - start */}
      <div className={`p-3`}>
        <h2
          className={`fw-bold`}
          // data-aos={`fade-down`}
          // data-aos-duration={`1000`}
          // data-aos-delay={`1000`}
          // data-aos-once={`true`}
        >
          {experience.title}
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
        {description.map((item, index) => (
          <div className={`row ${styles.item}`} key={index}>
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
              <div>
                <h3>{item.job_title}</h3>
              </div>

              <div className={`${styles["sub-title"]}`}>
                <p>
                  {item.company}
                  {`・`}
                  {item.employment_type}
                </p>
                <p>
                  {item.start_date}
                  {` - `}
                  {item.end_date}
                </p>
                <p>
                  {item.location}
                  {`・`}
                  {item.location_type}
                </p>
              </div>

              <div className={`${styles.jobdesk}`}>
                {item.jobdesk.map((list, indexJobdesk) => (
                  <ul key={indexJobdesk}>
                    <li>{list.list}</li>
                  </ul>
                ))}
              </div>
              {/* description - end */}
            </div>
          </div>
        ))}
      </div>
      {/* section description - end */}
    </div>
  );
}
