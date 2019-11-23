import React from 'react';
import { connect } from "react-redux";

import Typography from '@material-ui/core/Typography';
import { Grid, List, ListItem, ListItemText, Paper, Button, Divider, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import PersonalInfo from '../../Components/PersonalInfo/PersonalInfo';
import Income from '../../Components/Income/Income/Income';
import { getIncomeState } from "../../Store/selectors";
import { GlobalStateType } from '../../Store/store';
import { GlobalIncomeStateType } from '../../Store/reducers/incomeReducer';

interface Props {
  storedIncomeSources: GlobalIncomeStateType
}

const useStyles = makeStyles({
  root: {
    padding: '2%'
  }
});

const Calculator: React.FC<Props> = (props: Props) => {

  const { storedIncomeSources } = props
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.root}>
      <Grid item xs={12}>
        <Card>
          <PersonalInfo />
          <Income />
        </Card>
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state: GlobalStateType): Props => {
  const storedIncomeSources = getIncomeState(state);
  return { storedIncomeSources };
};
export default connect(mapStateToProps)(Calculator);
