import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        BookedBarbr
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    // minHeight: '80vh',
    height: '55px',
    lineHeight: '60px', 
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: '#444444',
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
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Made with Care by AaeAaeRon </Typography>
          <Copyright />
        </Container>
      </footer>

      {/* <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
        <div class="container text-center">
          <small>Copyright &copy; Your Website</small>
        </div>
      </footer> */}
    </div>
  );
}