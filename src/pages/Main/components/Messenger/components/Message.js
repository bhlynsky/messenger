import React, { useEffect, useRef } from 'react';
import { Avatar, Divider, Grid, Typography } from '@material-ui/core';
import { useStyles } from '../../../styles';

export const Message = (props) => {
    const { searchValue, messageData } = props;
    const { userName, message, date } = messageData;

    const classes = useStyles();
    const scrollRef = useRef(null);

    const getHighlightedText = (text, target) => {
        const parts = text.split(new RegExp(`(${target})`));

        return (
            <span>
                {parts.map((part, i) => (
                    <span
                        key={i}
                        style={part === target ? { fontWeight: 'bold', background: 'pink' } : {}}
                        ref={part === target ? scrollRef : null}
                    >
                        {part}
                    </span>
                ))}
            </span>
        );
    };

    let messageComponent = (
        <Typography variant="body1">{getHighlightedText(message, searchValue)}</Typography>
    );

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({
                behaviour: 'smooth',
                block: 'end',
                inline: 'nearest',
            });
        }
    }, [searchValue]);

    return (
        <div key={userName}>
            <div className={classes.message}>
                <Grid container direction="row" alignItems="flex-start">
                    <Avatar style={{ margin: '-5px 10px 10px' }}>A</Avatar>
                    <Typography variant="subtitle1">{userName}</Typography>
                </Grid>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="space-between"
                    className={classes.messageContent}
                >
                    {messageComponent}
                    <Typography variant="body2" align="left">
                        {date}
                    </Typography>
                </Grid>
            </div>
            <Divider />
        </div>
    );
};
