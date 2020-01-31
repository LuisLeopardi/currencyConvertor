import React, {Component} from 'react';

class Select extends Component {

  render() {
    return (

     <select onChange={this.props.change} name={this.props.name} value={this.props.value}>

      { this.props.currencies.map(currencies =>

        <option

          key= {currencies} 

          value = {currencies}

          > {currencies}

        </option>) 

      }

     </select>

    );
  }
}
export default Select;