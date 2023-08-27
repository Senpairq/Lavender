// ProductList.js
import React from 'react';

const products = [
  { id: 1, name: 'Apples', price: 1.99 },
  { id: 2, name: 'Bananas', price: 0.99 },
  { id: 3, name: 'Oranges', price: 2.49 },
  // ... add more products
];

function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <span>{product.name} - ${product.price}</span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
