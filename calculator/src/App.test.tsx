import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import ReactDOM from 'react-dom';

describe('App component', () => {
  const root = document.createElement('div');

  it('should renders without crashing', () => {
    render(
      <Provider store={store}>
          <App />
      </Provider>,
    );

    ReactDOM.render(
      <Provider store={store}>
          <App />
      </Provider>,
      root,
    );
    ReactDOM.unmountComponentAtNode(root);
  });

  it('should make math operations', () => {
    render(
      <Provider store={store}>
          <App />
      </Provider>,
    );

    const numberBtn = screen.getByText('2');
    userEvent.click(numberBtn);
    const operatorBtn = screen.getByText('+');
    userEvent.click(operatorBtn);
    userEvent.click(numberBtn);
    const resultBtn = screen.getByText('=');
    userEvent.click(resultBtn);
    const textInput = screen.getByPlaceholderText('0');
    expect(textInput).toHaveValue('4');
  });

  it('should show result after adding new operator', () => {
    render(
      <Provider store={store}>
          <App />
      </Provider>,
    );

    const numberBtn = screen.getByText('2');
    userEvent.click(numberBtn);
    const operatorBtn = screen.getByText('+');
    userEvent.click(operatorBtn);
    userEvent.click(numberBtn);
    const textInput = screen.getByPlaceholderText('0');
    expect(textInput).toHaveValue('2 + 2');
    userEvent.click(operatorBtn);
    expect(textInput).toHaveValue('4 + ');
  });

  it('should change operator if choose another one', () => {
    render(
      <Provider store={store}>
          <App />
      </Provider>,
    );

    const numberBtn = screen.getByText('2');
    userEvent.click(numberBtn);
    const operatorPlusBtn = screen.getByText('+');
    userEvent.click(operatorPlusBtn);
    const textInput = screen.getByPlaceholderText('0');
    expect(textInput).toHaveValue('2 + ');
    const operatorDevideBtn = screen.getByText('/');
    userEvent.click(operatorDevideBtn);
    expect(textInput).toHaveValue('2 / ');
  });

  it('should clear input fiels', () => {
    render(
      <Provider store={store}>
          <App />
      </Provider>,
    );

    const numberBtn = screen.getByText('2');
    userEvent.click(numberBtn);
    const operatorBtn = screen.getByText('+');
    userEvent.click(operatorBtn);
    const resetBtn = screen.getByText('AC');
    userEvent.click(resetBtn);
    const textInput = screen.getByPlaceholderText('0');
    expect(textInput).toHaveValue('');
  });

  it('should save input in store', () => {
    render(
      <Provider store={store}>
          <App />
      </Provider>,
    );

    const numberBtn = screen.getByText('2');
    userEvent.click(numberBtn);
    userEvent.click(numberBtn);
    const saveBtn = screen.getByText('MEM +');
    userEvent.click(saveBtn);
    const { savedNumber } = store.getState().calculator
    expect(savedNumber).toBe('22');

  });

  it('should return number from store', () => {
    render(
      <Provider store={store}>
          <App />
      </Provider>,
    );

    const numberBtn = screen.getByText('2');
    userEvent.click(numberBtn);
    userEvent.click(numberBtn);
    const saveBtn = screen.getByText('MEM +');
    userEvent.click(saveBtn);
    const resetBtn = screen.getByText('AC');
    userEvent.click(resetBtn);
    const getSavedNumberBtn = screen.getByText('MEM -');
    userEvent.click(getSavedNumberBtn);
    const textInput = screen.getByPlaceholderText('0');
    expect(textInput).toHaveValue('22');

  });
});
