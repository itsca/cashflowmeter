import React from 'react';
import { Grid } from '@material-ui/core';
import SummaryTable, { SummaryTableRowData } from '../../SummaryTable/SummaryTable';
import { makeStyles } from '@material-ui/styles';
import IncomeSummary from '../IncomeSummary/IncomeSummary/IncomeSummary';


const useStyles = makeStyles({
  root: {
    padding: '2%'
  }
});

const Income: React.FC = () => {


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
      id: '1',
      isSpecial: false
    },
    {
      name: 'BCRUSDCDP',
      amount: 240,
      id: '2',
      isSpecial: true
    }
  ]


  return (
    <Grid className={classes.root + ' Income'} container>
      <Grid item xs={6}>
        <SummaryTable 
          initialValues={initialIncomeValues}
          isSpecialHeader='Passive'
          onValuesChange={(updatedFormValues) => console.log('New Income Values: ', updatedFormValues)}
        />
      </Grid>
      <Grid item xs={6}>
        <IncomeSummary />
      </Grid>
    </Grid>
  );
}

export default Income;
