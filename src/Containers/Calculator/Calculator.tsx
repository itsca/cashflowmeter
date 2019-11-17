import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, List, ListItem, ListItemText, Paper, Button, Divider, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PersonalInfo from '../../Components/PersonalInfo/PersonalInfo';
import SummaryTable, { SummaryTableRowData } from '../../Components/SummaryTable/SummaryTable';

const useStyles = makeStyles({
  root: {
    padding: '2%'
  }
});

const Calculator: React.FC = () => {

  const classes = useStyles();

  //TODO: MOVE THIS TO REQUEST FROM API
  // [
  //   createRowData('Salary', 2600),
  //   createRowData('BCRUSDCDP', 240)
  // ]
  const initialIncomeValues: SummaryTableRowData[] = [
    {
      name: 'Salary',
      amount: 3250,
      id: '1'
    },
    {
      name: 'BCRUSDCDP',
      amount: 240,
      id: '2'
    }
  ]

  return (
    <Grid item xs={12} className={classes.root}>
      <Grid item xs={12}>
        <Card>
          <PersonalInfo />
          <Grid container>
            <Grid item xs={6}>
              <SummaryTable 
                initialValues={initialIncomeValues}
                onValuesChange={(updatedFormValues) => console.log('New Income Values: ', updatedFormValues)}
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Calculator
