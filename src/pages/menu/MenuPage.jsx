import { useParams } from "react-router-dom";
import { useGetDishesByRestaurantIdQuery } from "../../redux/api/dishes/api";
import ErrorFallback from "../../components/errorFallback/ErrorFallback";
import styles from "./MenuPage.module.css";
import DishesContainer from "../../components/dishes/DishesContainer";
import classNames from "classnames";
import { useThemeColorContext } from "../../components/themeColorContextProvider/ThemeColorContextProvider";

export default function MenuPage() {
  const { themeColor } = useThemeColorContext()

  const { restaurantId } = useParams();

  const { error, isLoading, isFetching, isError } =
    useGetDishesByRestaurantIdQuery(restaurantId);

  if (isLoading || isFetching) return <p>Loading...</p>;

  if (isError)
    return <ErrorFallback name={error.status} message={error.error} />;

  return (
    <div className={classNames(styles.container, styles[`container--${themeColor}`])}>
      <h4 className={classNames(styles.container, styles[`title--${themeColor}`])}>Menu</h4>
      <DishesContainer />
    </div>
  );
}
