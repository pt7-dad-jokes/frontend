import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  regContainer: {
    backgroundColor: "#E76D00",
    height: "100%",
    width: "100vw"
  },
  title: {
    color: "white",
    fontFamily: "'Gloria Hallelujah', cursive",
    fontSize: "3rem",
    margin: "-950px auto 25px auto"
  },
  formContainer: {
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    width: "28%",
    margin: "100px auto",
    borderRadius: "5px"
  },
  loginContainer: {
    display: "flex",
    justifyContent: "center"
  },
  loginButton: {
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
  registerButton: {
    margin: "25px auto 25px auto;",
    border: "solid 1px gray",
    background: "Gainsboro",
    width: "31%",
    padding: "11px 15px",
    fontSize: "1rem",
    borderRadius: "7px"
  },
}));

function RegForm({ errors, touched, formState, setFormState }) {
  const classes = useStyles();
  return (
    <div className={classes.regContainer}>
      <div 

        style={
          formState === "signup" ? { display: "block" } : { display: "none" }
        }
      >
        <h1 className={classes.title}>Hi Hungry, I'm Dad!</h1>
        <Form className={classes.formContainer}>
          <h3
            style={{ marginTop: "38px", fontSize: "2rem", marginBottom: "7px" }}
          >
            Time to register!
          </h3>
          <div className={classes.loginContainer}>
            <p style={{ margin: "25px 0px" }}>Already have an account?</p>

            <button
              // onClick={() => setFormState("login")}
              className={classes.loginButton}
            >
              Login
            </button>

          </div>
        <div>
          {touched.email && errors.email && <p>{errors.email}</p>}
          <Field
            className={classes.inputField}
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div>
          {touched.username && errors.username && <p>{errors.username}</p>}
          <Field
            className={classes.inputField}
            type="text"
            name="username"
            placeholder="Username"
          />
        </div>
        <div>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field
            className={classes.inputField}
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div>
          {touched.first_name && errors.first_name && <p>{errors.first_name}</p>}
          <Field
            className={classes.inputField}
            type="text"
            name="first_name"
            placeholder="First Name"
          />
        </div>
        <div>
          {touched.last_name && errors.last_name && <p>{errors.last_name}</p>}
          <Field
            className={classes.inputField}
            type="text"
            name="last_name"
            placeholder="Last Name"
          />
        </div>
        <div>
          {touched.age && errors.age && <p>{errors.age}</p>}
          <Field
            className={classes.inputField}
            type="text"
            name="age"
            placeholder="Age"
          />
        </div>
        <button 
        className={classes.registerButton}>Register Now!
        </button>
     </Form>
      </div>
    </div>
  );
}

const FormikRegForm = withFormik({
  mapPropsToValues({ email, username, password, first_name,last_name,age }) {
    return {
      email: email || "",
      username: username || "",
      password: password || "",
      first_name: first_name || "",
      last_name: last_name || "",
      age: age || ""
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
