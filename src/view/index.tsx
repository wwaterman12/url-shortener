import React, { useEffect, useState } from "react";
import { useDispatch } from "../store/hooks";
import { fetchPreviousUrls } from "../store/slices/previousUrls";
import { ActiveView } from "../lib/interfaces";
import Form from "../components/form";
import Header from "../components/header";
import Result from "../components/result";
import arrow from "../assets/arrow.svg";
import styles from "./View.module.css";

function View() {
  const [activeView, setActiveView] = useState<ActiveView>("form");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPreviousUrls());
  }, [dispatch]);

  return (
    <div className={styles.views}>
      <div
        className={`${styles.view} ${
          activeView === "form" ? "" : styles.hidden
        }`}
      >
        <Header />
        <Form toggleActiveView={() => setActiveView("result")} />
        <span
          className={styles.skipLink}
          onClick={() => setActiveView("result")}
        >
          SKIP&nbsp;
          <img src={arrow} alt="arrow right" />
        </span>
      </div>
      <div
        className={`${styles.view} ${
          activeView === "result" ? "" : styles.hidden
        }`}
      >
        <Result toggleActiveView={() => setActiveView("form")} />
      </div>
    </div>
  );
}

export default View;
