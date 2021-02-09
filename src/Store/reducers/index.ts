import { combineReducers } from "redux";
import Income from "./income/incomeReducer";
import Expenses from "./expenses/expensesReducer";

export default combineReducers({ Income, Expenses });