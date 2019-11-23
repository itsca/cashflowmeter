import { SET_INCOME_SOURCES, setIncomeSourcesActionType } from "../actionTypes";
import { SummaryTableRowData } from "../../Components/SummaryTable/SummaryTable";

export interface GlobalIncomeStateType {
    sources:SummaryTableRowData[]
}

const initialState: GlobalIncomeStateType = {
  sources: [
    {
      name: 'Salary',
      amount: 3250,
      id: '1',
      isSpecial: false
    },
    {
      name: 'BCRUSDCDP',
      amount: 240,
      id: '2',
      isSpecial: true
    }
  ]
};

export default function(state = initialState, action: setIncomeSourcesActionType ): GlobalIncomeStateType {
  console.log('&&&payload', action.payload);
  
  switch (action.type) {
    case SET_INCOME_SOURCES: {
      console.log('THE ACTION', action)
      const newIncomeSources = action.payload;
      return newIncomeSources;
    }
    default:
      return state;
  }
}