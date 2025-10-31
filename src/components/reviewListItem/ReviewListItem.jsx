import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./ReviewListItem.module.css";
import classNames from "classnames";

export default function ReviewListItem({ reviewText, reviewRating }) {
  const { themeColor } = useThemeColorContext();
  return (
    <li className={styles.item}>
      <p className={classNames(styles.container, styles[`text--${themeColor}`])}>{reviewText}</p>
      <p className={classNames(styles.container, styles[`rating--${themeColor}`])}>{new Array(reviewRating + 1).join("★")}</p>
    </li>
  );
}
