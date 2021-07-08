import React, { useState } from 'react';
import { Typography, Divider, Grid, Button, Modal } from '@material-ui/core';
import { Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core';
import { initialState } from './services/user-services';
import { useStyles } from './styles';
import ChangeDataModal from './ChangeDataModal';
import { ACTIONS_LABELS, userConstants } from './services/user-constants';
import { userStore } from './services/store';

export default function UserPage() {
  const [userData, setUserData] = useState(initialState);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (data) => {
    setUserData(data);
    setOpen(false);

    userStore.dispatch({
      type: 'CHANGE_DATA',
      data: userData,
    });
    console.log(userStore.getState());
  };

  return (
    <div>
      <Typography variant="h2" align="center" className={classes.margin}>
        {userConstants.PAGE}
      </Typography>
      <Divider className={classes.margin} />
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} title="Avatar" />
          <CardContent>
            <Grid container spacing={1} direction="column">
              <Typography variant="body1">
                <b>{userConstants.USERNAME}</b> : {userData.name}
              </Typography>
              <Typography variant="body1">
                <b>{userConstants.EMAIL}</b> : {userData.email}
              </Typography>
            </Grid>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            {ACTIONS_LABELS.EDIT}
          </Button>

          <Modal open={open} onClose={handleClose}>
            <ChangeDataModal
              handleSubmit={handleSubmit}
              handleClose={handleClose}
              data={userData}
            />
          </Modal>
        </CardActions>
      </Card>
    </div>
  );
}
