import { SET_INCOME_VALUES } from "./actionTypes";
import { GlobalIncomeStateType } from "./reducers/income";

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
export const setIncomeValues = (values: GlobalIncomeStateType) => ({ type: SET_INCOME_VALUES, payload: { values } });
