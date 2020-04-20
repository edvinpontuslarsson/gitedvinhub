import React, { FunctionComponent } from 'react';
import IAppBarProps from '../interfaces/IAppBarProps';
import { Button } from '@material-ui/core';

const AppBar: FunctionComponent<IAppBarProps> = ({
  user,
}) => {
  // TODO separate style

  // TODO have all displayed text in separate file?

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid',
      }}
    >
      <Button disableRipple={true} disabled={true}>
        {user.displayName}
      </Button>
      <Button
        onClick={() => {
          console.log('Implement log out function');
        }}
      >
        Sign out
      </Button>
    </div>
  );
};

export default AppBar;
