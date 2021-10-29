import React from "react";
import Header from "../../components/header";
import Form from "../../components/form";
import NavLink from "../../components/navLink";
import styles from "./FormView.module.css";

/**
 * @param {string} activeView - can be "form" or "result"
 * @param {() => void} toggleActiveView - on NavLink click event handler
 */

function FormView({ activeView, toggleActiveView }: Props) {
  return (
    <div className={`${styles.view} ${styles[activeView]}`}>
      <Header />
      <Form toggleActiveView={toggleActiveView} />
      <NavLink toggleActiveView={toggleActiveView} activeView={activeView} />
    </div>
  );
}

interface Props {
  activeView: "form" | "result";
  toggleActiveView: () => void;
}

export default FormView;
