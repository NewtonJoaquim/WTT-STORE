import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/pages/login";
import BookList from "./components/pages/booklist";
import ShoppingCart from "./components/pages/shopping-cart";
import BookDetails from "./components/pages/bookDetails";

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/booklist" component={BookList}/>
                <Route path="/shopping-cart" component={ShoppingCart} />
                <Route path="/book-details/:code" component={BookDetails} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;