import React from "react";
import { useFormik } from 'formik';
import * as authActions from "../actions/authActions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Column, Columns, Box, Container } from '../components'
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .required('Debe estar Presente'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('Debe estar Presente'),
  passwordConfirmation: Yup.string()
     .oneOf([Yup.ref('password'), null], 'debe conincidir con la contraseña')
});

function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const erroMessage = useSelector((state) => state.auth.erroMessage);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values, { resetForm }) => {
      const { email, password, passwordConfirmation } = values;
      const user = {
        email,
        password,
        password_confirmation: passwordConfirmation,
      };
      dispatch(authActions.signup({...user, history}));
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
                  {formik.errors.email &&
                    <article className="message is-danger mt-5">
                      <div className="message-body">
                        {formik.errors.email}
                      </div>
                    </article>
                  }
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
                  {formik.errors.password &&
                    <article className="message is-danger mt-5">
                      <div className="message-body">
                        {formik.errors.password}
                      </div>
                    </article>
                  }
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    placeholder="password confirmación"
                    type="password"
                    name="passwordConfirmation"
                    autoComplete="off"
                    className="input"
                    onChange={formik.handleChange}
                    value={formik.values.passwordConfirmation}
                  />
                  {formik.errors.passwordConfirmation &&
                    <article className="message is-danger mt-5">
                      <div className="message-body">
                        {formik.errors.passwordConfirmation}
                      </div>
                    </article>
                  }
                </div>
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  type="submit"
                >
                  Registrarse
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

export default SignUp;
