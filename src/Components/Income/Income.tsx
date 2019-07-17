import React from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

interface State {
  name: string;
  profession: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    root: {
      padding: '2%'
    }
  })
);

const Income: React.FC = () => {

  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    name: '',
    profession: ''
  });

  const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Grid id='IncomeWrapper' item xs={12} className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h5">
          Income.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Income
