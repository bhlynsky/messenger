import { groupActions } from './group-actions';
import { fetchWithTimeout } from '../../../../../services/root-service';

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

    const url = `http://localhost:8080/api/group/${userId}`;

    try {
        const response = await fetchWithTimeout(url);

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

    const url = 'http://localhost:8080/api/group/new';
    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await fetchWithTimeout(url, options);
        if (!response.ok) throw new Error(response.statusText);

        const newGroup = await response.json();
        dispatch(groupActions.createGroupSuccess(newGroup));
        return newGroup;
    } catch (err) {
        dispatch(groupActions.createGroupError(err));
    }
};

const getUsers = async () => {
    const url = 'http://localhost:8080/api/auth/userlist';
    const options = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    let users = [];

    await fetchWithTimeout(url, options)
        .then((res) => res.json())
        .then((res) => (users = res))
        .catch((err) => console.log(err));

    return users;
};

export { searchGroup, getGroups, createGroup, getUsers };
