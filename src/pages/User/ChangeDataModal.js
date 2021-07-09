import React, { useState } from 'react';
import { connect } from 'react-redux';
import userActions from './services/user-actions';
import { useStyles } from './styles';
import { FormControl, InputLabel, Input, Typography, Button, Fab } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import { ACTIONS_LABELS, userConstants } from './services/user-constants';
import { userStore } from './services/user-reducer';

const ChangeDataModal = (props) => {
    const { handleClose, user, changeData } = props;
    const [newUserData, setNewUserData] = useState(user);
    const classes = useStyles();

    const onSave = () => {
        changeData(newUserData);

        handleClose();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setNewUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <form className={classes.paper}>
            <FormControl>
                <InputLabel>{userConstants.CHANGE_NAME}</InputLabel>
                <Input
                    id="change-username"
                    type="text"
                    value={newUserData.name}
                    onChange={handleChange}
                    name="name"
                />
            </FormControl>
            <FormControl>
                <InputLabel>{userConstants.CHANGE_EMAIL}</InputLabel>
                <Input
                    id="change-email"
                    type="text"
                    value={newUserData.email}
                    onChange={handleChange}
                    name="email"
                />
            </FormControl>
            <FormControl>
                <label htmlFor="upload-photo">
                    <input
                        style={{ display: 'none' }}
                        id="upload-photo"
                        name="upload-photo"
                        type="file"
                    />

                    <Fab
                        color="secondary"
                        size="small"
                        component="span"
                        aria-label="add"
                        variant="extended"
                    >
                        <Add /> {userConstants.CHANGE_IMAGE}
                    </Fab>
                </label>
            </FormControl>

            <Button variant="contained" color="primary" onClick={onSave}>
                {ACTIONS_LABELS.SAVE}
            </Button>

            <Button variant="contained" color="secondary" onClick={handleClose}>
                {ACTIONS_LABELS.CLOSE}
            </Button>
        </form>
    );
};

const mapStateToProps = (state) => ({
    user: state,
});

const mapDispatchToProps = (dispatch) => ({
    changeData: (user) => dispatch(userActions.changeData(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeDataModal);
