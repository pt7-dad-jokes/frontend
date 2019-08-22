import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function LoginForm({ errors, touched, values, status, formState }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [status, users]);

  return (
    <div
      style={formState === "login" ? { display: "block" } : { display: "none" }}
    >
      <Form>
        <Field component="input" type="text" name="email" placeholder="Email" />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        <Field
          component="input"
          type="password"
          name="password"
          placeholder="Password"
        />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <label className="checkbox-container">
          Remember Me
          <Field
            type="checkbox"
            name="rememberMe"
            checked={values.rememberMe}
          />
          <span className="checkmark" />
        </label>
        <button>Login</button>
      </Form>
    </div>
  );
}

const formikLoginHOC = withFormik({
  mapPropsToValues({ username, email, password, rememberMe }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      rememberMe: rememberMe || false
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string().required(),
    rememberMe: Yup.string()
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://dadjokes-buildweeks.herokuapp.com/api/auth/login", values)
      .then(res => {
        console.log("handleSubmit: then: res: ", res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.error("handleSubmit: catch: err: ", err));
  }
});
const LoginFormWithFormik = formikLoginHOC(LoginForm);

export default LoginFormWithFormik;
