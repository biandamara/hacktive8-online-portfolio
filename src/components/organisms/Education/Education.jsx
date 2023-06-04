import React from "react";

// import data json
import data from "../../../assets/data/data.json";

// import styles
import styles from "./Education.module.css";

export default function Education() {
  const education = data.sections.education;
  const description = education.description;

  return (
    <div className={`${styles.education}`} id={`education`}>
      {/* section title - start */}
      <div className={`p-3`}>
        <h2
          className={`fw-bold`}
          // data-aos={`fade-down`}
          // data-aos-duration={`1000`}
          // data-aos-delay={`1000`}
          // data-aos-once={`true`}
        >
          {education.title}
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
                <h3>{item.school}</h3>
              </div>
              {/* title - end */}

              {/* sub title - start */}
              <div className={`${styles["sub-title"]}`}>
                <p>{item.field_of_study}</p>
                <p>
                  {item.start_date} {" - "} {item.end_date}
                </p>
                <p>{item.location}</p>
              </div>
              {/* sub title - end */}

              {/* jobdesk - start */}
              <div className={`${styles.jobdesk}`}>
                {item.jobdesk.map((jobdesk, indexJobdesk) => (
                  <ul key={indexJobdesk}>
                    <li>{jobdesk.list}</li>
                  </ul>
                ))}
              </div>
              {/* jobdesk - end */}
            </div>
            {/* description - end */}
          </div>
        ))}
      </div>
      {/* section description - end */}
    </div>
  );
}
