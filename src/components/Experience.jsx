import React from "react";

// import styles
import styles from "../assets/styles/Experience.module.css";

export default function Experience() {
  return (
    <div
      className={`${styles.experience}`}
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
        Experience
      </h3>
      {/* title - end */}

      {/* experience list - start */}
      <div
        data-aos={`zoom-out`}
        data-aos-duration={`1000`}
        data-aos-delay={`1000`}
        data-aos-once={`true`}
      >
        {/* npn dev club - start */}
        <div className={`row`}>
          {/* logo - start */}
          <div className={`col-1 d-flex justify-content-center ${styles.logo}`}>
            <img
              src="https://res.cloudinary.com/biandamara/image/upload/v1685015955/npn-dev-club_nxedxt.jpg"
              alt=""
              data-aos={`fade-left`}
              data-aos-duration={`1000`}
              data-aos-delay={`1000`}
              data-aos-once={`true`}
            ></img>
          </div>
          {/* logo - end */}

          {/* description - start */}
          <div className={`col`}>
            <h5 className="m-0">Front-End Developer</h5>
            <p className="m-0">NPN Dev Club · Freelance</p>
            <p className="text-secondary m-0">Apr 2023 - Present · 2 mos</p>
            <p className="text-secondary">Jakarta, Indonesia · Remote</p>

            <ul>
              <li>
                Transformed UI design into fully functional website using based
                on client's requirement
              </li>
              <li>
                Ensuring seamless user experience and web client functionality
                through regular maintenance and updates
              </li>
            </ul>
          </div>
          {/* description - end */}
        </div>
        {/* npn dev club - end */}
      </div>
      {/* experience list - end */}
    </div>
  );
}
