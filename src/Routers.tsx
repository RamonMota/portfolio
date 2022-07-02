import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { TemplateCase } from "./pages/cases/template-case";

import Home from './pages/home/Home';

function Router() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
        </BrowserRouter>
    ) 
}

export default Router;