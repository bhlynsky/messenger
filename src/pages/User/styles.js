import { makeStyles } from '@material-ui/core';
// FIXME move to separate file with styles
export const useStyles = makeStyles((theme) => ({
  margin: {
    margin: '20px',
  },
  paper: {
    position: 'absolute',
    top: '20%',
    left: '50%',
    marginLeft: -250,
    width: 400,
    display: 'grid',
    gridTemplateRows: '40px,40px,40px,25px,25px',
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));
export default useStyles;
