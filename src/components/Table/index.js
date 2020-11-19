import React, { useState } from "react";
import { useHotkeys } from 'react-hotkeys-hook';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


const useStyles = makeStyles((theme) => ({
  ListA: {
    backgroundColor: theme.palette.background.paper,
  },
  ListB:{
    backgroundColor: '#056674',
  },
  topDateA:{
    padding:'10px',
    backgroundColor: '#056674',
    
  },
  topDateB:{
    padding:'10px',
    backgroundColor: theme.palette.background.paper

  }
}));

// definir el horario de sueño antes
const hours = (n,diario, position,column) =>{
  var [inicio,fin] = [6,22];
  var h = [];
  for(var i = inicio; i<fin ;i++){
    h.push(
      <Box borderColor={position === i && column === n ?'#FF4B5C':'#FFF'} border={position === i && column === n ?4:0} borderRadius={16} key={i}>
      <ListItem button  >
	<ListItemText 
	  primary={String(i)+':00'} 
	  secondary={diario[n][i]?diario[n][i]:'-'}/>
      </ListItem>
    </Box>
    )
  }
  return h;
}
function rer(recordatorios,date){
  let res = recordatorios.filter(rec => Number(rec.start.dateTime.slice(8,10)) <= date+2 );
  let ret = [{},{},{}];
  for(var i=0; i < res.length;i++){
    if(Number(res[i].start.dateTime.slice(8,10))===date){
      ret[0][Number(res[i].start.dateTime.slice(11,13))] = res[i].summary;
    }
    else if(Number(res[i].start.dateTime.slice(8,10))===date+1){
      ret[1][Number(res[i].start.dateTime.slice(11,13))] = res[i].summary;
    }
    else if(Number(res[i].start.dateTime.slice(8,10))===date+2){
      ret[2][Number(res[i].start.dateTime.slice(11,13))] = res[i].summary;
    }
  } 
  return ret;
}

function Table({recordatorios}) {
  const classes = useStyles();
  const [x, setX] = useState(6);
  const [y, setY] = useState(0);
  //const [command, setCommand] = useState('');
  
  //useHotkeys('o', () => setCommand(command => ':'))
  useHotkeys('o', () => console.log(rer(recordatorios,date[0])));
  useHotkeys('j', () => setX(x => x + 1));
  useHotkeys('k', () => setX(x => x - 1));
  useHotkeys('l', () => setY(y => y + 1));
  useHotkeys('h', () => setY(y => y - 1));
  var rawDate = new Date()
  var date = [rawDate.getDate(),rawDate.getMonth(),rawDate.getFullYear()]
  var record = rer(recordatorios,date[0]);
  
  return (
    <Grid container spacing={0}>
      <Grid item xs={4}>
        <Box className={classes.ListA} >
	  <Typography edge="start" variant="h6" className={ classes.topDateA}>
	    {date.join('/')}
          </Typography>
          <List component="nav" aria-label="secondary mailbox folders">
	    {hours(0,record,x,y)}
          </List>
        </Box>
      </Grid>
      <Grid className={classes.ListB}item xs={4}>
	  <Typography edge="start" variant="h6" className={classes.topDateB}>
	    {String(date[0]+1)+'/'+date[1]+'/'+date[2]}
          </Typography>
          <List component="nav" aria-label="secondary mailbox folders">
            {hours(1,record,x,y)}
          </List>
      </Grid>
      <Grid item xs={4}>
	  <Typography edge="start" variant="h6" className={classes.topDateA}>
	    {String(date[0]+1)+'/'+date[1]+'/'+date[2]}
          </Typography>
       <List className={classes.ListA}component="nav" aria-label="secondary mailbox folders">
            {hours(2,record,x,y)}
          </List>
      </Grid>
    </Grid>
  );
}
export default Table;
