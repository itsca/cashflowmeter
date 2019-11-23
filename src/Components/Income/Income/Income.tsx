import React from 'react';
import { connect } from "react-redux";

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import SummaryTable, { SummaryTableRowData } from '../../SummaryTable/SummaryTable';
import IncomeSummary from '../IncomeSummary/IncomeSummary/IncomeSummary';
import { getIncomeState, getTotalIncome } from "../../../Store/selectors";
import { GlobalStateType } from '../../../Store/store';
import { GlobalIncomeStateType } from '../../../Store/reducers/incomeReducer';
import { setIncomeValues } from "../../../Store/actions";
import { setIncomeSourcesActionType } from '../../../Store/actionTypes';


interface Props {
  storedIncome?: GlobalIncomeStateType,
  setIncomeValues?: (values: SummaryTableRowData[]) => setIncomeSourcesActionType,
  storedIncomeTotal?: number
}

const useStyles = makeStyles({
  root: {
    padding: '2%'
  }
});

const Income: React.FC<Props> = (props: Props) => {

  const {storedIncome, storedIncomeTotal, setIncomeValues} = props
  const classes = useStyles();

  const storedIncomeSources = storedIncome && storedIncome.sources ? storedIncome.sources : [] 

  console.log('STORED INCOME SOURCES IS' , storedIncomeSources);
  

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
          incomeTotal={storedIncomeTotal || 0}
        />
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state: GlobalStateType, ownProps: Props): Props => {
  console.log('STATE', state.Income);
  
  const storedIncome = getIncomeState(state);
  const storedIncomeTotal = getTotalIncome(state);
  return { 
    ...ownProps,
    storedIncome,
    storedIncomeTotal, 
  };
};

export default connect(mapStateToProps, {setIncomeValues})(Income);
