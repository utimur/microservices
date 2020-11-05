import React from 'react';
import '../styles/animations.scss'
import '../styles/auth.scss'
import {Box, Button, Grid, TextField, Typography} from "@material-ui/core";
import user from "../store/user";
import useInput from "../hooks/useInput";
import {observer} from "mobx-react-lite";

const Registration = observer(() => {
    const email = useInput('')
    const password = useInput('')

    const registrationHandler = async (email:string, password: string):Promise<void> => {
        await user.registration(email, password)
    }

    return (
        <div className="page auth">
            <form className='auth__form'>
                <Grid container alignItems="center" direction="column">
                    <Typography variant="h5">Регистрация</Typography>
                    <Box mt={1} mb={1} width="100%">
                        <TextField
                            label="Введите email"
                            variant="outlined"
                            fullWidth={true}
                            {...email}
                        />
                    </Box>
                    <Box mb={1} width="100%">
                        <TextField
                            label="Введите пароль"
                            variant="outlined"
                            fullWidth={true}
                            {...password}
                        />
                    </Box>
                    <Box alignSelf="flex-end" >
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => registrationHandler(email.value, password.value)}>
                            Зарегистрироваться
                        </Button>
                    </Box>
                </Grid>
            </form>
        </div>
    );
});

export default Registration;
