import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from "../App";
import UserProfile from "../components/user-profile";

const Routes = () => {
    return (

        <Router>
            <Switch>

            <Route exact path={"/app"} component={App} />

            </Switch>
        </Router>
    );
}

  export default Routes;