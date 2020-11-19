import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import Divider from '@material-ui/core/Divider';
import ApiCalendar from 'react-google-calendar-api';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
  },
}));

function singin (cb){
  ApiCalendar.handleAuthClick();
  if (ApiCalendar.sign){
      ApiCalendar.listUpcomingEvents(24)
      .then(({result}) => {
        cb(result.items)
      });
    }
}

export default function Bar({setRecordatorios}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
	  <Typography edge="start" variant="h6" className={classes.title}>
	    <code>:VimpareCalendar </code>
          </Typography>
	  <Button color="secondary" onClick={e=>singin(setRecordatorios)}>login</Button>
	  <Divider orientation="vertical" flexItem />
	  <Button color="secondary" onClick={ApiCalendar.handleSignoutClick}>logout</Button>
	  <Divider orientation="vertical" flexItem /> 
	  <Button color="secondary" >Shortcuts</Button>
	  <Divider orientation="vertical" flexItem />
          <a href='https://github.com/msebass1'>
          <IconButton edge="end" className={classes.menuButton} color="secondary" aria-label="menu" >
            <GitHubIcon />
          </IconButton>
	  </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
