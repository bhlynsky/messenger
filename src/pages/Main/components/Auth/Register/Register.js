import React, { useState } from 'react';
import {
    CircularProgress,
    Container,
    Typography,
    TextField,
    CssBaseline,
    Button,
} from '@material-ui/core';

import { useStyles } from './styles';
import { authService } from '../services/auth-services';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

function Register({ register, isLoading, error }) {
    const classes = useStyles();
    const [response, setResponse] = useState();
    const [registerData, setRegisterData] = useState({
        email: '',
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setRegisterData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await register(registerData);
        setResponse(user);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            {response && <Redirect to="/login" />}
            <div className={classes.paper}>
                <Typography variant="h2">Create new account</Typography>
                {error && (
                    <Typography variant="caption" color="error">
                        Error: {error.message}
                    </Typography>
                )}
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleChange}
                        value={registerData.email}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        onChange={handleChange}
                        value={registerData.username}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                        value={registerData.password}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="passwordConfirm "
                        label="Password again"
                        type="password"
                        id="confirm-password"
                        autoComplete="confirm-password"
                        onChange={handleChange}
                        value={registerData.passwordConfirm}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        {isLoading ? (
                            <CircularProgress size="30px" />
                        ) : (
                            <Typography>Sign In</Typography>
                        )}
                    </Button>
                </form>
            </div>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    isLoading: state.authReducer.isLoading,
    error: state.authReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
    register: (data) => dispatch(authService.register(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
