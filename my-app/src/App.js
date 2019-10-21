import React from 'react';
import {BrowserRouter as Router, NavLink, Route, HashRouter} from 'react-router-dom';
// import { Link, animateScroll as scroll } from "react-scroll";

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

class App extends React.Component  {

render () {

  return (
     <HashRouter>
      <>
      <Router>
          <nav className={"navLogin"}>
            <ul>
              <li>
                 <NavLink to="/logowanie">
                  Zaloguj
                </NavLink>
              </li>
               <li>
                  <NavLink to="/rejestracja">
                  Zarejestruj się
                  </NavLink>
              </li>
              </ul>
            </nav>
              <Route exact path="/" component={Home} />
              <Route path="/logowanie" component={Login} />
              <Route path="/rejestracja" component={Register} />
        </Router>
      </>
    </HashRouter>
  )
};
}
export default App;
