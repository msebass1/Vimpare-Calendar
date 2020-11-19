import React from 'react';
import { Typography, Box, Grid, Button, Paper } from '@material-ui/core';
import {Theme} from '../Theme';
import Typist from 'react-typist';

export default function Welcome(){
  return (
    <div>
      <Box display="flex" justifyContent="center"  p={1} bgcolor="background.paper" mx={30} mt={15} borderRadius={15}>
	<Grid
        container
        direction="column"
	justify="center"
        alignItems="center"
	spacing={5}>
	<Grid item>
	  <Box fontSize="h3.fontSize" fontFamily="Monospace">
	  <Typist>
	   Welcome to Vimpire Calendar
	  </Typist>
	  </Box>
	</Grid>
	<Grid item >
	  <Typography><code>To moves use:</code></Typography>
	</Grid>
        </Grid>
      </Box>
    </div> 
  )
}
