import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
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
    marginLeft: '50px',
    textDecoration: 'none',
    color: 'darkred',
    verticalAlign: 'middle',
    borderRadius: '2px',
  },
});
