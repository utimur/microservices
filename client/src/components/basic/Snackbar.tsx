import React from 'react';
import {Alert} from "@material-ui/lab";
import app from "../../store/app";

const Snackbar = () => {
    return (
        <div className="alert">
            <Alert severity="error">{app.alertText}</Alert>
        </div>
    );
};

export default Snackbar;
