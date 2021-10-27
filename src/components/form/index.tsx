import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "../../store/hooks";
import {
  postNewUrl,
  resetLatestUrl,
  selectErrorMessage,
  selectLatestUrl,
  selectStatus,
} from "../../store/slices/latestUrl";
import {
  addUrl,
  selectPreviousUrlSlugs,
} from "../../store/slices/previousUrls";
import { PostParams } from "../../lib/interfaces";
import alert from "../../assets/alert.svg";
import styles from "./Form.module.css";

/**
 * @param {() => void} toggleActiveView - emitted function after form submit success
 */
function Form({ toggleActiveView }: Props) {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");
  const dispatch = useDispatch();
  const latestUrl = useSelector(selectLatestUrl);
  const previousUrlSlugs = useSelector(selectPreviousUrlSlugs);
  const status = useSelector(selectStatus);
  const errorMessage = useSelector(selectErrorMessage);

  const autoFillCurrentPageUrl = (e: FormEvent) => {
    e.preventDefault();
    setUrl(window.location.href);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(resetLatestUrl());
    const params: PostParams = { url };
    // only set slug param if valid, API doesn't accept empty string
    if (slug) {
      params.slug = slug;
    }
    dispatch(postNewUrl(params));
  };

  useEffect(() => {
    if (!!latestUrl.slug && !previousUrlSlugs.includes(latestUrl.slug)) {
      dispatch(addUrl(latestUrl));
      toggleActiveView();
    }
  }, [dispatch, previousUrlSlugs, latestUrl, toggleActiveView]);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {status === "failed" && (
        <span className={styles.formError}>
          <img src={alert} alt="alert" />
          &nbsp;{errorMessage}
        </span>
      )}
      <label className={styles.inputWrapper}>
        <span>Enter a URL</span>
        <input
          className={`${styles.input} ${url ? styles.active : ""}`}
          type="url"
          name="url"
          aria-label="enter-url"
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
        <span>{`(Optional) Enter a custom slug`}</span>
        <input
          className={`${styles.input} ${slug ? styles.active : ""}`}
          type="text"
          name="slug"
          aria-label="enter-slug"
          id="slug"
          value={slug}
          placeholder="vbfsa2"
          pattern="[A-Za-z0-9]+"
          onChange={(e) => setSlug(e.target.value)}
        />
        <span className={styles.errorMessage}>
          <img src={alert} alt="alert" /> Must be alpha-numeric characters
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

interface Props {
  toggleActiveView: () => void;
}

export default Form;
