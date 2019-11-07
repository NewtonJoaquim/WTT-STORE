import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/pages/login";
import BookList from "./components/pages/booklist";
import ShoppingCart from "./components/pages/shopping-cart";

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
                <Route path="/shopping-cart">
                    <ShoppingCart/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;