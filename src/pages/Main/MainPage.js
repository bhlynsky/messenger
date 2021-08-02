import { Typography, Grid, Divider, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar/components/Sidebar';
import { useStyles } from './styles';
import MessageInput from './components/Messenger/components/MessageInput';
import { connect } from 'react-redux';
import { loadMessageData, loadGroupData, changeCurrentGroup } from './services/main-actions';
import { checkLocalStorage } from './services/main-services';
import { MessageList } from './components/Messenger/components/MessageList';
import { SearchBar } from './components/SearchBar';
import { labels } from './services/main-constants';

function MainPage(props) {
    const classes = useStyles();
    const { groupName = '', messages, loadMessageData, loadGroupData, changeCurrentGroup } = props;

    const [openSearchBar, setOpenSearchBar] = useState(false);

    const toggleSearchBar = () => {
        setOpenSearchBar(!openSearchBar);
    };

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
                    direction="column"
                    alignItems="baseline"
                    className={classes.containerHeader}
                >
                    <Typography variant="h2" style={{ margin: 'auto' }}>
                        {groupName}
                    </Typography>
                    <Button
                        style={{ margin: 'auto', fontSize: '0.7rem', padding: '0px' }}
                        onClick={toggleSearchBar}
                    >
                        {labels.FIND_MESSAGE_BUTTON}
                    </Button>
                </Grid>
                <SearchBar open={openSearchBar} />
                <Divider />

                <MessageList messages={messages} />

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
