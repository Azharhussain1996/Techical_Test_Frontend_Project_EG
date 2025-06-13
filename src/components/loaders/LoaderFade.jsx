import React from 'react';
import FadeLoader from "react-spinners/FadeLoader";

const LoaderFade = (props) => {
    
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

    return (
        <FadeLoader color="#26186b" loading={true} cssOverride={style} />
    );
};

export default LoaderFade;