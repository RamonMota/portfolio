import { Route, useLocation } from "react-router-dom";
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
            document.body.style.overflow = 'hidden';
        } else {
            setTimeout(() => {
                document.body.removeAttribute('style');
            }, 300)
        }
    }, [currentPath])

    return (
        <>
            <Route path={PathsModal.SEBRAE} component={Sebrae} />
            <Route path={Paths.HOME} component={Home} />
        </>
    )
}