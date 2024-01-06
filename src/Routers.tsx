import { Route, Switch, useLocation } from "react-router-dom";
import { Paths, PathsModal } from "./config/paths/path";
import { useEffect } from "react";
import { Sebrae } from "./pages/sebrae";
import { Home } from "./pages/home/home";


export const Routers = () => {
    const location = useLocation()
    const currentPath = location.pathname;
    const blockScroll = Object.values(PathsModal).includes(currentPath as PathsModal)

    useEffect(() => {
        if (blockScroll) {
            document.body.style.background = 'var(--color-gray)'
            window.scrollTo(0, 0);
        } else {
            setTimeout(() => {
                document.body.removeAttribute('style');
            }, 300)
        }
    }, [currentPath])

    return (
        <Switch>
            <Route path={PathsModal.SEBRAE} component={Sebrae} />
            <Route path={[Paths.HOME, Paths.HOME_REDIRECT]} component={Home} />
        </Switch>
    )
}