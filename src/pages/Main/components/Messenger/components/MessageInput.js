import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton, CircularProgress } from '@material-ui/core';
import { useStyles } from './styles';
import SendIcon from '@material-ui/icons/Send';
import AttachmentIcon from '@material-ui/icons/Attachment';
import { connect } from 'react-redux';
import { labels } from '../services/message-constants';

const MessageInput = (props) => {
    const [newMessage, setNewMessage] = useState('');
    const classes = useStyles();

    const { groupId, userId, username, isLoading, sendMessage } = props;

    const onSendMessage = () => {
        if (!newMessage) return; // empty message validation

        const message = {
            groupId,
            senderId: userId,
            senderName: username,
            content: newMessage,
        };

        sendMessage(message); // send to web socket server,then retrieve to all clients
        setNewMessage('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSendMessage();
        }
    };

    const handleChange = (e) => {
        setNewMessage(e.target.value);
    };

    return (
        <div className={classes.messageInput}>
            <TextField
                label={labels.MESSAGE_INPUT_PLACEHOLDER}
                variant="outlined"
                fullWidth
                onChange={handleChange}
                value={newMessage}
                onKeyDown={handleKeyDown}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            {isLoading ? (
                                <CircularProgress />
                            ) : (
                                <IconButton onClick={onSendMessage} data-testid="send-message">
                                    <SendIcon color="primary" />
                                </IconButton>
                            )}

                            <IconButton>
                                <AttachmentIcon color="secondary" />
                            </IconButton>
                        </InputAdornment>
                    ),
                    'data-testid': 'message-input',
                    className: classes.input,
                }}
            />
        </div>
    );
};

const mapStateToProps = (state) => ({
    groupId: state.groupReducer.currentGroup._id,
    userId: state.authReducer.user._id,
    username: state.authReducer.user.username,
    isLoading: state.messageReducer.sendMessageLoading,
});

export default connect(mapStateToProps)(MessageInput);
