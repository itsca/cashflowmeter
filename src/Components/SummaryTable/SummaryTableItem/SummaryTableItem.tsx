import React from 'react';
import { Grid, TableRow, TableCell, Checkbox } from '@material-ui/core';
import { SummaryTableRowData } from '../SummaryTable';

interface Props {
  labelId: string,
  row: SummaryTableRowData,
  rowName: string,
  isItemSelected: boolean,
  handleSelectClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, rowName: string) => void
}

const SummaryTableItem: React.FC<Props> = (props: Props) => {
  const {row, isItemSelected, handleSelectClick, labelId, rowName} = props
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
}

export default SummaryTableItem;
