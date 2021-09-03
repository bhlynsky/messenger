import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { useStyles } from './styles';
import SendIcon from '@material-ui/icons/Send';
import AttachmentIcon from '@material-ui/icons/Attachment';
import { messageActions } from '../services/message-actions';
import { connect } from 'react-redux';
import { labels } from '../services/message-constants';
import { updateValuesOnSendMessage, createNewMessage } from '../services/message-services';

const MessageInput = (props) => {
    const [newMessage, setNewMessage] = useState('');
    const classes = useStyles();

    const { messages, groups, groupId, userId, username } = props;

    const onSendMessage = () => {
        if (!newMessage) return; // empty message validation

        const message = {
            senderId: userId,
            senderName: username,
            groupId,
            content: newMessage,
        };

        const { newMessages, newGroups } = updateValuesOnSendMessage(
            messages,
            groups,
            message,
            groupId,
        );
        createNewMessage(newMessages, newGroups, message);
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
                onChange={onChange}
                value={newMessage}
                onKeyDown={handleKeyDown}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={onSendMessage} data-testid="send-message">
                                <SendIcon color="primary" />
                            </IconButton>
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
    messages: state.messageReducer.messages,
    groups: state.groupReducer.groups,
});

const mapDispatchToProps = (dispatch) => ({
    sendMessage: (newMessages, newGroups, message) =>
        dispatch(messageActions.sendMessage(newMessages, newGroups, message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
