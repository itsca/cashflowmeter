import { createStore } from "redux";
import rootReducer from "./reducers";
import { GlobalAssetStateType } from "./reducers/assets/assetsReducer";
import { GlobalExpenseStateType } from "./reducers/expenses/expensesReducer";
import { GlobalIncomeStateType } from "./reducers/income/incomeReducer";
import { GlobalLiabilityStateType } from "./reducers/liabilities/liabilitiesReducer";

export type GlobalStateType = {
    Assets: GlobalAssetStateType,
    Income: GlobalIncomeStateType,
    Expenses: GlobalExpenseStateType,
    Liabilities: GlobalLiabilityStateType
}

const store = createStore(rootReducer);

export default store