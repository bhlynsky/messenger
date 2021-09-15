import React, { useEffect, useState } from 'react';
import { Divider, Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { groupActions } from '../services/group-actions';
import { labels } from '../services/group-constants';

const GroupPreview = (props) => {
    const { messageId } = props;
    const { group, changeCurrentGroup } = props;
    const classes = useStyles();

    const [lastMessage, setLastMessage] = useState();

    const onChangeGroup = () => {
        changeCurrentGroup(group._id, group.groupName);
    };

    const maxMessageLength = 20;
    let displayMessage = '';

    const getLastMessage = () => {
        fetch(`http://localhost:8080/api/message/${messageId}`)
            .then((res) => res.json())
            .then((res) => setLastMessage(res))
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        if (messageId) {
            getLastMessage();
        }
    }, [messageId]);

    if (lastMessage) {
        const { content } = lastMessage;

        displayMessage =
            content && content.length > maxMessageLength
                ? content.slice(maxMessageLength) + '...'
                : content;
    }

    return (
        <Link to={`/main/${group._id}`} className={classes.linkWithoutStyles}>
            <div className={classes.messagePreview} onClick={onChangeGroup}>
                <Typography variant="subtitle1">{group.groupName}</Typography>

                {lastMessage ? (
                    <Grid container direction="row" alignItems="baseline">
                        <Typography variant="body1" className={classes.labelUsername}>
                            <i>{lastMessage.senderName}</i>
                        </Typography>
                        <Divider
                            orientation="vertical"
                            flexItem
                            className={classes.verticalDivider}
                        ></Divider>

                        <Typography variant="body2">{displayMessage}</Typography>
                    </Grid>
                ) : (
                    <Typography variant="body2">{labels.NO_MESSAGES}</Typography>
                )}
            </div>
        </Link>
    );
};

const mapDispatchToProps = (dispatch) => ({
    changeCurrentGroup: (groupId, groupName) =>
        dispatch(groupActions.changeCurrentGroup(groupId, groupName)),
});

export default connect(null, mapDispatchToProps)(GroupPreview);
