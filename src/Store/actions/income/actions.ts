import { SET_INCOME_SOURCES } from "../actionTypes";
import { SummaryTableRowData } from "../../../Components/SummaryTable/SummaryTable";

/**
 * Updates the values of the income sources on the global store. 
 */
export const setIncomeValues = (values: SummaryTableRowData[]) => ({ type: SET_INCOME_SOURCES, payload: { sources: values } });
