import React from "react";
import redditLogo from "./Reddit_Icon_1Color_Silhouette.png";
import styles from "./Header.module.css";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className={styles.header}>
      <img src={redditLogo} alt="Reddit logo" className={styles.logo}/>
      <SearchBar className={styles.search}/>
    </div>
  );
}

export default Header;
