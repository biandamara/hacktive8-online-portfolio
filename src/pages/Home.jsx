import React from "react";

// import template components
import SideBar from "../components/templates/SideBar/SideBar.jsx";
import Sections from "../components/templates/Sections/Sections.jsx";

// import styles
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={`${styles.home}`}>
      <div className={`row row-cols-1 row-cols-lg-2 p-3`}>
        {/* navigation - start */}
        <div className={`col col-lg-3 ${styles.sidebar}`}>
          <SideBar></SideBar>
        </div>
        {/* navigation - end */}

        {/* section - start */}
        <div className={`col col-lg-9 ${styles.section}`}>
          <Sections></Sections>
        </div>
        {/* section - end */}
      </div>
    </div>
  );
}
