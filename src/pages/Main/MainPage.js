import { Typography, Grid, Divider, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar/components/Sidebar';
import { useStyles } from './styles';
import MessageInput from './components/Messenger/components/MessageInput';
import { connect } from 'react-redux';
import { groupActions } from './components/Sidebar/services/group-actions';
import { MessageList } from './components/Messenger/components/MessageList';
import { SearchBar } from './components/SearchBar';
import { messageService } from './components/Messenger/services/message-services';
import { getGroups } from './components/Sidebar/services/group-services';
import { messageActions } from './components/Messenger/services/message-actions';
import MemberList from './components/MembersList/MemberList';

const conn = new WebSocket('ws://localhost:9000/');

conn.onopen = () => {
    console.log('websocket connected');
};

conn.onclose = () => {
    console.log('websocket closed');
};

function MainPage(props) {
    const classes = useStyles();

    const {
        groupName = '',
        messages,
        getGroupList,
        getMessagesList,
        changeCurrentGroup,
        userId,
        isMessagesLoading,
        updateMessages,
    } = props;

    const [searchValue, setSearchValue] = useState('');

    const handleSearchBarChange = (e) => {
        setSearchValue(e.target.value);
    };

    const onClear = () => {
        setSearchValue('');
    };

    conn.onmessage = (e) => {
        try {
            const message = JSON.parse(e.data);
            updateMessages(message);
        } catch (err) {
            console.log(err);
        }
    };

    const sendMessage = (message) => conn.send(JSON.stringify({ event: 'chat-message', message }));

    useEffect(async () => {
        const groupData = await getGroupList(userId);
        await getMessagesList(userId);

        if (groupData[0]) {
            changeCurrentGroup(groupData[0]);
        }
    }, []);

    return (
        <Paper square className={classes.pageWrapper}>
            <Sidebar />

            <div className={classes.container}>
                <Grid
                    container
                    direction="column"
                    alignItems="baseline"
                    className={classes.containerHeader}
                >
                    <Typography variant="h2" className={classes.groupHeaderText}>
                        {groupName}
                    </Typography>
                </Grid>

                <SearchBar
                    handleChange={handleSearchBarChange}
                    searchValue={searchValue}
                    onClear={onClear}
                />

                <Divider />

                <MessageList
                    messages={messages}
                    searchValue={searchValue}
                    isLoading={isMessagesLoading}
                />

                <MessageInput sendMessage={sendMessage} />
            </div>
            <MemberList />
        </Paper>
    );
}

const mapStateToProps = (state) => ({
    groupName: state.groupReducer.currentGroup.groupName,
    messages: state.messageReducer.currentGroup.messages,
    userId: state.authReducer.user._id,
    isMessagesLoading: state.messageReducer.isMessagesLoading,
});

const mapDispatchToProps = (dispatch) => ({
    getGroupList: (data) => dispatch(getGroups(data)),
    getMessagesList: (userId) => dispatch(messageService.getMessages(userId)),
    changeCurrentGroup: (id, name) => dispatch(groupActions.changeCurrentGroup(id, name)),
    updateMessages: (message) => dispatch(messageActions.updateMessages(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
