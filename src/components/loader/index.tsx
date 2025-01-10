import { Fragment } from 'react'
import './index.scss'
import { useRoute } from '../../context/RouteContext';
import { PathsPages } from '../../config/paths/path';

export const Loader = (props: { isLoading?: boolean, }) => {

    const { actualRoute } = useRoute();
    const pageCases = Object.values(PathsPages).includes(actualRoute as PathsPages);

    return (
        <Fragment>
            {props.isLoading &&
                <div className={`content-loader 
                    ${pageCases ? 'strat-loader-up' : ''} 
                    ${!pageCases ? 'strat-loader-down' : ''}`}
                />
            }
        </Fragment>
    )
}
