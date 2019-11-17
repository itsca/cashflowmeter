import React from 'react';
import uniqueIdUtil from "lodash.uniqueid";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';

import SummaryTableToolBar from './SummaryTableToolBar/SummaryTableToolBar';
import SummaryTableHeader from './SummaryTableHeader/SummaryTableHeader';
import SummaryTableBody from './SummaryTableBody/SummaryTableBody';
import { ItemValuesType } from './SummaryTableItem/SummaryTableItem';

interface Props {
  initialValues?: SummaryTableRowData[]
}

export type SummaryTableRowData = {
  amount: number,
  id: string,
  name: string,
}

export type SummaryTableSortingOrder = 'asc' | 'desc';

// Generates an uniqueId that is also not already on the array of rows
function generateUniqueId (array: SummaryTableRowData[]): string {
  const newId: string = uniqueIdUtil();
  const idExists: boolean = array.filter((el) => el.id === newId).length > 0
  return idExists ? generateUniqueId(array) : newId
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

/**
 * A table that allows its items values to change and exports updated values
 * in real time.
 */
export default function SummaryTable(props: Props) {

  const { initialValues } = props 
  const classes = useStyles();
  const [rows, setRows] = React.useState<SummaryTableRowData[]>(initialValues && initialValues.length > 0 ? initialValues : []);
  const [order, setOrder] = React.useState<SummaryTableSortingOrder>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof SummaryTableRowData>('amount');
  const [selectedRows, setSelectedRows] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Returns a new row data object
  function createRowData(
    name: string,
    amount: number
  ): SummaryTableRowData {
    return { amount, id: generateUniqueId(rows), name };
  }

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
      const newSelecteds = rows.map(n => n.id);
      setSelectedRows(newSelecteds);
      return;
    }
    setSelectedRows([]);
  }

  /**
   * Adds or deletes selectedRows row by id from selectedRows rows array.
   * @param event 
   * @param id 
   */
  function handleRowSelected(event: React.MouseEvent<unknown>, id: string) {
    const selectedIndex = selectedRows.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedRows, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelected = newSelected.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1),
      );
    }
    
    setSelectedRows(newSelected);
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
    const index = rows.findIndex(_item => _item.id === row.id)
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

  // Removes row from rows array by index
  const removeRows = () => {
    let updatedRows: SummaryTableRowData[] = [...rows]
    let updatedselectedRows: string[] = [...selectedRows]
    selectedRows.forEach(rowId => {
      updatedRows = updatedRows.filter(row => row.id !== rowId);
      updatedselectedRows = updatedselectedRows.filter(selectedId => selectedId !== rowId);
    })
    setRows(updatedRows)
    setSelectedRows(updatedselectedRows)
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <SummaryTableToolBar 
          numSelected={selectedRows.length} 
          handleAddClick={addRow}
          handleDeleteClick={removeRows}
        />
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size='medium'
          >
            <SummaryTableHeader
              numSelected={selectedRows.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <SummaryTableBody
              rows={rows}
              rowsPerPage={rowsPerPage}
              selectedRows={selectedRows}
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