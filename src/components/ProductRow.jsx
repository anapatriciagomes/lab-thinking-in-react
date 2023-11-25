function ProductRow({ productsData, searchInputText, isChecked }) {
  const filteredProducts = productsData.filter((product) => {
    const nameMatches = product.name
      .toLowerCase()
      .startsWith(searchInputText.toLowerCase());
    const checkboxMatches = isChecked ? product.inStock : true;
    return nameMatches && checkboxMatches;
  });

  const productsList = filteredProducts.map((product) => (
    <tr key={product.id}>
      <td className={product.inStock ? 'inStock' : 'outOfStock'}>
        {product.name}
      </td>
      <td>{product.price}</td>
    </tr>
  ));

  return <tbody>{productsList}</tbody>;
}

export default ProductRow;
