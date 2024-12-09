import React , { useState }from 'react';
import Header from "./Header";
import Footer from "./Footer";
import "./styles/style.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/form.css";
import "./styles/productform.css"
// import { useForm, Field } from '@tanstack/react-form';

// export default function NewForm() {
  
//   const form = useForm({
//     onSubmit: (values) => {
//       console.log('Form Submitted:', values);
//     },
//     defaultValues: {name: '',email: '', message: '',},});

//   return (
//     <>
//     <Header/>
//     <h4>Having any questions??? Reach out us </h4>
//     <form onSubmit={form.handleSubmit}>
//       <div>
//         <label htmlFor="name">Name</label>
//         <Field name="name" form={form}>
//           {({ input }) => <input id="name" {...input} />}
//         </Field>
//       </div>

//       <div>
//         <label htmlFor="email">Email</label>
//         <Field name="email" form={form}>
//           {({ input }) => <input id="email" type="email" {...input} />}
//         </Field>
//       </div>

//       <div>
//         <label htmlFor="message">Message</label>
//         <Field name="message" form={form}>
//           {({ input }) => <textarea id="message" {...input} />}
//         </Field>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//     <Footer/>
//     </>
//   );
// }

function AddProductForm() {
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [description, setDescription] = useState('');
    const [imagePath, setImagePath] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const product = {
        name,
        cost,
        description,
        imagePath,
      };
  
      await fetch('http://localhost:3000/product/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
  
      setName('');
      setCost('');
      setDescription('');
      setImagePath('');
    };
  
    return (
      <>
        <Header />
        <div className="container">
          <p>Add a New Product</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
  
            <div className="form-group">
              <label>Cost:</label>
              <input
                type="number"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                required
              />
            </div>
  
            <div className="form-group">
              <label>Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
  
            <div className="form-group">
              <label>Image Path:</label>
              <input
                type="text"
                value={imagePath}
                onChange={(e) => setImagePath(e.target.value)}
                required
              />
            </div>
  
            <button type="submit" className="submit-button">
              Add Product
            </button>
          </form>
        </div>
        <Footer />
      </>
    );
  }
  
  export default AddProductForm;
