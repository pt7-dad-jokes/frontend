import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function LoginForm({
  errors,
  touched,
  values,
  status,
  formState,
  setLoggedIn
}) {
  return (
    <div
      style={formState === "login" ? { display: "block" } : { display: "none" }}
    >
      <Form>
        <Field
          component="input"
          type="text"
          name="account"
          placeholder="Email/Username"
        />
        {touched.account && errors.account && (
          <p className="error">{errors.account}</p>
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
  mapPropsToValues({ account, password, rememberMe }) {
    return {
      account: account || "",
      password: password || "",
      rememberMe: rememberMe || false
    };
  },
  validationSchema: Yup.object().shape({
    account: Yup.string().required(),
    password: Yup.string().required(),
    rememberMe: Yup.string()
  }),

  handleSubmit(values, { props, setStatus, resetForm }) {
    axios
      .post("https://pt7-dad-jokes.herokuapp.com/api/auth/accounts", values)
      .then(res => {
        console.log("handleSubmit: then: res: ", res);
        setStatus(res.data);
        resetForm();
        props.setLoggedIn(true);
      })
      .catch(err => console.error("handleSubmit: catch: err: ", err));
  }
});
const LoginFormWithFormik = formikLoginHOC(LoginForm);

export default LoginFormWithFormik;
