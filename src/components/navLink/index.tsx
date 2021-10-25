import React from "react";
import arrow from "../../assets/arrow.svg";
import styles from "./NavLink.module.css";

/**
 * @param {string} activeView - can be "form" or "result"
 * @param {() => void} toggleActiveView - on NavLink click event handler
 */

function NavLink({ activeView, toggleActiveView }: Props) {
  const isLeft = () => activeView === "result";

  return (
    <span
      className={`${styles.navLink} ${!isLeft() ? styles.rightLink : ""}`}
      onClick={toggleActiveView}
    >
      <img
        src={arrow}
        className={isLeft() ? styles.active : ""}
        alt="arrow left"
      />
      &nbsp;{isLeft() ? "BACK" : "SKIP"}&nbsp;
      <img
        src={arrow}
        className={`${styles.right} ${!isLeft() ? styles.active : ""}`}
        alt="arrow right"
      />
    </span>
  );
}

interface Props {
  activeView: "form" | "result";
  toggleActiveView: () => void;
}

export default NavLink;
