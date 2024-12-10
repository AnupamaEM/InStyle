import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/style.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/home.css";
import ProductList from "./ProductList"; 

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        setProducts(data.slice(0, 10)); 
        setAllProducts(data);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <>
      <Header />
      <main className="container my-4">
        <section className="banner text-center py-5">
          <h2>Welcome to Our Fashion Store</h2>
          <p>The shop for the latest trends</p>
        </section>
        <section className="featured-products">
          <h3 className="text-center mb-4">Products</h3>
          <ProductList products={showAll ? allProducts : products} />
          {!showAll && (
            <div className="text-center">
              <button className="btn btn-primary" onClick={handleShowAll}>
                Show All
              </button>
            </div>
          )}
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
