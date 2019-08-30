import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  logginContainer: {
    backgroundColor: "#E76D00",
    height: "100vh",
    margin: "-30px"
  },
  title: {
    color: "white",
    fontFamily: "'Gloria Hallelujah', cursive",
    fontSize: "3rem"
  },
  formContainer: {
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    width: "35%",
    margin: "auto",
    borderRadius: "5px"
  },
  signUpContainer: {
    display: "flex",
    justifyContent: "center"
  },
  signUpButton: {
    fontSize: "1rem",
    color: "DodgerBlue"
  },
  inputField: {
    margin: "25px auto 0 auto;",
    border: "solid 1px gray",
    background: "Gainsboro",
    width: "55%",
    height: "50px",
    paddingLeft: "10px",
    fontSize: "1rem"
  },
  passwordContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "25px"
  },
  forgotPasswordButton: {
    margin: "auto",
    width: "58%",
    textAlign: "left",
    padding: "0",
    color: "gray"
  },
  loginButton: {
    margin: "0px auto 55px auto;",
    border: "solid 1px gray",
    background: "Gainsboro",
    width: "31%",
    padding: "11px 15px",
    fontSize: "1rem",
    borderRadius: "7px"
  }
}));

function LoginForm(props) {
  const { errors, touched, values, formState, setFormState } = props;
  const classes = useStyles();

  function changeDisplay() {
    return formState !== "login" ? { display: "none" } : { display: "block" };
  }

  return (
    <div className={classes.logginContainer}>
      <div
        style={
          formState === "login" ? { display: "block" } : { display: "none" }
        }
      >
        <h1 className={classes.title}>Hi Hungry, I'm Dad!</h1>
        <Form className={classes.formContainer}>
          <h3
            style={{ marginTop: "38px", fontSize: "2rem", marginBottom: "7px" }}
          >
            Welcome back, kiddo!
          </h3>
          <div className={classes.signUpContainer}>
            <p style={{ margin: "25px 0px" }}>Don't have an account?</p>
            <button
              onClick={() => setFormState("signup")}
              className={classes.signUpButton}
            >
              Sign Up
            </button>
          </div>
          <Field
            className={classes.inputField}
            component="input"
            type="text"
            name="account"
            placeholder="Email/Username"
          />
          {touched.account && errors.account && (
            <p className="error">{errors.account}</p>
          )}
          <div className={classes.passwordContainer}>
            <Field
              className={classes.inputField}
              component="input"
              type="password"
              name="password"
              placeholder="Password"
            />
            {touched.password && errors.password && (
              <p className="error">{errors.password}</p>
            )}
            <button
              onClick={() => setFormState("forgotPassword")}
              className={classes.forgotPasswordButton}
            >
              Forgot Password?
            </button>
          </div>
          {/* <label className="checkbox-container">
            Remember Me
            <Field
              type="checkbox"
              name="rememberMe"
              checked={values.rememberMe}
            />
            <span className="checkmark" />
          </label> */}
          <button className={classes.loginButton}>Login</button>
        </Form>
      </div>
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
      .post("/auth/accounts", values)
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
