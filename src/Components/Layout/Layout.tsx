import React from 'react';
import { Route, Link } from 'react-router-dom';

import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import HomePage from '../../Containers/HomePage/HomePage';
import MainBar from '../MainBar/MainBar';
import Statement from '../../Containers/FinancialStatement/FinancialStatement';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#f1f1f1',
  }
});

const Layout: React.FC = () => {

  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.root + ' mainContainer'}>
      <Grid container>
        <MainBar />
      </Grid>
      <Grid container>
        <Route path="/" exact component={HomePage} />
        <Route path="/statement" exact component={Statement} />
      </Grid>
    </Grid>
  );
}

export default Layout;
