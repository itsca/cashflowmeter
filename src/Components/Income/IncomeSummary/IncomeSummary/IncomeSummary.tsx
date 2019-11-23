import React from 'react';
import { Grid, Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

interface Props {
  incomeTotal: number
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

  const { incomeTotal } = props
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
                000000
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Passive Income:
              </TableCell>
              <TableCell>
                000000
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
