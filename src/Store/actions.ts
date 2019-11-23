import { SET_INCOME_SOURCES } from "./actionTypes";
import { GlobalIncomeStateType } from "./reducers/incomeReducer";
import { SummaryTableRowData } from "../Components/SummaryTable/SummaryTable";

// let nextTodoId = 0;

// export const addTodo = content => ({
//   type: ADD_TODO,
//   payload: {
//     id: ++nextTodoId,
//     content
//   }
// });

// export const toggleTodo = id => ({
//   type: TOGGLE_TODO,
//   payload: { id }
// });


/**
 * Updates the values of the income sources on the global store. 
 */
export const setIncomeValues = (values: SummaryTableRowData[]) => ({ type: SET_INCOME_SOURCES, payload: { sources: values } });
