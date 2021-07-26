import { Typography, Grid, Divider, List } from '@material-ui/core';
import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar/components/Sidebar';
import { useStyles } from './styles';
import MessageInput from './components/Messenger/components/MessageInput';
import { Message } from './components/Messenger/components/Message';
import { connect } from 'react-redux';
import { mockGroupData, mockMessageData } from './services/mockApi';
import { loadMessageData, loadGroupData } from './services/main-actions';

function MainPage(props) {
    const classes = useStyles();

    const { groupName = '', messages, loadMessageData, loadGroupData } = props;

    useEffect(() => {
        loadGroupData(mockGroupData);
        loadMessageData(mockMessageData);
    }, []);

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
                    <Typography variant="h2" style={{ marginLeft: '25px' }}>
                        {groupName}
                    </Typography>
                </Grid>
                <Divider />

                <List className={classes.messageContainer}>
                    {messages &&
                        messages.length > 0 &&
                        messages.map((msg) => (
                            <Message messageData={msg} key={Math.random() * 100} />
                        ))}
                    <Divider />
                </List>
                <MessageInput />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    const groupName = state.groupReducer.currentGroupName;
    const messages = state.messageReducer.currentGroup.messages;

    return {
        messages,
        groupName,
    };
};

const mapDispatchToProps = (dispatch) => ({
    loadMessageData: (data) => dispatch(loadMessageData(data)),
    loadGroupData: (data) => dispatch(loadGroupData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
