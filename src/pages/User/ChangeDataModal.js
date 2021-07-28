import React, { useState } from 'react';
import { connect } from 'react-redux';
import userActions from './services/user-actions';
import { useStyles } from './styles';
import { FormControl, InputLabel, Input, Button, Fab, Grid, Typography } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import { ACTIONS_LABELS, userConstants } from './services/user-constants';

const ChangeDataModal = (props) => {
    const { handleClose, user, changeData } = props;
    const [newUserData, setNewUserData] = useState(user);
    const [imagePreview, setPreview] = useState('');
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

    const handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setNewUserData({
                ...newUserData,
                imgSrc: file,
            });

            setPreview(reader.result);

            localStorage.setItem('recent-image', reader.result);
        };

        reader.readAsDataURL(file);
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

            <label htmlFor="upload-photo">
                <input
                    style={{ display: 'none' }}
                    id="upload-photo"
                    name="imgSrc"
                    type="file"
                    onChange={handleImageChange}
                />

                <Fab
                    color="secondary"
                    size="small"
                    component="span"
                    aria-label="add"
                    variant="extended"
                    style={{ borderRadius: '5px', margin: '10px 0px' }}
                >
                    <Add /> {userConstants.CHANGE_IMAGE}
                </Fab>
            </label>

            <div>
                {imagePreview && (
                    <div>
                        <Typography variant="caption">Image preview</Typography>
                        <div className={classes.imgPreview}>
                            <img src={imagePreview} />{' '}
                        </div>
                    </div>
                )}
            </div>

            <Grid container justify="flex-start">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onSave}
                    className={classes.button}
                >
                    {ACTIONS_LABELS.SAVE}
                </Button>

                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleClose}
                    className={classes.buttonClose}
                >
                    {ACTIONS_LABELS.CLOSE}
                </Button>
            </Grid>
        </form>
    );
};

const mapStateToProps = (state) => ({
    user: state.userReducer,
});

const mapDispatchToProps = (dispatch) => ({
    changeData: (user) => dispatch(userActions.changeData(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeDataModal);
