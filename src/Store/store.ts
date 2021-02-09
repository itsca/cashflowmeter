import { createStore } from "redux";
import rootReducer from "./reducers";
import { GlobalAssetStateType } from "./reducers/assets/assetsReducer";
import { GlobalExpenseStateType } from "./reducers/expenses/expensesReducer";
import { GlobalIncomeStateType } from "./reducers/income/incomeReducer";

export type GlobalStateType = {
    Assets: GlobalAssetStateType,
    Income: GlobalIncomeStateType,
    Expenses: GlobalExpenseStateType
}

const store = createStore(rootReducer);

export default store