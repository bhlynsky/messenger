import { Typography, Grid, Divider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar/components/Sidebar';
import { useStyles } from './styles';
import MessageInput from './components/Messenger/components/MessageInput';
import { connect } from 'react-redux';
import { groupActions } from './components/Sidebar/services/group-actions';
import { MessageList } from './components/Messenger/components/MessageList';
import { SearchBar } from './components/SearchBar';
import { getMessages } from './components/Messenger/services/message-services';
import { getGroups } from './components/Sidebar/services/group-services';

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
    } = props;

    const [searchValue, setSearchValue] = useState('');

    const handleSearchBarChange = (e) => {
        setSearchValue(e.target.value);
    };

    const onClear = () => {
        setSearchValue('');
    };

    useEffect(async () => {
        const groupData = await getGroupList(userId); // is this approach is ok?
        await getMessagesList(userId);

        changeCurrentGroup(groupData[0]._id, groupData[0].groupName);
    }, []);

    return (
        <div className={classes.pageWrapper}>
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

                <MessageInput />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    const groupName = state.groupReducer.currentGroup.groupName;
    const messages = state.messageReducer.currentGroup.messages;
    const userId = state.authReducer.user._id;
    const isMessagesLoading = state.messageReducer.isMessagesLoading;
    return {
        messages,
        groupName,
        userId,
        isMessagesLoading,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getGroupList: (data) => dispatch(getGroups(data)),
    getMessagesList: (userId) => dispatch(getMessages(userId)),
    changeCurrentGroup: (id, name) => dispatch(groupActions.changeCurrentGroup(id, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
