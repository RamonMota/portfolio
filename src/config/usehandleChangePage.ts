import { useHistory } from "react-router";
import { useRoute } from "../context/RouteContext";

export const useHandleChangePage = () => {
    const history = useHistory();
    const { actualRoute, setRoute, interval } = useRoute();

    const handleChangePage = (router: string) => {
        setRoute(router);
        setTimeout(() => {
            history.push(router);
        }, interval / 2);
    };

    return handleChangePage;
};