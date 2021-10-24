import React, { FormEvent, useState } from "react";
import { useDispatch } from "../../store/hooks";
import { postNewUrl } from "../../store/slices/latestUrl";
import { PostParams } from "../../lib/interfaces";
import alert from "../../assets/alert.svg";
import styles from "./Form.module.css";

function Form() {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");
  const dispatch = useDispatch();

  const autoFillCurrentPageUrl = (e: FormEvent) => {
    e.preventDefault();
    setUrl(window.location.href);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const params: PostParams = { url };
    // only set slug param if valid, API doesn't accept empty string
    if (slug) {
      params.slug = slug;
    }
    dispatch(postNewUrl(params));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.inputWrapper}>
        <span>Enter a URL</span>
        <input
          className={`${styles.input} ${url ? styles.active : ""}`}
          type="url"
          name="url"
          id="url"
          value={url}
          placeholder="https://example.com"
          pattern="https://.*"
          size={30}
          required
          onChange={(e) => setUrl(e.target.value)}
        />
        <span className={styles.errorMessage}>
          <img src={alert} alt="alert" /> Must be a valid URL with https://
        </span>
      </label>
      <label className={styles.inputWrapper}>
        <span>{`Enter a custom slug\n(optional)`}</span>
        <input
          className={`${styles.input} ${slug ? styles.active : ""}`}
          type="text"
          name="slug"
          id="slug"
          value={slug}
          placeholder="vbfsa2"
          pattern="[A-Za-z0-9]+"
          onChange={(e) => setSlug(e.target.value)}
        />
        <span className={styles.errorMessage}>
          <img src={alert} alt="alert" /> Slugs may only contain letters and
          numbers
        </span>
      </label>
      <div className={styles.buttonWrapper}>
        <button
          type="button"
          aria-label="use current page URL"
          className={`${styles.button} ${styles.currentUrl}`}
          onClick={autoFillCurrentPageUrl}
        >
          Use current URL
        </button>
        <button
          type="submit"
          aria-label="Get shortened URL"
          className={`${styles.button} ${styles.submit}`}
        >
          Go
        </button>
      </div>
    </form>
  );
}

export default Form;
