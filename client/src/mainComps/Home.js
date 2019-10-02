import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {Gallery, GalleryImage} from 'react-gesture-gallery'
import images from './images'
import { withRouter } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    zIndex: 1,
    position: 'absolute',
    color: '#FFFFFF',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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

function Home() {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0)

  return(
    <div className={classes.root} style={{ background: "#444444", width: "100vw", height: "90vh" }}>
      <Gallery 
      index={index}
      onRequestChange={i => {
          setIndex(i)
      }}>
      {images.map(image => (
          <GalleryImage src={image}/>
      ))}
      </Gallery>

      <Container component="main" className={classes.main} maxWidth="sm">
      <Typography variant="h1"><b>BookdBarbr</b></Typography>
      <Typography variant="h2" component="h1" gutterBottom>
        <b>All you have to do is show up!</b>
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {'BookdBarbr scheduling is your online assistant,'}<br/>
        {'working 24/7 to fill your schedule.'}
      </Typography>
      <Button variant="contained" className={classes.button} ><a style={{ textDecoration: 'none', color: '#000000' }} href= '/signup' > Take 2 minutes, Try us out!</a>
      
      </Button>
      </Container>
    </div>
  )
}

export default withRouter(Home)