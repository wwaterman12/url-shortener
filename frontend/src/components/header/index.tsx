import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <h1>
        <span className={styles.logo}>URL</span>
        &nbsp; Shortener
      </h1>
      <h2>A simple, but handy tool for shortening URLs</h2>
    </header>
  );
}

export default Header;
