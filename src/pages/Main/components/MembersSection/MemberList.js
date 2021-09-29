import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import { connect } from 'react-redux';
import { removeMember } from './services/members-services';
import { Avatar, Typography, Grid, List, IconButton } from '@material-ui/core';
import { useStyles } from './styles';
import { withLoading } from '../../../../services/root-service';

const MemberList = ({ members, removeGroupMember, groupId, currentUserID }) => {
    const maxUsernameLength = 10;
    const membersNotEmpty = members && members.length > 0;
    const classes = useStyles();

    const checkUsernameLength = (username) => {
        return username.length > maxUsernameLength
            ? username.slice(0, maxUsernameLength) + '...'
            : username;
    };

    const onRemoveUser = (userId) => {
        removeGroupMember(groupId, userId);
    };

    return (
        <List>
            {membersNotEmpty &&
                members.map((user) => (
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        key={user.userId}
                    >
                        <Avatar className={classes.avatar} />
                        <Typography variant="subtitle1">
                            {
                                //FIXME - better make such kind of calculation before render and move to constant
                                //only way i see to accomplish this is to modify members array before redndering is it ok?
                                checkUsernameLength(user.username)
                            }
                        </Typography>
                        {user.userId !== currentUserID && (
                            <IconButton
                                onClick={() => {
                                    onRemoveUser(user.userId);
                                }}
                            >
                                <ClearIcon />
                            </IconButton>
                        )}
                    </Grid>
                ))}
        </List>
    );
};

const mapStateToProps = (state) => ({
    groupId: state.groupReducer.currentGroup._id,
    currentUserID: state.authReducer.user._id,
    members: state.groupReducer.currentGroup.members,
});

const mapDispatchToProps = (dispatch) => ({
    removeGroupMember: (groupId, userId) => dispatch(removeMember(groupId, userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withLoading(MemberList));
