import React from 'react';
import useInput from "../hooks/useInput";
import useDirty from "../hooks/useDirty";
import '../styles/animations.scss'
import '../styles/auth.scss'
import {useHistory} from 'react-router-dom'
import {Box, Button, Grid, TextField, Typography} from "@material-ui/core";
import user from "../store/user";
import {observer} from "mobx-react-lite";
import {routesPath} from "../utils/const";

const Auth = observer(() => {
    const email = useInput('')
    const password = useInput('')
    const [emailDirty, emailBlur] = useDirty()
    const [passwordDirty, passwordBlur] = useDirty()
    const history = useHistory()
    const isLogin = history.location.pathname === routesPath.LOGIN

    const clickHandler = () => {
        console.log(isLogin)
        isLogin
            ? user.login(email.value, password.value)
            : user.registration(email.value, password.value)
    }

    return (
        <div className="page auth">
            <form className='auth__form'>
                <Grid container alignItems="center" direction="column">
                    <Typography variant="h5">{isLogin ? "Авторизация" : "Регистрация"}</Typography>
                    <Box mt={1} mb={1} width="100%">
                        <TextField
                            {...email}
                            label="Введите email"
                            variant="outlined"
                            fullWidth={true}
                            error={!email.value && emailDirty}
                            helperText={!email.value && emailDirty ? "email не может быть пустым" : ''}
                            onBlur={emailBlur}
                        />
                    </Box>
                    <Box mb={1} width="100%">
                        <TextField
                            {...password}
                            label="Введите пароль"
                            variant="outlined"
                            fullWidth={true}
                            type="password"
                            error={!password.value && passwordDirty}
                            helperText={!password.value && passwordDirty ? "Пароль не может быть пустым" : ''}
                            onBlur={passwordBlur}
                        />
                    </Box>
                    <Box alignSelf="flex-end" >
                        <Button
                            disabled={!email.value || !password.value}
                            onClick={() => clickHandler()}
                            variant="contained"
                            color="primary"
                        >
                            {isLogin ? "Войти" : "Регистрация"}
                        </Button>
                    </Box>
                </Grid>
            </form>
        </div>
    )
});

export default Auth;
