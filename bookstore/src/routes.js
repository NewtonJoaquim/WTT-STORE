import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/pages/login";
import BookList from "./components/pages/bookList";
import BookDetails from "./components/pages/bookDetails";

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/booklist" component={BookList}/>
                <Route path="/book-details/:code" component={BookDetails} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;