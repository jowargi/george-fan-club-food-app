import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./Footer.module.css";
import classNames from "classnames";

export default function Footer() {
  const { themeColor } = useThemeColorContext();

  return (
    <footer
      className={classNames(styles.footer, styles[`footer--${themeColor}`])}
    >
      <p
        className={classNames(
          styles.copyright,
          styles[`copyright--${themeColor}`]
        )}
      >
        Copyright © 2025 PartyFood
      </p>
      <address
        className={classNames(styles.address, styles[`address--${themeColor}`])}
      >
        Beverly Hills, USA
      </address>
    </footer>
  );
}
