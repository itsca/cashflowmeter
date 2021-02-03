import React from 'react';
import { Grid, Table, TableBody, TableRow, TableCell, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

interface localExpensesTypeInterface {
  total: number,
  percentage: number
}
export interface expensesSummaryInterface {
  totalExpenses: number,
  activeExpenses: localExpensesTypeInterface,
  passiveExpenses: localExpensesTypeInterface
}

interface Props {
  incomeSummary?: expensesSummaryInterface,
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

const defaultExpensesSummary: expensesSummaryInterface = {
  totalExpenses: 0,
  activeExpenses: {
    total: 0,
    percentage: 0,
  },
  passiveExpenses: {
    total: 0,
    percentage: 0,
  }
}

const ExpensesSummary: React.FC<Props> = (props: Props) => {

  const { incomeSummary } = props
  const { totalExpenses, activeExpenses, passiveExpenses } = incomeSummary || defaultExpensesSummary;
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
       <Table className={classes.table}>
          <TableBody>
            <TableRow>
              <TableCell>
                Active Expenses:
              </TableCell>
              <TableCell>
                {activeExpenses.total}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Passive Expenses:
              </TableCell>
              <TableCell>
                {passiveExpenses.total}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Expenses Ratio:
              </TableCell>
              <TableCell>
                <Typography>{`Passive: ${passiveExpenses.percentage}%`}</Typography>
                <Typography>{`Active: ${activeExpenses.percentage}%`}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Total Expenses:
              </TableCell>
              <TableCell>
                  {totalExpenses}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </Grid>
  );
}

export default ExpensesSummary;
