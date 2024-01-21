import { Route, Switch, useLocation, HashRouter } from "react-router-dom";
import { Paths, PathsModal } from "./config/paths/path";
import { useEffect, useState } from "react";
import { Sebrae } from "./pages/sebrae";
import { Home } from "./pages/home/home";


export const Routers = () => {
    const location = useLocation()
    const currentPath = location.hash.substring(1);
    const [isHome, setIsHome] = useState<boolean>()


    useEffect(() => {
        if (currentPath === Paths.HOME || currentPath === Paths.HOME_REDIRECT) {
            setIsHome(true)
        } else {
            setIsHome(false)
        }
        window.scrollTo({
            top: 0,
            left: 0,
        })
    }, [currentPath])

    return (
        <HashRouter >
            {isHome ?
                <Route path={[Paths.HOME, Paths.HOME_REDIRECT]} component={Home} />
                :
                <Route path={PathsModal.SEBRAE} component={Sebrae} />
            }
        </HashRouter>
    )
}