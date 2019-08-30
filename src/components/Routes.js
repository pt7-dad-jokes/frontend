import React from 'react'
import LoginForm from "./LoginForm";
import RegForm from "./RegForm";
import AddJoke from "./AddJokeForm";
import ProfilePage from "./ProfilePage";
import Dashboard from "./Dashboard";
import WelcomeForms from "./WelcomeForms";
import { Route } from "react-router-dom";

function Routes(){
    return (
        <div>
        <Route exact path="/auth/accounts" component={LoginForm}></Route>
        <Route path="/auth/accounts" component={RegForm}></Route>
        <Route path="/" exact component={Dashboard}></Route>
        <Route
            path="/auth/accounts"
            render={props => <ProfilePage {...props} username="U" />}
        ></Route>
        {/* <Route path="/jokes" component={AddJoke}></Route> */}
        <Route path="/signedout" component={WelcomeForms}></Route>
        </div>
    );
    }
    
    export default Routes;
