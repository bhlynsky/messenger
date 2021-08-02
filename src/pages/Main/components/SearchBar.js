import React, { useState } from 'react';
import { IconButton, Input, InputAdornment } from '@material-ui/core';
import { useStyles } from '../styles';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { labels } from '../services/main-constants';

export const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');

    const classes = useStyles();

    const handleSearchBarChange = (e) => {
        setSearchValue(e.target.value);
    };

    const highlightText = (text, inputElem) => {
        let innerHTML = inputElem.innerHTML;
        const index = innerHTML.indexOf(text);

        innerHTML =
            innerHTML.substring(0, index) +
            `<span class=${classes.highlight} >` +
            innerHTML.substring(index, index + text.length) +
            `</span>` +
            innerHTML.substring(index + text.length);

        inputElem.innerHTML = innerHTML;
    };

    const searchMessage = (e) => {
        const selector =
            '#root > div > div > ul > div > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-align-items-xs-center.MuiGrid-justify-xs-space-between > p.MuiTypography-root.MuiTypography-body1';
        if (e.key === 'Enter' || e.type == 'click') {
            if (!searchValue) return;

            for (const p of document.querySelectorAll(selector)) {
                if (p.textContent.includes(searchValue)) {
                    highlightText(searchValue, p);

                    p.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' }); // scroll to last founded,first in list
                }
            }
        }
    };

    const onClear = () => {
        setSearchValue('');
    };

    return (
        <div className={classes.searchBar}>
            <Input
                fullWidth
                value={searchValue}
                placeholder={labels.SEARCH_MESSAGES}
                onKeyDown={searchMessage}
                onChange={handleSearchBarChange}
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
            />
        </div>
    );
};
