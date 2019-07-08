import React from 'react';
import { Grid, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const MainBar: React.FC = () => {

  const classes = useStyles();

  return (
    <Grid xs={12}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Cashflowmeter
          </Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default MainBar;
