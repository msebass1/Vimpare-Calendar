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
    backgroundColor: '#3f51b5',
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
const hours = (n,diario) =>{
  var [inicio,fin] = [6,22];
  var h = [];
  for(var i = inicio; i<fin ;i++){
    h.push(
      <Box key={i}>
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

function dias(date,record){
  var wrap = [];
  var ndate = [...date]
  for(var i=0;i<6;i++){
    ndate[0]=date[0]+i;
    wrap.push(
	<Grid item xs={2}>
	  <Box marginLeft={3} >
	    <Typography edge="start" >
	      <code>
	      {ndate.join('/')}
	      </code>
	    </Typography>
	    <List component="nav" aria-label="secondary mailbox folders">
	      {hours(i,record)}
	    </List>
	  </Box>
	</Grid>
    )
  }
  return(wrap);
}

function rer(recordatorios,date){
  let res = recordatorios.filter(rec => Number(rec.start.dateTime.slice(8,10)) <= date+7 );
  let ret = [{},{},{},{},{},{},{}];
  for(var i=0; i < res.length;i++){
    ret[i][Number(res[i].start.dateTime.slice(11,13))] = res[i].summary;
  } 
  return ret;
}

function Table({recordatorios}) {
  const classes = useStyles();

  var rawDate = new Date()
  var date = [rawDate.getDate(),rawDate.getMonth(),rawDate.getFullYear()]
  var record = rer(recordatorios,date[0]);
  console.log(date);
  
  return (
    <Grid container spacing={0}>
	{ dias(date,record) }
    </Grid>
  );
}
export default Table;
