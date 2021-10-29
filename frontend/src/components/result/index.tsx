import React, { useState } from "react";
import { VisibleUrlType } from "../../lib/interfaces";
import { useSelector } from "../../store/hooks";
import { selectPreviousUrls } from "../../store/slices/previousUrls";
import LatestUrl from "../latestUrl";
import UrlsList from "../urlsList";
import Switch from "../switch";
import NavLink from "../navLink";

/**
 * @param {string} activeView - can be "form" or "result"
 * @param {() => void} toggleActiveView - on NavLink click event handler
 */

function Result({ toggleActiveView, activeView }: Props) {
  const [visibleUrlType, setVisibleUrlType] =
    useState<VisibleUrlType>("shortUrl");
  const previousUrlsList = useSelector(selectPreviousUrls);

  return (
    <div>
      <NavLink toggleActiveView={toggleActiveView} activeView={activeView} />
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
  activeView: "form" | "result";
  toggleActiveView: () => void;
}

export default Result;
