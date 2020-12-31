import './App.css';

import { Component } from 'react'
import Navbar from './Navbar'
import Question from './Question'

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="container-fluid">
          <Navbar />
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">              
              <Question />
            </div>
            <div className="col-sm-3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
