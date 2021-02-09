import { combineReducers } from "redux";
import Income from "./income/incomeReducer";
import Expenses from "./expenses/expensesReducer";
import Assets from "./assets/assetsReducer";

export default combineReducers({ Assets, Income, Expenses });