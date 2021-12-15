import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    primary: {
      main: '#EDFEFF',
      contrastText: '#4A485B',
    },
    secondary: { // works
      main: '#4A485B',
      contrastText: '#fff',
    },
    xiketic: {
      backgroundColor: '#0F060A',
      color: '#0F060A',
    },
    independence: {
      backgroundColor: '#4A485B',
      color: '#fff',
    },
    manatee: {
      backgroundColor: '#9096A3',
      color: '#9096A3',
    },
    azure: {
      backgroundColor: '#EDFEFF',
      color: '#EDFEFF',
    },
    middleBlue: {
      backgroundColor: '#85CDD2',
      color: '#85CDD2',
    },
  },
  typography: {
    fontFamily: [
      'Catamaran',
      'Actor',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});
