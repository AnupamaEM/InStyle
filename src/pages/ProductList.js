
import React from "react";
import "./styles/home.css";

const Product = ({ imagePath, name, cost }) => {
  return (
    <div className="col-12 col-md-4 col-lg-2 mb-4">
      <div className="card">
      <img src={imagePath} className="card-img-top" alt={name} />
        <div className="card-body">
          <p className="card-text text-center">{name}</p>
          <p className="text-center">Cost: ${cost}</p>
        </div>
      </div>
    </div>
  );
};

const ProductList = ({ products }) => {
  return (
    <div>
      <div className="row">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            imagePath={product.imagePath}
            name={product.name}
            cost={product.cost}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
