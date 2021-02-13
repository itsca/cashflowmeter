import { combineReducers } from "redux";
import Income from "./income/incomeReducer";
import Expenses from "./expenses/expensesReducer";
import Assets from "./assets/assetsReducer";
import Liabilities from "./liabilities/liabilitiesReducer";

export default combineReducers({ Assets, Income, Expenses, Liabilities });