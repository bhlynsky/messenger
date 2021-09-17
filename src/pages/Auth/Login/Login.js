import React, { useState } from 'react';
import { TextField, CssBaseline, Button, Container, Typography } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { useStyles } from './styles';
import { authService, validateLoginForm } from '../services/auth-services';
import { connect } from 'react-redux';
import { authActions } from '../services/auth-actions';
import { labels, initialLoginState } from '../services/auth-constants';
import { withLoading } from '../../../services/root-service';

function Login(props) {
    const classes = useStyles();
    const { login, error, user, resetError } = props;

    const [loginData, setLoginData] = useState(initialLoginState);

    const [errors, setErrors] = useState(initialLoginState);

    const resetFormErrors = () => {
        if (error) {
            resetError();
        }

        setErrors(initialLoginState);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setLoginData((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        resetFormErrors();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateLoginForm(loginData);

        if (!validationErrors.email && !validationErrors.password) {
            login(loginData);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline>
                {user && <Redirect to={`/main/${user._id}`} />}
                <div className={classes.paper}>
                    <Typography variant="h2">{labels.LOGIN}</Typography>
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
                            type="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleChange}
                            value={loginData.email}
                            error={!!error || !!errors.email}
                            helperText={errors.email}
                            inputProps={{ maxLength: 50 }}
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
                            autoComplete="current-password"
                            onChange={handleChange}
                            value={loginData.password}
                            error={!!error || !!errors.password}
                            helperText={errors.password}
                            inputProps={{ maxLength: 25 }}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            <Typography>{labels.SIGN_IN_BUTTON}</Typography>
                        </Button>

                        <Link to="/register" variant="body2" className={classes.registerLink}>
                            {labels.REGISTER_LINK_TEXT}
                        </Link>
                    </form>
                </div>
            </CssBaseline>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    error: state.authReducer.error,
    isLoading: state.authReducer.isLoading,
    user: state.authReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch(authService.login(data)),
    resetError: () => dispatch(authActions.resetError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withLoading(Login));
