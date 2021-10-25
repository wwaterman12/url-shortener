import React, { useState } from "react";
import { VisibleUrlType } from "../../lib/interfaces";
import { useSelector } from "../../store/hooks";
import { selectPreviousUrls } from "../../store/slices/previousUrls";
import UrlsList from "../urlsList";
import Switch from "../switch";
import styles from "./Result.module.css";

function Result() {
  const [visibleUrlType, setVisibleUrlType] =
    useState<VisibleUrlType>("shortUrl");
  const previousUrlsList = useSelector(selectPreviousUrls);

  return (
    <div>
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

export default Result;
