import React, {useState} from 'react';
import {useHistory, Route} from 'react-router-dom'
import {BottomNavigation, BottomNavigationAction, Container, Icon} from "@material-ui/core";
import {Favorite} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";

const Navbar = () => {
    const classes = useStyles()
    const history = useHistory()
    const [value, setValue] = useState('')

    const changeHandler = (e:any, newValue: string):void => {
        setValue(newValue)
        history.push(`/${newValue}`)
    }

    return (
            <Container className={classes.navbar}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(e, newValue) => changeHandler(e, newValue)}
                >
                    <BottomNavigationAction
                        value="login"
                        className={classes.navigation}
                        label="Войти"
                        icon={<Icon>login</Icon>} />
                    <BottomNavigationAction
                        value="registration"
                        className={classes.navigation}
                        label="Регистрация"
                        icon={<Icon>how_to_reg</Icon>} />
                </BottomNavigation>
            </Container>
    );
};

export default Navbar;

const useStyles = makeStyles({
    navbar: {
        position: 'absolute',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        bottom: 30,
    },
    navigation: {
        width:200
    }
});
