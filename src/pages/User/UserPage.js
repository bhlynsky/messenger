import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Typography, Divider, Grid, Button, Modal, Paper } from '@material-ui/core';
import { Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core';
import { useStyles } from './styles';
import ChangeDataModal from './ChangeDataModal';
import { ACTIONS_LABELS, userConstants } from './services/user-constants';

const UserPage = (props) => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    let { name, email, imgSrc } = props;
    const newImage = localStorage.getItem('recent-image');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Paper square className={classes.pageWrapper}>
            <Typography variant="h2" align="center" className={classes.margin}>
                {userConstants.PAGE}
            </Typography>
            <Divider className={classes.margin} />
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        title="Avatar"
                        image={newImage ? `${newImage}` : `${imgSrc}`}
                    />
                    <CardContent>
                        <Grid container spacing={1} direction="column">
                            <Typography variant="body1">
                                <b>{userConstants.USERNAME}</b> : {name}
                            </Typography>
                            <Typography variant="body1">
                                <b>{userConstants.EMAIL}</b> : {email}
                            </Typography>
                        </Grid>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Button variant="contained" color="primary" onClick={handleOpen}>
                        {ACTIONS_LABELS.EDIT}
                    </Button>

                    <Modal open={open} onClose={handleClose}>
                        <div>
                            <ChangeDataModal
                                handleClose={handleClose}
                                data={{ name, email, imgSrc }}
                            />
                        </div>
                    </Modal>
                </CardActions>
            </Card>
        </Paper>
    );
};

const mapDispatchToProps = (state) => ({
    name: state.userReducer.name,
    email: state.userReducer.email,
    imgSrc: state.userReducer.imgSrc,
});

export default connect(mapDispatchToProps)(UserPage);
