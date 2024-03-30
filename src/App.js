import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Addrecipe } from "./Addrecipe";

export const key = "c876b05d-4a1a-43ac-a97e-73d3401075a4";

// ("5ed6604691c37cdc054bd0cc");

function App() {
  const [query, setQuery] = useState("");
  const [foodsData, setFoodsData] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");
  const [addRecipeViewed, setAddRecipeViewed] = useState(false);
  const [isBookMarkViewed, setIsBookMarkViewed] = useState(false);
  const [bookMarkedFoods, setBookmarkedFoods] = useState([]);

  function handleBookMarkAdded(added) {
    setBookmarkedFoods((prevBookMarkedFoods) => [
      ...prevBookMarkedFoods,
      added,
    ]);
  }

  function handleSearch() {
    async function fetchdata() {
      try {
        setIsLoaded(true);
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}&key=${key}`
        );
        if (!res.ok)
          throw new Error("something went wrong with fetching the recipes");
        const data = await res.json();
        if (data.results === 0) throw new Error("recipe not found");
        setIsLoaded(false);
        setFoodsData(data);
        setQuery("");
      } catch (err) {
        setError(err.message);
        console.log(err.message);
      } finally {
        setIsLoaded(false);
      }
    }

    fetchdata();
    setQuery("");
  }

  function handleViewOfAddRecipe() {
    setAddRecipeViewed(true);
  }

  function handleExitAddRecipe() {
    setAddRecipeViewed(false);
  }

  function handleMouseEnter() {
    setIsBookMarkViewed(true);
  }

  function handleMouseLeave() {
    setIsBookMarkViewed(false);
  }

  return (
    <div className="App">
      <div className="content">
        <Header
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
          handleViewOfAddRecipe={handleViewOfAddRecipe}
          addRecipeViewed={addRecipeViewed}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
        <Main
          foodsData={foodsData}
          addRecipeViewed={addRecipeViewed}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          isLoaded={isLoaded}
          error={error}
          isBookMarkViewed={isBookMarkViewed}
          handleBookMarkAdded={handleBookMarkAdded}
          bookMarkedFoods={bookMarkedFoods}
        />
      </div>
      {addRecipeViewed && (
        <Addrecipe handleExitAddRecipe={handleExitAddRecipe} />
      )}
    </div>
  );
}

export default App;
