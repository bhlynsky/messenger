import { useStyles } from './styles';
import React, { useState } from 'react';
import { Avatar, Divider, Typography, Grid, List, Button, Modal } from '@material-ui/core';
import { connect } from 'react-redux';
import { labels } from './services/members-constants';
import AddUserModal from './AddUserModal';

const MemberList = ({ members }) => {
    const classes = useStyles();
    const maxUsernameLength = 10;

    const [modalIsOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const checkUsernameLength = (username) => {
        return username.length > maxUsernameLength
            ? username.slice(0, maxUsernameLength) + '...'
            : username;
    };

    const membersNotEmpty = members && members.length > 0;

    return (
        <div className={classes.container}>
            <div>
                <Typography variant="h5">{labels.MEMBERLIST_HEADER}</Typography>
            </div>
            <Divider />
            <List>
                {membersNotEmpty &&
                    members.map((user) => (
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            key={user.userId}
                        >
                            <Avatar className={classes.avatar} />
                            <Typography variant="subtitle1">
                                {checkUsernameLength(user.username)}
                            </Typography>
                        </Grid>
                    ))}
            </List>

            <Modal open={modalIsOpen} onClose={handleCloseModal}>
                <AddUserModal handleClose={handleCloseModal} />
            </Modal>
            <Button onClick={handleOpenModal} variant="contained" color="primary">
                {labels.SUBMIT_BUTTON_TEXT}
            </Button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    members: state.groupReducer.currentGroup.members,
});

export default connect(mapStateToProps)(MemberList);
