import { Typography, Grid, Divider, List } from '@material-ui/core';
import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { useStyles } from './styles';
import MessageInput from './components/MessageInput';
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

            <div className={classes.container}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="flex-start"
                    className={classes.containerHeader}
                >
                    <Typography variant="h2" style={{ marginLeft: '25px' }}>
                        {groupName ? groupName : ''}
                    </Typography>
                </Grid>
                <Divider />

                <List className={classes.messageContainer}>
                    {messages.length > 0 &&
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
    const currentGroup = state.mainReducer.currentGroup;
    const groupName = currentGroup.groupName;
    const messages = currentGroup.messages;

    return {
        messages,
        groupName,
    };
};

const mapDispatchToProps = (dispatch) => ({
    loadData: (data) => dispatch(loadData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
