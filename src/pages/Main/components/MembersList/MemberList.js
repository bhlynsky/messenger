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

    return (
        <div className={classes.container}>
            <div>
                <Typography variant="h5">{labels.MEMBERLIST_HEADER}</Typography>
            </div>
            <Divider />
            <List>
                {members &&
                    members.length > 0 &&
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
                                {user.username.length > maxUsernameLength
                                    ? user.username.slice(0, maxUsernameLength) + '...'
                                    : user.username}
                            </Typography>
                        </Grid>
                    ))}
            </List>

            <Modal open={modalIsOpen} onClose={handleCloseModal}>
                <AddUserModal handleClose={handleCloseModal} />
            </Modal>
            <Button onClick={handleOpenModal} variant="contained" color="primary">
                Add user
            </Button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    members: state.groupReducer.currentGroup.members,
});

export default connect(mapStateToProps)(MemberList);
