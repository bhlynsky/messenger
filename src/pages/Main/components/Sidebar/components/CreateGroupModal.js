import React, { useEffect, useState } from 'react';
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
import { createGroup, getUsers } from '../services/group-services';
import Chip from '@material-ui/core/Chip';
import { createGroupLabels, actionButtons } from '../services/group-constants';
import Clear from '@material-ui/icons/Clear';

const CreateGroupModal = (props) => {
    const { handleClose, createNewGroup, currentUserId, isLoading } = props;

    const [newGroup, setNewGroup] = useState({ groupName: '', members: [] }); // members : [ {username:'',userId:''},{},{}]
    const [errors, setErrors] = useState({ groupName: '', members: '' });
    const [selectedUser, setSelectedUser] = useState('');

    const [users, setUsers] = useState({});

    const classes = useStyles();

    const onSave = async () => {
        if (newGroup.groupName) {
            if (newGroup.members.length === 0) {
                setErrors({ ...errors, members: createGroupLabels.ERROR_NO_USERS });
            } else {
                const membersId = newGroup.members.map((user) => {
                    return user.userId;
                }); //newGroup.member : [{username,userId}...] ===> membersId :[userId,...]

                const body = { ...newGroup, members: [...membersId, currentUserId] };
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

    useEffect(() => {
        getUsers(setUsers);
    }, []);

    const InputTitle = (props) => {
        return (
            <Typography variant="body1" align="center" className={classes.modalLabels}>
                <i>{props.text}</i>
            </Typography>
        );
    };

    const UserSelect = () => {
        return (
            <div className={classes.userSelect}>
                <InputTitle text={createGroupLabels.SUBTITLE_ADD_USERS} />

                <FormControl error={!!errors.members} className={classes.input}>
                    <InputLabel>{createGroupLabels.SELECT_PLACEHOLDER}</InputLabel>
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
                    {errors.members ? <FormHelperText>{errors.members}</FormHelperText> : ''}
                </FormControl>

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
                        key={currentUserId}
                        color="primary"
                        label={createGroupLabels.CURRENT_USERNAME}
                        avatar={<Avatar>Y</Avatar>}
                        className={classes.chip}
                    />

                    {newGroup.members.map((user) => (
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
            </div>
        );
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
                    <InputTitle text={createGroupLabels.SUBTITLE_NAME} />
                    <FormControl className={classes.input} error={!!errors.groupName}>
                        <InputLabel>{createGroupLabels.NAME_INPUT}</InputLabel>
                        <Input
                            id="new-group-name"
                            type="text"
                            value={newGroup.groupName}
                            onChange={handleChange}
                            name="groupName"
                            required
                        />
                        {errors.groupName && <FormHelperText>{errors.groupName}</FormHelperText>}
                    </FormControl>

                    <UserSelect />

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
