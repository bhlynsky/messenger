import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { searchGroupLabels } from '../services/group-constants';
import { TextField, InputAdornment } from '@material-ui/core';
import { useStyles } from './styles';

export const GroupSearch = ({ searchValue, onSearch }) => {
    const classes = useStyles();
    return (
        <TextField
            className={classes.groupSearchBar}
            placeholder={searchGroupLabels.SEARCH_BAR_LABEL}
            value={searchValue}
            onChange={onSearch}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon></SearchIcon>
                    </InputAdornment>
                ),
            }}
        ></TextField>
    );
};
