import React, { Component } from 'react';
import Contact from './component/Contacts'

class App extends Component {
  state = {
    contacts: []
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users').then(res => res.json).then((data) => {
      this.setState({contacts: data})
    }).catch(console.log)
  }
  render() {
    return (
      <div>
        <Contact contacts={ this.state.contacts}/>
      </div>
    )
  }
};

export default App