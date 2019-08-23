import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function RegForm({ errors, touched, values}) {
  return (
    <Form>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="email" name="email" placeholder="Email" />
      </div>
      <div>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type="text" name="username" placeholder="Username" />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>
      <div>
        {touched.confirmpassword && errors.confirmpassword && <p>{errors.confirmpassword}</p>}
        <Field type="password" name="confirmpassword" placeholder="Confirm Password" />
      </div>
      <button type = "submit">
        Register Now!
      </button>
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
    email: Yup.string().email("Email not valid").required('Please enter an email'),
    username: Yup.string().required('Please enter a username'),
    password: Yup.string().min(6, "Password must be 6 characters or longer").required('Please enter a password'),
    confirmpassword: Yup.string().min(6, "Password must be 6 characters or longer").required('Please confirm passoword')
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://dadjokes-buildweeks.herokuapp.com/api/auth/register", values)
      .then(res => {
        console.log("handleSubmit: then: res: ", res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.error("handleSubmit: catch: err: ", err));
  }

})(RegForm);

export default FormikRegForm;