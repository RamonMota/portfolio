import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Paths } from "./config/paths/path";
import { CaseWelcomeVaidebet } from "./pages/cases/vaidebet/case-vaidebet";

import Home from './pages/home/Home';

export const Routers = () => {
    return(
        <>
            <Route path={Paths.CASES_WELCOME_VAIDEBET} component={CaseWelcomeVaidebet}/>
            <Route path={Paths.HOME} component={Home}/>
        </>
    ) 
}