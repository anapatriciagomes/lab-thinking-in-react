import { useState } from 'react';
import productsData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [searchInputText, setSearchInputText] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSearchInputChange = (inputText, checkboxValue) => {
    setSearchInputText(inputText);
  };

  const handleCheckboxFilter = (inputText, checkboxValue) => {
    setIsChecked(checkboxValue);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        handleSearchInputChange={handleSearchInputChange}
        handleCheckboxFilter={handleCheckboxFilter}
      />
      <ProductTable
        productsData={productsData}
        searchInputText={searchInputText}
        isChecked={isChecked}
      />
    </div>
  );
}

export default ProductsPage;
