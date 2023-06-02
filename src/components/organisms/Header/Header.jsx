import React from "react";

// import data
import data from "../../../assets/data/data.json";

// import styles
import styles from "./Header.module.css";

export default function Header() {
  const header = data.header;
  const contact = data.header.contact;

  return (
    <div
      className={`py-2 text-center ${styles.header}`}
      data-aos={`fade-up`}
      data-aos-duration={`1000`}
      data-aos-once={`true`}
    >
      {/* photo - start */}
      <div className={`py-2`}>
        <img className={` ${styles.photo}`} src={header.photo} alt=""></img>
      </div>
      {/* photo - end */}

      {/* profile - start */}
      <div className={`py-2`}>
        <h1>{header.full_name}</h1>
        <h5>{header.job_title}</h5>
      </div>
      {/* profile - end */}

      {/* contact - start */}
      <div className={`py-2 d-flex justify-content-center`}>
        {contact.map((item, index) => (
          <div key={index}>
            <a href={item.url}>
              <img
                className={`m-2 ${styles.logo}`}
                src={item.logo}
                alt={``}
              ></img>
            </a>
          </div>
        ))}
      </div>
      {/* contact - end */}
    </div>
  );
}
