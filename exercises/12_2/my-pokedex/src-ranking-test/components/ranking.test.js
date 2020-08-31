import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, fireEvent, getNodeText } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import TeladeRanking from './ranking';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return ({
    ...originalModule,
    BrowserRouter: ({ children }) => (<div>{children}</div>),
  })
})

// browser mocks
const localStorageMock = (function() {
  let store = {}
  return {
    getItem: function(key) {
      return store[key] || null
    },
    setItem: function(key, value) {
      store[key] = value.toString()
    },
    removeItem: function(key) {
      delete store[key]
    },
    clear: function() {
      store = {}
    },
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

afterEach(cleanup);

test('Testing if button goHome is working', () => {
  const { queryByTestId, history } = renderWithRouter(<TeladeRanking />);
  history.push('/ranking');
  const goHome = queryByTestId('btn-go-home');
  expect(goHome).toBeInTheDocument();
  fireEvent.click(goHome);
  const newPathname = history.location.pathname;
  expect(newPathname).toBe('/');
});

test('Testing if ranking is ordened', () => {
  const { queryByTestId } = renderWithRouter(<TeladeRanking />);
  const firstPlace = queryByTestId('player-name-0');
  expect(firstPlace).toBeInTheDocument();
  expect(getNodeText(firstPlace)).toBe('Gabriel Lucas');
});
