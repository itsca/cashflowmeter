import { SET_ASSET_SOURCES, setAssetsSourcesActionType } from "../../actions/actionTypes";
import { SummaryTableRowData } from "../../../Components/SummaryTable/SummaryTable";

export interface GlobalAssetStateType {
    sources:SummaryTableRowData[]
}

const initialState: GlobalAssetStateType = {
  sources: [
    {
      name: 'Savings',
      amount: 20000,
      id: '1',
      isSpecial: false
    },
    {
      name: 'CDP1',
      amount: 20000,
      id: '2',
      isSpecial: false
    }
  ]
};

export default function(state = initialState, action: setAssetsSourcesActionType ): GlobalAssetStateType {
  
  switch (action.type) {
    case SET_ASSET_SOURCES: {
      const newAssetSources = action.payload;
      return newAssetSources;
    }
    default:
      return state;
  }
}