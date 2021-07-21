import { Typography, Button } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { loadData } from './services/nasa-actions';
import { getData } from './services/nasa-services';
import withLoading from '../../services/root-service';

const NasaPicsPage = (props) => {
    const { fetchEndpointAdop, data, error } = props;

    const onNext = () => {
        fetchEndpointAdop();
    };

    return (
        <div>
            {error ? (
                <div>
                    <Typography variant="h2" color="error">
                        {error.message}
                    </Typography>
                </div>
            ) : (
                <div>
                    <Button variant="contained" color="primary" onClick={onNext}>
                        Load
                    </Button>
                    {data && data.title !== '' ? (
                        Object.keys(data).map((item) => (
                            <div style={{ marginBottom: '20px' }} key={item}>
                                <Typography variant="subtitle1">{data[item].title}</Typography>
                                <img src={`${data[item].url}`}></img>
                                <Typography variant="body2">{data[item].date}</Typography>
                                <Typography variant="body1">{data[item].explanation}</Typography>
                            </div>
                        ))
                    ) : (
                        <Typography variant="h2">
                            Press button to see 5 astronomic facts of the day{' '}
                        </Typography>
                    )}
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    data: state.Nasa.data,
    isLoading: state.Nasa.isLoading,
    error: state.Nasa.error,
});

const mapDispatchToProps = (dispatch) => ({
    fetchEndpointAdop: () => dispatch(getData()),
    onLoad: () => dispatch(loadData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withLoading(NasaPicsPage));
