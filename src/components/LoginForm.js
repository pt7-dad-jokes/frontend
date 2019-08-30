import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  logginContainer: {
    backgroundColor: "#E76D00",
    height: "100vh",
    width: "100vw"
  },
  title: {
    color: "white",
    fontFamily: "'Gloria Hallelujah', cursive",
    fontSize: "3rem",
    margin: "0px auto 25px auto"
  },
  formContainer: {
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    width: "28%",
    margin: "100px auto",
    borderRadius: "5px"
  },
  signUpContainer: {
    display: "flex",
    justifyContent: "center"
  },
  signUpButton: {
    fontSize: "1rem",
    color: "DodgerBlue",
    border: "none",
    backgroundColor: "white"
  },
  inputField: {
    margin: "25px auto 0 auto;",
    border: "solid 1px gray",
    background: "	#E8E8E8",
    width: "47%",
    height: "50px",
    paddingLeft: "10px",
    fontSize: "1rem",
    "&::-webkit-input-placeholder": {
      color: "black"
    }
  },

  passwordContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "25px"
  },
  forgotPasswordButton: {
    margin: "10px auto",
    width: "58%",
    textAlign: "left",
    padding: "0",
    color: "gray",
    border: "none",
    backgroundColor: "white"
  },
  loginButton: {
    margin: "0px auto 25px auto;",
    border: "solid 1px gray",
    background: "Gainsboro",
    width: "31%",
    padding: "11px 15px",
    fontSize: "1rem",
    borderRadius: "7px"
  },
  guestButton: {
    color: "gray",
    border: "none",
    fontSize: "1rem",
    marginBottom: "55px",
    backgroundColor: "white"
  }
}));

function LoginForm(props) {
  const { errors, touched, formState, setFormState } = props;
  const classes = useStyles();

  // function changeDisplay() {
  //   return formState !== "login" ? { display: "none" } : { display: "block" };
  // }

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
            placeholder="Username"
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
          <button className={classes.loginButton}>Log In</button>
          <button className={classes.guestButton}>Continue As Guest</button>
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
