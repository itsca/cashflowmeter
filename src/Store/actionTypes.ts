import { GlobalIncomeStateType } from "./reducers/incomeReducer";

type actionType = {
    type: string
}

export const SET_INCOME_SOURCES = "SET_INCOME_SOURCES";
export interface setIncomeSourcesActionType extends actionType {
    payload: GlobalIncomeStateType
}