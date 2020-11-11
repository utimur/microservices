import React from 'react';
import user from "../store/user";
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../navigation";
import {CSSTransition} from "react-transition-group";
import {Container} from "@material-ui/core";

const AppRouter = () => {
    const history = useHistory()

    return (
        <Container style={{minHeight:'100vh', background:'#f5f5f5'}}>
            {user.isAuth
                ?
                <>
                    <Switch>
                        {privateRoutes.map(({path, Component}) =>
                            <Route key={path} component={Component} path={path}/>
                        )}
                        <Redirect to='/'/>
                    </Switch>
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
                                    classNames={Math.random() > 0.5 ? "page" : "page-up"}
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
