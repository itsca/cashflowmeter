import { createStore, Store, AnyAction } from "redux";
import rootReducer from "./reducers";
import { GlobalIncomeStateType } from "./reducers/incomeReducer";

export type GlobalStateType = {
    Income: GlobalIncomeStateType;
}

const store = createStore(rootReducer);

export default store