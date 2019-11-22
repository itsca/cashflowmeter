import React from 'react';
import { connect } from "react-redux";

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import SummaryTable, { SummaryTableRowData } from '../../SummaryTable/SummaryTable';
import IncomeSummary from '../IncomeSummary/IncomeSummary/IncomeSummary';
import { getIncomeState } from "../../../Store/selectors";
import { GlobalStateType } from '../../../Store/store';
import { GlobalIncomeStateType } from '../../../Store/reducers/income';


interface Props {
  globalIncome: GlobalIncomeStateType
}

const useStyles = makeStyles({
  root: {
    padding: '2%'
  }
});

const Income: React.FC<Props> = (props: Props) => {

  const {globalIncome} = props

  const classes = useStyles();
  
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

  console.log('INITIAL GLOBAL Income IS' , globalIncome);
  

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

const mapStateToProps = (state: GlobalStateType): Props => {
  const globalIncome = getIncomeState(state);
  return { globalIncome };
};
export default connect(mapStateToProps)(Income);
