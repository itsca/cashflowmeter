import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import HomePage from '../../Containers/HomePage/HomePage';
import MainBar from '../MainBar/MainBar';

const Layout: React.FC = () => {
  return (
    <Grid container justify="center" spacing={2} className="mainContainer">
      <Grid container xs={12}>
        <MainBar />
      </Grid>
      <Grid item xs={8}>
          <Paper>
              <HomePage/>
          </Paper>
      </Grid>
    </Grid>
  );
}

export default Layout;
