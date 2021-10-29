import React from "react";
import { VisibleUrlType } from "../../lib/interfaces";
import styles from "./Switch.module.css";

/**
 * @param {string} activeValue - the active value the Switch should display
 * @param {[Option, Option]} options - label/value for each side of the switch
 * @param {(val: string) => void} toggleValue - A function to toggle the activeValue
 */

function Switch(props: Props) {
  const left = () => props.options[0];
  const right = () => props.options[1];
  const isRight = () => props.activeValue === props.options[1].value;

  const toggle = (value: VisibleUrlType) => {
    if (value === props.activeValue) return;
    props.toggleValue(value);
  };

  return (
    <div className={styles.switch}>
      <div className={`${styles.blob} ${isRight() ? styles.blobRight : ""}`}>
        <span>{isRight() ? right().label : left().label}</span>
      </div>

      <div
        onClick={() => toggle(left().value)}
        className={`${styles.option} ${!isRight() ? styles.active : ""}`}
      >
        <span>{left().label}</span>
      </div>

      <div
        onClick={() => toggle(right().value)}
        className={`${styles.option} ${isRight() ? styles.active : ""}`}
      >
        <span>{right().label}</span>
      </div>
    </div>
  );
}

interface Option {
  label: string;
  value: VisibleUrlType;
}

interface Props {
  activeValue: string;
  options: [Option, Option];
  toggleValue: (val: VisibleUrlType) => void;
}

export default Switch;
