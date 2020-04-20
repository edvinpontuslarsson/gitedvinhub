import React from 'react';
import Typography from '@material-ui/core/Typography';

const Loading = () => {
  // TODO separate style
  return (
    <div style={{ textAlign: 'center', marginTop: '33px' }}>
      <Typography variant="h5">
        Loading, please wait...
      </Typography>
    </div>
  );
};

export default Loading;
