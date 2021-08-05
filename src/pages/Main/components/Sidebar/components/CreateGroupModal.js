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
import { useStyles } from '../../../styles';
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
        console.log(username);
        const withoutUser = newGroup.users.filter((elem) => elem !== username);
        console.log(withoutUser);
        setNewGroup({ ...newGroup, users: [...withoutUser] });
    };

    const addUserToGroup = () => {
        console.log(newGroup);
        if (selectedUser && !newGroup.users.includes(selectedUser)) {
            newGroup.users.push(selectedUser);
            setSelectedUser('');
        }
    };

    return (
        <form className={classes.modalForm}>
            <div style={{ position: 'relative' }}>
                <Typography variant="h2" align="center">
                    <b>{createGroupLabels.HEADER}</b>
                </Typography>
                <IconButton
                    onClick={handleClose}
                    style={{ position: 'absolute', top: '-27px', right: '-43px ' }}
                >
                    <Clear style={{ margin: 'auto' }} />
                </IconButton>
            </div>

            <Divider
                variant="middle"
                style={{ margin: '5px 60px 20px 60px', background: 'black' }}
            />

            <Grid item>
                <Typography variant="body1" align="center">
                    <i>{createGroupLabels.SUBTITLE_NAME}</i>
                </Typography>
                <FormControl style={{ width: '100%' }} error={errors.groupName ? true : false}>
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

                <div style={{ marginTop: '40px' }}>
                    <Typography variant="body1" align="center">
                        <i>{createGroupLabels.SUBTITLE_ADD_USERS}</i>
                    </Typography>
                    <div>
                        <FormControl error={errors.users ? true : false} style={{ width: '80%' }}>
                            <InputLabel>Select someone</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedUser}
                                onChange={handleSelect}
                                fullwidth="true"
                            >
                                {users.map((user) => (
                                    <MenuItem value={user} key={user}>
                                        {user}
                                    </MenuItem>
                                ))}
                            </Select>
                            {errors.users ? (
                                <FormHelperText style={{ color: 'red', margin: '5px ' }}>
                                    {errors.users}
                                </FormHelperText>
                            ) : (
                                ''
                            )}
                        </FormControl>
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ width: '10%', margin: '10px 0px 0px 15px' }}
                            onClick={addUserToGroup}
                        >
                            Add
                        </Button>
                    </div>
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        style={{ marginTop: '15px' }}
                    >
                        <Typography>Participants :</Typography>
                        <Chip
                            key={Math.random() * 100}
                            color="primary"
                            label={'You'}
                            avatar={<Avatar>Y</Avatar>}
                            style={{ margin: '3px' }}
                        />

                        {newGroup.users.map((user) => (
                            <Chip
                                key={Math.random() * 100}
                                color="secondary"
                                label={user}
                                avatar={<Avatar>{user.charAt(0).toUpperCase()}</Avatar>}
                                style={{ margin: '3px' }}
                                onDelete={handleChipDelete(user)}
                            />
                        ))}
                    </Grid>
                </div>

                <Grid container justify="flex-start" style={{ marginTop: '20px' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onSave}
                        style={{ width: '47.5%' }}
                    >
                        {actionButtons.SAVE}
                    </Button>

                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleClose}
                        style={{
                            width: '47.5%',
                            marginLeft: '5%',
                            color: 'white',
                        }}
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
