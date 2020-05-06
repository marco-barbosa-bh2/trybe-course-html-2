import React from 'react';
import './App.css';
import state from './BrazilanStates';

// Exercicio 13.2

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
    };
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log('nome evento', event.target.name);
    if(name === 'name') {
      this.setState((state) => ({
        [name]: value.toUpperCase()
      }));
    }
    else {
      this.setState((state) => ({
        [name]: value
      }));
    }
  };

  changeAddress = (event) =>{
    const { name, value } = event.target;
    this.setState((state) => ({
      [name]: value.replace(/[^\w\s.,]/gi,'')
    }));
  };

  handleCityName = (event) => {
    const { name } = event.target;
    let { value } = event.target;
    if(value.match(/^\d/)) value = ''; 
    this.setState((state) => ({
      [name]: value
    }));
  };

  render() {
    return (
      <div className="App">
        <div><h1>Envie seu currículo</h1></div>
        <div>
          <fieldset>
            <legend>Dados Pessoais</legend>
            <label id="name"><span>Nome: </span>
              <input type="text" name="name" value={this.state.name} id="name" maxLength="40" onChange = {this.handleChange} />
            </label>
            <br />
            <label id="email"><span>E-mail: </span>
              <input type="text" name="email" value={this.state.email} id="email" maxLength="50" onChange = {this.handleChange} required />
            </label>
            <br />
            <label id="cpf"><span>CPF: </span>
              <input type="text" name="cpf" value={this.state.cpf} id="cpf" maxLength="11" onChange = {this.handleChange} required />
            </label>
            <br />
            <label id="endereco"><span>Endereço: </span>
              <input type="text" name="endereco" value={this.state.endereco} id="endereco" maxLength="200" onChange = {this.changeAddress} required />
            </label>
            <br />
            <label id="cidade"><span>Cidade: </span>
              <input type="text" name="cidade" value={this.state.cidade} id="cidade" maxLength="28" onChange = {this.handleChange} onBlur ={this.handleCityName} required />
            </label>
            <br />
            <label id="estado"><span>UF: </span>
              <select name="estado" value={this.state.estado} id="estado" onChange = {this.handleChange} required >
                {state.map(e => <option key={e}>{e}</option>)}
              </select>
            </label>
            <br />
            <input type="radio" name="tipo" value="casa" checked={this.state.tipo === 'casa'} onChange={this.handleChange} /> <span>Casa</span>
            <input type="radio" name="tipo" value="apartamento" checked={this.state.tipo === 'apartamento'} onChange={this.handleChange} /> <span>Apartamento</span>
          </fieldset>
        </div>
        <div>
          <fieldset>
            <legend>Último Emprego</legend>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default App;
