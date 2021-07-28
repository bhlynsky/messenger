import { Typography, Grid, Divider, List, IconButton, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar/components/Sidebar';
import { useStyles } from './styles';
import MessageInput from './components/Messenger/components/MessageInput';
import { Message } from './components/Messenger/components/Message';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import { loadMessageData, loadGroupData, changeCurrentGroup } from './services/main-actions';
import { checkLocalStorage } from './services/main-services';

function MainPage(props) {
    const classes = useStyles();

    const { groupName = '', messages, loadMessageData, loadGroupData, changeCurrentGroup } = props;

    const [searchBarOpen, setSearchBarOpen] = useState(true);
    const [searchValue, setSearchValue] = useState('');

    const handleOpenSearchBar = () => {
        setSearchBarOpen(!searchBarOpen);
        setSearchValue('');
    };

    const handleSearchBarChange = (e) => {
        setSearchValue(e.target.value);
    };

    const searchMessage = (e) => {
        const selector =
            '#root > div > div.makeStyles-container-7 > ul > div > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-align-items-xs-center.MuiGrid-justify-xs-space-between > p.MuiTypography-root.MuiTypography-body1';
        if (e.key === 'Enter') {
            if (!searchValue) return;
            for (const p of document.querySelectorAll(selector)) {
                if (p.textContent.includes(searchValue)) {
                    p.style.fontWeight = 'bold';
                    p.style.border = '2px red dotted';
                    p.style.background = 'pink';
                }
            }
        }
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
                    direction="row"
                    alignItems="baseline"
                    className={classes.containerHeader}
                >
                    <Typography variant="h2" style={{ margin: 'auto' }}>
                        {groupName}
                    </Typography>

                    <TextField
                        label={'Search for messages'}
                        color="primary"
                        value={searchValue}
                        onKeyDown={searchMessage}
                        onChange={handleSearchBarChange}
                        style={searchBarOpen ? { display: 'none' } : { display: 'inherit' }}
                    />

                    <IconButton onClick={handleOpenSearchBar}>
                        <SearchIcon></SearchIcon>
                    </IconButton>
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
