import React from 'react';
import {Button, Container, AppBar, Tabs, Tab} from "@material-ui/core";
import {privateRoutes, publicRoutes} from "./navigation";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import user from "./store/user";

function App() {
    return (
        <BrowserRouter>
            <AppBar position="static">
                <Tabs aria-label="simple tabs example">
                    <Tab label="Регистрация"  />
                    <Tab label="Логин"  />
                </Tabs>
            </AppBar>
            <Container>
                {user.isAuth
                    ?
                    <Switch>
                        {privateRoutes.map(({path, component}) =>
                            <Route component={component} path={path}/>
                        )}
                    </Switch>
                    :
                    <Switch>
                        {publicRoutes.map(({path, component}) =>
                            <Route component={component} path={path}/>
                        )}
                    </Switch>
                }
            </Container>
        </BrowserRouter>
    );
}

export default App;
