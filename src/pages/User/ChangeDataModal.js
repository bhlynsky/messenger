import React, {useState} from 'react';
import {connect} from 'react-redux';
import userActions from './services/user-actions';
import {useStyles} from './styles';
import {FormControl, InputLabel, Input, Typography, Button} from '@material-ui/core';
import {ACTIONS_LABELS, userConstants} from './services/user-constants';
import {userStore} from './services/user-reducer';

const ChangeDataModal = (props) => {
    const {handleClose, user, changeData} = props;
    const [newUserData, setNewUserData] = useState(user);
    const classes = useStyles();

    const onSave = () => {
        changeData(newUserData);

        handleClose();
    };

    const handleChange = (e) => {
        const {name, value} = e.target;

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
                <Typography variant="caption">{userConstants.CHANGE_IMAGE}</Typography>
                <Input id="change-image" type="file" onChange={handleChange} name="imgSrc"/>
            </FormControl>

            <Button variant="contained" color="secondary" onClick={onSave}>
                {ACTIONS_LABELS.SAVE}
            </Button>

            <Button variant="contained" color="default" onClick={handleClose}>
                {ACTIONS_LABELS.CLOSE}
            </Button>
        </form>
    );
};

const mapStateToProps = (state) => ({
    user: state,
});

const mapDispatchToProps = (dispatch) => ({
    changeData: (user) => dispatch(userActions.changeData(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangeDataModal);
