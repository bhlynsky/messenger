import React from 'react';
import { Divider, Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';

export const GroupPreview = (props) => {
    const { userName, message } = props.messageData;
    const { groupName } = props;
    const classes = useStyles();

    return (
        <div className={classes.messagePreview}>
            <Grid container direction="row" alignItems="flex-start">
                <Typography variant="subtitle1">{groupName}</Typography>
                <Divider orientation="vertical" flexItem style={{ margin: '5px' }}></Divider>

                <Typography
                    variant="body1"
                    style={{ verticalAlign: 'baseline', marginRight: '5px' }}
                >
                    {userName}
                </Typography>

                <Typography variant="body1" style={{ verticalAlign: 'baseline' }}>
                    - {message}
                </Typography>
            </Grid>
        </div>
    );
};
