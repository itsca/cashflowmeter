import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import HomePage from '../../Containers/HomePage/HomePage';

const Header: React.FC = () => {
  return (
    <Grid container justify="center" alignItems="center" spacing={2} className="mainContainer">
      <Grid item xs={8}>
          <Paper>
              <HomePage/>
          </Paper>
      </Grid>
    </Grid>
  );
}

export default Header;
