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
} from '@material-ui/core';
import { useStyles } from './styles';
import { createNewGroup } from '../../../services/main-actions';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { createGroupLabels, actionButtons } from '../../../services/main-constants';
import Clear from '@material-ui/icons/Clear';

const CreateGroupModal = (props) => {
    const [newGroup, setNewGroup] = useState({ groupName: '', users: [] });
    const [errors, setErrors] = useState({ groupName: '', users: '' });
    const [selectedUser, setSelectedUser] = useState('');

    const { handleClose, createNewGroup } = props;

    const classes = useStyles();

    const users = ['Eva', 'Vadim', 'Yurii', 'Lena', 'John', 'Sofia'];

    const onSave = () => {
        if (!newGroup.groupName) {
            setErrors({ ...errors, groupName: createGroupLabels.ERROR_NO_GROUPNAME });
        } else if (newGroup.users.length === 0 && newGroup.groupName) {
            setErrors({ groupName: '', users: createGroupLabels.ERROR_NO_USERS });
        } else if (newGroup.users.length === 0) {
            setErrors({ ...errors, users: createGroupLabels.ERROR_NO_USERS });
        } else {
            createNewGroup(newGroup);
            handleClose();
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

    const handleChipDelete = (username) => () => {
        const withoutUser = newGroup.users.filter((elem) => elem !== username);

        setNewGroup({ ...newGroup, users: [...withoutUser] });
    };

    const addUserToGroup = (user) => () => {
        if (user && !newGroup.users.includes(user)) {
            newGroup.users.push(user);
        }
    };

    return (
        <form className={classes.modalForm}>
            <div>
                <Typography variant="h2" align="center">
                    <b>{createGroupLabels.HEADER}</b>
                </Typography>
                <IconButton onClick={handleClose} className={classes.closeModalIcon}>
                    <Clear />
                </IconButton>
            </div>

            <Divider variant="middle" className={classes.divider} />

            <Grid item>
                <Typography variant="body1" align="center">
                    <i>{createGroupLabels.SUBTITLE_NAME}</i>
                </Typography>
                <FormControl className={classes.input} error={errors.groupName ? true : false}>
                    <InputLabel>{createGroupLabels.NAME_INPUT}</InputLabel>
                    <Input
                        id="new-group-name"
                        type="text"
                        value={newGroup.name}
                        onChange={handleChange}
                        name="groupName"
                        required
                    />
                    {errors.groupName ? <FormHelperText>{errors.groupName}</FormHelperText> : ''}
                </FormControl>

                <div className={classes.userSelect}>
                    <Typography variant="body1" align="center">
                        <i>{createGroupLabels.SUBTITLE_ADD_USERS}</i>
                    </Typography>
                    <div>
                        <FormControl error={errors.users ? true : false} className={classes.input}>
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
                            {errors.users ? <FormHelperText>{errors.users}</FormHelperText> : ''}
                        </FormControl>
                    </div>
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        className={classes.participants}
                    >
                        <Typography>{createGroupLabels.PATRICIPANTS} :</Typography>
                        <Chip
                            key={Math.random() * 100}
                            color="primary"
                            label={'You'}
                            avatar={<Avatar>Y</Avatar>}
                            className={classes.chip}
                        />

                        {newGroup.users.map((user) => (
                            <Chip
                                key={Math.random() * 100}
                                color="secondary"
                                label={user}
                                avatar={<Avatar>{user.charAt(0).toUpperCase()}</Avatar>}
                                className={classes.chip}
                                onDelete={handleChipDelete(user)}
                            />
                        ))}
                    </Grid>
                </div>

                <Grid container justify="flex-start" className={classes.buttonsContainer}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onSave}
                        className={classes.buttonSave}
                    >
                        {actionButtons.SAVE}
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
    );
};

const mapDispatchToProps = (dispatch) => ({
    createNewGroup: (name) => dispatch(createNewGroup(name)),
});

export default connect(null, mapDispatchToProps)(CreateGroupModal);
