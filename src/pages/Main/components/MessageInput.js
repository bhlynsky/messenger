import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { useStyles } from '../styles';
import SendIcon from '@material-ui/icons/Send';
import AttachmentIcon from '@material-ui/icons/Attachment';
import { sendMessage } from '../services/main-actions';
import { connect } from 'react-redux';
import { labels } from '../services/main-constants';

const MessageInput = (props) => {
    const [newMessage, setNewMessage] = useState('');
    const classes = useStyles();

    const { sendMessage, id } = props;

    const onSendMessage = () => {
        const userName = 'Boris';
        const date = new Date();
        const message = {
            userName,
            date: date.toDateString(),
            message: newMessage,
        };

        sendMessage(id, message);
        setNewMessage('');
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSendMessage();
        }
    };

    const onChange = (e) => {
        setNewMessage(e.target.value);
    };

    return (
        <div className={classes.messageInput}>
            <TextField
                label={labels.MESSAGE_INPUT_PLACEHOLDER}
                variant="outlined"
                fullWidth
                className={classes.input}
                onChange={onChange}
                value={newMessage}
                onKeyDown={handleKeyDown}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={onSendMessage}>
                                <SendIcon color="primary" />
                            </IconButton>
                            <IconButton>
                                <AttachmentIcon color="secondary" />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
};
const mapStateToProps = (state) => ({
    id: state.messageReducer.currentGroup.id,
});
const mapDispatchToProps = (dispatch) => ({
    sendMessage: (id, message) => dispatch(sendMessage(id, message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
