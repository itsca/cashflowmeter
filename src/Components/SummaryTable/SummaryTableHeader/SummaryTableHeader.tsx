import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';

interface Data {
  amount: number,
  name: string,
  isSpecial: boolean,
}

type Order = 'asc' | 'desc';

interface HeadRow {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}
interface SummaryTableHeaderProps {
  numSelected: number,
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void,
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void,
  order: Order,
  orderBy: string,
  rowCount: number
  isSpecialHeader: string,
}

function SummaryTableHeader(props: SummaryTableHeaderProps) {

  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, isSpecialHeader } = props;
  const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  const headRows: HeadRow[] = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Source' },
    { id: 'amount', numeric: true, disablePadding: false, label: 'Amount' },
    { id: 'isSpecial', numeric: false, disablePadding: false, label: isSpecialHeader },
  ];

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headRows.map(row => (
          <TableCell
            key={row.id}
            align={row.numeric ? 'right' : 'left'}
            padding={row.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === row.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === row.id}
              direction={order}
              onClick={createSortHandler(row.id)}
            >
              {row.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default SummaryTableHeader