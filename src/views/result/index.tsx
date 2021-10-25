import React from "react";
import Result from "../../components/result";
import styles from "./ResultView.module.css";

/**
 * @param {string} activeView - can be "form" or "result"
 * @param {() => void} toggleActiveView - on NavLink click event handler
 */

function ResultView({ activeView, toggleActiveView }: Props) {
  return (
    <div className={`${styles.view} ${styles[activeView]}`}>
      <Result toggleActiveView={toggleActiveView} activeView={activeView} />
    </div>
  );
}

interface Props {
  activeView: "form" | "result";
  toggleActiveView: () => void;
}

export default ResultView;
