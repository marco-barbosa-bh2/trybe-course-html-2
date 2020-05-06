import React from 'react';

class Fetch extends React.Component {
  constructor(props){
    super(props);
    const url = this.props;
    this.state = {
      src: '',
    };
    this.nextDog = this.nextDog.bind(this);
    this.nextDogReady = this.nextDogReady.bind(this);
    this.dogName = this.dogName.bind(this);
  }
  
  componentDidMount() {
    fetch(this.props.url)
    .then(data => data.json())
    .then(dataJson => this.setState(()=>({src:[dataJson.message]})));
    if(this.state.src) this.dogName();
  }

  componentDidUpdate() {
    if(this.state.src) this.dogName();
  }

  nextDogReady() {
    fetch(this.props.url)
    .then(data => data.json())
    .then(dataJson => this.setState(()=>({src:[dataJson.message]})));
  }

  nextDog() {
    this.setState(() => ({src:''}),
      this.nextDogReady()
    );
  }

  dogName() {
    const urlString = this.state.src.toString();
    let newUrlString = '';
    let raca = '';
    const start = urlString.indexOf('breeds/') + 7;
    newUrlString = urlString.slice(start,urlString.length); 
    const end = newUrlString.indexOf('/');
    raca = newUrlString.slice(0,end);
    alert(raca);
  }


  render(){
    return(
        <div>
          <div>
            {
            !this.state.src && <h1>Loading...</h1>
            }
          </div>
          <div>
            {
            this.state.src && <img src={this.state.src} alt="Imagem de um cachorro" />
            }
          </div>
          <div>
            {
            this.state.src && <button onClick={this.nextDog}>Ache Outro Doguinho!</button>
            }
          </div>
        </div>
    );
  }
}

export default Fetch;
