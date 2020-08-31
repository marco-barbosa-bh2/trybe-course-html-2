import React from 'react';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react';
import clickCounterReducer from './reducers/clickCounterReducer'
import * as serviceWorker from './serviceWorker';
import App from './App';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickCounterReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

beforeEach(cleanup);

test('Test if the page have a title `Contador de Clicks`', () => {
  const { queryByText } = renderWithRedux(<App />);
  const title = queryByText('Contador de Clicks');
  expect(title).toBeInTheDocument();
  expect(title.tagName).toBe('H2');
});

test('the page should has a button and a text 0', () => {
  const { queryByText } = renderWithRedux(<App />);
  const buttonAdicionar = queryByText('Click');  
  expect(buttonAdicionar).toBeInTheDocument();
  expect(queryByText('0')).toBeInTheDocument();
});

test('Test if counter is showing the actual count', () => {
  const { queryByText } = renderWithRedux(<App />, { initialState: { clickCounterReducer: 5 }});  
  expect(queryByText('5')).toBeInTheDocument();
});

test('Test if counting is working', () => {
  const { queryByText } = renderWithRedux(<App />);
  const buttonAdicionar = queryByText('Click');
  fireEvent.click(buttonAdicionar);
  expect(queryByText('1')).toBeInTheDocument();
});

test('Test if counting is working by a gap', () => {
  const { queryByText } = renderWithRedux(<App />, { initialState: { clickCounterReducer: 10 }});
  const buttonAdicionar = queryByText('Click');
  fireEvent.click(buttonAdicionar);
  expect(queryByText('11')).toBeInTheDocument();
});
