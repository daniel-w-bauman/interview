import { Component } from 'react'

class Navbar extends Component {
  render(){
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Interview</a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
