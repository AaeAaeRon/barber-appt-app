import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        WebSchedge
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'lightgrey',
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },

}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          <b>All you have to do is show up!</b>
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'WebSchedge scheduling is your online assistant,'}<br/>
          {'working 24/7 to fill your schedule.'}
        </Typography>
        <Button variant="contained" className={classes.button} ><a style={{ textDecoration: 'none', color: '#000000' }} href= '/signup' > Take 2 minutes, Try us out!</a>
        
        </Button>
        {/* <Typography variant="body1">Sticky footer placeholder.</Typography> */}
      </Container>
    </div>
  );
}