import { SET_LIABILITIES_SOURCES } from "../actionTypes";
import { SummaryTableRowData } from "../../../Components/SummaryTable/SummaryTable";

/**
 * Updates the values of the expenses sources on the global store. 
 */
export const setLiabilitiesValues = (values: SummaryTableRowData[]) => ({ type: SET_LIABILITIES_SOURCES, payload: { sources: values } });
