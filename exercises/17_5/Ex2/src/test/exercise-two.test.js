import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const {getByLabelText,queryByText} = render(<App />) // Caso precise de uma nova query adicione no object destructuring
    const campoDigitacao = getByLabelText('Tarefa:');
    const btn = queryByText('Adicionar');
    expect(campoDigitacao).toBeInTheDocument();
    listTodo.map((e) => {
      const tarefa = e;
      expect(fireEvent.change(campoDigitacao, { target: { value: tarefa } }));
      fireEvent.click(btn);
      const resultado = queryByText(e);
      expect(resultado).toBeInTheDocument();
    });
  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const listTodo = 'Marco Teste'; // Use esse array como base para realizar os testes.
    const { getByText } = render(<Item content={listTodo} />);
    const resultado = getByText(listTodo);
    expect(resultado).toBeInTheDocument();
  })
});
