import React from "react";
import Header from "./Header"; 
import Footer from "./Footer";

const ContactPage = () => {
  return (
    <>
      <Header />
      <main className="container my-4">
        <section className="contact-section">
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="lead text-center">
            Have questions?? Reach out us .....
          </p>

          <form className="mt-4">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <br/>
            <br/>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <br/>
            <br/>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <br/>
            <br/>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </section>
      </main>
      <br/>
            <br/>
      <Footer />
    </>
  );
};

export default ContactPage;
