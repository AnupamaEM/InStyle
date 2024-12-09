import React, { useState } from 'react';

function GetProductById() {
  const [productId, setProductId] = useState('');
  const [product, setProduct] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/product/${productId}`);
    const data = await response.json();
    setProduct(data[0]);
  };

  return (
    <div>
      <h2>Get Product by ID</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter Product ID"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        <button type="submit">Get Product</button>
      </form>

      {product && (
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.cost}</p>
          <img src={product.imagePath} alt={product.name} />
        </div>
      )}
    </div>
  );
}

export default GetProductById;
