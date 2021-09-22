import { fetchWithTimeout } from '../../../../../services/root-service';

const updateMembers = (groupId, newMembers) => {
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
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};

export { updateMembers };
