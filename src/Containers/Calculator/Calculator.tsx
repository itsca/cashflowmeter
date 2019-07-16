import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, List, ListItem, ListItemText, Paper, Button, Divider, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
          <Typography variant="h2">
            Calculator.
          </Typography>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Calculator
