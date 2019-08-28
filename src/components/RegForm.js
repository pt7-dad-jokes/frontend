import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function RegForm({ errors, touched, values, formState }) {
  return (
    <Form
      style={
        formState === "signup" ? { display: "block" } : { display: "none" }
      }
    >
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field
          type="email"
          name="email"
          placeholder="Email"
        />
      </div>
      <div>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field
          type="text"
          name="username"
          placeholder="Username"
        />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <div>
        {touched.first_name && errors.first_name && <p>{errors.first_name}</p>}
        <Field
          type="text"
          name="first_name"
          placeholder="First Name"
        />
      </div>
      <div>
        {touched.last_name && errors.last_name && <p>{errors.last_name}</p>}
        <Field
          type="text"
          name="last_name"
          placeholder="Last Name"
        />
      </div>
      <div>
        {touched.age && errors.age && <p>{errors.age}</p>}
        <Field
          type="text"
          name="age"
          placeholder="Age"
        />
      </div>
      <button type="submit">Register Now!</button>
    </Form>
  );
}

const FormikRegForm = withFormik({
  mapPropsToValues({ email, username, password, confirmpassword }) {
    return {
      email: email || "",
      username: username || "",
      password: password || "",
      confirmpassword: confirmpassword || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Please enter an email"),
    username: Yup.string()
      .required("Please enter a username"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Please enter a password"),
    first_name: Yup.string()
      .required("Please enter your first name"),
    last_name: Yup.string()
      .required("Please enter your last name"),
    age: Yup.string()
      .required("Please enter your age"),
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("/auth/accounts", values)
      .then(res => {
        console.log("handleSubmit: then: res: ", res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.error("handleSubmit: catch: err: ", err));
  }
})(RegForm);

export default FormikRegForm;
