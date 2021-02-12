import { SET_ASSET_SOURCES } from "../actionTypes";
import { SummaryTableRowData } from "../../../Components/SummaryTable/SummaryTable";

/**
 * Updates the values of the expenses sources on the global store. 
 */
export const setAssetsValues = (values: SummaryTableRowData[]) => ({ type: SET_ASSET_SOURCES, payload: { sources: values } });
