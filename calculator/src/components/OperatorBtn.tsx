import style from './Btns.module.scss';
import { OperatorProps } from '../utils/types';

const OperatorBtn: React.FC<OperatorProps> = ({value, setOperatorValue, setResultOfOperation}) => {
  const setOperator = () => {
    if(value === '='){
      setResultOfOperation();
    } else {
      setOperatorValue(value);
    }
  }
  
  return (
       <input className={`${style.btn} ${style.btn_operator}`} type='button' value={value} onClick={setOperator}/>
  )
}

export default OperatorBtn;