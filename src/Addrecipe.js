export function Addrecipe({ handleExitAddRecipe }) {
  return (
    <div className="infoaddrecipe">
      <button className="exitmodalbtn" onClick={handleExitAddRecipe}>
        X
      </button>
      <form className="infoaddrecipe-details">
        <div className="recipedataandingredients">
          <h3 className="h3">RECIPE DATA</h3>
          <span>
            <label>Title</label>
            <input type="text" />
          </span>
          <span>
            <label>URL</label>
            <input type="text" />
          </span>
          <span>
            <label>Img URL</label>
            <input type="text" />
          </span>
          <span>
            <label>publisher</label>
            <input type="text" />
          </span>
          <span>
            <label>Prep time</label>
            <input type="text" />
          </span>
          <span>
            <label>Servings</label>
            <input type="text" />
          </span>
        </div>

        <div className="recipedataandingredients">
          <h3 className="h3">INGREDIENTS</h3>
          <span>
            <label>ingredient 1</label>
            <input type="text" />
          </span>
          <span>
            <label>ingredient 2</label>
            <input type="text" />
          </span>
          <span>
            <label>ingredient 3</label>
            <input type="text" />
          </span>
          <span>
            <label>ingredient 4</label>
            <input type="text" />
          </span>
          <span>
            <label>ingredient 5</label>
            <input type="text" />
          </span>
          <span>
            <label>ingredient 6</label>
            <input type="text" />
          </span>
        </div>
      </form>
      <button>
        <div>
          <span>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M220.5 245.4c-32.8 32.8-55.1 73.2-65.2 117.3h16.5c18.8-75.3 75.1-135.9 148-160.7v-16.9c-37.1 11.6-71 32-99.3 60.3z"
                fill="white"
              />
              <path
                d="M959.9 540.8c0 113.6-92.1 205.8-205.7 205.9H590.9v-44h163.3c43.2 0 83.8-16.9 114.3-47.4 30.6-30.6 47.4-71.2 47.4-114.5 0-43.2-16.8-83.9-47.4-114.4S797.2 379 754 379c-11.5 0-22.8 1.2-33.8 3.5-15 3.2-29.4 8.4-42.8 15.7-1-15.4-3.3-30.7-6.8-45.6v-0.1c-3.6-15.6-8.6-30.8-14.9-45.7-14.4-33.9-34.9-64.4-61.1-90.6-26.2-26.2-56.6-46.7-90.6-61.1-35.1-14.8-72.4-22.4-110.9-22.4s-75.8 7.5-110.9 22.4c-33.9 14.3-64.4 34.9-90.6 61.1-26.2 26.2-46.7 56.7-61.1 90.6-14.9 35.1-22.4 72.4-22.4 110.9s7.5 75.8 22.4 110.9c14.3 33.9 34.9 64.4 61.1 90.6 26.2 26.2 56.7 46.7 90.6 61.1 35.1 14.8 72.4 22.4 110.9 22.4h39.7v44h-41C210.7 746 64.1 599 64.1 417.7c0-181.7 147.3-329 329-329 154.6 0 284.3 106.6 319.5 250.3v0.1c13.4-2.7 27.2-4.2 41.4-4.2 113.7 0.1 205.9 92.2 205.9 205.9z"
                fill="white"
              />
              <path
                d="M692.9 636.1h-22.6L519.8 485.6v449.6h-16V485.8L353.4 636.1h-22.6l181-181z"
                fill="white"
              />
            </svg>
          </span>
          UPLOAD
        </div>
      </button>
    </div>
  );
}
