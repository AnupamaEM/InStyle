import React from "react";
import "./styles/home.css";

const Product = ({ id, imagePath, name, cost }) => {
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

const products = [
  { id: 1, imagePath: "/images/red.jpg", name: "Red Dress", cost: 29.99 },
  { id: 2, imagePath: "/images/red.jpg", name: "Red Dress", cost: 20.99 },
  { id: 3, imagePath: "/images/red.jpg", name: "Red Dress", cost: 29.99 },
  { id: 4, imagePath: "/images/red.jpg", name: "Red Dress", cost: 29.99 },
  { id: 5, imagePath: "/images/red.jpg", name: "Red Dress", cost: 29.99 },
  { id: 6, imagePath: "/images/red.jpg", name: "Red Dress", cost: 29.99 },
  { id: 7, imagePath: "/images/red.jpg", name: "Red Dress", cost: 29.99 },
  { id: 8, imagePath: "/images/red.jpg", name: "Red Dress", cost: 29.99 },
  { id: 9, imagePath: "/images/red.jpg", name: "Red Dress", cost: 29.99 },
  { id: 10, imagePath: "/images/red.jpg", name: "Red Dress", cost: 29.99 },
  { id: 11, imagePath: "/images/red.jpg", name: "Red Dress", cost: 29.99 },
  
];

const ProductList = () => {
  return (
    <div>
      <div className="row">
        {products.slice(0, 6).map((product) => (
          <Product
            key={product.id}
            id={product.id}
            imagePath={product.imagePath}
            name={product.name}
            cost={product.cost}
          />
        ))}
      </div>
      <div className="row">
        {products.slice(6).map((product) => (
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
