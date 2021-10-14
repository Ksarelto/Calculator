import style from './Btns.module.scss';
import { NumberProps } from '../utils/types';

const NumberBtn: React.FC<NumberProps> = ({value, setNumberValue}) => {
  const addNumberToInput = () => {
    setNumberValue(value);
  }
  
  return (
     <input className={`${style.btn} ${style.btn_number}`} type='button' value={value} onClick={addNumberToInput}/>
  )
}

export default NumberBtn;