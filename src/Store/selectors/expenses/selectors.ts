import { expensesSummaryInterface } from "../../../Components/Expenses/ExpensesSummary/ExpensesSummary";
import { GlobalStateType } from "../../store";

export const getExpensesState = (state: GlobalStateType) => state.Expenses;

// Simple
export const getTotalExpenses = (state: GlobalStateType) => state.Expenses.sources.reduce((a, b) => a + b.amount, 0)
export const getTotalPassiveExpenses = (state: GlobalStateType) => state.Expenses.sources.reduce((a, b) => a + (b.isSpecial ? b.amount : 0), 0)
export const getTotalActiveExpenses = (state: GlobalStateType) => state.Expenses.sources.reduce((a, b) => a + (!b.isSpecial ? b.amount : 0), 0)
// Complex
export const getPassiveExpensesPercentage = (state: GlobalStateType) => percentageFrom(getTotalPassiveExpenses(state), getTotalExpenses(state))
export const getActiveExpensesPercentage = (state: GlobalStateType) => percentageFrom(getTotalActiveExpenses(state), getTotalExpenses(state))

export const getExpensesSummary = (state: GlobalStateType): expensesSummaryInterface => ({
    totalExpenses: getTotalExpenses(state),
    activeExpenses: {
        total: getTotalActiveExpenses(state),
        percentage: getActiveExpensesPercentage(state)
    },
    passiveExpenses: {
        total: getTotalPassiveExpenses(state),
        percentage: getPassiveExpensesPercentage(state)
    }
})

const percentageFrom = (partialValue: number, totalValue: number): number => (100 * partialValue) / totalValue
