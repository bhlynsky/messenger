import React from 'react';
import { AppBar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.header}>
      <Link className={classes.link} to="/main">
        Main Page
      </Link>

      <Link className={classes.link} to="/user">
        User Page
      </Link>

      <Link className={classes.link} to="/admin">
        Admin Page
      </Link>
    </AppBar>
  );
}
