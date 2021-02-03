import { SET_EXPENSE_SOURCES, setExpenseSourcesActionType } from "../../actions/actionTypes";
import { SummaryTableRowData } from "../../../Components/SummaryTable/SummaryTable";

export interface GlobalExpenseStateType {
    sources:SummaryTableRowData[]
}

const initialState: GlobalExpenseStateType = {
  sources: [
    {
      name: 'Rent',
      amount: 1200,
      id: '1',
      isSpecial: false
    },
    {
      name: 'Electric Bill',
      amount: 124,
      id: '2',
      isSpecial: false
    }
  ]
};

export default function(state = initialState, action: setExpenseSourcesActionType ): GlobalExpenseStateType {
  
  switch (action.type) {
    case SET_EXPENSE_SOURCES: {
      const newExpenseSources = action.payload;
      return newExpenseSources;
    }
    default:
      return state;
  }
}