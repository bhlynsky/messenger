import React from 'react';
import { connect } from 'react-redux';
import Loading from '../components/Loading';

export const withLoading = (WrappedComponent) => {
    function HOC(props) {
        const { isLoading } = props;
        return (
            <Loading isLoading={isLoading}>
                <WrappedComponent {...props} />
            </Loading>
        );
    }

    return HOC;
};

export default withLoading;
