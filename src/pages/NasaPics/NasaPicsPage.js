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
            <Typography variant="h2">5 Random picture from NASA</Typography>
            {data && data.length !== 0 ? (
                Object.keys(data).map((item) => (
                    <div>
                        <Typography variant="body1">{data[item].title}</Typography>
                        <img src={`${data[item].url}`}></img>
                        <Typography variant="body1">{data[item].date}</Typography>
                        <Typography variant="body1">{data[item].explanation}</Typography>
                    </div>
                ))
            ) : (
                <CircularProgress />
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
