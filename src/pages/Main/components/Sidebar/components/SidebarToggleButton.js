import React from 'react';
import { labels } from '../services/group-constants';
import { useStyles } from './styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Tooltip, IconButton } from '@material-ui/core';

export const SidebarToggleButton = ({ isOpen, setState }) => {
    const classes = useStyles();

    return (
        <Tooltip title={isOpen ? labels.SIDEBAR_CLOSE : labels.SIDEBAR_OPEN}>
            <IconButton
                onClick={() => {
                    setState(!isOpen);
                }}
                className={isOpen ? classes.menuIcon : classes.menuIconMinimized}
            >
                {isOpen ? (
                    <ChevronLeftIcon color="primary" />
                ) : (
                    <ChevronRightIcon color="primary" />
                )}
            </IconButton>
        </Tooltip>
    );
};
