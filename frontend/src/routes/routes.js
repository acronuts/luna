import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from "../App";
import {LoginPage} from "../pages/login/login-page";
import {RegisterPage} from "../pages/register/register-page";
import {UserProfilePage} from "../pages/userprofile/userprofile-page";

const Routes = () => {
    return (

        <Router>
            <Switch>

            <Route exact path={"/app"} component={App} />
            <Route exact path={"/userprofile"} component={UserProfilePage} />
            <Route exact path={"/login"} component={LoginPage}/>
            <Route exact path={"/register"} component={RegisterPage}/>


            </Switch>
        </Router>
    );
}

  export default Routes;