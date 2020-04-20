import { createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const greenTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#4CAF50',
      contrastText: '#FFFFFF',
    },
  },
});

export default greenTheme;
