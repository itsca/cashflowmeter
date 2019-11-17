import React from 'react'
import { TableRow, TableCell, Checkbox, TextField } from '@material-ui/core'
import { SummaryTableRowData } from '../SummaryTable'
import { statement } from '@babel/template'



export type ItemValuesType = {
  amount: number,
  id: string,
  name: string,
}

interface Props {
  labelId: string,
  row: SummaryTableRowData,
  isItemSelected: boolean,
  handleSelectClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, rowId: string) => void,
  onValueCasted: (row: SummaryTableRowData, values: ItemValuesType) => void
}

/**
 * Shows a table row with inputs to update name and amount.
 */
const SummaryTableItem: React.FC<Props> = (props: Props) => {

  const {row, isItemSelected, handleSelectClick, labelId} = props
  const [values, setValues] = React.useState<ItemValuesType>();

  const handleChange = (name: keyof ItemValuesType) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    let newValues = {
      ...row,
      [name]: name === 'name' ? newValue : Number(newValue)
    }
    values && setValues({ ...values, [name]: event.target.value });
    props.onValueCasted(row, newValues)
  }

  return (
    <TableRow
      hover
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      selected={isItemSelected}
      >
      <TableCell padding="checkbox">
        <Checkbox
          checked={isItemSelected}
          inputProps={{ 'aria-labelledby': labelId }}
          onClick={event => handleSelectClick(event, row.id)}
        />
      </TableCell>
      <TableCell component="th" id={labelId} scope="row" padding="none">
        <TextField
          id="input-name"
          value={row.name}
          onChange={handleChange('name')}
          margin="normal"
          variant="outlined"
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          id="input-amount"
          type='number'
          value={row.amount}
          onChange={handleChange('amount')}
          margin="normal"
          variant="outlined"
        />
      </TableCell>
    </TableRow>
  );
}

export default SummaryTableItem
