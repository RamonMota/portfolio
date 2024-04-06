import { useEffect, useState } from "react";
import { HashRouter, Route, useLocation } from "react-router-dom";
import { Paths, PathsPages } from "./config/paths/path";
import { Sebrae } from "./pages/sebrae";
import { ContentPage } from "./components/content-page";
import { BetTemplate } from "./pages/bet-template";
import { Home } from "./pages/home/Home";

export const Routers = () => {
    const location = useLocation();
    const currentPath = location.hash.substring(1);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100)
    }, [currentPath]);

    return (
        <HashRouter>
            <Route exact path={[Paths.HOME, Paths.HOME_REDIRECT]} component={Home} />
            <Route path={PathsPages.SEBRAE}>
                <ContentPage>
                    <Sebrae />
                </ContentPage>
            </Route>
            <Route path={PathsPages.SPORT_BETTING_PLATAFORM}>
                <ContentPage>
                    <BetTemplate />
                </ContentPage>
            </Route>
        </HashRouter>
    );
};
