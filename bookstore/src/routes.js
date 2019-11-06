import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/pages/login";
import BookList from "./components/pages/booklist";

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Login/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/booklist">
                    <BookList/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;