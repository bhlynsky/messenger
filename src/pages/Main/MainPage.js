import { Typography, Grid, Divider, List } from '@material-ui/core';
import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar/components/Sidebar';
import { useStyles } from './styles';
import MessageInput from './components/Messenger/components/MessageInput';
import { Message } from './components/Messenger/components/Message';
import { connect } from 'react-redux';
import { loadMessageData, loadGroupData, changeCurrentGroup } from './services/main-actions';
import { checkLocalStorage } from './services/main-services';

function MainPage(props) {
    const classes = useStyles();

    const { groupName = '', messages, loadMessageData, loadGroupData, changeCurrentGroup } = props;

    useEffect(() => {
        // setting data if ls is empty before dispatching loading actions
        checkLocalStorage();
        const groupData = JSON.parse(localStorage.getItem('groupData'));
        const messageData = JSON.parse(localStorage.getItem('messageData'));
        const indexGroup = groupData.findIndex((gr) => gr.id === 1);

        loadGroupData(groupData);
        loadMessageData(messageData);

        changeCurrentGroup(1, groupData[indexGroup].groupName); //default group is first group in list
    }, []);

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
    const groupName = state.sidebarReducer.currentGroup.groupName;
    const messages = state.messageReducer.currentGroup.messages;

    return {
        messages,
        groupName,
    };
};

const mapDispatchToProps = (dispatch) => ({
    loadMessageData: (data) => dispatch(loadMessageData(data)),
    loadGroupData: (data) => dispatch(loadGroupData(data)),
    changeCurrentGroup: (id, name) => dispatch(changeCurrentGroup(id, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
