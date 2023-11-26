import { useState } from 'react';
import productsData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [searchInput, setSearchInput] = useState('');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleSearch = (inputText) => {
    setSearchInput(inputText);
  };

  const handleCheckboxChange = (isChecked) => {
    setIsCheckboxChecked(isChecked);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        searchInput={searchInput}
        isCheckboxChecked={isCheckboxChecked}
        onSearch={handleSearch}
        onCheckboxChange={handleCheckboxChange}
      />
      <ProductTable
        productsData={productsData}
        searchInput={searchInput}
        isCheckboxChecked={isCheckboxChecked}
      />
    </div>
  );
}

export default ProductsPage;
