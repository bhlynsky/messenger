import React from 'react';
import { Divider, Grid, Typography } from '@material-ui/core';
import { useStyles } from '../../../styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeCurrentGroup } from '../../../services/main-actions';

const GroupPreview = (props) => {
    const { userName, message } = { ...props.messageData }; // handling error when undefined data
    const { group, changeCurrentGroup } = props;
    const classes = useStyles();

    const onChangeGroup = () => {
        changeCurrentGroup(group.id, group.groupName);
    };

    return (
        <Link to={`/main/${group.id}`} className={classes.linkWithoutStyles}>
            <div className={classes.messagePreview} onClick={onChangeGroup}>
                <Typography variant="subtitle1">{group.groupName}</Typography>

                {props.messageData ? (
                    <Grid container direction="row" alignItems="baseline">
                        <Typography
                            variant="body1"
                            style={{ marginRight: '5px', marginBottom: '5px' }}
                        >
                            <i>{userName}</i>
                        </Typography>
                        <Divider
                            orientation="vertical"
                            flexItem
                            style={{ margin: '5px' }}
                        ></Divider>

                        <Typography variant="body2">{message}</Typography>
                    </Grid>
                ) : (
                    <Typography variant="body2">No message in this group yet</Typography>
                )}
            </div>
        </Link>
    );
};

const mapDispatchToProps = (dispatch) => ({
    changeCurrentGroup: (groupId, groupName) => dispatch(changeCurrentGroup(groupId, groupName)),
});

export default connect(null, mapDispatchToProps)(GroupPreview);
