import React, { useState } from 'react';
import { Divider, Typography, Modal, IconButton, Tooltip, List } from '@material-ui/core';
import { useStyles } from './styles';
import { connect } from 'react-redux';
import GroupPreview from './GroupPreview';
import { createGroupLabels, labels } from '../../../services/main-constants';
import CreateGroupModal from './CreateGroupModal';
import AddIcon from '@material-ui/icons/Add';

const Sidebar = (props) => {
    const classes = useStyles();
    const { groups, currentGroupId } = props;
    const [modalIsOpen, setModalOpen] = useState(false);

    const handleOpen = () => {
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    return (
        <div className={classes.drawer}>
            <div className={classes.containerHeader}>
                <Typography variant="h2" align="left">
                    {labels.SIDEBAR_HEADER}
                </Typography>
                <Tooltip title={createGroupLabels.ICON_TOOLTIP}>
                    <IconButton onClick={handleOpen} className={classes.openModalIcon}>
                        <AddIcon />
                    </IconButton>
                </Tooltip>
            </div>

            <Divider />

            <Modal open={modalIsOpen} onClose={handleClose}>
                <CreateGroupModal handleClose={handleClose} />
            </Modal>
            <List className={classes.groupList}>
                {groups.length ? (
                    groups.map((item) => (
                        <div
                            className={
                                currentGroupId === item.id
                                    ? classes.groupPreviewActive
                                    : classes.groupPreview
                            }
                            key={item.id}
                        >
                            <GroupPreview group={item} messageData={item.lastMessage} />
                        </div>
                    ))
                ) : (
                    <Typography variant="subtitle1">{labels.SIDEBAR_NO_GROUPS}</Typography>
                )}
            </List>
        </div>
    );
};

const mapStateToProps = (state) => ({
    groups: state.sidebarReducer.groups,
    currentGroupId: state.sidebarReducer.currentGroup.id,
});

export default connect(mapStateToProps)(Sidebar);
