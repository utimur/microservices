import React from 'react';
import user from "../store/user";
import {BrowserRouter, Route} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../navigation";
import {CSSTransition} from "react-transition-group";
import {Container} from "@material-ui/core";

const AppRouter = () => {

    return (
        <Container style={{minHeight:'100vh', background:'#f5f5f5'}}>
            {user.isAuth
                ?
                <>
                    {privateRoutes.map(({path, component}) =>
                        <Route component={component} path={path}/>
                    )}
                </>
                :
                <>
                    {publicRoutes.map(({path, Component}) =>
                        <Route key={path} exact path={path}>
                            {({match}) =>
                                <CSSTransition
                                    mountOnEnter
                                    in={match != null}
                                    timeout={500}
                                    unmountOnExit
                                    classNames={"page"}
                                >
                                    <Component/>
                                </CSSTransition>
                            }
                        </Route>
                    )}
                </>
            }
        </Container>
    )
};

export default AppRouter;
