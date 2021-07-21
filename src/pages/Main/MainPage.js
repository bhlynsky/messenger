import { Typography, Grid, Divider, TextField, InputAdornment } from '@material-ui/core';
import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { useStyles } from './styles';
import SendIcon from '@material-ui/icons/Send';
import AttachmentIcon from '@material-ui/icons/Attachment';
import { Message } from './components/Message';
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
            <Typography variant="h2" style={{ marginLeft: '25.5%' }}>
                {groupName}
            </Typography>
            {/*<div className={classes.container}>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="flex-start"
                    className={classes.containerHeader}
                >
                    <Typography variant="h2">{groupName ? groupName : ''}</Typography>
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
                    </div>*/}
        </div>
    );
}

const mapStateToProps = (state) => {
    const currentGroupId = state.Main.currentGroupId;
    const allGroups = state.Main.groups;

    const currentGroup = allGroups.filter((x) => x.id === currentGroupId);

    const messages = currentGroup[0]?.messages;
    const groupName = currentGroup[0]?.groupName;

    return {
        messages,
        groupName,
    };
};

const mapDispatchToProps = (dispatch) => ({
    loadData: (data) => dispatch(loadData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
