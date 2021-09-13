import React, { useState } from 'react';
import { Container, Typography, TextField, CssBaseline, Button } from '@material-ui/core';
import { useStyles } from './styles';
import { authService, validateEmail } from '../services/auth-services';
import { authActions } from '../services/auth-actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { authErrors, labels } from '../services/auth-constants';
import { withLoading } from '../../../services/root-service';

function Register(props) {
    const { register, error, resetError, registerSuccess } = props;
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

    const validateForm = () => {
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

            register(registerData); // when check passed we can finnaly execute register
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

        if (error) resetError();
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

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm();
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            {registerSuccess && <Redirect to="/login" />}
            <div className={classes.paper}>
                <Typography variant="h2">{labels.REGISTER}</Typography>
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
                        label={labels.EMAIL}
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
                        label={labels.USERNAME}
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
                        label={labels.PASSWORD}
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
                        label={labels.PASSWORD_CONFIRM}
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
                        <Typography>{labels.REGISTER_SUBMIT_BUTTON}</Typography>
                    </Button>
                </form>
            </div>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    error: state.authReducer.error,
    isLoading: state.authReducer.isLoading,
    registerSuccess: state.authReducer.registerSuccess,
});

const mapDispatchToProps = (dispatch) => ({
    register: (data) => dispatch(authService.register(data)),
    resetError: () => dispatch(authActions.resetError()),
    setRegisterError: (err) => dispatch(authActions.registerError(err)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withLoading(Register));
