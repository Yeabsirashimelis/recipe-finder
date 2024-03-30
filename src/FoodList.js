export function FoodList({ foodData, handleDetails }) {
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
