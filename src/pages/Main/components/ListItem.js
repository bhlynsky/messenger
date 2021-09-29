import React from 'react';
import { MenuItem } from '@material-ui/core';

export const ListItem = ({ user, addUser }) => {
    const handleClick = () => {
        addUser(user);
    };

    return (
        <MenuItem value={user.username} onClick={handleClick}>
            {user.username}
        </MenuItem>
    );
};
