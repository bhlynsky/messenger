import React from 'react';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { groupActions } from '../services/group-actions';
import { connect } from 'react-redux';

const GroupPreviewMinimized = ({ group, changeCurrentGroup }) => {
    const classes = useStyles();

    const onChangeGroup = () => {
        changeCurrentGroup(group);
    };

    return (
        <Link to={`/main/${group._id}`} key={group._id} className={classes.linkWithoutStyles}>
            <div onClick={onChangeGroup}>
                <Typography align="center">{group.groupName}</Typography>
            </div>
        </Link>
    );
};

const mapDispatchToProps = (dispatch) => ({
    changeCurrentGroup: (group) => dispatch(groupActions.changeCurrentGroup(group)),
});

export default connect(null, mapDispatchToProps)(GroupPreviewMinimized);
