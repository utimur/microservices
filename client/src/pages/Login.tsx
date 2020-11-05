import React from 'react';
import {Box, Button, Grid, TextField, Typography} from "@material-ui/core";
import '../styles/animations.scss'
import '../styles/auth.scss'

const Login = () => {
    return (
        <div className="page auth">
            <form className='auth__form'>
                <Grid container alignItems="center" direction="column">
                    <Typography variant="h5">Авторизация</Typography>
                    <Box mt={1} mb={1} width="100%">
                        <TextField
                            label="Введите email"
                            defaultValue=""
                            variant="outlined"
                            fullWidth={true}
                        />
                    </Box>
                    <Box mb={1} width="100%">
                        <TextField
                            label="Введите email"
                            defaultValue=""
                            variant="outlined"
                            fullWidth={true}
                        />
                    </Box>
                    <Box alignSelf="flex-end" >
                        <Button variant="contained" color="primary">
                            Войти
                        </Button>
                    </Box>
                </Grid>
            </form>
        </div>
    );
};

export default Login;
