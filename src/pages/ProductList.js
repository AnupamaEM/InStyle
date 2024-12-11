
import React from "react";
import { Link } from "react-router-dom";
import "./styles/home.css";

// const Product = ({ imagePath, name, cost }) => {
//   return (
//     <div className="col-12 col-md-4 col-lg-2 mb-4">
//       <div className="card">
//       <img src={imagePath} className="card-img-top" alt={name} />
//         <div className="card-body">
//           <p className="card-text text-center">{name}</p>
//           <p className="text-center">Cost: ${cost}</p>
//         </div>
//       </div>
//     </div>
//   );
// };


// const Product = ({ id, imagePath, name, cost }) => {
//   return (
//     <div className="col-12 col-md-4 col-lg-2 mb-4">
//       <div className="card">
//         <Link to={`/product/${id}`}>
//           <img src={imagePath} className="card-img-top" alt={name} />
//         </Link>
//         <div className="card-body">
//           <Link to={`/product/${id}`}>
//             <p className="card-text text-center">{name}</p>
//           </Link>
//           <p className="text-center">Cost: ${cost}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

const Product = ({ id, imagePath, name, cost }) => {
  return (
    <div className="col-12 col-md-4 col-lg-2 mb-4">
      <div className="card">
        <a href={`/product/${id}`}>
          <img src={imagePath} className="card-img-top" alt={name} />
        </a>
        <div className="card-body">
          <a href={`/product/${id}`}>
            <p className="card-text text-center">{name}</p>
          </a>
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
