import React from 'react';
import ClockLoader from "react-spinners/ClockLoader";

const LoaderClock = (props) => {
    
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

    return (
        <ClockLoader color="#ef9318" loading={true} cssOverride={style} size={50} />
    );
};

export default LoaderClock;