import React from 'react';
import Loading from '../components/Loading';
import { render } from '@testing-library/react';
import reducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const withLoading = (WrappedComponent) => {
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

const renderWithRedux = (
    component,
    { initialState, store = createStore(reducer, initialState, applyMiddleware(thunk)) } = {},
) => {
    return {
        ...render(
            <Provider store={store}>
                <HashRouter>{component}</HashRouter>
            </Provider>,
        ),
        store,
    };
};

const handleFetchResponse = (response) => {
    return response.json().then((json) => {
        if (!response.ok) {
            const error = { ...json, status: response.status, statusText: response.statusText };

            return Promise.reject(error.message);
        }
        return json;
    });
};

export { withLoading, renderWithRedux, handleFetchResponse };
