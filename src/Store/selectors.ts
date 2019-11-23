import { GlobalStateType } from "./store";

export const getIncomeState = (state: GlobalStateType) => state.Income;

// Sums the amount property of all Income spources
export const getTotalIncome = (state: GlobalStateType) => {
    console.log('SOURCES', state.Income.sources);
    console.log('SOURCES', state.Income.sources.reduce);
    
    return state.Income.sources.reduce((a, b) => a + b.amount, 0)}

// export const getTodoById = (store, id) =>
//   getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

// /**
//  * example of a slightly more complex selector
//  * select from store combining information from multiple reducers
//  */
// export const getTodos = store =>
//   getTodoList(store).map(id => getTodoById(store, id));

// export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
//   const allTodos = getTodos(store);
//   switch (visibilityFilter) {
//     case VISIBILITY_FILTERS.COMPLETED:
//       return allTodos.filter(todo => todo.completed);
//     case VISIBILITY_FILTERS.INCOMPLETE:
//       return allTodos.filter(todo => !todo.completed);
//     case VISIBILITY_FILTERS.ALL:
//     default:
//       return allTodos;
//   }
// };
