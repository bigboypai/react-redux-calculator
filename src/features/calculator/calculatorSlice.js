import { createSlice } from '@reduxjs/toolkit'

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    currentOperand: '',
    previousOperand: '',
    operation: '',
  },
  reducers: {
    clear: (state) => {
      state.currentOperand = '',
      state.previousOperand = '';
    },
    append: (state, action) => {
      state.currentOperand = state.currentOperand.toString() + action.payload.digit.toString();
    },
    selectOperation: (state, action) => {
      if (state.previousOperand !== '') {
        let computation;
        const prev = parseFloat(state.previousOperand)
        const current = parseFloat(state.currentOperand)
        if (state.operation == '+') {
          computation = prev + current
        }
        if (state.operation == '=') {
          state.currentOperand = computation
        }
        state.currentOperand = computation
      }
      state.operation = action.payload.operation
      state.previousOperand = state.currentOperand
      state.currentOperand = ''
    }
  },
})

export const { clear, append, selectOperation } = calculatorSlice.actions

export default calculatorSlice.reducer