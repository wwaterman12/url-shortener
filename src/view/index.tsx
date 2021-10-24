import React from "react";
import Form from "../components/form";
import styles from "./View.module.css";

function View() {
  return (
    <div className={styles.view}>
      <header>
        <h1>URL Shortener</h1>
        <p>A simple, but handy tool for shortening URLs</p>
      </header>
      <Form />
    </div>
  );
}

export default View;
