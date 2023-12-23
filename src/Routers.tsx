import { Route } from "react-router-dom";
import { Paths } from "./config/paths/path";

import { Home } from './pages/home/Home';
import { Vaidebet } from "./pages/cases/vaidebet";


export const Routers = () => {
    return (
        <>
            <Route path={Paths.CASES_WELCOME_VAIDEBET} component={Vaidebet} />
            <Route path={Paths.HOME} component={Home} />
        </>
    )
}