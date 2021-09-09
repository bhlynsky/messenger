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
import { authService, validateEmail } from '../services/auth-services';
import { authActions } from '../services/auth-actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { authErrors } from '../services/auth-constants';

function Register(props) {
    const { register, isLoading, error, removeError, setRegisterError } = props;
    const classes = useStyles();
    const [response, setResponse] = useState();
    const [registerData, setRegisterData] = useState({
        email: '',
        username: '',
        password: '',
    });

    const [confirmPassword, setConfirmPassword] = useState('');

    const validateForm = async () => {
        const { password, email, username } = registerData;

        if (password && email && username) {
            if (!validateEmail(email)) {
                setRegisterError(authErrors.INVALID_EMAIL);
                return;
            }
            if (username.length < 6) {
                setRegisterError(authErrors.NAME_TOO_SHORT);
                return;
            }
            if (password.length < 6 && confirmPassword.length < 6) {
                setRegisterError(authErrors.PASSWORD_TOO_SHORT);
                return;
            }
            if (password !== confirmPassword) {
                setRegisterError(authErrors.PASSWORDS_NOT_MATCHING);
                return;
            }

            const user = await register(registerData); // when check passed we can finnaly execute register
            setResponse(user); // waiting for response then redirect
        } else {
            setRegisterError(authErrors.EMPTY_FIELDS);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setRegisterData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        if (error) removeError();
    };

    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (error) removeError();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await validateForm();
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            {response && <Redirect to="/login" />}
            <div className={classes.paper}>
                <Typography variant="h2">Create new account</Typography>
                {error && (
                    <Typography variant="caption" color="error">
                        Error: {error}
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
                        error={!!error}
                        inputProps={{ maxLength: 50 }}
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
                        error={!!error}
                        inputProps={{ maxLength: 20 }}
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
                        onChange={handleChange}
                        value={registerData.password}
                        error={!!error}
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
                        onChange={handleChangeConfirmPassword}
                        value={confirmPassword}
                        error={!!error}
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
    removeError: () => dispatch(authActions.removeError()),
    setRegisterError: (err) => dispatch(authActions.registerError(err)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
