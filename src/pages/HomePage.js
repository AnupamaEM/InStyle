import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/style.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/home.css";


const HomePage = () => {
  const products = [
    { imagePath: "/images/dark.jpg", name: "Black Dress" },
    { imagePath: "/images/white.jpg", name: "White Dress" },
    { imagePath: "/images/grey.jpg", name: "Grey Dress" },
    { imagePath: "/images/dark.jpg", name: "Black Dress" },
    { imagePath: "/images/white.jpg", name: "White Dress" },
    { imagePath: "/images/grey.jpg", name: "Grey Dress" },
    { imagePath: "/images/white.jpg", name: "White Dress" },
    { imagePath: "/images/grey.jpg", name: "Grey Dress" },
    { imagePath: "/images/white.jpg", name: "White Dress" },
    { imagePath: "/images/grey.jpg", name: "Grey Dress" },
    { imagePath: "/images/dark.jpg", name: "Black Dress" },
    { imagePath: "/images/white.jpg", name: "White Dress" },
    { imagePath: "/images/grey.jpg", name: "Grey Dress" },
    { imagePath: "/images/white.jpg", name: "White Dress" },
    { imagePath: "/images/grey.jpg", name: "Grey Dress" }
  ];

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

          
          <div className="row">
            {products.slice(0,6).map((product, index) => (
              <div className="col-12 col-md-4 col-lg-2 mb-4" key={index}>
                <div className="card">
                  <img
                    src={product.imagePath}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body">
                    <p className="card-text text-center">{product.name}</p>
                  </div>
                </div>
              </div>
            ))}
            
          </div>
          <div className="row">
            {products.slice(6).map((product, index) => (
              <div className="col-12 col-md-4 col-lg-2 mb-4" key={index}>
                <div className="card">
                  <img
                    src={product.imagePath}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body">
                    <p className="card-text text-center">{product.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
