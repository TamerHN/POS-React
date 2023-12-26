import { Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./Components_Styles/loginForm.css";
import FormElementControl from "./FormElementControl.jsx";
import TextError from "./TextError.jsx";

function LoginForm({ setUser }) {
  const [error, setError] = useState(false);
  const navigateTo = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    if (!!values.email && !!values.password) {
      setUser({ ...values });
      navigateTo("/");
    } else {
      setError("Wrong Email or Password");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => {
        return (
          <Form className="loginForm-container">
            <div className="loginForm-subcontainer">
              <div className="loginForm-inputs">
                <FormElementControl
                  control="input"
                  type="text"
                  label="Email"
                  name="email"
                />
                <FormElementControl
                  control="input"
                  type="password"
                  label="Password"
                  name="password"
                />
              </div>{" "}
              {error && <TextError>Wrong Email or Password</TextError>}
              <div className="loginButton">
                <button type="submit">Login</button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
