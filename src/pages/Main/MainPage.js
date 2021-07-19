import {
    Typography,
    Grid,
    Button,
    Divider,
    TextField,
    InputAdornment,
    IconButton,
    List,
    ListItem,
} from '@material-ui/core';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { useStyles } from './styles';
import SendIcon from '@material-ui/icons/Send';
import AttachmentIcon from '@material-ui/icons/Attachment';
import { Message } from './Message';
import { connect } from 'react-redux';

function MainPage(props) {
    const classes = useStyles();
    const { groupName, messages } = props;

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

                <Grid
                    container
                    direction="column-reverse"
                    justifyContent="center"
                    className={classes.messageContainer}
                >
                    {messages.map((msg) => (
                        <div>
                            <Message messageData={msg} />
                        </div>
                    ))}
                    <Divider />
                </Grid>

                <div className={classes.messageInput}>
                    <TextField
                        label={'Write message'}
                        variant="outlined"
                        fullWidth
                        className={classes.input}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SendIcon />
                                    <AttachmentIcon />
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

export default connect(mapStateToProps, null)(MainPage);
