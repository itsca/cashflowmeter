import React from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IncomeSource from '../IncomeSource/IncomeSource';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    root: {
      padding: '2%'
    },
    incomeSources: {
      border: '2px solid ' +  theme.palette.primary.main,
      marginRight: theme.spacing(1),
      borderRadius: '5px',
      padding: '5px'
    }
  })
);

const Income: React.FC = () => {

  const classes = useStyles();

  return (
    <Grid id='IncomeWrapper' item xs={12} className={classes.root}>
      <Grid container >
        <Typography variant="h5">
          Income.
        </Typography>
        <Grid container>
          <Grid item xs={5} className={classes.incomeSources}>
            <IncomeSource onValuesCasted={(values) => console.log('Values Changed ', values)}/>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body2">
              Resume.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Income
