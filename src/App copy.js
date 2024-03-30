import { useState } from "react";

const key = "c876b05d-4a1a-43ac-a97e-73d3401075a4";

// ("5ed6604691c37cdc054bd0cc");

function App() {
  const [query, setQuery] = useState("");
  const [foodsData, setFoodsData] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");

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

  return (
    <div className="App">
      <div className="content">
        <Header query={query} setQuery={setQuery} handleSearch={handleSearch} />
        <Main foodsData={foodsData} isLoaded={isLoaded} error={error} />
      </div>
    </div>
  );
}

function Header({ query, setQuery, handleSearch }) {
  return (
    <div style={{ backgroundColor: "rgb(247, 246, 246)" }}>
      <div className="header">
        <div>
          <svg
            className="spoonfork"
            fill="white"
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3,7C3,4.239,4.791,2,7,2s4,2.239,4,5a4.913,4.913,0,0,1-3,4.823V21a1,1,0,0,1-2,0V11.823A4.913,4.913,0,0,1,3,7ZM19,3V7H18V3a1,1,0,0,0-2,0V7H15V3a1,1,0,0,0-2,0V8a3,3,0,0,0,3,3V21a1,1,0,0,0,2,0V11a3,3,0,0,0,3-3V3a1,1,0,0,0-2,0Z" />
          </svg>
        </div>
        <p>Forkify</p>

        <div className="inputbutton">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>🔍Search</button>
        </div>

        <div className="addrecipe">
          <svg
            width="30px"
            height="40px"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M774.8 327.8c-50.6-4.8-97.3 4.3-131 22.7 15.9 20.3 26.1 52.1 26.1 87.9 0 29.2-6.8 55.7-17.9 75.5 28.3 16.9 64.5 28.8 104.6 32.6 96.7 9.2 179.2-32.4 184.2-92.8s-69.3-116.7-166-125.9z"
              fill="rgb(252, 129, 85)"
            />
            <path
              d="M67.2 494l1 31c2.2 67.7 26.2 133.6 69.6 190.4 41.6 54.5 99.6 99.2 167.9 129.3 15.2 6.7 32.9-0.2 39.5-15.4 6.7-15.2-0.2-32.9-15.4-39.5-59-26-108.9-64.3-144.4-110.8-29-38-47.5-80.7-54.4-125h762.6c-7 44.8-25.8 87.9-55.4 126.3-36.1 46.8-86.8 85.2-146.8 110.9-15.2 6.5-22.2 24.2-15.7 39.4 4.9 11.4 15.9 18.2 27.6 18.2 4 0 8-0.8 11.8-2.4 144.5-62.2 237-185.3 241.3-321.4l1-31H67.2z"
              fill="rgb(252, 129, 85)"
            />
            <path
              d="M591.9 800.1h-159c-35.2 0-64.1 28.8-64.1 64.1s28.8 64.1 64.1 64.1h159c35.2 0 64.1-28.8 64.1-64.1s-28.9-64.1-64.1-64.1z m0 68.1h-159c-2.1 0-4.1-2-4.1-4.1s2-4.1 4.1-4.1h159c2.1 0 4.1 2 4.1 4.1s-2 4.1-4.1 4.1z"
              fill="rgb(252, 129, 85)"
            />
            <path
              d="M498.1 373.5c-9.6-13.5-28.4-16.6-41.9-6.9-13.5 9.6-16.6 28.4-6.9 41.9 10.8 15.1 16.6 33 16.6 51.7 0 16.6 13.4 30 30 30s30-13.4 30-30c0-31.4-9.6-61.4-27.8-86.7zM432.4 321.8c-17.7-7.1-36.3-10.7-55.5-10.7-82.2 0-149 66.8-149 149 0 16.6 13.4 30 30 30s30-13.4 30-30c0-49.1 39.9-89 89-89 11.5 0 22.6 2.1 33.1 6.4 15.4 6.2 32.8-1.3 39-16.7 6.2-15.4-1.2-32.9-16.6-39z"
              fill="rgb(252, 129, 85)"
            />
            <path
              d="M549.4 274.7c-46.7-45.6-107.7-70.8-171.8-70.8-64.1 0-125.1 25.1-171.8 70.8-46.1 45.1-74 106-78.6 171.4-1.2 16.5 11.3 30.9 27.8 32 16.5 1.1 30.9-11.3 32-27.8 3.5-50.8 25.1-97.9 60.7-132.7 35.4-34.6 81.5-53.7 129.9-53.7 48.3 0 94.5 19.1 129.9 53.7 35.6 34.8 57.1 81.9 60.7 132.7 1.1 15.8 14.3 27.9 29.9 27.9 0.7 0 1.4 0 2.1-0.1 16.5-1.2 29-15.5 27.8-32-4.6-65.4-32.5-126.3-78.6-171.4zM895.1 385.9c-11.5-19.4-27.7-36.6-48.1-51.2l53.9-58.3c11.2-12.2 10.5-31.2-1.7-42.4s-31.2-10.5-42.4 1.7l-65 70.4c-5-1.8-10.1-3.5-15.3-5l82.4-159.2c7.6-14.7 1.9-32.8-12.9-40.4-14.7-7.6-32.8-1.9-40.4 12.9l-91.2 176.3c-5.5-0.3-11.1-0.5-16.7-0.5-21.9 0-43.5 2.4-64.3 7.2-16.1 3.7-26.2 19.8-22.5 36 3.7 16.1 19.8 26.2 36 22.5 16.3-3.8 33.4-5.7 50.7-5.7 43.6 0 84.2 11.8 114.3 33.3 27.1 19.3 42 44 42 69.5 0 16.6 13.4 30 30 30s30-13.4 30-30c0-23.5-6.3-46.1-18.8-67.1z"
              fill="rgb(252, 129, 85)"
            />
          </svg>
          ADD RECIPE
        </div>

        <div className="bookmarks">
          <svg
            className="icons"
            width="20px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z"
              stroke="rgb(252, 129, 85)"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          BOOKMARKS
        </div>
      </div>
    </div>
  );
}

