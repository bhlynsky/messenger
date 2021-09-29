import { useStyles } from './styles';
import React, { useState } from 'react';
import { Divider, Typography, Button, Modal } from '@material-ui/core';
import { labels } from './services/members-constants';
import MemberList from './MemberList';
import AddUserModal from './AddUserModal';

const MembersSection = () => {
    const classes = useStyles();

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
            <div className={classes.list}>
                <MemberList />
            </div>

            <Modal open={modalIsOpen} onClose={handleCloseModal}>
                <AddUserModal handleClose={handleCloseModal} />
            </Modal>
            <Button onClick={handleOpenModal} variant="contained" color="primary">
                {labels.SUBMIT_BUTTON_TEXT}
            </Button>
        </div>
    );
};

export default MembersSection;
