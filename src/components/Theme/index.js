import { 
  createMuiTheme,
} from '@material-ui/core/styles';

export  const Theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#264653',
      paper: '#66BFBF',
      
    },
    primary: {
      main: '#FF4B5C',
    },
    secondary: {
      main: '#056674',
    },
  },
});
