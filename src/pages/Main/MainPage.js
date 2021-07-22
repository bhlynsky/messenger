import {
    Typography,
    Grid,
    Divider,
    TextField,
    InputAdornment,
    List,
    IconButton,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import { useStyles } from './styles';
import SendIcon from '@material-ui/icons/Send';
import AttachmentIcon from '@material-ui/icons/Attachment';
import { Message } from './components/Message';
import { connect } from 'react-redux';
import { mockData } from './services/mockApi';
import { loadData, sendMessage } from './services/main-actions';

function MainPage(props) {
    const classes = useStyles();
    const { groupName, messages, loadData, sendMessage } = props;
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        loadData(mockData);
    });

    const onSendMessage = () => {
        let user = 'Boris';
        let date = new Date();
        let message = {
            userName: user,
            date: date.toDateString(),
            message: newMessage,
        };

        sendMessage(message);
        setNewMessage('');
    };

    return (
        <div>
            <Sidebar />

            <div className={classes.container}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="flex-start"
                    className={classes.containerHeader}
                >
                    <Typography variant="h2">{groupName ? groupName : ''}</Typography>
                    {/*<Typography variant="body1" align="right">
                        100 participants
                    </Typography>*/}
                </Grid>
                <Divider />

                <List className={classes.messageContainer}>
                    {messages &&
                        messages.map((msg) => (
                            <Message messageData={msg} key={Math.random() * 100} />
                        ))}
                    <Divider />
                </List>

                <div className={classes.messageInput}>
                    <TextField
                        label={'Write message'}
                        variant="outlined"
                        fullWidth
                        className={classes.input}
                        onChange={(e) => {
                            setNewMessage(e.target.value);
                        }}
                        value={newMessage}
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
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    const currentGroup = state.mainReducer.currentGroup;
    const groupName = currentGroup.groupName;
    const messages = currentGroup.messages;

    return {
        messages,
        groupName,
    };
};

const mapDispatchToProps = (dispatch) => ({
    loadData: (data) => dispatch(loadData(data)),
    sendMessage: (message) => dispatch(sendMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
