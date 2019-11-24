import { GlobalStateType } from "./store";

export const getIncomeState = (state: GlobalStateType) => state.Income;

// Simple
export const getTotalIncome = (state: GlobalStateType) => state.Income.sources.reduce((a, b) => a + b.amount, 0)
export const getTotalPassiveIncome = (state: GlobalStateType) => state.Income.sources.reduce((a, b) => a + (b.isSpecial ? b.amount : 0), 0)
export const getTotalActiveIncome = (state: GlobalStateType) => state.Income.sources.reduce((a, b) => a + (!b.isSpecial ? b.amount : 0), 0)
// Complex
export const getPassiveIncomePercentage = (state: GlobalStateType) => percentageFrom(getTotalPassiveIncome(state), getTotalIncome(state))
export const getActiveIncomePercentage = (state: GlobalStateType) => percentageFrom(getTotalActiveIncome(state), getTotalIncome(state))

const percentageFrom = (partialValue: number, totalValue: number): number => (100 * partialValue) / totalValue
