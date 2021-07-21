import React from 'react';
import { Divider, Grid, Typography } from '@material-ui/core';
import { useStyles } from '../styles';
import { connect } from 'react-redux';
import { changeCurrentGroup } from '../services/main-actions';

const GroupPreview = (props) => {
    const { userName, message } = props.messageData;
    const { groupName, changeGroup } = props;
    const classes = useStyles();

    const onChangeGroup = () => {
        changeGroup(groupName);
    };

    return (
        <div className={classes.messagePreview} onClick={onChangeGroup}>
            <Typography variant="subtitle1">{groupName}</Typography>
            <Grid container direction="row" alignItems="flex-start">
                <Typography variant="body1" style={{ marginRight: '5px' }}>
                    <i>{userName}</i>
                </Typography>
                <Divider orientation="vertical" flexItem style={{ margin: '5px' }}></Divider>

                <Typography variant="body2">{message}</Typography>
            </Grid>
        </div>
    );
};
const mapDispatchToProps = (dispatch) => ({
    changeGroup: (otherGroup) => dispatch(changeCurrentGroup(otherGroup)),
});

export default connect(null, mapDispatchToProps)(GroupPreview);
