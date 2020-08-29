import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as authActions from "../actions/authActions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Box, Column, Columns } from '../components'

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) history.push('/requests');
  }, [isAuthenticated])

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
      dispatch(authActions.login(user));
      resetForm();
    },
  });
  return (
    <div>
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
                  {}
                </div>
              </form>
            </Box>
          </Column>
        </Columns>
      </Container>
    </div>
  );
}

export default Login;