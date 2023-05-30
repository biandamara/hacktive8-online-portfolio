import React from "react";

// import styles
import styles from "../assets/styles/Education.module.css";

export default function Education() {
  return (
    <div
      className={`${styles.education}`}
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
        Education
      </h3>
      {/* title - end */}

      {/* education list - start */}
      <div>
        {/* hacktive8 - start */}
        <div
          className={`row`}
          data-aos={`zoom-out`}
          data-aos-duration={`1000`}
          data-aos-once={`true`}
        >
          {/* logo - start */}
          <div className={`col-1 d-flex justify-content-center ${styles.logo}`}>
            <img
              src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/322/original/Logo_Hacktiv8.jpg"
              alt=""
              data-aos={`fade-left`}
              data-aos-duration={`1000`}
              data-aos-delay={`1000`}
              data-aos-once={`true`}
            ></img>
          </div>
          {/* logo - end */}

          {/* description - start */}
          <div
            className={`col`}
            data-aos={`zoom-out`}
            data-aos-duration={`1000`}
            data-aos-delay={`1000`}
            data-aos-once={`true`}
          >
            <h5 className="m-0">Hacktive8</h5>
            <p className="m-0">React and React Native</p>
            <p className="text-secondary m-0">April 2022 - Present</p>
            <p className="text-secondary">Jakarta, Indonesia</p>
            <ul>
              <li>
                Learn about fundamental JavaScript, React JS and Raect Native
              </li>
              <li>
                Create a{" "}
                <a
                  href="https://biandamara.github.io/hacktive8-simple-online-calculator/"
                  alt=""
                >
                  Online Calculator
                </a>
              </li>
              <li>
                Create a{" "}
                <a
                  href="https://biandamara.github.io/hacktive8-display-currency-rate/"
                  alt=""
                >
                  Currency Rate
                </a>
              </li>
            </ul>
          </div>
          {/* description - end */}
        </div>
        {/* hacktive8 hacktive8 - end */}

        <hr></hr>

        {/* binar academy - start */}
        <div
          className={`row`}
          data-aos={`zoom-out`}
          data-aos-duration={`1000`}
          data-aos-once={`true`}
        >
          {/* logo - start */}
          <div className={`col-1 d-flex justify-content-center ${styles.logo}`}>
            <img
              src="https://rec-data.kalibrr.com/www.kalibrr.com/logos/WCC8JYGAK3XYJMLBQ23ZA4F6ZF8P29VCXZ7ZPFEZ-6331ecc9.png"
              alt=""
              data-aos={`fade-left`}
              data-aos-duration={`1000`}
              data-aos-delay={`1000`}
              data-aos-once={`true`}
            ></img>
          </div>
          {/* logo - end */}

          {/* description - start */}
          <div
            className={`col`}
            data-aos={`zoom-out`}
            data-aos-duration={`1000`}
            data-aos-delay={`1000`}
            data-aos-once={`true`}
          >
            <h5 className="m-0">Binar Academy</h5>
            <p className="m-0">Full-stack Web Development</p>
            <p className="text-secondary m-0">Feb 2022 - Sep 2022</p>
            <p className="text-secondary">Malang, Indonesia</p>
            <ul>
              <li>
                Complete a 7-month full-stack web development program and learn
                about HTML, CSS, JavaScript, GIT, Node JS, Express JS,
                PostgreSQL, React JS, Next JS, and Redux JS
              </li>
              <li>
                Create a full-stack web application for 5 months and improve the
                user experience
              </li>
              <li>
                Work together on team projects for 2 months and increase team
                productivity
              </li>
            </ul>
          </div>
          {/* description - end */}
        </div>
        {/* binar academy - end */}

        <hr></hr>

        {/* university of brawijaya - start */}
        <div
          className={`row`}
          data-aos={`zoom-out`}
          data-aos-duration={`1000`}
          data-aos-once={`true`}
        >
          {/* logo - start */}
          <div className={`col-1 d-flex justify-content-center ${styles.logo}`}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Logo_Universitas_Brawijaya.svg/2036px-Logo_Universitas_Brawijaya.svg.png"
              alt=""
              data-aos={`fade-left`}
              data-aos-duration={`1000`}
              data-aos-delay={`1000`}
              data-aos-once={`true`}
            ></img>
          </div>
          {/* logo - end */}

          {/* description - start */}
          <div
            className={`col`}
            data-aos={`zoom-out`}
            data-aos-duration={`1000`}
            data-aos-delay={`1000`}
            data-aos-once={`true`}
          >
            <h5 className="m-0">University of Brawijaya</h5>
            <p className="m-0">Bachelor's degree, Psychology</p>
            <p className="text-secondary m-0">Aug 2010 - Mar 2015</p>
            <p className="text-secondary">Malang, Indonesia</p>
            <ul>
              <li>GPA 3.1/4.0</li>
              <li>
                Undergraduate Thesis:{" "}
                <a href="http://repository.ub.ac.id/id/eprint/121259/" alt="">
                  The Relationship Autonomy and Self-Adjustment of Disability
                  Students in PSLD (Study and Disability Services Canter)
                  Brawijaya University
                </a>
              </li>
            </ul>
          </div>
          {/* description - end */}
        </div>
        {/* university of brawijaya - end */}
      </div>
      {/* education list - end */}
    </div>
  );
}
