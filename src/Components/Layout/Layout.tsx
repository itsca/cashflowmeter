import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import HomePage from '../../Containers/HomePage/HomePage';
import MainBar from '../MainBar/MainBar';
import { Route, Link } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <Grid container spacing={2} className="mainContainer">
      <Grid container xs={12}>
        <MainBar />
      </Grid>
      <Grid container xs={12}>
        <Route path="/" exact component={HomePage} />
      </Grid>
    </Grid>
  );
}

export default Layout;
