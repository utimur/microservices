import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import './styles/animations.scss'
import AppRouter from "./components/AppRouter";
import Loader from "./components/basic/Loader";
import {observer} from "mobx-react-lite";
import Snackbar from "./components/basic/Snackbar";
import app from "./store/app";

const App = observer(() => {
    return (
        <BrowserRouter>
            {app.loader && <Loader/>}
            {app.alert && <Snackbar/>}
            <AppRouter/>
            <Navbar/>
        </BrowserRouter>
    );
})

export default App;
