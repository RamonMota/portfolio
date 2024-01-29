import { useEffect, useState } from "react";
import { HashRouter, Redirect, Route, useLocation } from "react-router-dom";
import { Paths, PathsModal } from "./config/paths/path";
import { FloatSidebar } from "./components/float-sidebar";
import { Home } from "./pages/home/home";
import { Sebrae } from "./pages/sebrae";
import { Welcome } from "./pages/welcome";

export const Routers = () => {
    const location = useLocation();
    const currentPath = location.hash.substring(1);
    const [isBackHome, setIsBackHome] = useState<boolean>(false);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }, [currentPath]);

    useEffect(() => {
        const hasVisitedBefore = localStorage.getItem('visitedBefore');
        if (!hasVisitedBefore) {
            localStorage.setItem('visitedBefore', 'true');
        }
    }, []);

    const handleChangeRouter = () => {
        setIsBackHome(true);
        setTimeout(() => setIsBackHome(false), 1000);
    };

    return (
        <>
            <HashRouter>
                {localStorage.getItem('visitedBefore') === null &&
                    <Redirect to={Paths.WELCOME} />
                }
                <Route exact path={[Paths.HOME, Paths.HOME_REDIRECT]} component={Home} />
                <Route path={Paths.WELCOME} component={Welcome} />
                <Route path={PathsModal.SEBRAE}>
                    <Sebrae backHome={isBackHome} />
                </Route>
            </HashRouter>
            <FloatSidebar setHome={handleChangeRouter} />
        </>
    );
};
