import ProductRow from './ProductRow';

function ProductTable({ productsData, searchInput, isCheckboxChecked }) {
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
        searchInput={searchInput}
        isCheckboxChecked={isCheckboxChecked}
      />
    </table>
  );
}

export default ProductTable;
