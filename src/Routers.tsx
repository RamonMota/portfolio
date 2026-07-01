import { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import { Paths, PathsPages } from "./config/paths/path";
import { Sebrae } from "./pages/sebrae";
import { ContentPage } from "./components/organisms/content-page";
import { BetTemplate } from "./pages/bet-template";
import { Home } from "./pages/home/Home";
import { WebkitUi } from "./pages/webkit-ui";
import { Welcome } from "./pages/welcome";

export const Routers = () => {
    const location = useLocation();
    const currentPath = location.pathname;

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
        <>
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
            <Route path={PathsPages.WEBKIT_UI}>
                <ContentPage>
                    <WebkitUi />
                </ContentPage>
            </Route>
            <Route path={PathsPages.WELCOME}>
                <Welcome />
            </Route>
        </>
    );
};
