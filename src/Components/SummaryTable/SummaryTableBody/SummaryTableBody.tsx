import React from 'react';
import { TableBody, TableCell, TableRow, Checkbox, TextField } from '@material-ui/core';
import { SummaryTableSortingOrder, SummaryTableRowData } from '../SummaryTable';

interface State {
  values: {
    [key: string]: string;
  }
}

interface Props {
  rows: SummaryTableRowData[],
  rowsPerPage: number,
  selected: string[],
  order: SummaryTableSortingOrder,
  orderBy: string,
  page: number,
  handleSelectClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, rowName: string) => void
}

function desc<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort<T>(array: T[], cmp: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting<K extends keyof any>(
  order: SummaryTableSortingOrder,
  orderBy: K,
): (a: { [key in K]: number | string }, b: { [key in K]: number | string }) => number {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const SummaryTableBody: React.FC<Props> = (props: Props) => {
  const { rows, rowsPerPage, selected, order, orderBy, page, handleSelectClick } = props

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  // const [values, setValues] = React.useState<State>({
  //   name: '',
  //   profession: ''
  // });

  // const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValues({ ...values, [name]: event.target.value });
  // };
  


  return (
    <TableBody>
      {stableSort(rows, getSorting(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row : SummaryTableRowData, index: number) => {
          const rowName = typeof row.name === 'string' ? row.name : '';
          const isItemSelected = isSelected(rowName);
          const labelId = `enhanced-table-checkbox-${index}`;

          return (
            <TableRow
              hover
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={row.name}
              selected={isItemSelected}
              >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={isItemSelected}
                  inputProps={{ 'aria-labelledby': labelId }}
                  onClick={event => handleSelectClick(event, rowName)}
                />
              </TableCell>
              <TableCell component="th" id={labelId} scope="row" padding="none">
                {/* <TextField
                  id="input-name"
                  label="Name"
                  className={classes.textField}
                  value={values.name}
                  onChange={handleChange('name')}
                  margin="normal"
                  variant="outlined"
                /> */}
                {row.name}
              </TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
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
