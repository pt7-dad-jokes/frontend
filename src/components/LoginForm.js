import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function LoginForm({ errors, touched, values, status }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [status]);

  return (
    <div>
      <Form>
        <Field
          component="input"
          type="text"
          name={["username", "email"]}
          placeholder="Username/Email"
        />
        <Field
          component="input"
          type="password"
          name="password"
          placeholder="Password"
        />
        <label className="checkbox-container">
          Remember Me
          <Field
            type="checkbox"
            name="rememberMe"
            checked={values.rememberMe}
          />
          <span className="checkmark" />
        </label>
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
    species: Yup.string().required("not a good input"),
    size: Yup.number().required(),
    notes: Yup.string()
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://reqres.in/api/users", values)
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
