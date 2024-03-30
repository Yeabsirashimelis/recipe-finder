export function BookMarks({
  bookMarkedFood,
  handleDetails,
  bookMarkedFoods,
  children,
}) {
  function handleClick() {
    handleDetails(bookMarkedFood.id);
  }
  return (
    <>
      <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        {children}
      </span>
      {bookMarkedFoods?.length && (
        <div className="eachbookmarkfood" onClick={handleClick}>
          <div>
            <img src={bookMarkedFood?.image_url} alt="" />
          </div>
          <div>
            <div>{bookMarkedFood?.title}</div>
            <div>{bookMarkedFood?.publisher}</div>
          </div>
        </div>
      )}
    </>
  );
}
