function SearchBar({
  searchInput,
  isCheckboxChecked,
  onSearch,
  onCheckboxChange,
}) {
  const handleInputChange = (event) => {
    const inputText = event.target.value;
    onSearch(inputText);
  };

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    onCheckboxChange(isChecked);
  };

  return (
    <div>
      <input
        type="text"
        id="searchInput"
        placeholder="Search"
        value={searchInput}
        onChange={handleInputChange}
      />
      <input
        type="checkbox"
        id="checkboxFilter"
        checked={isCheckboxChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="checkboxFilter">Only show products in stock</label>
    </div>
  );
}

export default SearchBar;
