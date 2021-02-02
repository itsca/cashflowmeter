import React from 'react';
import { Grid, Table, TableBody, TableRow, TableCell, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

interface localIncomeTypeInterface {
  total: number,
  percentage: number
}
export interface incomeSummaryInterface {
  totalIncome: number,
  activeIncome: localIncomeTypeInterface,
  passiveIncome: localIncomeTypeInterface
}

interface Props {
  incomeSummary?: incomeSummaryInterface,
}

const useStyles = makeStyles({
  root: {
    height: '100%',
    padding: '2%'
  },
  table: {
    height: '100%'
  }
});

const defaultIncomeSummary: incomeSummaryInterface = {
  totalIncome: 0,
  activeIncome: {
    total: 0,
    percentage: 0,
  },
  passiveIncome: {
    total: 0,
    percentage: 0,
  }
}

const IncomeSummary: React.FC<Props> = (props: Props) => {

  const { incomeSummary } = props
  const { totalIncome, activeIncome, passiveIncome } = incomeSummary || defaultIncomeSummary;
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
       <Table className={classes.table}>
          <TableBody>
            <TableRow>
              <TableCell>
                Active Income:
              </TableCell>
              <TableCell>
                {activeIncome.total}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Passive Income:
              </TableCell>
              <TableCell>
                {passiveIncome.total}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Income Ratio:
              </TableCell>
              <TableCell>
                <Typography>{`Passive: ${passiveIncome.percentage}%`}</Typography>
                <Typography>{`Active: ${activeIncome.percentage}%`}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Total Income:
              </TableCell>
              <TableCell>
                  {totalIncome}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </Grid>
  );
}

export default IncomeSummary;
