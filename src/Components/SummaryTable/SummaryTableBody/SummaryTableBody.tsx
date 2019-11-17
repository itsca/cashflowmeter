import React from 'react';
import { TableBody, TableCell, TableRow, Checkbox, TextField } from '@material-ui/core';
import { SummaryTableSortingOrder, SummaryTableRowData } from '../SummaryTable';
import SummaryTableItem, { ItemValuesType } from '../SummaryTableItem/SummaryTableItem';

interface Props {
  rows: SummaryTableRowData[],
  rowsPerPage: number,
  selected: string[],
  order: SummaryTableSortingOrder,
  orderBy: string,
  page: number,
  handleSelectClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, rowId: string) => void,
  handleItemValueChanged: (row: SummaryTableRowData, itemValues: ItemValuesType) => void,
}


/**
 * Compares objects by orderBy property
 * @param a first comparable
 * @param b second comparable
 * @param orderBy property to compare
 */
function desc<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

/**
 * Stabilizes the sorting based on the sorting provided
 * @param array array to sort
 * @param cmp sorting function
 */
function stableSort<T>(array: T[], cmp: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

/**
 * Return order based on property and order type  
 * @param order string
 * @param orderBy object property
 */
function getSorting<K extends keyof any>(
  order: SummaryTableSortingOrder,
  orderBy: K,
): (a: { [key in K]: number | string }, b: { [key in K]: number | string }) => number {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

/**
 * Wrapps the table items, in charge of sorting functions, casts all values.
 */
const SummaryTableBody: React.FC<Props> = (props: Props) => {

  const { rows, rowsPerPage, selected, order, orderBy, page, handleSelectClick, handleItemValueChanged } = props

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  const sortedRows = stableSort(rows, getSorting(order, orderBy))
  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  return (
    <TableBody>
      {sortedRows.map((formValue : SummaryTableRowData, index: number) => {
          const isItemSelected = isSelected(formValue.id);
          const labelId = `enhanced-table-checkbox-${index}`;

          return (
            <SummaryTableItem 
              row={formValue} 
              labelId={labelId}
              isItemSelected={isItemSelected} 
              handleSelectClick={handleSelectClick}
              onValueCasted={handleItemValueChanged}
              key={index}
            />
          );
        })}
      {emptyRows > 0 && (
        <TableRow style={{ height: 49 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
}

export default SummaryTableBody;
