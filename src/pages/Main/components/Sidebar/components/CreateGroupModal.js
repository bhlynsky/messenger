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
} from '@material-ui/core';
import { useStyles } from '../../../styles';
import { createNewGroup } from '../../../services/main-actions';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { createGroupLabels, actionButtons } from '../../../services/main-constants';

const CreateGroupModal = (props) => {
    const [newGroup, setNewGroup] = useState({ groupName: '', users: [] });
    const [errors, setErrors] = useState({ groupName: '', users: '' });

    const { handleClose, createNewGroup } = props;

    const classes = useStyles();

    const users = ['User1', 'user2', 'user3', 'user4', 'user3', 'user4'];

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

    const handleChipClick = (chip) => {
        // has a few bugs but for now is ok
        // should totally implement chip click differently
        const userName = chip.target.childNodes[0].data;

        if (userName && !newGroup.users.includes(userName)) {
            newGroup.users.push(userName);
        } else {
            const withoutUser = newGroup.users.filter((elem) => {
                return elem != userName;
            });
            setNewGroup({ ...newGroup, users: [...withoutUser] });
        }
    };

    return (
        <form className={classes.modalForm}>
            <Typography variant="h2" align="center">
                {createGroupLabels.HEADER}
            </Typography>

            <Grid item>
                <Typography variant="subtitle1">{createGroupLabels.SUBTITLE_NAME}</Typography>
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
                    <Typography variant="subtitle1">
                        {createGroupLabels.SUBTITLE_ADD_USERS}
                    </Typography>
                    {errors.users ? (
                        <FormHelperText style={{ color: 'red', margin: '5px ' }}>
                            {errors.users}
                        </FormHelperText>
                    ) : (
                        ''
                    )}
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        style={{ marginTop: '15px' }}
                    >
                        {users.map((user) => (
                            <Chip
                                key={Math.random() * 100}
                                color="secondary"
                                onClick={handleChipClick}
                                label={user}
                                avatar={<Avatar>{user.charAt(0).toUpperCase()}</Avatar>}
                                style={{ margin: '3px' }}
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
                            background: '#ad1457',
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
