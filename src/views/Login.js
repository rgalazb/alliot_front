import React from "react";
import { useFormik } from "formik";
import * as authActions from "../actions/authActions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Box, Column, Columns } from "../components";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const erroMessage = useSelector((state) => state.auth.erroMessage);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      const { email, password } = values;
      const user = {
        email,
        password,
      };
      dispatch(authActions.login({...user, history}));
      resetForm();
    },
  });
  return (
      <Container>
        <Columns>
          <Column offset="5" size="3">
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
         {erroMessage &&
          <Columns>
            <Column offset="5" size="3">
              <article className="message is-danger">
                <div className="message-body">
                  {erroMessage}
                </div>
              </article>
            </Column>
          </Columns>
          }
      </Container>
  );
}

export default Login;
