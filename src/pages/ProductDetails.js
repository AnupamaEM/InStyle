
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const ProductDetails = () => {
//   const { id } = useParams(); // Get the product ID from the URL
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/product/${id}`);
//         const data = await response.json();
//         setProduct(data[0]); // Assuming the API returns an array with a single product
//       } catch (error) {
//         console.log("Error fetching product details:", error);
//       }
//     };

//     fetchProductDetails();
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container my-4">
//       <h1>{product.name}</h1>
//       <div className="row">
//         <div className="col-md-6">
//           <img src={product.imagePath} alt={product.name} className="img-fluid" />
//         </div>
//         <div className="col-md-6">
//           <p><strong>Cost:</strong> ${product.cost}</p>
//           <p><strong>Description:</strong> {product.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;




import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


const ProductDetails = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/product/${id}`);
//         const data = await response.json();
//         setProduct(data[0]); 
//       } catch (error) {
//         console.log("Error fetching product details:", error);
//       }
//     };

//     fetchProductDetails();
//   }, [id]);

useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/product/${id}`);
        const data = await response.json();
        console.log("Fetched Product:", data[0]); // Debugging log
        setProduct(data[0]);
      } catch (error) {
        console.log("Error fetching product details:", error);
      }
    };
  
    fetchProductDetails();
  }, [id]);
  

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details-container">
      <button className="back-button" onClick={() => navigate("/")}>
        Back to Home
      </button>
      <div className="product-details">
        <div className="product-image">
          <img src={product.imagePath} alt={product.name} />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p><strong>Cost:</strong> ${product.cost}</p>
          <p><strong>Description:</strong> {product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

