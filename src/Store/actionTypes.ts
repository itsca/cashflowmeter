import { GlobalIncomeStateType } from "./reducers/income";

type actionType = {
    type: string
}

export const SET_INCOME_VALUES = "SET_INCOME_VALUES";
export interface setIncomeValuesActionType extends actionType {
    payload: GlobalIncomeStateType
}