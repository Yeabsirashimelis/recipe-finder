import { useState, useEffect } from "react";
import { key } from "./App";
import { BookMarks } from "./BookMarks";
import { FoodList } from "./FoodList";
import { ErrorMessage } from "./ErrorMessage";
import { Loading } from "./Loading";
import { HowToCook } from "./HowToCook";
import { RecipeIngredients } from "./RecipeIngredients";

export function Main({
  foodsData,
  isLoaded,
  error,
  addRecipeViewed,
  handleBookMarkAdded,
  isBookMarkViewed,
  bookMarkedFoods,
  handleMouseEnter,
  handleMouseLeave,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState("");
  const [err, setErr] = useState("");
  const recipesPerPage = 10;
  const [servings, setServings] = useState(0);
  const [ingredientsQuantity, setIngredientsQuantity] = useState([]);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

  const currentRecipes = foodsData?.data?.recipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  function handleNext() {
    setCurrentPage((currentPage) => currentPage + 1);
  }

  function handlePrevious() {
    setCurrentPage((currentPage) => currentPage - 1);
  }

  function handleAddServings() {
    setServings((servings) => servings + 1);
  }

  function handleMinusServings() {
    servings > 1 && setServings((servings) => servings - 1);
  }

  function handleBookmarkClicked() {
    const added = {
      title: details?.data.recipe.title,
      image_url: details?.data.recipe.image_url,
      publisher: details?.data.recipe.publisher,
      id: details?.data.recipe.id,
    };
    handleBookMarkAdded(added);
  }

  useEffect(() => {
    // Update ingredient quantities whenever servings change
    if (details && details.data && details.data.recipe) {
      setIngredientsQuantity(
        details.data.recipe.ingredients.map(
          (ings) => (ings.quantity * servings) / details.data.recipe.servings
        )
      );
    }
  }, [details, servings]);

  function handleDetails(id) {
    async function fetchdata() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=${key}`
        );
        if (!res.ok)
          throw new Error("something went wrong with getting the details");
        const data = await res.json();
        if (data.results === 0) throw new Error("recipe not found");
        setIsLoading(false);
        console.log(data);
        setDetails(data);
        setServings(data?.data?.recipe.servings);
        setIngredientsQuantity(
          data?.data?.recipe.ingredients.map((ings) => ings.quantity)
        );
      } catch (err) {
        setErr(err.message);
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchdata();
  }

  return (
    <div style={{ position: "relative" }}>
      {isBookMarkViewed && bookMarkedFoods.length === 0 && (
        <div
          className="addbookmarks"
          style={{
            fontWeight: "lighter",
            fontFamily: "cursive",
          }}
        >
          <BookMarks>
            <svg
              fill="orangered"
              width="60px"
              height="60px"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M520.741 163.801a10.234 10.234 0 00-3.406-3.406c-4.827-2.946-11.129-1.421-14.075 3.406L80.258 856.874a10.236 10.236 0 00-1.499 5.335c0 5.655 4.585 10.24 10.24 10.24h846.004c1.882 0 3.728-.519 5.335-1.499 4.827-2.946 6.352-9.248 3.406-14.075L520.742 163.802zm43.703-26.674L987.446 830.2c17.678 28.964 8.528 66.774-20.436 84.452a61.445 61.445 0 01-32.008 8.996H88.998c-33.932 0-61.44-27.508-61.44-61.44a61.445 61.445 0 018.996-32.008l423.002-693.073c17.678-28.964 55.488-38.113 84.452-20.436a61.438 61.438 0 0120.436 20.436zM512 778.24c22.622 0 40.96-18.338 40.96-40.96s-18.338-40.96-40.96-40.96-40.96 18.338-40.96 40.96 18.338 40.96 40.96 40.96zm0-440.32c-22.622 0-40.96 18.338-40.96 40.96v225.28c0 22.622 18.338 40.96 40.96 40.96s40.96-18.338 40.96-40.96V378.88c0-22.622-18.338-40.96-40.96-40.96z" />
            </svg>
            no bookmarks yet. Find a nice recipe and bookmark it!
          </BookMarks>
        </div>
      )}
      {isBookMarkViewed && bookMarkedFoods.length !== 0 && (
        <div
          className="addbookmarks"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {bookMarkedFoods.map((bookMarkedFood, i) => (
            <BookMarks
              bookMarkedFoods={bookMarkedFoods}
              bookMarkedFood={bookMarkedFood}
              handleDetails={handleDetails}
              key={bookMarkedFood.id}
            />
          ))}
        </div>
      )}
      <div
        className="main"
        style={addRecipeViewed ? { filter: "blur(2px)" } : {}}
      >
        {isLoaded ? (
          <Loading />
        ) : error ? (
          <ErrorMessage error={error} />
        ) : (
          <div className="leftbox">
            <div className="lists">
              {currentRecipes &&
                currentRecipes.map((foodData) => (
                  <FoodList
                    foodData={foodData}
                    handleDetails={handleDetails}
                    key={foodData.id}
                  />
                ))}
            </div>
            {currentPage > 1 && (
              <button className="prevbtn" onClick={handlePrevious}>
                ⬅page{currentPage}
              </button>
            )}
            {currentRecipes && (
              <button className="nextbtn" onClick={handleNext}>
                page{currentPage + 1}➡
              </button>
            )}
          </div>
        )}

        <div className="rightbox">
          {isLoading ? (
            <Loading />
          ) : err ? (
            <ErrorMessage error={err} />
          ) : details ? (
            <>
              <div className="nameandphoto">
                <img
                  src={details?.data.recipe.image_url}
                  alt={details?.data.recipe.title}
                />
                <h2 className="recipename">{details?.data.recipe.title}</h2>
              </div>
              <div className="firstdetails">
                <div className="quickdetails">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Calendar / Timer">
                      <path
                        id="Vector"
                        d="M12 13V9M21 6L19 4M10 2H14M12 21C7.58172 21 4 17.4183 4 13C4 8.58172 7.58172 5 12 5C16.4183 5 20 8.58172 20 13C20 17.4183 16.4183 21 12 21Z"
                        stroke="orangered"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                  {details?.data.recipe.cooking_time} minutes
                </div>
                <div className="quickdetails">
                  👨‍👦{servings} servings
                  <button
                    className="addandminusbtns"
                    onClick={handleMinusServings}
                  >
                    -
                  </button>
                  <button
                    className="addandminusbtns"
                    onClick={handleAddServings}
                  >
                    +
                  </button>
                </div>
                <div className="bottombookmark" onClick={handleBookmarkClicked}>
                  <svg
                    className="icons bottombookmark"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="orangered"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z"
                      stroke="whitesmoke"
                    />
                  </svg>
                </div>
              </div>
              <div className="ingredientsmain">
                <h3>RECIPE INGREDIENTS</h3>
                <div className="ingredients">
                  {details?.data.recipe.ingredients.map((ing, i) => (
                    <RecipeIngredients
                      ing={ing}
                      ingredientQuantity={ingredientsQuantity[i]}
                      key={i}
                    />
                  ))}
                </div>
              </div>

              <HowToCook recipeName={details.data.recipe.title} />
            </>
          ) : (
            <p>
              😊 start by searching for a recipe or <br />
              ingredient. have fun
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
