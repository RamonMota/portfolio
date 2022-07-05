import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { CaseSebrae } from "./pages/cases/sebrae/case-sebrae";

import Home from './pages/home/Home';

function Router() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/sebrae" exact component={CaseSebrae}/>
            <Route path="/betpix365" exact component={Home}/>
        </BrowserRouter>
    ) 
}

export default Router;