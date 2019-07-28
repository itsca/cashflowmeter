import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import SummaryTableToolBar from './SummaryTableToolBar/SummaryTableToolBar';
import SummaryTableHeader from './SummaryTableHeader/SummaryTableHeader';
import SummaryTableBody from './SummaryTableBody/SummaryTableBody';

interface Props {
  
}

export type SummaryTableRowData = {
  amount: number;
  name: string;
}

function createData(
  name: string,
  amount: number
): SummaryTableRowData {
  return { name, amount };
}

const rows = [
  createData('Cupcake', 30),
  createData('Donut', 452),
  createData('Eclair', 260),
  createData('Frozen yoghurt', 15),
  createData('Gingerbread', 356),
  createData('Honeycomb', 40),
  createData('Ice cream sandwich', 23),
  createData('Jelly Bean', 37),
  createData('KitKat', 518),
  createData('Lollipop', 39),
  createData('Marshmallow', 40),
  createData('Nougat', 360),
  createData('Oreo', 437),
];

export type SummaryTableSortingOrder = 'asc' | 'desc';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    tableWrapper: {
      overflowX: 'auto',
    },
  }),
);

export default function SummaryTable(props: Props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState<SummaryTableSortingOrder>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof SummaryTableRowData>('amount');
  const [selected, setSelected] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  function handleRequestSort(event: React.MouseEvent<unknown>, property: keyof SummaryTableRowData) {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }

  function handleSelectAllClick(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }

  function handleRowSelected(event: React.MouseEvent<unknown>, name: string) {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  }

  function handleChangePage(event: unknown, newPage: number) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  function handleChangeDense(event: React.ChangeEvent<HTMLInputElement>) {
    setDense(event.target.checked);
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <SummaryTableToolBar numSelected={selected.length} />
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <SummaryTableHeader
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <SummaryTableBody 
              rows={rows}
              rowsPerPage={rowsPerPage}
              selected={selected}
              order={order}
              orderBy={orderBy}
              page={page}
              handleSelectClick={handleRowSelected}
            />
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}