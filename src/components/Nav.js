import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as authActions from "../actions/authActions";
import { useHistory } from 'react-router-dom';

function Navbar() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated, user } = auth;
  const history = useHistory();

  const handleLogout = () => {
    dispatch(authActions.logout(history))
  }

  const handleClick = route => {
    history.push(route)
  }
  return (
    <Fragment>
      <nav
        className="navbar container is-fluid"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item">
            
          </div>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              {isAuthenticated
                ?
                <div>
                  <button className="button is-info">Hola {user}</button>
                  <button className="button is-danger ml-3" onClick={handleLogout}>Salir</button>
                </div>
                :
                  <div>
                    <button className="button is-info" onClick={() => handleClick('/signup')}>Registrate</button>
                    <button className="button is-success ml-3" onClick={() => handleClick('/')}>Inicia Sesión</button>
                  </div>
              }

            </div>
          </div>
          <div className="navbar-end">
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
