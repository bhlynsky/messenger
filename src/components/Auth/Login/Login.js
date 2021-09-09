import React, { useState } from 'react';
import {
    Checkbox,
    FormControlLabel,
    TextField,
    CssBaseline,
    Button,
    Container,
    Typography,
} from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { useStyles } from './styles';
import { authService } from '../services/auth-services';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { authActions } from '../services/auth-actions';

function Login(props) {
    const classes = useStyles();
    const { login, isLoading, error, user, removeError } = props;

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setLoginData((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        if (error) removeError();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(loginData);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline>
                {user && <Redirect to="/main/1" />}
                <div className={classes.paper}>
                    <Typography variant="h2">Log in</Typography>
                    {error && (
                        <Typography variant="caption" color="error">
                            Error:{' '}
                            {error.message.includes('Failed to fetch')
                                ? 'Cant establish connection. Looks like server is offline'
                                : error.message}
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
                            value={loginData.email}
                            error={!!error}
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
                            value={loginData.password}
                            error={!!error}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            disabled={isLoading}
                            className={classes.submit}
                        >
                            {isLoading ? (
                                <CircularProgress size="30px" />
                            ) : (
                                <Typography>Sign In</Typography>
                            )}
                        </Button>

                        <Link to="/register" variant="body2" className={classes.registerLink}>
                            {"Don't have an account? Create new."}
                        </Link>
                    </form>
                </div>
            </CssBaseline>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    isLoading: state.authReducer.isLoading,
    error: state.authReducer.error,
    user: state.authReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch(authService.login(data)),
    removeError: () => dispatch(authActions.removeError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
