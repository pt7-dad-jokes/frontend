import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function ForgotPasswordForm({ errors, touched, values, status, formState }) {
  return (
    <div
      style={
        formState === "forgotPassword"
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <Form>
        <Field component="input" type="text" name="email" placeholder="Email" />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        <button>Send Password</button>
      </Form>
    </div>
  );
}

const formikForgotPasswordHOC = withFormik({
  mapPropsToValues({ email }) {
    return {
      email: email || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required()
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
const ForgotPasswordWithFormik = formikForgotPasswordHOC(ForgotPasswordForm);

export default ForgotPasswordWithFormik;
