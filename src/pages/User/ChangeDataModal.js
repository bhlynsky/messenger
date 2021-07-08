import React, { useState } from 'react';
import { useStyles } from './styles';
import { FormControl, InputLabel, Input, Typography, Button } from '@material-ui/core';
import { userConstants } from './services/user-constants';

function ChangeDataModal(props) {
  const [newUserData, setNewUserData] = useState(props.data);

  const onSave = () => {
    handleSubmit(newUserData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { handleSubmit, handleClose } = props;
  const classes = useStyles();

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
        <Input id="change-image" type="file" onChange={handleChange} name="imgSrc" />
      </FormControl>

      <Button variant="contained" color="primary" onClick={onSave}>
        {userConstants.ACTIONS_LABELS.SAVE}
      </Button>

      <Button variant="contained" color="default" onClick={handleClose}>
        {userConstants.ACTIONS_LABELS.CLOSE}
      </Button>
    </form>
  );
}

export default ChangeDataModal;
