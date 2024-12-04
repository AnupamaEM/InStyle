import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import "./styles/style.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/form.css";
import { useForm, Field } from '@tanstack/react-form';

export default function NewForm() {
  
  const form = useForm({
    onSubmit: (values) => {
      console.log('Form Submitted:', values);
    },
    defaultValues: {name: '',email: '', message: '',},});

  return (
    <>
    <Header/>
    <h4>Having any questions??? Reach out us </h4>
    <form onSubmit={form.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" form={form}>
          {({ input }) => <input id="name" {...input} />}
        </Field>
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" form={form}>
          {({ input }) => <input id="email" type="email" {...input} />}
        </Field>
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <Field name="message" form={form}>
          {({ input }) => <textarea id="message" {...input} />}
        </Field>
      </div>
      <button type="submit">Submit</button>
    </form>
    <Footer/>
    </>
  );
}
