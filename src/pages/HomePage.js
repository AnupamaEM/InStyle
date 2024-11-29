import React from "react";
import Header from "./Header"; 
import Footer from "./Footer";
import "./style.css";
const HomePage = () => {
  const products = [
    { imagePath: "/images/dark.jpg", name: " Black Dress" },
    { imagePath: "/images/white.jpg", name: " White Dress" },
    { imagePath: "/images/grey.jpg", name: " Grey Dress" }
  ];

  return (
    <>
      <Header />
      <main className="container my-4">
        <section className="banner text-center py-5">
          <h2>Welcome to Our Fashion Store</h2>
          <p> The shop for the latest trends </p>
        </section>

        <section className="featured-products row text-center">
          <h3 className="col-12"> Products</h3>
          {products.map((product, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img
                  src={product.imagePath}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <p className="card-text">{product.name}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
