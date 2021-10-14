import React, { useRef, useState } from 'react';
import AdditionalUtilityBtn from './components/AdditionalUtilityBtn';
import { AdditionalUtilities, NumbersArray, OperatorsArray } from './utils/dataBase';
import OperatorBtn from './components/OperatorBtn';
import NumberBtn from './components/NumberBtn';
import style from './App.module.scss';
import { useDispatch } from 'react-redux';
import useTypedSelector from './utils/useTypedSelector';
import { setSavedNumber } from './store/calculateReducer';
import MathimaticOperation from './utils/MathematicOperation';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { savedNumber } = useTypedSelector((state) => state.calculator)
  const [calcValue, setCalcValue] = useState('');
  const prevValue = useRef('');

  const setNumbersToInput = (value: string) => {
    if(checkLength()) return;

    setCalcValue((prev) => prev + value);
    prevValue.current = value;
  }

  const addOperator = (value: string) => {
    if(checkLength()) return;

    if(OperatorsArray.includes(prevValue.current)) {
      const newCalcValue = calcValue.replace(/[ , +,*,/,-]/g, '');
      setCalcValue(newCalcValue + " " + value + " ");
      return;
    }

    const expressionLength = calcValue.split(' ').length;
    
    if (expressionLength >= 3) {
      setCalcValue((prev) => String(MathimaticOperation(prev)) + " " + value + " ");
    } else {
      setCalcValue((prev) => prev + " " + value + " ");
    }

    prevValue.current = value;
  }

  const setResult = () => {
    setCalcValue(String(MathimaticOperation(calcValue)));
  }

  const resetValue = () => {
    setCalcValue('');
  };

  const saveValue = () => {
    const savedValue = calcValue.replace(/[ , +,*,/,-]/g, '');
    dispatch(setSavedNumber(savedValue));
  }

  const getSavedValue = () => {
    const calcValueLength = calcValue.trim().split(' ').length;
    
    if (calcValueLength === 2) { //Array with operand and operator
      setCalcValue((prev) => prev + savedNumber);
    } else {
      setCalcValue(savedNumber);
    }
  }

  const checkLength = () => {
    return calcValue.length >= 16
  };

  return (
    <div className={style.app}>
     <div className={style.calculator}>
       <div className={style.calculator__text}>
         <input className={style.calculator__text_input} type='text' readOnly maxLength={16} value={calcValue} placeholder='0' onChange={(e) => setCalcValue(e.target.value)}/>
       </div>
       <div className={style.calculator__btns}>
         <div className={style.calculator__additional_btns}>
           {AdditionalUtilities.map((btn: string, index) => <AdditionalUtilityBtn key={index} value={btn} getSavedCalcValue={getSavedValue} saveCalcValue={saveValue} resetBtnValue={resetValue}/>)}
         </div>
         <div className={style.calculator__operator_btns}>
           {OperatorsArray.map((btn: string, index) => <OperatorBtn key={index} value={btn} setResultOfOperation={setResult} setOperatorValue={addOperator}/>)}
         </div>
         <div className={style.calculator__number_btns}>
           {NumbersArray.map((btn: string, index) => <NumberBtn key={index} value={btn} setNumberValue={setNumbersToInput}/>)}
         </div>
       </div>
     </div>
    </div>
  );
}

export default App;
