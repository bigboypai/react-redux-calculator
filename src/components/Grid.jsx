import React from 'react'
import "../style/Grid.css"
import DigitButton from "./DigitButton"
import OperationButton from "./OperatorButton"
import '../style/Grid.css'

// para borrar:
import { useSelector } from 'react-redux'
const Grid = () => {
  const currentOperand = useSelector((state) => state.calculator.currentOperand)
  
  return (
    <>
      <div className="parent">
      <div className="div1"> { currentOperand } </div>
      <OperationButton operation="AC"/>
      <OperationButton operation="÷"/>
      <OperationButton operation="x"/>
      <OperationButton operation="-"/>
      <DigitButton digit="7"/>
      <DigitButton digit="8"/>
      <DigitButton digit="9"/>
      <OperationButton operation="+"/>
      <DigitButton digit="4"/>
      <DigitButton digit="5"/>
      <DigitButton digit="6"/>
      <div></div>
      <DigitButton digit="1"/>
      <DigitButton digit="2"/>
      <DigitButton digit="3"/>
      <div></div>
      <OperationButton operation="%"/>
      <DigitButton digit="0"/>
      <OperationButton operation="="/>
      <div></div>
</div>
    </>
  )
}

export default Grid