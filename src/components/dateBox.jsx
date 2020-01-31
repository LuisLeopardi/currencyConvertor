import React, {Component} from 'react';

class DateBox extends Component {

state = {

	position: {
		bottom: '-70px'
	}

}

handleClick = () => {
	this.setState( {position: {bottom: '0px'} } );
}

handleSecondClick = () => {
  this.setState( {position: {bottom: '-70px'} } );
}


render(){

 return (
  
  <div id='date' style= {this.state.position}>

  	<div id='show' 

    onClick = {

    this.state.position.bottom === '-70px' ? 

    this.handleClick : 

    this.handleSecondClick 

    }

    > &#8643; &#8638; </div>

    <p> Results from the date: {this.props.date} </p> 
    <p> Source: <a href='https://exchangeratesapi.io'> https://exchangeratesapi.io </a> </p>  

  </div>

 )
}

}

export default DateBox;