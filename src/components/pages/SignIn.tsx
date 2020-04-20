import React from 'react';
import { Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import greenTheme from '../../themes/greenTheme';

const SignIn = () => {
  const divStyle: object = {
    textAlign: 'center',
    marginTop: '33px',
  };

  return (
    <>
      <div style={divStyle}>
        <Typography variant="h5">
          Welcome! Sign in for updates from your GitHub
          organisations.
        </Typography>
      </div>
      <div style={divStyle}>
        <MuiThemeProvider theme={greenTheme}>
          <Button
            color="primary"
            variant="contained"
            startIcon={<GitHubIcon />}
            onClick={() => {
              console.log('Implement GH sign in');
            }}
          >
            Sign in with GitHub
          </Button>
        </MuiThemeProvider>
      </div>
    </>
  );
};

export default SignIn;
