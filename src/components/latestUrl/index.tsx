import React, { useEffect } from "react";
import { useSelector } from "../../store/hooks";
import { selectLatestUrl } from "../../store/slices/latestUrl";
import styles from "./LatestUrl.module.css";

function LatestUrl() {
  const latestUrl = useSelector(selectLatestUrl);

  useEffect(() => {
    if (!!latestUrl.shortUrl) {
      navigator.clipboard.writeText(latestUrl.shortUrl);
    }
  }, [latestUrl.shortUrl]);

  return !!latestUrl.shortUrl ? (
    <div className={styles.latestUrlWrapper}>
      <h2>
        <span className={styles.underline}>Your short URL:</span>
        <span className={styles.yellow}>{latestUrl.shortUrl}</span>
      </h2>
      <p className={styles.subText}>
        This URL has been copied to your clipboard!
      </p>
    </div>
  ) : (
    <div />
  );
}

export default LatestUrl;
