export function RecipeIngredients({ ing, ingredientQuantity }) {
  return (
    <div className="inglists">
      <span>✔</span>
      <span>
        {ingredientQuantity !== 0 && ingredientQuantity} &nbsp;
        {ing.unit !== "" && ing.unit}
      </span>
      <span>{ing.description}</span>
    </div>
  );
}
