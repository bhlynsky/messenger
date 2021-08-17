import React from 'react';
import { Divider, Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeCurrentGroup } from '../services/sidebar-actions';
import { labels } from '../services/sidebar-constants';

const GroupPreview = (props) => {
    const { userName, message } = { ...props.messageData }; // handling error when undefined data
    const { group, changeCurrentGroup } = props;
    const classes = useStyles();

    const onChangeGroup = () => {
        changeCurrentGroup(group.id, group.groupName);
    };

    const maxMessageLength = 20;
    let displayMessage = '';

    displayMessage =
        message && message.length > maxMessageLength
            ? message.slice(maxMessageLength) + '...'
            : message;

    return (
        <Link to={`/main/${group.id}`} className={classes.linkWithoutStyles}>
            <div className={classes.messagePreview} onClick={onChangeGroup}>
                <Typography variant="subtitle1">{group.groupName}</Typography>

                {props.messageData ? (
                    <Grid container direction="row" alignItems="baseline">
                        <Typography variant="body1" className={classes.labelUsername}>
                            <i>{userName}</i>
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
    changeCurrentGroup: (groupId, groupName) => dispatch(changeCurrentGroup(groupId, groupName)),
});

export default connect(null, mapDispatchToProps)(GroupPreview);
