import { AnyAction } from 'redux';

interface InitialSavedNumber {
  savedNumber: string;
}

const actionType = 'CHANGE_NUMBER';

const initialState: InitialSavedNumber = { savedNumber: '' };

export const calculateReducer = (state = initialState, action: AnyAction): typeof initialState => {
  switch (action.type) {
    case actionType:
      return { ...state, savedNumber: action.payload};
    default:
      return state;
  }
};

interface IProgressActions {
  type: string;
  payload: string;
}

export const setSavedNumber = (payload: string): IProgressActions => ({
  type: actionType,
  payload,
});

