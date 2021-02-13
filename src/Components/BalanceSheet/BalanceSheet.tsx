import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Assets from '../Assets/Assets';
import Liabilities from '../Liabilities/Liabilities';

const useStyles = makeStyles({
  root: {
    padding: '2%'
  }
});

const BalanceSheet: React.FC = () => {
  const classes = useStyles(); 
  
  return (
    <Grid className={classes.root + ' BalanceSheet'} container>
      <Grid item xs={6}>
        <Assets/>
      </Grid>
      <Grid item xs={6}>
        <Liabilities/>
      </Grid>
    </Grid>
  );
}

export default BalanceSheet
