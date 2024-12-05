import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/style.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/home.css";
import ProductList from "./ProductList"; 

const HomePage = () => {
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
          <ProductList /> 
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
