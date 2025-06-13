import React from 'react';
import RingLoader from "react-spinners/RingLoader";

const LoaderRing = (props) => {
    
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

    return (
        <RingLoader loading={true} color="#ef9318" cssOverride={style} size={50} />
    );
};

export default LoaderRing;