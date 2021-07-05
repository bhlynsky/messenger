import React from 'react';
import { AppBar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import '../styles.scss';
const useStyles = makeStyles({
  header: {
    fontSize: '20px',
    display: 'flex',
    flexDirection: 'row',
    height: '40px',
    position: 'relative',
  },
  link: {
    background: 'white',
    padding: '5px',
    marginLeft: '20%',
    textDecoration: 'none',
    color: 'darkred',
    textAlign: 'center',
    verticalAlign: 'middle',
    border: '1px solid black',
    borderRadius: '20px',
  },
});

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
