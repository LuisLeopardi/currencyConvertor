import React, {Component} from 'react';
import Select from './components/select.jsx';
import DateBox from './components/dateBox.jsx';


class App extends Component {

  state = {

    currencies: [],

    base: 'USD',

    convertTo: 'EUR',

    amount: '',

    result: '',

    date: '',

    Api: () => {

      fetch(`https://api.exchangeratesapi.io/latest?base=USD`)
      .then(response => response.json())
      .then(data =>{
        this.setState(
          {
           date: data.date,
           currencies: Object.keys(data.rates)
          });
      })
    },

  }

  handleSwap = () => {
    this.setState({ base: this.state.convertTo, convertTo: this.state.base 
      }, this.handleResult
    )
  }

  handleSelect = e => {
      this.setState({
        [e.target.name]: e.target.value
      }, this.handleResult 
    )
  }

  handleInput = e => {
    this.setState({amount:e.target.value 
      }, this.handleResult 
    )
  }

  handleResult = e => {

    let amount = this.state.amount;

    if (amount === isNaN) {

      return

    } else {

      fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
      .then(response => response.json())
      .then(data =>{

        const result = data.rates[this.state.convertTo] * amount;
        this.setState({result})
      })
    }
  }

  render() {

    const { currencies, base, amount, convertTo, result, date } = this.state;
    this.state.Api();

    return (

      <div id='box'>

      <form>

       <input onChange = {this.handleInput} type='number' value={amount}/>

       <Select change = {this.handleSelect} name='base' value={base} currencies={currencies} />

       <button type = 'button' onClick={this.handleSwap}> &#8593; &#8595; </button>

       <input value = {

       result === null ? 'calculating...' : 

       result 

       } 

       disabled = {true} />

       <Select change= {this.handleSelect} name='convertTo' value={convertTo} currencies={currencies} />

      </form>

      <DateBox date= {date} />
        
      </div>
    );
  }
}
export default App;