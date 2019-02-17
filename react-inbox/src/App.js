import React, { Component } from 'react';
import { Container } from 'reactstrap'
import Header from './components/Header.js';
import TopNavBar from './components/TopNavBar';
import Toolbar from './components/Toolbar';
import Footer from './components/Footer';
import Messages from './components/Messages';
import './App.css'

class App extends Component {
  state = {
    messages: [],
    error: false,
    isLoading: true
  }

  componentDidMount = async () => {
    try {
      const res = await fetch('http://localhost:8000/messages')
      if (!res.ok) {
        throw new Error('Bad request to API')
      }
      const messages = await res.json()
      // setTimeout(() => {

      this.setState({
        messages: messages.sort((a, b) => a.id - b.id),
        isLoading: false
      })
      // }, 2000)
      console.log("otherMessages", messages)

    }

    catch (error) {
      this.setState({ error: true })
    }
  }



  userSelectedMessage = (message) => {
    this.props.message.selected = !message.selected
    this.setState(this.state.messages.concat(message))
  }
  /* 
   addMessage = (data) => {
     fetch('http://localhost:8000/messages/add')
     method: POST,
     body: JSON.stringify(data),
     headers: {
       'Content-Type' : 'application/json'
     }
   }).then(res => res.json())
   .then(response => this.setState(({ messages }) =>
   response.checked = false;
   return {messages: [...message, response]}
  
 */

  selectedIndicator = () => {
    let amountSelected = this.state.messages.filter(message => {
      return message.selected
    }).length
    let action = ''

    if (amountSelected === this.state.messages.length) {
      action = '-check'
    } else if (amountSelected === 0) {
      action = ''
    } else {
      action = '-minus'
    }
    //console.log("App amount selected ", this.selectedIndicator)
    return action;
  }

  selectedIndicatorFunc = () => {
    let amountSelected = this.state.messages.filter(message => {
      return message.selected
    }).length

    if (amountSelected === this.state.messages.length) {
      this.setState({
        message: this.state.messages.map(message => {
          message.selected = false
          return message
        })
      })
    } else {
      this.setState({
        message: this.state.message.map(message => {
          message.selected = true
          return message
        })
      })
    }
  }  /* selectedIndicator={this.selectedIndicator}
           // selectedIndicatorFunc={this.selectedIndicatorFunc}
            markAsUnReadFunc={this.markAsUnReadFunc}
            markAsReadFunc={this.markAsReadFunc}
 */
  markAsReadFunc = () => {
    let selectedMessages = this.state.filter(message => message.selected);
    this.setState(this.state.messages.concat(selectedMessages.map(message => {
      message.read = true
      return message
    })))
  }

  markAsUnReadFunc = () => {
    let selectedMessages = this.state.filter(message => message.selected)
    this.setState(this.state.messages.concat(selectedMessages.map(message => {
      message.read = false
      return message
    })))
  }


  toggleRead = (selectedMessage) => {
    selectedMessage.read = !selectedMessage.read
    this.setState({
      messages: [...this.state.messages]
    })
    /*
    let otherMessages = this.state.messages.filter(message => selectedMessage.id != message.id)
    console.log('otherMessages', otherMessages)
    let changedMessage = {
      id: selectedMessage.id,
      subject: selectedMessage.subject,
      read: !selectedMessage.read,
      starred: selectedMessage.starred,
      labels: selectedMessage.labels
    }
    this.setState({
      messages: otherMessages.concat(changedMessage).sort((a, b) => a.id - b.id)//[...otherMessages, this.changedMessages]
    })
    */console.log("otherMessages", this.otherMessages)

  }
  toggleStarred = (selectedMessage) => {
    selectedMessage.starred = !selectedMessage.starred
    this.setState({
      messages: [...this.state.messages]
    })
  }

  toggleSelected = (selectedMessage) => {
    selectedMessage.checked = !selectedMessage.checked
    this.setState({
messages: [...this.state.messages]    })
  }

  deleteMessage = () => {
    this.setState({
      messages: this.state.messages.filter(message => {
        return !message.selected
      })
    })
  }

  render() {
    let numOfSelectedMessages = this.state.messages.filter(msg => msg.selected)
    let numOfUnreadMessages = this.state.messages.filter(msg => msg.read == false).length



    console.log("App numOfSelectedMessages - numOfUnreadMessages ", numOfSelectedMessages, numOfUnreadMessages)
    return (

      <div className="App">
        <Container>
          <TopNavBar />
          <Header className="App-header" />
          <Toolbar messages={this.state.messages.sort()}
            numOfUnreadMessages={numOfUnreadMessages}
            markAsReadFunc={this.markAsReadFunc}
            markAsUnReadFunc={this.markAsUnReadFunc}
            selectedIndicator={this.selectedIndicator}
            selectedIndicatorFunc={this.selectedIndicatorFunc}
            numOfSelectedMessages={numOfSelectedMessages}
            deleteMessage={this.deleteMessage}

          />
          {this.state.isLoading
            ? <div className="isLoading">Your email inbox is loading... </div>
            : <Messages messages={this.state.messages}
              toggleRead={this.toggleRead}
              toggleStarred={this.toggleStarred}
              toggleSelected={this.toggleSelected}

            />}
          <Footer />

        </Container>
      </div>

    )
  }
}
export default App
