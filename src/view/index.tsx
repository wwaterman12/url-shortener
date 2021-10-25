import React, { useEffect } from "react";
import { useDispatch } from "../store/hooks";
import { fetchPreviousUrls } from "../store/slices/previousUrls";
import Form from "../components/form";
import Header from "../components/header";
import Result from "../components/result";
import styles from "./View.module.css";

function View() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPreviousUrls());
  }, [dispatch]);

  return (
    <div className={styles.view}>
      <Header />
      <Form />
      <Result />
    </div>
  );
}

export default View;
