import {
    Typography,
    Grid,
    Divider,
    TextField,
    InputAdornment,
    IconButton,
    List,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { useStyles } from './styles';
import SendIcon from '@material-ui/icons/Send';
import AttachmentIcon from '@material-ui/icons/Attachment';
import { Message } from './Message';

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
        let date = 'today';
        let group = 'group';
        let payload = {
            groupName: group,
            message: { userName: user, date: date, message: newMessage },
        };

        sendMessage(payload);
        setNewMessage('');
    };

    return (
        <div>
            <Sidebar />
            <div className={classes.container}>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="flex-start"
                    className={classes.containerHeader}
                >
                    <Typography variant="h2">{groupName}</Typography>
                    <Typography variant="body1" align="right">
                        100 participants
                    </Typography>
                </Grid>
                <Divider />
                <List>
                    <Grid container direction="column-reverse" className={classes.messageContainer}>
                        {messages &&
                            messages.map((msg) => <Message messageData={msg} key={msg.userName} />)}
                        <Divider />
                    </Grid>
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
                                        <SendIcon />
                                    </IconButton>
                                    <IconButton>
                                        <AttachmentIcon />
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

const mapStateToProps = (state) => ({
    messages: state.group.messages,
    groupName: state.group.groupName,
});

const mapDispatchToProps = (dispatch) => ({
    loadData: (data) => dispatch(loadData(data)),
    sendMessage: (payload) => dispatch(sendMessage(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
