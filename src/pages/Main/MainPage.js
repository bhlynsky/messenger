import { Typography, Grid, Divider, TextField, InputAdornment } from '@material-ui/core';
import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import { useStyles } from './styles';
import SendIcon from '@material-ui/icons/Send';
import AttachmentIcon from '@material-ui/icons/Attachment';
import { Message } from './Message';
import { connect } from 'react-redux';
import { mockData } from './services/mockApi';
import { loadData } from './services/main-actions';

function MainPage(props) {
    const classes = useStyles();
    const { groupName, messages, loadData } = props;

    useEffect(() => {
        loadData(mockData);
    });

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

                <Grid container direction="column-reverse" className={classes.messageContainer}>
                    {messages &&
                        messages.map((msg) => <Message messageData={msg} key={msg.userName} />)}
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
    messages: state.MAIN.group.messages,
    groupName: state.MAIN.group.groupName,
});

const mapDispatchToProps = (dispatch) => ({
    loadData: (data) => dispatch(loadData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
