import React from 'react';
import { Loader } from "rsuite";
import { ApploaderProps } from "../../constants/pokemon.types"


const Apploader: React.FC<ApploaderProps> = ({ className }) => {
    return (
        <div className={className}>
            <Loader size="md" content="Loading..." />
        </div>
    );
}

export default Apploader;