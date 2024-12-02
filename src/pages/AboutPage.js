
import React from "react";
import Header from "./Header"; 
import Footer from "./Footer";
import "./style.css";

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="container my-4">
        <section className="about-section">
          <h2 className="text-center mb-4">About Us</h2>
          <p className="lead text-center">
            At Fashion Store, we provide the latest in trendy clothing to help you express your personal style.
            Whether you're looking for casual wear or something more formal, we have something for every occasion.
          </p>
          <p className="text-center">
            Our mission is to make fashion affordable and accessible to everyone.
          </p>
        </section>

        
        <section className="row text-center mt-5">
          <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Mission</h5>
                <p className="card-text">
                  Our mission is to make fashion accessible to all, regardless of budget, with high-quality and stylish options.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Vision</h5>
                <p className="card-text">
                  Our vision is to become the leading brand in the fashion industry, offering trendy and timeless pieces.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Values</h5>
                <p className="card-text">
                  We believe in quality, sustainability, and inclusivity to create a better world through fashion.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;


