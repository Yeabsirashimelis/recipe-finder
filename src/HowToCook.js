export function HowToCook({ recipeName }) {
  console.log(recipeName);
  return (
    <div className="howtocook">
      <h4>HOW TO COOK IT</h4>
      <h5>
        this recipe was carefully designed and tested by
        <b> Simple Recipes.</b> Please check out directions at their website.
      </h5>
      <a href="https://www.simplyrecipes.com/recipes/pizza">
        <button>Directions➡</button>
      </a>
    </div>
  );
}
