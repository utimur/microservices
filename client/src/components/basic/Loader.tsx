import React from 'react';
import {LinearProgress} from "@material-ui/core";
import '../../styles/basic.scss'

const Loader = () => {
    return (
        <div className="loader">
            <LinearProgress className='loader__content'/>
        </div>
    );
};

export default Loader;
