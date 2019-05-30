import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import TemporaryWelcome from '../../Containers/TemporaryWelcome/TemporaryWelcome';

const Layout: React.FC = () => {
  return (
    <Grid container justify="center" alignItems="center" spacing={2} className="mainContainer">
      <Grid item xs={8}>
          <Paper>
              <TemporaryWelcome/>
          </Paper>
      </Grid>
    </Grid>
  );
}

export default Layout;
