import { groupActions } from './group-actions';

const searchGroup = (target, groups) => {
    if (target) {
        return groups.filter((group) => {
            return group.groupName.toLowerCase().includes(target.toLowerCase());
        });
    }
    return groups;
};

const getGroups = (userId) => async (dispatch) => {
    dispatch(groupActions.loadGroups());

    try {
        const response = await fetch(`http://localhost:8080/api/group/${userId}`);

        if (!response.ok) throw new Error(response.statusText);

        const groups = await response.json();
        dispatch(groupActions.loadGroupsSuccess(groups));
        return groups; // is it normal to return and dispatch in the same function?
    } catch (err) {
        dispatch(groupActions.loadGroupsError(err));
    }
};

const createGroup = (body) => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:8080/api/group/new', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) throw new Error(response.statusText);

        const newGroup = await response.json();
        dispatch(groupActions.createNewGroup(newGroup));
        return newGroup;
    } catch (err) {
        console.error(err);
    }
};
export { searchGroup, getGroups, createGroup };
