import React from 'react';
import { connect } from "react-redux";

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import SummaryTable, { SummaryTableRowData } from '../../SummaryTable/SummaryTable';
import ExpensesSummary, { expensesSummaryInterface } from '../ExpensesSummary/ExpensesSummary';
import { GlobalStateType } from '../../../Store/store';
import { setExpensesValues } from "../../../Store/actions/expenses/actions";
import { setExpenseSourcesActionType } from '../../../Store/actions/actionTypes';
import { getExpensesState, getExpensesSummary } from '../../../Store/selectors/expenses/selectors';
import { GlobalExpenseStateType } from '../../../Store/reducers/expenses/expensesReducer';


interface Props {
  storedExpenses?: GlobalExpenseStateType,
  setExpensesValues?: (values: SummaryTableRowData[]) => setExpenseSourcesActionType,
  storedExpensesSummary?: expensesSummaryInterface
}

const useStyles = makeStyles({
  root: {
    padding: '2%'
  }
});

export const Expenses: React.FC<Props> = (props: Props) => {

  const {
      storedExpenses,
      setExpensesValues,
      storedExpensesSummary} = props
  const classes = useStyles();
  const storedExpensesSources = storedExpenses && storedExpenses.sources ? storedExpenses.sources : []

  return (
    <Grid className={classes.root + ' Expenses'} container>
      <Grid item xs={6}>
        <SummaryTable
          tableTitle={'Expenses'}
          initialValues={storedExpensesSources}
          isSpecialHeader='Unnecessary'
          onValuesChange={(updatedFormValues) => setExpensesValues && setExpensesValues(updatedFormValues)}
        />
      </Grid>
      <Grid item xs={6}>
        <ExpensesSummary
          incomeSummary={storedExpensesSummary}
        />
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state: GlobalStateType, ownProps: Props): Props => {
  const storedExpenses = getExpensesState(state);
  const storedExpensesSummary = getExpensesSummary(state);

  return { 
    ...ownProps,
    storedExpenses,
    storedExpensesSummary
  };
};

export default connect(mapStateToProps, {setExpensesValues})(Expenses);
