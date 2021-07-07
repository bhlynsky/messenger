import React, { useState } from 'react';
import { useStyles } from './styles';
import { FormControl, InputLabel, Input, Typography, Grid, Button } from '@material-ui/core';
import { userConstants } from './services/user-constants';

export function ModalBody(props) {
  const [newUserData, setNewUserData] = useState(props.data);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const { handleSubmit, handleClose } = props;
  const classes = useStyles();
  const labels = userConstants;
  return (
    <form className={classes.paper}>
      <FormControl>
        <InputLabel>{labels.CHANGE_NAME}</InputLabel>
        <Input
          id="change-username"
          type="text"
          value={newUserData.name}
          onChange={handleChange}
          name="name"
        />
      </FormControl>
      <FormControl>
        <InputLabel>{labels.CHANGE_EMAIL}</InputLabel>
        <Input
          id="change-email"
          type="text"
          value={newUserData.email}
          onChange={handleChange}
          name="email"
        />
      </FormControl>
      <FormControl>
        <Typography variant="caption">{labels.CHANGE_IMAGE}</Typography>
        <Input id="change-image" type="file" onChange={handleChange} name="imgSrc" />
      </FormControl>

      <Grid container className={classes.margin} alignItems="space-between">
        <Grid item xs={6}>
          <Button variant="contained" color="primary" onClick={() => handleSubmit(newUserData)}>
            {labels.Btn.SAVE}
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button variant="contained" color="default" onClick={handleClose}>
            {labels.Btn.CLOSE}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
export default ModalBody;
