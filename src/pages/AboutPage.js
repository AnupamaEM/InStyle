import React from "react";
import Header from "./Header"; 
import Footer from "./Footer";

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
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
