import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
    Input,
    Grid,
    Button,
    InputLabel,
    FormControl,
    Typography,
    FormHelperText,
    Divider,
    IconButton,
    Select,
    MenuItem,
    CircularProgress,
} from '@material-ui/core';
import { useStyles } from './styles';
import Avatar from '@material-ui/core/Avatar';
import { createGroup } from '../services/group-services';
import Chip from '@material-ui/core/Chip';
import { createGroupLabels, actionButtons } from '../services/group-constants';
import Clear from '@material-ui/icons/Clear';
import { users } from '../../../services/mockApi';

const CreateGroupModal = (props) => {
    const { handleClose, createNewGroup, currentUserId, isLoading } = props;

    const [newGroup, setNewGroup] = useState({ groupName: '', members: [] });
    const [errors, setErrors] = useState({ groupName: '', members: '' });
    const [selectedUser, setSelectedUser] = useState('');

    const classes = useStyles();

    const onSave = async () => {
        if (newGroup.groupName) {
            if (newGroup.members.length === 0) {
                setErrors({ ...errors, members: createGroupLabels.ERROR_NO_USERS });
            } else {
                const body = { ...newGroup, members: [...newGroup.members, currentUserId] };
                // making copy here so there wont be user id in chip list

                await createNewGroup(body);
                !isLoading && handleClose();
            }
        } else {
            setErrors({ ...errors, groupName: createGroupLabels.ERROR_NO_GROUPNAME });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setNewGroup((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSelect = (e) => {
        setSelectedUser(e.target.value);
    };

    const onDeleteUser = (userToDelete) => () => {
        // delete user from list of chips,
        const withoutUser = newGroup.members.filter((user) => user !== userToDelete);

        // update state with values without deleted user
        setNewGroup({ ...newGroup, members: [...withoutUser] });
    };

    const addUserToGroup = (user) => () => {
        if (user && !newGroup.members.includes(user)) {
            newGroup.members.push(user);
        }
    };

    return (
        <div className={classes.modalForm}>
            <div>
                <Typography variant="h2" align="center" className={classes.modalLabels}>
                    <b>{createGroupLabels.HEADER}</b>
                </Typography>
                <IconButton onClick={handleClose} className={classes.closeModalIcon}>
                    <Clear />
                </IconButton>
            </div>
            <form>
                <Divider variant="middle" className={classes.divider} />

                <Grid item>
                    <Typography variant="body1" align="center" className={classes.modalLabels}>
                        <i>{createGroupLabels.SUBTITLE_NAME}</i>
                    </Typography>
                    <FormControl className={classes.input} error={!!errors.groupName}>
                        <InputLabel>{createGroupLabels.NAME_INPUT}</InputLabel>
                        <Input
                            id="new-group-name"
                            type="text"
                            value={newGroup.name}
                            onChange={handleChange}
                            name="groupName"
                            required
                        />
                        {errors.groupName && <FormHelperText>{errors.groupName}</FormHelperText>}
                    </FormControl>

                    <div className={classes.userSelect}>
                        <Typography variant="body1" align="center" className={classes.modalLabels}>
                            <i>{createGroupLabels.SUBTITLE_ADD_USERS}</i>
                        </Typography>
                        <div>
                            <FormControl error={!!errors.members} className={classes.input}>
                                <InputLabel>{createGroupLabels.SELECT_PLACEHOLDER}</InputLabel>
                                <Select
                                    labelId="user-select"
                                    id="user-select"
                                    value={selectedUser}
                                    onChange={handleSelect}
                                >
                                    {users.map((user) => (
                                        <MenuItem
                                            value={user}
                                            key={user}
                                            onClick={addUserToGroup(user)}
                                        >
                                            {user}
                                        </MenuItem>
                                    ))}
                                </Select>
                                {errors.members ? (
                                    <FormHelperText>{errors.members}</FormHelperText>
                                ) : (
                                    ''
                                )}
                            </FormControl>
                        </div>
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                            className={classes.participants}
                        >
                            <Typography className={classes.modalLabels}>
                                {createGroupLabels.PATRICIPANTS} :
                            </Typography>
                            <Chip
                                key={Math.random() * 100}
                                color="primary"
                                label={createGroupLabels.CURRENT_USERNAME}
                                avatar={<Avatar>Y</Avatar>}
                                className={classes.chip}
                            />

                            {newGroup.members.map((user) => (
                                <Chip
                                    key={Math.random() * 100}
                                    color="secondary"
                                    label={user}
                                    avatar={<Avatar>{user.charAt(0).toUpperCase()}</Avatar>}
                                    className={classes.chip}
                                    onDelete={onDeleteUser(user)}
                                />
                            ))}
                        </Grid>
                    </div>

                    <Grid
                        container
                        justifyContent="flex-start"
                        className={classes.buttonsContainer}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={onSave}
                            disabled={isLoading}
                            className={classes.buttonSave}
                        >
                            {isLoading ? <CircularProgress size="25px" /> : actionButtons.SAVE}
                        </Button>

                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleClose}
                            className={classes.buttonClose}
                        >
                            {actionButtons.CLOSE}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    createNewGroup: (group) => dispatch(createGroup(group)),
});

const mapStateToProps = (state) => ({
    currentUserId: state.authReducer.user._id,
    isLoading: state.groupReducer.createGroupLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroupModal);
