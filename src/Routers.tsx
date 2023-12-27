import { Route } from "react-router-dom";
import { Paths } from "./config/paths/path";

import { Home } from './pages/home/Home';
import { Vaidebet } from "./pages/cases/vaidebet";
import { useIdContext } from "./config/idContext";
import { useEffect } from "react";
import { Sebrae } from "./pages/sebrae";


export const Routers = () => {

    const { id } = useIdContext();

    useEffect(() => {
        if (id.idName !== '') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.removeAttribute('style');
        }
    }, [id.idName])

    return (
        <>
            <Route path={Paths.SEBRAE} component={Sebrae} />
            <Route path={Paths.CASES_WELCOME_VAIDEBET} component={Vaidebet} />
            <Route path={Paths.HOME} component={Home} />
        </>
    )
}