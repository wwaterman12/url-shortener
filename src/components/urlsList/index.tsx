import React, { useState } from "react";
import { ShortenedUrl, VisibleUrlType } from "../../lib/interfaces";
import { useDispatch } from "../../store/hooks";
import { deletePreviousUrl } from "../../store/slices/previousUrls";
import styles from "./UrlsList.module.css";

/**
 * @param {ShortenedUrl[]} list - list of previouslySelectedUrls
 * @param {string} visibleUrlType - determine which type of url to display can be "shortUrl" or "fullUrl"
 */

function UrlsList(props: Props) {
  const [clipBoardText, setClipBoardText] = useState("");
  const [deleted, setIsDeleted] = useState<string[]>([]);
  const dispatch = useDispatch();

  const isClipBoardText = (text: string) => text === clipBoardText;
  const copyToClipBoard = (text: string) => {
    navigator.clipboard.writeText(text);
    setClipBoardText(text);
  };

  const isDeleted = (slug: string) => deleted.includes(slug);
  const deleteUrl = (url: ShortenedUrl) => {
    setIsDeleted((prevDeleted) => [url.slug, ...prevDeleted]);
    dispatch(deletePreviousUrl(url.slug));
  };

  return (
    <ul className={styles.listWrapper}>
      {props.list.map((url) => (
        <li
          key={url.slug}
          className={`${styles.listItem} ${
            isDeleted(url.slug) ? styles.deleted : ""
          }`}
        >
          <span>{url[props.visibleUrlType]}</span>
          <div>
            <button
              className={`${styles.button} ${styles.copy} ${
                isClipBoardText(url[props.visibleUrlType]) ? styles.copied : ""
              }`}
              onClick={() => copyToClipBoard(url[props.visibleUrlType])}
            >
              {isClipBoardText(url[props.visibleUrlType]) ? "COPIED!" : "COPY"}
            </button>
            <button
              className={`${styles.button} ${styles.delete}`}
              onClick={() => deleteUrl(url)}
            >
              DELETE
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

interface Props {
  list: ShortenedUrl[];
  visibleUrlType: VisibleUrlType;
}

export default UrlsList;
