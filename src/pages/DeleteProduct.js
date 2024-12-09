import React, { useState } from 'react';

function DeleteProduct() {
  const [productId, setProductId] = useState('');

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/product/delete/${productId}`, {
      method: 'DELETE',
    });
  };

  return (
    <div>
      <h2>Delete Product</h2>
      <input
        type="number"
        placeholder="Enter Product ID to delete"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete Product</button>
    </div>
  );
}

export default DeleteProduct;

