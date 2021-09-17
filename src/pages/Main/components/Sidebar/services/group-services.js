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
    dispatch(groupActions.createGroupStart());

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
        dispatch(groupActions.createGroupSuccess(newGroup));
        return newGroup;
    } catch (err) {
        dispatch(groupActions.createGroupError(err));
    }
};

const getUsers = (setUsers) => {
    fetch('http://localhost:8080/api/auth/userlist', {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((res) => setUsers(res))
        .catch((err) => console.log(err));
};

export { searchGroup, getGroups, createGroup, getUsers };
