import { Outlet } from "react-router-dom";
import styles from "./Main.module.css";
import classNames from "classnames";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";

export default function Main() {
const {themeColor} = useThemeColorContext()

  return (
    <main className={classNames(styles.container, styles[`main--${themeColor}`])}>
      <Outlet />
    </main>
  );
}
