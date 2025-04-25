const SearchBar = () => {
  return (
    <form className="mb-3 d-flex flex-row gap-5">
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search..."
          className="form-control"
        />
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="inStockCheckbox"
        />
        <label htmlFor="inStockCheckbox" className="form-check-label">
          Only show products in stock
        </label>
      </div>
    </form>
  );
};

export default SearchBar;