import React from 'react';
import { connect } from "react-redux";

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import SummaryTable, { SummaryTableRowData } from '../../SummaryTable/SummaryTable';
import IncomeSummary, { incomeSummaryInterface } from '../IncomeSummary/IncomeSummary/IncomeSummary';
import { getIncomeState, getIncomeSummary } from "../../../Store/selectors/income/selectors";
import { GlobalStateType } from '../../../Store/store';
import { GlobalIncomeStateType } from '../../../Store/reducers/incomeReducer';
import { setIncomeValues } from "../../../Store/actions";
import { setIncomeSourcesActionType } from '../../../Store/actionTypes';


interface Props {
  storedIncome?: GlobalIncomeStateType,
  setIncomeValues?: (values: SummaryTableRowData[]) => setIncomeSourcesActionType,
  storedIncomeSummary?: incomeSummaryInterface
}

const useStyles = makeStyles({
  root: {
    padding: '2%'
  }
});

export const Income: React.FC<Props> = (props: Props) => {

  const {
      storedIncome,
      setIncomeValues,
      storedIncomeSummary} = props
  const classes = useStyles();

  const storedIncomeSources = storedIncome && storedIncome.sources ? storedIncome.sources : [] 
  
  return (
    <Grid className={classes.root + ' Income'} container>
      <Grid item xs={6}>
        <SummaryTable 
          initialValues={storedIncomeSources}
          isSpecialHeader='Passive'
          onValuesChange={(updatedFormValues) => setIncomeValues && setIncomeValues(updatedFormValues)}
        />
      </Grid>
      <Grid item xs={6}>
        <IncomeSummary
          incomeSummary={storedIncomeSummary}
        />
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state: GlobalStateType, ownProps: Props): Props => {
  const storedIncome = getIncomeState(state);
  const storedIncomeSummary = getIncomeSummary(state);

  return { 
    ...ownProps,
    storedIncome,
    storedIncomeSummary,
  };
};

export default connect(mapStateToProps, {setIncomeValues})(Income);
