import React from "react";

// import styles
import styles from "../assets/styles/Header.module.css";

export default function Header() {
  return (
    <div
      className={`text-center py-2 ${styles.header}`}
      data-aos={`fade-up`}
      data-aos-duration={`1000`}
      data-aos-once={`true`}
    >
      {/* photo profile - start */}
      <img
        href="https://res.cloudinary.com/biandamara/image/upload/v1663246235/Portfolio%20Web/Gallery/Image_09_ggtc36.jpg"
        alt=""
      ></img>
      {/* photo profile - end */}

      <div className="py-2">
        <h1>Bian Damara</h1>
        <h5>Front-End Developer</h5>
      </div>
    </div>
  );
}
