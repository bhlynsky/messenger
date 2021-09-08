import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ children, user, ...rest }) {
    return (
        <Route
            {...rest}
            render={() => {
                return user ? children : <Redirect to="/login" />;
                // user - it is a user data which is stored in redux store after successfull authentication
            }}
        />
    );
}

const mapStateToProps = (state) => ({
    user: state.authReducer.user,
});

export default connect(mapStateToProps)(PrivateRoute);
