import { useEffect, useState } from "react";
import { HashRouter, Route, useLocation } from "react-router-dom";
import { Paths, PathsModal } from "./config/paths/path";
import { FloatSidebar } from "./components/float-sidebar";
import { Home } from "./pages/home/home";
import { Sebrae } from "./pages/sebrae";

export const Routers = () => {
    const location = useLocation();
    const currentPath = location.hash.substring(1);
    const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
    const [isBackHome, setIsBackHome] = useState<boolean>(false);
    const isHome = currentPath === Paths.HOME || currentPath === Paths.HOME_REDIRECT

    useEffect(() => {
        if (!isHome) {
            setTimeout(() => setIsOpenSidebar(true), 1000);
        } else {
            setTimeout(() => setIsOpenSidebar(false), 1000);
        }
    }, [isHome]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }, [currentPath]);

    const handleChangeRouter = () => {
        setIsBackHome(true);
        setTimeout(() => setIsBackHome(false), 1000);
    };
    
    /* eslint-disable no-console */
     console.log('isRouterHome', isHome);
     console.log('isOpenSidebar', isOpenSidebar);

    return (
        <>
            <HashRouter>
                {isHome ? 
                    <Route path={[Paths.HOME, Paths.HOME_REDIRECT]} component={Home} />
                 : 
                    <Route path={PathsModal.SEBRAE}>
                        <Sebrae backHome={isBackHome} />
                    </Route>
                }
            </HashRouter>
            <FloatSidebar isOpen={isOpenSidebar} setHome={handleChangeRouter} />
        </>
    );
};
