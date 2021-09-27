import React from 'react';
import { Chip, Avatar } from '@material-ui/core';
import { useStyles } from '../styles';

export const UserChip = ({ user, onDelete }) => {
    const classes = useStyles();

    const handleDelete = () => {
        onDelete(user);
    };

    return (
        <Chip
            color="secondary"
            label={user.username}
            avatar={<Avatar>{user.username.charAt(0).toUpperCase()}</Avatar>}
            className={classes.chip}
            onDelete={handleDelete}
        />
    );
};
