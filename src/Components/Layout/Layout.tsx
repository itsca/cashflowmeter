import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import HomePage from '../../Containers/HomePage/HomePage';
import MainBar from '../MainBar/MainBar';
import { Route, Link } from 'react-router-dom';
import Calculator from '../../Containers/Calculator/Calculator';

const Layout: React.FC = () => {
  return (
    <Grid container spacing={2} className="mainContainer">
      <Grid container>
        <MainBar />
      </Grid>
      <Grid container>
        <Route path="/" exact component={HomePage} />
        <Route path="/calculator" exact component={Calculator} />
      </Grid>
    </Grid>
  );
}

export default Layout;
