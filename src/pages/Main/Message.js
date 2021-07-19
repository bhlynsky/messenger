import React from 'react';
import { Avatar, Divider, Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';

export const Message = (props) => {
    const { userName, message, date } = props.messageData;
    const classes = useStyles();

    return (
        <div key={userName}>
            <div className={classes.message}>
                <Grid container direction="row" alignItems="flex-start">
                    <Avatar>A</Avatar>
                    <Typography variant="subtitle1">{userName}</Typography>
                </Grid>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify={'space-between'}
                    className={classes.messageContent}
                >
                    <Typography variant="body1">{message}</Typography>
                    <Typography variant="body2" align="left">
                        {date}
                    </Typography>
                </Grid>
            </div>
            <Divider />
        </div>
    );
};
