// Code Keypad Component Here
import React, {Component} from 'react',

class Keypad extends React.Component {


handleOnKeyUp = () => {
  console.log('Entering password...')
}


  render(){
    return (
      <div>
      <input type="password" onKeyUp={this.handleOnKeyUp} />
      </div>
    )
  }

}
