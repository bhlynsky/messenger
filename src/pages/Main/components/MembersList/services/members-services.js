import { fetchWithTimeout, handleFetchResponse } from '../../../../../services/root-service';
import { groupActions } from '../../Sidebar/services/group-actions';

const updateMembers = (groupId, newMembers) => (dispatch) => {
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
        .then((res) => dispatch(groupActions.updateGroupMembers(res)))
        .catch((err) => console.log(err));
};

export { updateMembers };
