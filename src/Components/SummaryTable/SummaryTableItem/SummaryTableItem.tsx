import React from 'react'
import { TableRow, TableCell, Checkbox, TextField, Switch } from '@material-ui/core'
import { SummaryTableRowData } from '../SummaryTable'

interface Props {
  labelId: string,
  row: SummaryTableRowData,
  isItemSelected: boolean,
  handleSelectClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, rowId: string) => void,
  onValueCasted: (row: SummaryTableRowData, values: SummaryTableRowData) => void
}

/**
 * Shows a table row with inputs to update name and amount.
 */
const SummaryTableItem: React.FC<Props> = (props: Props) => {

  const {row, isItemSelected, handleSelectClick, labelId} = props
  const [values, setValues] = React.useState<SummaryTableRowData>();

  const handleChange = (name: keyof SummaryTableRowData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = name === 'name' ? event.target.value : name === 'isSpecial' ? Boolean(event.currentTarget.checked) : Number(event.target.value)
    let newValues = {
      ...row,
      [name]: newValue
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
      <TableCell align="right">
        <Switch
          checked={row.isSpecial}
          inputProps={{ 'aria-labelledby': 'isSelected' + labelId }}
          onChange={handleChange('isSpecial')}
        />
      </TableCell>
    </TableRow>
  );
}

export default SummaryTableItem
