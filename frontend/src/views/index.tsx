import React, { useEffect, useState } from "react";
import { useDispatch } from "../store/hooks";
import { fetchPreviousUrls } from "../store/slices/previousUrls";
import { ActiveView } from "../lib/interfaces";
import FormView from "./form";
import ResultView from "./result";
import styles from "./Views.module.css";

function Views() {
  const [activeView, setActiveView] = useState<ActiveView>("form");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPreviousUrls());
  }, [dispatch]);

  return (
    <div className={styles.views}>
      <FormView
        activeView={activeView}
        toggleActiveView={() => setActiveView("result")}
      />
      <ResultView
        activeView={activeView}
        toggleActiveView={() => setActiveView("form")}
      />
    </div>
  );
}

export default Views;
