import React, { useEffect, useState } from 'react';
import { Typography, Modal, IconButton, Tooltip, List, Divider, Grid } from '@material-ui/core';
import { useStyles } from './styles';
import { connect } from 'react-redux';
import GroupPreview from './GroupPreview';
import { createGroupLabels, labels } from '../services/group-constants';
import CreateGroupModal from './CreateGroupModal';
import AddIcon from '@material-ui/icons/Add';
import { GroupSearch } from './GroupSearch';
import { searchGroup } from '../services/group-services';
import GroupPreviewMinimized from './GroupPreviewMinimized';
import { SidebarToggleButton } from './SidebarToggleButton';

const Sidebar = (props) => {
    const classes = useStyles();
    const { groups, currentGroupId } = props;
    const [modalIsOpen, setModalOpen] = useState(false);
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const [groupSearchValue, setGroupSearchValue] = useState('');
    const [groupList, setGroupList] = useState([]);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const onGroupSearch = (e) => {
        const target = e.target.value;
        const searchResult = searchGroup(target, groups);

        setGroupList(searchResult);
        setGroupSearchValue(target);
    };

    useEffect(() => {
        setGroupList(groups);
    }, [groups]);

    if (sidebarIsOpen) {
        return (
            <div className={classes.sidebar}>
                <div className={classes.containerHeader}>
                    <Typography variant="h2" align="left">
                        {labels.SIDEBAR_HEADER}
                    </Typography>

                    <Tooltip title={createGroupLabels.NEW_GROUP_TOOLTIP}>
                        <IconButton onClick={handleOpenModal} className={classes.openModalIcon}>
                            <AddIcon />
                        </IconButton>
                    </Tooltip>

                    <SidebarToggleButton isOpen={sidebarIsOpen} setState={setSidebarOpen} />
                </div>

                <GroupSearch onSearch={onGroupSearch} searchValue={groupSearchValue} />

                <Modal open={modalIsOpen} onClose={handleCloseModal}>
                    <CreateGroupModal handleClose={handleCloseModal} />
                </Modal>

                <List className={classes.groupList}>
                    {groupList.length ? (
                        groupList.map((item) => (
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
                        <Typography variant="subtitle1" align="center">
                            {labels.SIDEBAR_NO_GROUPS}
                        </Typography>
                    )}
                </List>
            </div>
        );
    } else {
        return (
            <div className={classes.sidebarMinimized}>
                <div className={classes.containerHeader}>
                    <Grid container direction="row">
                        <Typography align="left">
                            <i>{labels.SIDEBAR_HEADER}</i>
                        </Typography>

                        <SidebarToggleButton isOpen={sidebarIsOpen} setState={setSidebarOpen} />
                    </Grid>
                </div>
                <Divider />
                <div>
                    {groups.length
                        ? groups.map((item) => (
                              <div
                                  className={
                                      currentGroupId === item.id
                                          ? classes.groupPreviewMinimizedActive
                                          : classes.groupPreviewMinimized
                                  }
                                  key={item.id}
                              >
                                  <GroupPreviewMinimized group={item} key={item.id} />
                              </div>
                          ))
                        : ''}
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    groups: state.groupReducer.groups,
    currentGroupId: state.groupReducer.currentGroup.id,
});

export default connect(mapStateToProps)(Sidebar);
