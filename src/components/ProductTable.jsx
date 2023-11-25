import ProductRow from './ProductRow';

function ProductTable({ productsData, searchInputText, isChecked }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <ProductRow
        productsData={productsData}
        searchInputText={searchInputText}
        isChecked={isChecked}
      />
    </table>
  );
}

export default ProductTable;
