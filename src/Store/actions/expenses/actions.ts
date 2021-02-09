import { SET_EXPENSE_SOURCES } from "../actionTypes";
import { SummaryTableRowData } from "../../../Components/SummaryTable/SummaryTable";

/**
 * Updates the values of the expenses sources on the global store. 
 */
export const setExpensesValues = (values: SummaryTableRowData[]) => ({ type: SET_EXPENSE_SOURCES, payload: { sources: values } });
