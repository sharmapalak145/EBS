import React, { Component } from "react";
import Login from "./components/custlogin";
import Register from "./components/custregister";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dashboard from "./components/dashboard";
import ALogin from "./components/adminlogin";
import PaymentForm from "./components/pay";
// import MyVerticallyCenteredModal from "./components/Modal"
import pkg from 'semantic-ui-react/package.json'
import Extra from './components/Extra'
import home from './components/home';



class App extends Component  {
  constructor(props) {
    super(props);
    
  }

  
  render() {
  
     //const { currentUser, showAdminBoard } = this.state;
    

    return (
      
      <div className="body">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/home"} className="navbar-brand">
            Electricity Billing System
          </Link>
          <div className="navbar-nav mr-auto">
            {/* <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li> */}
            
            <li className="nav-item">
              <Link to={"/dashboard"} className="nav-link">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/pay"} className="nav-link">
                Payment
              </Link>
            </li>

            {/* {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )} */}

             {/* {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div> 

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li> */}
              <li className="nav-item">
                <a href="/custlogin" className="nav-link" onClick={this.logOut}>
                 
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/custlogin"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/custregister"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )
        </nav>
        <div className="container mt-3">
          <Switch>
            <Route exact path="/adminlogin" component={ALogin} />
            <Route exact path="/custlogin" component={Login} />
            <Route exact path="/custregister" component={Register} />
            <Route exact path="/pay" component={PaymentForm} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/modal" component={Extra} />
            <Route exact path="/home" component={home} />
            {/* <Route exact path="/profile" component={Profile} />*/}
          </Switch>
        </div>
     </div>
    );
  }
}

export default App;


