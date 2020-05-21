import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from './App';
import renderWithRouter from './renderWithRouter';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return ({
    ...originalModule,
    BrowserRouter: ({ children }) => (<div>{children}</div>),
  })
})

describe('Test all page',()=>{
  afterEach(cleanup);

  test('renders Meu Portfólio', () => {
    const { getByText } = renderWithRouter(<App />);
    const linkElement = getByText(/Meu Portfólio/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Navigating from home to About', () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText(/Sobre/i));
    const pathname = history.location.pathname;
    expect(pathname).toBe('/about');
    const aboutAll = getByText(/Sobre mim/i);
    expect(aboutAll).toBeInTheDocument();
  });

  test('Navigating from home to contact page', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history = {history}>
        <App />
      </Router>
    );
    const personalInfo = getByText(/Meu Portfólio/i);
    expect(personalInfo).toBeInTheDocument();
    fireEvent.click(getByText(/Contato/i));
    const contactPageTitle = getByText(/Contato:/i);
    expect(contactPageTitle).toBeInTheDocument();
  });

  test('navigating from home to projects page', () => {
    const { getByText } = renderWithRouter(<App />);

    const personalInfo = getByText(/Meu Portfólio/i);
    expect(personalInfo).toBeInTheDocument();

    fireEvent.click(getByText(/Projetos/i));

    const project = getByText(/Meus Projetos/i);
    expect(project).toBeInTheDocument();
  });
});
