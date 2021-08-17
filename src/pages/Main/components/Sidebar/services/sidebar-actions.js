import { actionType } from './sidebar-constants';

const createNewGroup = (group) => ({
    type: actionType.CREATE_NEW_GROUP,
    group,
});

const changeCurrentGroup = (groupId, groupName) => ({
    type: actionType.CHANGE_CURRENT_GROUP,
    groupId,
    groupName,
});

const loadGroupData = (data) => ({
    type: actionType.LOAD_GROUPS,
    data,
});

export { createNewGroup, changeCurrentGroup, loadGroupData };
