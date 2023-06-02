import React from "react";

// import components
import Header from "../../organisms/Header/Header.jsx";
import Navigation from "../../organisms/Navigation/Navigation.jsx";

// import styles
import styles from "./SideBar.module.css";

export default function SideBar() {
  return (
    <div className={`${styles.sidebar}`}>
      <Header></Header>
      <Navigation></Navigation>
    </div>
  );
}
