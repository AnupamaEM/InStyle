import React from 'react';
import GetProductById from './GetProductById';
import DeleteProduct from './DeleteProduct';
import UpdateProduct from './UpdateProduct';
import Header from "./Header";
import Footer from "./Footer";
import "./styles/style.css";
import "./styles/header.css";
import "./styles/footer.css";

function ProductManagementPage() {
  return (
    <div>
        <Header></Header>
      <h1>Product Management</h1>
      <GetProductById />
      <br/>
      <br/>
      <DeleteProduct />
      <br/>
      <br/>
      <UpdateProduct />
      <Footer></Footer>
    </div>
  );
}

export default ProductManagementPage;
