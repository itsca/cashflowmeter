import React from 'react';
import { connect } from "react-redux";

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import SummaryTable, { SummaryTableRowData } from '../SummaryTable/SummaryTable';
import { getLiabilitiesState } from "../../Store/selectors/liabilities/selectors";
import { GlobalStateType } from '../../Store/store';
import { GlobalLiabilityStateType } from '../../Store/reducers/liabilities/liabilitiesReducer';
import { setLiabilitiesValues } from "../../Store/actions/Liabilities/actions";
import { setLiabilitiesSourcesActionType } from '../../Store/actions/actionTypes';


interface Props {
  storedLiabilities?: GlobalLiabilityStateType,
  setLiabilitiesValues?: (values: SummaryTableRowData[]) => setLiabilitiesSourcesActionType
}

const useStyles = makeStyles({
  root: {
    padding: '2%'
  }
});

export const Liabilities: React.FC<Props> = (props: Props) => {

  const {
      storedLiabilities,
      setLiabilitiesValues} = props
  const classes = useStyles();

  const storedLiabilitiesSources = storedLiabilities && storedLiabilities.sources ? storedLiabilities.sources : []
  
  return (
    <Grid className={classes.root + ' Liabilities'} container>
      <Grid item xs={12}>
        <SummaryTable
          tableTitle={'Liabilities'} 
          initialValues={storedLiabilitiesSources}
          isSpecialHeader='Debt'
          onValuesChange={(updatedFormValues) => setLiabilitiesValues && setLiabilitiesValues(updatedFormValues)}
        />
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state: GlobalStateType, ownProps: Props): Props => {
  const storedLiabilities = getLiabilitiesState(state);
  console.log('state', state);
  

  return { 
    ...ownProps,
    storedLiabilities,
  };
};

export default connect(mapStateToProps, {setLiabilitiesValues})(Liabilities);
