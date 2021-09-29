import { fetchWithTimeout, handleFetchResponse } from '../../../../../services/root-service';
import { membersActions } from './members-actions';

const addMembers = (groupId, newMembers) => (dispatch) => {
    dispatch(membersActions.loadMembers());

    const url = `http://localhost:8080/api/group/addusers/${groupId}`;
    const options = {
        method: 'PUT',
        body: JSON.stringify(newMembers),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    fetchWithTimeout(url, options)
        .then((res) => handleFetchResponse(res))
        .then((res) => dispatch(membersActions.updateGroupMembers(res)))
        .catch((err) => dispatch(membersActions.loadMembersError(err)));
};

const removeMember = (groupId, userId) => (dispatch) => {
    dispatch(membersActions.loadMembers());
    const url = `http://localhost:8080/api/group/removeuser`;

    const options = {
        method: 'PUT',
        body: JSON.stringify({ groupId, userId }),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    fetchWithTimeout(url, options)
        .then((res) => handleFetchResponse(res))
        .then((res) => dispatch(membersActions.updateGroupMembers(res)))
        .catch((err) => dispatch(membersActions.loadMembersError(err)));
};

export { addMembers, removeMember };
