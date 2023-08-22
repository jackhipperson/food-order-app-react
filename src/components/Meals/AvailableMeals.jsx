import { useCallback, useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem";

const AvailableMeals = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMenuItems = useCallback(async () => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://react-movies-fee5c-default-rtdb.europe-west1.firebasedatabase.app/menu.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const menu_array = [];
      for (const key in data) {
        menu_array.push({
          key: key,
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMenuItems(menu_array);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMenuItems();
  }, [fetchMenuItems]);

  const mealsList = menuItems.map((meal) => (
    <>
      <MealItem
        key={meal.key}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    </>
  ));

  let content = <p>No items found.</p>;

  if (menuItems.length > 1) {
    content = <ul>{mealsList}</ul>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <section className="max-w-[60rem] w-[90%] my-8 mx-auto animate-[mealsAppear_1s_ease-out_forwards]">
      <Card>{content}</Card>
    </section>
  );
};

export default AvailableMeals;
