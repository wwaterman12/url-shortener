import React, { FormEvent, useState } from "react";
import alert from "../../assets/alert.svg";
import styles from "./Form.module.css";

function Form() {
  const [urlValue, setUrlValue] = useState("");
  const [slugValue, setSlugValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ urlValue, slugValue });
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.inputWrapper}>
        <span>Enter a URL</span>
        <input
          className={`${styles.input} ${urlValue ? styles.active : ""}`}
          type="url"
          name="url"
          id="url"
          value={urlValue}
          placeholder="https://example.com"
          pattern="https://.*"
          size={30}
          required
          onChange={(e) => setUrlValue(e.target.value)}
        />
        <span className={styles.errorMessage}>
          <img src={alert} alt="alert" /> Must be a valid URL with https://
        </span>
      </label>
      <label className={styles.inputWrapper}>
        <span>{`Enter a custom slug\n(optional)`}</span>
        <input
          className={`${styles.input} ${slugValue ? styles.active : ""}`}
          type="text"
          name="slug"
          id="slug"
          value={slugValue}
          placeholder="vbfsa2"
          pattern="[A-Za-z0-9]+"
          onChange={(e) => setSlugValue(e.target.value)}
        />
        <span className={styles.errorMessage}>
          <img src={alert} alt="alert" /> Slugs may only contain letters and
          numbers
        </span>
      </label>
      <button
        type="submit"
        aria-label="Get shortened URL"
        className={styles.button}
      >
        Get Shortened URL
      </button>
    </form>
  );
}

export default Form;
