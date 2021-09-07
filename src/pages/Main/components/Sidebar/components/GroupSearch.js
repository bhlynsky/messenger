import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { searchGroupLabels } from '../services/group-constants';
import { Input, InputAdornment } from '@material-ui/core';
import { useStyles } from './styles';

export const GroupSearch = ({ searchValue, onSearch }) => {
    const classes = useStyles();

    return (
        <Input
            className={classes.groupSearchBar}
            placeholder={searchGroupLabels.SEARCH_BAR_LABEL}
            value={searchValue}
            onChange={onSearch}
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            }
        />
    );
};
