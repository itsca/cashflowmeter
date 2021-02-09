import { GlobalExpenseStateType } from "../reducers/expenses/expensesReducer";
import { GlobalIncomeStateType } from "../reducers/income/incomeReducer";

type actionType = {
    type: string
}

export const SET_INCOME_SOURCES = "SET_INCOME_SOURCES";
export const SET_EXPENSE_SOURCES = "SET_EXPENSE_SOURCES";

export interface setIncomeSourcesActionType extends actionType {
    payload: GlobalIncomeStateType
}
export interface setExpenseSourcesActionType extends actionType {
    payload: GlobalExpenseStateType
}