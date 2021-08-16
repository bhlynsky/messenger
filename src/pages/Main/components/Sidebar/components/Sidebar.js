import React, { useEffect, useState } from 'react';
import {
    Typography,
    Modal,
    IconButton,
    Tooltip,
    List,
    TextField,
    InputAdornment,
} from '@material-ui/core';
import { useStyles } from './styles';
import { connect } from 'react-redux';
import GroupPreview from './GroupPreview';
import { createGroupLabels, labels, searchGroupLabels } from '../../../services/main-constants';
import CreateGroupModal from './CreateGroupModal';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

const Sidebar = (props) => {
    const classes = useStyles();
    const { groups, currentGroupId } = props;
    const [modalIsOpen, setModalOpen] = useState(false);
    const [groupSearchValue, setGroupSearchValue] = useState('');
    const [groupList, setGroupList] = useState([]);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const onGroupSearch = (e) => {
        const targetName = e.target.value;

        if (targetName !== '') {
            const filteredGroups = groups.filter((group) => {
                return group.groupName.toLowerCase().startsWith(targetName.toLowerCase());
            });
            setGroupList(filteredGroups);
        } else {
            setGroupList(groups);
        }
        setGroupSearchValue(targetName);
    };

    useEffect(() => {
        setGroupList(groups);
    }, [groups]);

    return (
        <div className={classes.drawer}>
            <div className={classes.containerHeader}>
                <Typography variant="h2" align="left">
                    {labels.SIDEBAR_HEADER}
                </Typography>

                <Tooltip title={createGroupLabels.NEW_GROUP_TOOLTIP}>
                    <IconButton onClick={handleOpenModal} className={classes.openModalIcon}>
                        <AddIcon />
                    </IconButton>
                </Tooltip>
            </div>

            <Modal open={modalIsOpen} onClose={handleCloseModal}>
                <CreateGroupModal handleClose={handleCloseModal} />
            </Modal>

            <TextField
                className={classes.groupSearchBar}
                placeholder={searchGroupLabels.SEARCH_BAR_LABEL}
                value={groupSearchValue}
                onChange={onGroupSearch}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon></SearchIcon>
                        </InputAdornment>
                    ),
                }}
            ></TextField>

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
