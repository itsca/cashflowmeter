import { SET_LIABILITIES_SOURCES, setLiabilitiesSourcesActionType } from "../../actions/actionTypes";
import { SummaryTableRowData } from "../../../Components/SummaryTable/SummaryTable";

export interface GlobalLiabilityStateType {
    sources:SummaryTableRowData[]
}

const initialState: GlobalLiabilityStateType = {
  sources: [
    {
      name: 'Loan 1',
      amount: 5000,
      id: '1',
      isSpecial: false
    }
  ]
};

export default function(state = initialState, action: setLiabilitiesSourcesActionType ): GlobalLiabilityStateType {
  
  switch (action.type) {
    case SET_LIABILITIES_SOURCES: {
      const newLiabilitySources = action.payload;
      return newLiabilitySources;
    }
    default:
      return state;
  }
}