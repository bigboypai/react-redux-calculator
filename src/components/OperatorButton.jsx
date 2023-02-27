import { useDispatch } from 'react-redux'
import { clear } from '../features/calculator/calculatorSlice'
import '../style/Buttons.css'

const OperationButton = ( { operation } ) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    switch (operation) {
      case 'AC':
        dispatch(clear())
        break;
    
      default:
        break;
    }
  }
  
  return <button className='calculatorBtn' onClick={() => handleClick()}> { operation } </button>
}

export default OperationButton