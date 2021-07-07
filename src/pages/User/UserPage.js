import React, { useState } from 'react';
import { Typography, Divider, Grid, Button, Modal } from '@material-ui/core';
import { Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core';
import { initialState } from './services/user-services';
import { useStyles } from './styles';
import { ModalBody } from './changeUserDataModal';
import { userConstants } from './services/user-constants';

export default function UserPage() {
  const [userData, setUserData] = useState(initialState);

  const [open, setOpen] = useState(false);

  const labels = userConstants;

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
  };

  //TODO All labels such  'Username' move to constants too
  //pages -> User -> services -> user-constants.js
  return (
    <div>
      <Typography variant="h2" align="center" className={classes.margin}>
        {labels.PAGE}
      </Typography>
      <Divider className={classes.margin} />
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} title="Avatar" />
          <CardContent>
            <Grid container spacing={1} direction="column">
              {' '}
              <Typography variant="body1">
                <b>{labels.USERNAME}</b> : {userData.name}
              </Typography>
              <Typography variant="body1">
                <b>{labels.EMAIL}</b> : {userData.email}
              </Typography>
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" color="secondary" onClick={handleOpen}>
            {labels.Btn.EDIT}
          </Button>
          <Modal open={open} onClose={handleClose}>
            <ModalBody
              handleSubmit={handleSubmit}
              handleClose={handleClose}
              data={userData}
            ></ModalBody>
          </Modal>
        </CardActions>
      </Card>
    </div>
  );
}
