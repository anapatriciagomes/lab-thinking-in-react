import { useState } from 'react';

function SearchBar({ handleSearchInputChange, handleCheckboxFilter }) {
  const [searchInputText, setSearchInputText] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setSearchInputText(inputText);
    handleSearchInputChange(inputText, isChecked);
  };

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.checked;
    setIsChecked(checkboxValue);
    handleCheckboxFilter(searchInputText, checkboxValue);
  };

  return (
    <div>
      <input
        type="text"
        id="searchInput"
        placeholder="Search"
        value={searchInputText}
        onChange={handleInputChange}
      />
      <input
        type="checkbox"
        id="checkboxFilter"
        onChange={handleCheckboxChange}
      />
      <label htmlFor="checkboxFilter">Only show products in stock</label>
    </div>
  );
}

export default SearchBar;
