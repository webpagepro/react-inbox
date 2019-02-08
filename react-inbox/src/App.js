import React, { Component } from 'react';
import Header from './components/Header.js';
import TopNavBar from './components/TopNavBar';
import Toolbar from './components/Toolbar';

import Footer from './components/Footer';
import {Container} from 'reactstrap'
import Messages from './components/Messages'
class App extends Component {
state={
  messages: [],
  error:false
}

componentDidMount = async () => {
  try {
    const res = await fetch('http://localhost:8000/messages')
    if (!res.ok) {
      throw new Error('Bad request to API')
    }
    const messages = await res.json()
   //setTimeout(() => {

      this.setState({
        messages: messages,
        isLoading: false
      })
 // }, 2000)
  }

  catch (error) {
    this.setState({ error: true })
  }
}
  render() {
    return (

<div className="App">
        
<Container>
       <Header className="App-header" />  
       <Toolbar />
 {this.state.isLoading 
 ? <div className="isLoading"> Is Loading... </div>  
 : <Messages messages={this.state.messages} /> }
       <Footer />

    </Container>
   </div>
    
    )
}
}
export default App
