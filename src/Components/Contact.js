import React from 'react';
import { Formik } from 'formik';
import Background from './img/bg.jpg'
import styled from 'styled-components'


class Contact extends React.Component {
  render() {

const Div = styled.div`
  background-image: url(${Background});
  background-size: cover;
  min-height: 30rem;
  height: auto;
  margin: 0 auto;
  text-align: left;
  padding-top: 8rem;
  padding-left: 30%;
  padding-bottom: 6rem;
  background-position: center center;
  background-repeat: no-repeat;
`


    return(
  <Div>
    <h1>Fancy a chat?</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </Div>
);

  }
}


export default Contact;
