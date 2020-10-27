import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from "../App";
import {LoginPage} from "../pages/login/login-page";
import {RegisterPage} from "../pages/register/register-page";
import {UserProfilePage} from "../pages/userprofile/userprofile-page";
import {CreateRestaurantPage} from "../pages/create-restaurant-page/create-restaurant-page";

const Routes = () => {
    return (

        <Router>
            <Switch>

            <Route exact path={"/app"} component={App} />
            <Route exact path={"/userprofile"} component={UserProfilePage} />
            <Route exact path={"/login"} component={LoginPage}/>
            <Route exact path={"/register"} component={RegisterPage}/>
            <Route exact path={"/create-restaurant"} component={CreateRestaurantPage}/>

            </Switch>
        </Router>
    );
}

  export default Routes;