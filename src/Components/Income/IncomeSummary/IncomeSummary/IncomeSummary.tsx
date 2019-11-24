import React from 'react';
import { Grid, Table, TableBody, TableRow, TableCell, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

interface Props {
  incomeTotal: number,
  passiveIncomeTotal: number,
  activeIncomeTotal: number,
  activeIncomePercentage: number,
  passiveIncomePercentage: number,
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

const IncomeSummary: React.FC<Props> = (props: Props) => {

  const { incomeTotal, passiveIncomeTotal, activeIncomeTotal, activeIncomePercentage, passiveIncomePercentage } = props
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
                {activeIncomeTotal}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Passive Income:
              </TableCell>
              <TableCell>
                {passiveIncomeTotal}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Income Ratio:
              </TableCell>
              <TableCell>
                <Typography>{`Passive: ${passiveIncomePercentage}%`}</Typography>
                <Typography>{`Active: ${activeIncomePercentage}%`}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Total Income:
              </TableCell>
              <TableCell>
                  {incomeTotal}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </Grid>
  );
}

export default IncomeSummary;
