import { useDispatch } from 'react-redux'
import { selectOperation } from '../features/calculator/calculatorSlice'
import '../style/Buttons.css'

const OperationButton = ( { operation } ) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(selectOperation({operation: operation}))
  }
  
  return <button className='calculatorBtn' onClick={() => handleClick()}> { operation } </button>
}

export default OperationButton