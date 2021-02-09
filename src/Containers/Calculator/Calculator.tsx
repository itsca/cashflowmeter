import React from 'react';

import { Grid, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import PersonalInfo from '../../Components/PersonalInfo/PersonalInfo';
import Income from '../../Components/Income/Income/Income';
import Expenses from '../../Components/Expenses/Expenses/Expenses';

const useStyles = makeStyles({
  root: {
    padding: '2%'
  }
});

const Calculator: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.root}>
      <Grid item xs={12}>
        <Card>
          <PersonalInfo />
          <Income />
          <Expenses />
        </Card>
      </Grid>
    </Grid>
  )
}

export default Calculator
