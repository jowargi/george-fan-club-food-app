import RouterLink from "../routerLink/RouterLink";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./InRestaurantNavigation.module.css";
import classNames from "classnames";


export default function InRestaurantNavigation() {
  const { themeColor } = useThemeColorContext()
  return (
    <nav className={styles.nav}>
      <ul className={classNames(styles.list, styles[`list--${themeColor}`])}>
        <li>
          <RouterLink to="menu">Menu</RouterLink>
        </li>
        <li>
          <RouterLink to="reviews">Reviews</RouterLink>
        </li>
      </ul>
    </nav>
  );
}
