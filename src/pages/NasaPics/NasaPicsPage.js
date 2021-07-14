import { Typography, Button, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import getData from './services/nasa-actions';

const NasaPicsPage = (props) => {
    let { onLoadData, data } = props;
    console.table(data);

    const onNext = () => {
        onLoadData();
    };

    return (
        <div>
            {data && data.length !== 0 ? (
                Object.keys(data).map((item) => (
                    <div style={{ marginBottom: '20px' }}>
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
            <Button variant="contained" color="primary" onClick={onNext}>
                Load
            </Button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    data: state,
});

const mapDispatchToProps = (dispatch) => ({
    onLoadData: () => dispatch(getData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NasaPicsPage);
