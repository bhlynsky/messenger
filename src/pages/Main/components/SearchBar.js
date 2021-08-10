import React from 'react';
import { IconButton, Input, InputAdornment } from '@material-ui/core';
import { useStyles } from '../styles';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { labels } from '../services/main-constants';

export const SearchBar = (props) => {
    const classes = useStyles();
    const { handleChange, searchValue, onClear } = props;

    return (
        <div className={classes.searchBar}>
            <Input
                value={searchValue}
                variant="outlined"
                placeholder={labels.SEARCH_MESSAGES}
                onChange={handleChange}
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
                endAdornment={
                    <InputAdornment>
                        <IconButton onClick={onClear}>
                            <ClearIcon />
                        </IconButton>
                    </InputAdornment>
                }
                className={classes.searchBarInput}
            />
        </div>
    );
};
