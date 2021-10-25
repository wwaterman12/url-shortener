import React, { useState } from "react";
import { VisibleUrlType } from "../../lib/interfaces";
import { useSelector } from "../../store/hooks";
import { selectPreviousUrls } from "../../store/slices/previousUrls";
import LatestUrl from "../latestUrl";
import UrlsList from "../urlsList";
import Switch from "../switch";
import arrowLeft from "../../assets/arrowLeft.svg";
import styles from "./Result.module.css";

function Result({ toggleActiveView }: Props) {
  const [visibleUrlType, setVisibleUrlType] =
    useState<VisibleUrlType>("shortUrl");
  const previousUrlsList = useSelector(selectPreviousUrls);

  return (
    <div>
      <span className={styles.backLink} onClick={toggleActiveView}>
        <img src={arrowLeft} alt="arrow left" />
        BACK
      </span>
      <LatestUrl />
      <h2>Previous URLs</h2>
      <Switch
        options={[
          { label: "Short URL", value: "shortUrl" },
          { label: "Full URL", value: "fullUrl" },
        ]}
        activeValue={visibleUrlType}
        toggleValue={(type: VisibleUrlType) => setVisibleUrlType(type)}
      />
      <UrlsList list={previousUrlsList} visibleUrlType={visibleUrlType} />
    </div>
  );
}

interface Props {
  toggleActiveView: () => void;
}

export default Result;
