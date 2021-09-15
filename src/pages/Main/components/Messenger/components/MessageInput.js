import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton, CircularProgress } from '@material-ui/core';
import { useStyles } from './styles';
import SendIcon from '@material-ui/icons/Send';
import AttachmentIcon from '@material-ui/icons/Attachment';
import { connect } from 'react-redux';
import { labels } from '../services/message-constants';
import { messageService } from '../services/message-services';

const MessageInput = (props) => {
    const [newMessage, setNewMessage] = useState('');
    const classes = useStyles();

    const { groupId, userId, username, sendMessage, isLoading } = props;

    const onSendMessage = () => {
        if (!newMessage) return; // empty message validation

        const message = {
            groupId,
            senderId: userId,
            senderName: username,
            content: newMessage,
        };

        sendMessage(message);
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
    groupId: state.messageReducer.currentGroup.id,
    userId: state.authReducer.user._id,
    username: state.authReducer.user.username,
    isLoading: state.messageReducer.sendMessageLoading,
});

const mapDispatchToProps = (dispatch) => ({
    sendMessage: (body) => dispatch(messageService.sendNewMessage(body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
