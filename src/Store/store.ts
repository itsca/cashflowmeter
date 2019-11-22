import { createStore, Store, AnyAction } from "redux";
import rootReducer from "./reducers";
import { GlobalIncomeStateType } from "./reducers/income";

export type GlobalStateType = {
    Income: GlobalIncomeStateType;
}

const store = createStore(rootReducer);

export default store