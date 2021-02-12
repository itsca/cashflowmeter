import React from 'react';
import { connect } from "react-redux";

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import SummaryTable, { SummaryTableRowData } from '../SummaryTable/SummaryTable';
import { getAssetsState } from "../../Store/selectors/assets/selectors";
import { GlobalStateType } from '../../Store/store';
import { GlobalAssetStateType } from '../../Store/reducers/assets/assetsReducer';
import { setAssetsValues } from "../../Store/actions/assets/actions";
import { setAssetsSourcesActionType } from '../../Store/actions/actionTypes';


interface Props {
  storedAssets?: GlobalAssetStateType,
  setAssetsValues?: (values: SummaryTableRowData[]) => setAssetsSourcesActionType
}

const useStyles = makeStyles({
  root: {
    padding: '2%'
  }
});

export const Assets: React.FC<Props> = (props: Props) => {

  const {
      storedAssets,
      setAssetsValues} = props
  const classes = useStyles();

  const storedAssetsSources = storedAssets && storedAssets.sources ? storedAssets.sources : [] 
  console.log('😀', storedAssets);
  console.log('😀😀', storedAssetsSources);
  
  return (
    <Grid className={classes.root + ' Assets'} container>
      <Grid item xs={12}>
        <SummaryTable
          tableTitle={'Assets'} 
          initialValues={storedAssetsSources}
          isSpecialHeader='Passive'
          onValuesChange={(updatedFormValues) => setAssetsValues && setAssetsValues(updatedFormValues)}
        />
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state: GlobalStateType, ownProps: Props): Props => {
  const storedAssets = getAssetsState(state);
  console.log('state', state);
  console.log('storedAssets', storedAssets);
  
  

  return { 
    ...ownProps,
    storedAssets,
  };
};

export default connect(mapStateToProps, {setAssetsValues})(Assets);
