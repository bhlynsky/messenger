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
    const { register, isLoading, error, removeError, registerSuccess } = props;
    const classes = useStyles();

    const [registerData, setRegisterData] = useState({
        email: '',
        username: '',
        password: '',
    });

    const [validationErrors, setValidationErrors] = useState({
        emailError: '',
        usernameError: '',
        passwordError: '',
    });

    const [confirmPassword, setConfirmPassword] = useState('');

    const changeErrorValue = (name, value) => {
        setValidationErrors((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    //FIXME Why async ?
    const validateForm = async () => {
        const { password, email, username } = registerData;

        //FIXME same, move checking to service
        // you can just return error, from service method, and here make setRegisterError
        if (password && email && username) {
            if (!validateEmail(email)) {
                changeErrorValue('emailError', authErrors.INVALID_EMAIL);
                return;
            }
            if (username.length < 6) {
                changeErrorValue('usernameError', authErrors.NAME_TOO_SHORT);
                return;
            }
            if (password.length < 6 && confirmPassword.length < 6) {
                changeErrorValue('passwordError', authErrors.PASSWORD_TOO_SHORT);
                return;
            }
            if (password !== confirmPassword) {
                changeErrorValue('passwordError', authErrors.PASSWORDS_NOT_MATCHING);
                return;
            }

            await register(registerData); // when check passed we can finnaly execute register
        } else {
            if (!registerData.email) {
                changeErrorValue('emailError', authErrors.EMPTY_FIELDS);
            }
            if (!registerData.username) {
                changeErrorValue('usernameError', authErrors.EMPTY_FIELDS);
            }
            if (!registerData.password) {
                changeErrorValue('passwordError', authErrors.EMPTY_FIELDS);
            }
            if (!confirmPassword) {
                changeErrorValue('passwordError', authErrors.EMPTY_FIELDS);
            }
        }
    };

    const resetFormErrors = () => {
        setValidationErrors({ emailError: '', usernameError: '', passwordError: '' });

        if (error) removeError();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setRegisterData((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        resetFormErrors();
    };

    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);

        resetFormErrors();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await validateForm();
    };

    //FIXME all labels and text, please move to constants
    //FIXME better make loading for all page, not for button, because, while you load response you still can change something in the form
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            {registerSuccess && <Redirect to="/login" />}
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
                        error={validationErrors.emailError || error}
                        helperText={validationErrors.emailError}
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
                        error={validationErrors.usernameError || error}
                        helperText={validationErrors.usernameError}
                        inputProps={{ maxLength: 20, minLength: 6 }}
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
                        error={validationErrors.passwordError || error}
                        helperText={validationErrors.passwordError}
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
                        error={validationErrors.passwordError || error}
                        helperText={validationErrors.passwordError}
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
    registerSuccess: state.authReducer.registerSuccess,
});

const mapDispatchToProps = (dispatch) => ({
    register: (data) => dispatch(authService.register(data)),
    removeError: () => dispatch(authActions.removeError()),
    setRegisterError: (err) => dispatch(authActions.registerError(err)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
