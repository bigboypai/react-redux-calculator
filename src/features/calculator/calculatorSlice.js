import { createSlice } from '@reduxjs/toolkit'

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    currentOperand: '',
    previousOperand: ''
  },
  reducers: {
    clear: (state) => {
      state.currentOperand = '',
      state.previousOperand = '';
    },
    append: (state, action) => {
      state.currentOperand = state.currentOperand.toString() + action.payload.digit.toString();
      console.log(state.currentOperand)
    },
    selectOperations: (state, action) => {
    },
    compute: (state) => {}
  },
})

export const { clear, append } = calculatorSlice.actions

export default calculatorSlice.reducer

// Se necesitan tener dos valores even tho no los mostremos (ver línea 16 js calc GitHub)