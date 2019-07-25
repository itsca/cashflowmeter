import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

interface IncomeSourceState {
  name: string;
  amount: number;
}

interface Props {
  onValuesCasted: (values: IncomeSourceState) => unknown
}

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

const IncomeSource: React.FC<Props> = (props) => {

  const classes = useStyles();
  const [values, setValues] = React.useState<IncomeSourceState>({
    name: 'Income source',
    amount: 0
  });

  React.useEffect(() => {
    const { onValuesCasted } = props
    onValuesCasted(values)
  }, [values]);



  const handleChange = (name: keyof IncomeSourceState) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Grid id='IncomeSourceWrapper' item xs={12} className={classes.root}>
      <Grid container >
        <Grid item xs={7}>
          <TextField
            // id="input-name"
            label="Source"
            className={classes.textField}
            value={values.name}
            onChange={handleChange('name')}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            // id="outlined-number"
            label="Amount"
            value={values.amount}
            onChange={handleChange('amount')}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default IncomeSource