function Main({ foodsData, isLoaded, error }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState("");
  const [err, setErr] = useState("");
  const recipesPerPage = 10;
  // const [ingredients,setIngredients] = useState([]);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

  const currentRecipes = foodsData?.data?.recipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const ingredients = details?.data.recipe.ingredients;

  function handleNext() {
    setCurrentPage((currentPage) => currentPage + 1);
  }

  function handlePrevious() {
    setCurrentPage((currentPage) => currentPage - 1);
  }

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
    <div className="main">
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
                👨‍👦{details?.data.recipe.servings} servings
                <button className="addandminusbtns">-</button>
                <button className="addandminusbtns">+</button>
              </div>
              <div className="bottombookmark">
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
                {ingredients.map((ing) => (
                  <RecipeIngredients ing={ing} />
                ))}
              </div>
            </div>

            <HowToCook recipeId={details.data.recipe.id} />
          </>
        ) : (
          <p>
            😊 start by searching for a recipe or <br />
            ingredient. have fun
          </p>
        )}
      </div>
    </div>
  );
}

function RecipeIngredients({ ing }) {
  return (
    <div className="inglists">
      <span>✔</span>
      <span>
        {ing.quantity} {ing.unit !== "" && ing.unit}
      </span>
      <span>{ing.description}</span>
    </div>
  );
}

function HowToCook({ recipeId }) {
  return (
    <div className="howtocook">
      <h4>HOW TO COOK IT</h4>
      <h5>
        this recipe was carefully designed and tested by
        <b> Simple Recipes.</b> Please check out directions at their website.
      </h5>
      <a href={`http://www.simplyrecipes.com/recipes/${recipeId}/`}>
        <button>Directions➡</button>
      </a>
    </div>
  );
}

function Loading() {
  return (
    <div className="loading">
      <p>Loading...</p>
    </div>
  );
}

function ErrorMessage({ error }) {
  return (
    <div className="loading">
      <p>{error}</p>
    </div>
  );
}

function FoodList({ foodData, handleDetails }) {
  function handleClick() {
    handleDetails(foodData.id);
  }

  return (
    <span className="eachlist" onClick={handleClick}>
      <img src={foodData.image_url} alt={foodData.title} />
      <div>
        <p>{foodData.title.split("").slice(0, 20).join("")}...</p>
        <p style={{ color: "rgb(48, 48, 48)" }}>{foodData.publisher}</p>
      </div>
    </span>
  );
}

export default App;
