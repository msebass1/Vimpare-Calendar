import React,{ useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import {  Box, CssBaseline } from '@material-ui/core';
import { Theme }from './components/Theme';
import Bar from './components/Bar';
import Table  from './components/Table';
import { useStyles } from './styles';



function App() {
  const classes = useStyles();
  const [recordatorios, setRecordatorios] = useState([]);

  useEffect(()=>{
   console.log(recordatorios) 
  },[recordatorios])
  
  return (
  <ThemeProvider theme={Theme}> 
    <CssBaseline/>
    <Bar setRecordatorios={setRecordatorios} />
      <Box className={classes.listB}>
	{recordatorios.length !== 0?<Table recordatorios={recordatorios}/>: <div></div>}
      </Box>
  </ThemeProvider>
  );
}

export default App;
