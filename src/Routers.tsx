import { Route } from "react-router-dom";
import { Paths } from "./config/paths/path";

import { Home } from './pages/home/Home';
import { CaseWelcomeVaidebet } from "./pages/cases/vaidebet/case-vaidebet";


export const Routers = () => {
    return (
        <>
            <Route path={Paths.CASES_WELCOME_VAIDEBET} component={CaseWelcomeVaidebet} />
            <Route path={Paths.HOME} component={Home} />
        </>
    )
}