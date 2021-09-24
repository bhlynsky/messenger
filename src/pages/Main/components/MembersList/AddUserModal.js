import { Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useStyles } from './styles';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText,
    Grid,
    Chip,
    Avatar,
    Button,
    IconButton,
} from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { labels } from './services/members-constants';
import { getUsers } from '../Sidebar/services/group-services';
import { updateMembers } from './services/members-services';
import { connect } from 'react-redux';

const AddUserModal = ({ handleClose, groupId, members, updateGroupMembers }) => {
    const classes = useStyles();

    const [error, setError] = useState('');
    const [newMembers, setMembers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [users, setUsers] = useState([]);

    const handleSelect = (e) => {
        setSelectedUser(e.target.value);
    };

    const addUserToGroup = (user) => () => {
        if (user && !newMembers.includes(user)) {
            setMembers([...newMembers, user]);
        }
        setError('');
    };

    const onDeleteUser = (userToDelete) => () => {
        // delete user from list of chips,
        const withoutUser = newMembers.filter((user) => user !== userToDelete);

        // update state with values without deleted user
        setMembers([...withoutUser]);
    };

    const onSubmit = () => {
        if (newMembers.length === 0) {
            setError(labels.ERROR_NO_USERS);
        } else {
            // send request to server
            updateGroupMembers(groupId, newMembers);

            handleClose();
        }
    };

    useEffect(async () => {
        const users = await getUsers();
        // exclude current members

        const withoutMembers = users.filter((user) => {
            return (
                members.filter((member) => {
                    return member.userId === user.userId;
                }).length == 0
            );
        });

        setUsers(withoutMembers);
    }, []);

    //FIXME - onClick={addUserToGroup(users[key])} / onDelete={onDeleteUser(user)} - bad approach for functions
    return (
        <div className={classes.modalForm}>
            <Typography className={classes.modalLabels}>
                <b>{labels.HEADER}</b>
            </Typography>
            <IconButton onClick={handleClose} className={classes.closeModalIcon}>
                <Clear />
            </IconButton>
            <div className={classes.userSelect}>
                <FormControl error={!!error} className={classes.input}>
                    <InputLabel className={classes.modalLabels}>
                        {labels.SELECT_PLACEHOLDER}
                    </InputLabel>
                    <Select
                        labelId="user-select"
                        id="user-select"
                        value={selectedUser}
                        onChange={handleSelect}
                        MenuProps={{ classes: { paper: classes.menuPaper } }}
                    >
                        {Object.keys(users).map((key) => (
                            <MenuItem
                                value={users[key].username}
                                key={users[key].userId}
                                onClick={addUserToGroup(users[key])}
                            >
                                {users[key].username}
                            </MenuItem>
                        ))}
                    </Select>
                    {error ? <FormHelperText>{error}</FormHelperText> : ''}
                </FormControl>

                {newMembers.length > 0 && (
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        className={classes.participants}
                    >
                        <Typography className={classes.modalLabels}>
                            {labels.CHIPLIST_TITLE} :
                        </Typography>

                        {newMembers.map((user) => (
                            <Chip
                                key={user.userId}
                                color="secondary"
                                label={user.username}
                                avatar={<Avatar>{user.username.charAt(0).toUpperCase()}</Avatar>}
                                className={classes.chip}
                                onDelete={onDeleteUser(user)}
                            />
                        ))}
                    </Grid>
                )}
            </div>

            <Grid container justifyContent="flex-start" className={classes.buttonsContainer}>
                <Button variant="contained" color="primary" onClick={onSubmit}>
                    {labels.SAVE_BUTTON}
                </Button>
            </Grid>
        </div>
    );
};

const mapStateToProps = (state) => ({
    groupId: state.groupReducer.currentGroup._id,
    members: state.groupReducer.currentGroup.members,
});

const mapDispatchToProps = (dispatch) => ({
    updateGroupMembers: (groupId, newMembers) => dispatch(updateMembers(groupId, newMembers)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUserModal);
