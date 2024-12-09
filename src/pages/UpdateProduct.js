import React, { useState } from 'react';

function UpdateProduct() {
  const [productId, setProductId] = useState('');
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [description, setDescription] = useState('');
  const [imagePath, setImagePath] = useState('');

  const handleUpdate = async () => {
    const updatedProduct = {
      name,
      cost,
      description,
      imagePath,
    };

    await fetch(`http://localhost:3000/product/update/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    });
  };

  return (
    <div>
      <h2>Update Product</h2>
      <input
        type="number"
        placeholder="Enter Product ID to update"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Product Cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Product Image Path"
        value={imagePath}
        onChange={(e) => setImagePath(e.target.value)}
      />
      <textarea
        placeholder="Enter Product Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button onClick={handleUpdate}>Update Product</button>
    </div>
  );
}

export default UpdateProduct;
