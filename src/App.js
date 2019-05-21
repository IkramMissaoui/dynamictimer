import React, { Component } from 'react';
import './App.css';
import Timer from './component/timer';

class App extends Component {
  state = { 
    nombre:''
   }
  handleChange=(e)=>{   
  this.setState({
  nombre:e.target.value
})
  }
  render() { 
    return ( 
      <div>
        <input type="text" placeholder="Ecrire un nombre" onChange={this.handleChange} id="g" required/>
        <Timer  nombres={this.state.nombre}/>
      </div>
     );
  }
}
 
export default App;
