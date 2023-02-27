import { useDispatch } from 'react-redux'
import { append } from '../features/calculator/calculatorSlice'
import '../style/Buttons.css'

const DigitButton = ( { digit } ) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(append({digit: digit}))
  }

  return (
    <button className='calculatorBtn' onClick={() => handleClick()}> {digit} </button>
  )
}

export default DigitButton