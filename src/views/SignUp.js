import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Container, Box, Column, Columns } from '../components'

function SignUp() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .min(1, "Must have 1 min character")
        .max(50)
        .required("can't be empty"),
      password: Yup.string()
        .min(1, "Must have 1 min character")
        .max(50)
        .required("can't be empty"),
    }),
    onSubmit: (values, { resetForm }) => {
      const { email, password } = values;
      const user = {
        email,
        password,
      };
      resetForm();
    },
  });
  return (
    <div>
      <Container>
        <Columns>
          <Column offset="3" size="half">
            <Box>
              <form onSubmit={formik.handleSubmit}>
                <div className="field">
                  <div className="control">
                    <input
                      placeholder="email"
                      type="email"
                      name="email"
                      autoComplete="off"
                      className="input"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      placeholder="password"
                      type="password"
                      name="password"
                      autoComplete="off"
                      className="input"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                  </div>
                </div>
                <div className="control">
                  <button
                    className={"button is-primary"}
                    type="submit"
                  >
                    Log In
                  </button>
                </div>
              </form>
            </Box>
          </Column>
        </Columns>
      </Container>
    </div>
  );
}

export default SignUp;