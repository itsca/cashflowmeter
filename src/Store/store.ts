import { createStore, Store, AnyAction } from "redux";
import rootReducer from "./reducers";
import { GlobalExpenseStateType } from "./reducers/expenses/expensesReducer";
import { GlobalIncomeStateType } from "./reducers/income/incomeReducer";

export type GlobalStateType = {
    Income: GlobalIncomeStateType,
    Expenses: GlobalExpenseStateType
}

const store = createStore(rootReducer);

export default store