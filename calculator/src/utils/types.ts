export interface AdditionalProps {
  value: string;
  resetBtnValue: () => void;
  saveCalcValue: () => void;
  getSavedCalcValue: () => void;
}

export interface NumberProps {
  value: string;
  setNumberValue: (value: string) => void;
}

export interface OperatorProps {
  value: string;
  setOperatorValue: (value: string) => void;
  setResultOfOperation: () => void;
}

export enum AdditionalBtns {
  AC = 'AC',
  SAVE_MEM = 'MEM +',
  GET_MEM = 'MEM -',
}
