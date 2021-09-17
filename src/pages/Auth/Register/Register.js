import React, { useState } from 'react';
import { Container, Typography, TextField, CssBaseline, Button } from '@material-ui/core';
import { useStyles } from './styles';
import { authService } from '../services/auth-services';
import { authActions } from '../services/auth-actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { labels, initialRegisterState } from '../services/auth-constants';
import { withLoading } from '../../../services/root-service';
import { validateRegisterForm } from '../services/auth-services';

function Register(props) {
    const { register, error, resetError, registerSuccess } = props;
    const classes = useStyles();

    const [registerData, setRegisterData] = useState(initialRegisterState);

    const [errors, setErrors] = useState(initialRegisterState);

    const [confirmPassword, setConfirmPassword] = useState('');

    const resetFormErrors = () => {
        if (error) {
            resetError();
        }

        setErrors(initialRegisterState);
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
        const validationErrors = validateRegisterForm(registerData, confirmPassword);

        if (!validationErrors.email && !validationErrors.password && !validationErrors.username) {
            register(registerData);
        } else {
            setErrors(validationErrors);
        }
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
                        error={!!errors.email || !!error}
                        helperText={errors.email}
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
                        error={!!errors.username || !!error}
                        helperText={errors.username}
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
                        error={!!errors.password || !!error}
                        helperText={errors.password}
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
                        error={!!errors.password || !!error}
                        helperText={errors.password}
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
