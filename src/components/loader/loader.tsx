import React from 'react';
import { Loader } from "rsuite";
import { AppLoaderProps } from "../../constants/pokemon.types"


const AppLoader: React.FC<AppLoaderProps> = ({ className }) => {
    return (
        <div className={className}>
            <Loader size="md" content="Loading..." />
        </div>
    );
}

export default AppLoader;