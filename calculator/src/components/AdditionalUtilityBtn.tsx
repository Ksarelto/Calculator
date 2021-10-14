import style from './Btns.module.scss';
import { AdditionalProps, AdditionalBtns } from '../utils/types';

const AdditionalUtilityBtn: React.FC<AdditionalProps> = ({value, resetBtnValue, saveCalcValue, getSavedCalcValue}) => {

  const chooseAction = () => {
      switch(value){
        case AdditionalBtns.AC:
          resetBtnValue();
          break;
        case AdditionalBtns.SAVE_MEM:
          saveCalcValue();
          break;
        case AdditionalBtns.GET_MEM:
          getSavedCalcValue();  
      }
  }

  return (
       <input className={`${style.btn} ${style.btn_additional}`} type='button' value={value} onClick={chooseAction}/>
  )
}

export default AdditionalUtilityBtn;