import React, { useEffect } from "react";
import { useDispatch } from "../store/hooks";
import { fetchPreviousUrls } from "../store/slices/previousUrls";
import Form from "../components/form";
import styles from "./View.module.css";

function View() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPreviousUrls());
  }, [dispatch]);

  return (
    <div className={styles.view}>
      <header>
        <h1>
          <span className={styles.logo}>URL</span>
          &nbsp; Shortener
        </h1>
        <p>A simple, but handy tool for shortening URLs</p>
      </header>
      <Form />
    </div>
  );
}

export default View;
