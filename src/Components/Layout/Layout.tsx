import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import HomePage from '../../Containers/HomePage/HomePage';
import MainBar from '../MainBar/MainBar';
import { Route, Link } from 'react-router-dom';
import Calculator from '../../Containers/Calculator/Calculator';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.background.default
    },
    contentArea1: {
      minHeight: '100vh'
    }
  })
);

const Layout: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root + ' mainContainer'}>
      <MainBar />
      <Grid container className={classes.contentArea1}>
        <Route path='/' exact component={HomePage} />
        <Route path='/calculator' exact component={Calculator} />
      </Grid>
    </Grid>
  );
}

export default Layout;
