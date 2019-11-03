import React from 'react';
import { TableRow, TableCell, Checkbox, TextField } from '@material-ui/core';
import { SummaryTableRowData } from '../SummaryTable';

interface State {
  name: string,
  amount: number
}

interface Props {
  labelId: string,
  row: SummaryTableRowData,
  rowName: string,
  isItemSelected: boolean,
  handleSelectClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, rowName: string) => void,
  onValueCasted: (values: State) => void
}


const SummaryTableItem: React.FC<Props> = (props: Props) => {
  const {row, isItemSelected, handleSelectClick, labelId, rowName} = props

  const [values, setValues] = React.useState<State>({
    name: row.name,
    amount: row.amount
  });

  const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };
  
  React.useEffect(() => {
    setValues(row);
  }, [row]);
  
  React.useEffect(() => {
    props.onValueCasted(values)
  }, [values]);

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
        <TextField
          id="input-name"
          value={values.name}
          onChange={handleChange('name')}
          margin="normal"
          variant="outlined"
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          id="input-amount"
          value={values.amount}
          onChange={handleChange('amount')}
          margin="normal"
          variant="outlined"
        />
      </TableCell>
    </TableRow>
  );
}

export default SummaryTableItem;
