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
    .then(dataJson => this.setState(()=>({src:dataJson.message})));
    if(this.state.src) this.dogName();
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Próximo Update: ', nextState.src);
    if (this.dogName(nextState.src).includes('terrier')) {
      this.componentWillUnmount();
      return false;
    }
    return true; 
  }
  
  componentDidUpdate() {
    if(this.state.src) alert(this.dogName());
  }

  componentWillUnmount() {
    console.log('Desmontei');
    this.setState(() => ({src:'https://images.dog.ceo/breeds/springer-english/n02102040_7555.jpg'}));
  }

  nextDogReady() {
    fetch(this.props.url)
    .then(data => data.json())
    .then(dataJson => this.setState(()=>({src:dataJson.message})));
  }

  nextDog() {
    this.setState(() => ({src:''}),
      this.nextDogReady()
    );
  }

  dogName(url) {
    let urlString = '';
    if (url) { urlString = url.toString(); }
    else { urlString = this.state.src.toString(); }
    let newUrlString = '';
    let raca = '';
    const start = urlString.indexOf('breeds/') + 7;
    newUrlString = urlString.slice(start,urlString.length); 
    const end = newUrlString.indexOf('/');
    raca = newUrlString.slice(0,end);
    return raca;
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
