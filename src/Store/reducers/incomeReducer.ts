import { SET_INCOME_SOURCES, setIncomeSourcesActionType } from "../actionTypes";
import { SummaryTableRowData } from "../../Components/SummaryTable/SummaryTable";

export interface GlobalIncomeStateType {
    sources:SummaryTableRowData[]
}

const initialState: GlobalIncomeStateType = {
  sources: []
};

export default function(state = initialState, action: setIncomeSourcesActionType ): GlobalIncomeStateType {
  switch (action.type) {
    case SET_INCOME_SOURCES: {
      const newIncomeSources = action.payload;
      return newIncomeSources;
    }
    default:
      return state;
  }
}