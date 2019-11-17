import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import SummaryTableToolBar from './SummaryTableToolBar/SummaryTableToolBar';
import SummaryTableHeader from './SummaryTableHeader/SummaryTableHeader';
import SummaryTableBody from './SummaryTableBody/SummaryTableBody';
import { ItemValuesType } from './SummaryTableItem/SummaryTableItem';

interface Props {
  
}

export type SummaryTableRowData = {
  amount: number;
  name: string;
}

export type SummaryTableSortingOrder = 'asc' | 'desc';


function createRowData(
  name: string,
  amount: number
): SummaryTableRowData {
  return { name, amount };
}


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
  const [rows, setRows] = React.useState<SummaryTableRowData[]>([
    createRowData('Salary', 2600),
    createRowData('BCRUSDCDP', 240)
  ]);
  const [order, setOrder] = React.useState<SummaryTableSortingOrder>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof SummaryTableRowData>('amount');
  const [selected, setSelected] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Toggles sorting order
  function handleRequestSort(event: React.MouseEvent<unknown>, property: keyof SummaryTableRowData) {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }

  /**
   * When checked return an array with all names from rows
   * else empty array
   */
  function handleSelectAllClick(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }

  /**
   * Adds or deletes selected row by name from array
   * @param event 
   * @param name 
   */
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

  // Sets page number
  function handleChangePage(event: unknown, newPage: number) {
    setPage(newPage);
  }

  // Sets number of pages
  function handleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  // Updates the values on state with the changed item values. 
  const onItemValueChange = (row: SummaryTableRowData, itemValues: ItemValuesType) => {
    let newVaLues: SummaryTableRowData[] = [...rows]
    const index = rows.findIndex(_item => _item.name === row.name)
    if (index > -1) newVaLues[index] = itemValues;
    if (JSON.stringify(rows)!==JSON.stringify(newVaLues)) {
      setRows(newVaLues)
    }
  }

  // Pushes new row to rows
  const addRow = () => {
    const newRow: SummaryTableRowData = createRowData(`Income Source #${rows.length + 1}`, 0)
    const updatedRows: SummaryTableRowData[] = [...rows, newRow]
    setRows(updatedRows)
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <SummaryTableToolBar 
          numSelected={selected.length} 
          handleAddClick={addRow}
        />
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size='medium'
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
              handleItemValueChanged={onItemValueChange}
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
    </div>
  );
}