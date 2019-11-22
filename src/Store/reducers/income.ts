import { SET_INCOME_VALUES, setIncomeValuesActionType } from "../actionTypes";
import { SummaryTableRowData } from "../../Components/SummaryTable/SummaryTable";

export interface GlobalIncomeStateType {
    sources:SummaryTableRowData[],
    totals: {
      totalIncome: string,
      activeIncome: string,
      passiveIncome: string
    }
}

const initialState: GlobalIncomeStateType = {
  sources: [],
  totals: {
    totalIncome: '0',
    activeIncome: '0',
    passiveIncome: '0'
  }
};

export default function(state = initialState, action: setIncomeValuesActionType ): GlobalIncomeStateType {
  switch (action.type) {
    case SET_INCOME_VALUES: {
      const newIncomeValues = action.payload;
      return newIncomeValues;
    }
    default:
      return state;
  }
}