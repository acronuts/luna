import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from "../App";
import UserProfile from "../components/user-profile";
import {Header} from "../components/header/header";
import {Footer} from "../components/footer/footer";
import {LoginPage} from "../pages/login/login-page";

const Routes = () => {
    return (

        <Router>
            <Switch>

            <Route exact path={"/app"} component={App} />
            <Route exact path={"/UserProfile"} component={UserProfile} />
            <Route exact path={"/login"} component={LoginPage}/>

            </Switch>
        </Router>
    );
}

  export default Routes;