import React from "react";
// import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function AddJokeForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form>
      <h1>Create your very own Dad Jokes</h1>
      <label>
        <Field
          type="checkbox"
          id="twolinercontent"
          name="twoliner"
          checked={values.twoliner}
        />
        Two Liner Dad Joke
      </label>
      <label>
        <Field type="checkbox" name="privjoke" checked={values.privjoke} />
        Private Joke
      </label>
      <Field
        component="input"
        type="text"
        name="joke_title"
        placeholder="Joke Title (Optional)"
      />
      {touched.joke_title && errors.joke_title && (
        <p className="error">{errors.joke_title}</p>
      )}
      <Field
        component="textarea"
        type="text"
        name="joke_content"
        placeholder="Joke Content"
      />
      {touched.joke_content && errors.joke_content && (
        <p className="error">{errors.joke_content}</p>
      )}
      <Field
        component="textarea"
        type="text"
        id="twolineranswer"
        name="joke_answer"
        placeholder="Joke Answer"
        hidden
      />
      {touched.joke_answer && errors.joke_answer && (
        <p className="error">{errors.joke_answer}</p>
      )}
      <button type="submit">Add Joke!</button>
    </Form>
  );
}
const formikHOC = withFormik({
  mapPropsToValues({ twoliner, privjoke, joke_title, joke_content }) {
    return {
      twoliner: twoliner || false,
      privjoke: privjoke || false,
      joke_title: joke_title || "",
      joke_content: joke_content || ""
    };
  },
  validationSchema: Yup.object().shape({
    joke_title: Yup.string(),
    joke_content: Yup.string().required("You forgot to create your joke!")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("", values)
      .then(res => {
        console.log("handleSubmit: then: res: ", res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.error("handleSubmit: catch: err: ", err));
  }
});

const AddJokeFormWithFormik = formikHOC(AddJokeForm);

export default AddJokeFormWithFormik;
