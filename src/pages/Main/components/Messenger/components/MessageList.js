import React, { useEffect, useRef } from 'react';
import { List, Divider } from '@material-ui/core';
import { useStyles } from './styles';
import { Message } from './Message';

export const MessageList = ({ messages, searchValue }) => {
    // useContext for search value?
    const classes = useStyles();
    const bottomScrollRef = useRef(null);

    useEffect(() => {
        if (bottomScrollRef.current) {
            bottomScrollRef.current.scrollIntoView({ behaviour: 'smooth' });
        }
    }, [messages]);

    return (
        <List className={classes.messageContainer}>
            {messages &&
                messages.length > 0 &&
                messages.map((msg) => (
                    <Message
                        messageData={msg}
                        searchValue={searchValue}
                        key={Math.random() * 100}
                    />
                ))}
            <Divider ref={bottomScrollRef} />
        </List>
    );
};
