import { useState, useEffect } from 'react';

const useLoadPage = (props: number) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, props);
    }, []);

    return { isLoaded };
};

export default useLoadPage;
