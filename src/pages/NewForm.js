import React , { useState }from 'react';
import Header from "./Header";
import Footer from "./Footer";
import "./styles/style.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/form.css";
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
    const [image, setImage] = useState(null); 
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('name', name);
      formData.append('cost', cost);
      formData.append('description', description);
      formData.append('image', image); 
  
      await fetch('http://localhost:3000/product/add', {
        method: 'POST',
        body: formData,
      });
  
      setName('');
      setCost('');
      setDescription('');
      setImage(null);
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
              <label>Image:</label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])} 
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