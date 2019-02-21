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
      /// setTimeout(() => {

      this.setState({
        messages: messages.sort((a, b) => a.id - b.id),
        isLoading: false
      })
      /// }, 2000)


      console.log("otherMessages", messages)

    }

    catch (error) {
      this.setState({ error: true })
    }
  }



  userSelectedMessage = (message) => {
    this.props.message.selected = !message.selected
    this.setState(prevState => {
      prevState.messages.concat(message)
    }
    )
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
  //actual number of user selected messages
  selectedMessages = () => {
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

  //amountSelected is the number of messages selected
  selectedMessagesFunc = () => {
    //amountSelected is the number of messages selected
    let amountSelected = this.state.messages.filter(message => {
      return message.selected
    }).length

    //if the amountSelected is equal to the current state of the number of messages selected
    if (amountSelected === this.state.messages.length) {
      this.setState(prevState => {
        return {
          //set all messages selected to false
          messages: prevState.messages.map(message => {
            message.selected = false
            return message
          })
        }
      })
    } else {//else messages selected to true
      this.setState(prevState => {
        return {
          messages: prevState.messages.map(message => {
            message.selected = true
            return message

          })
        }
      })
    }
  }  /* selectedIndicator={this.selectedIndicator}
           // selectedIndicatorFunc={this.selectedIndicatorFunc}
            markAsUnReadFunc={this.markAsUnReadFunc}
            markAsReadFunc={this.markAsReadFunc}
 */
  markAsReadFunc = () => {
    let selectedMessages = this.state.messages.filter(message => message.selected)
    this.setState(prevState => {
      prevState.messages.concat(selectedMessages.map(message => {
        message.read = true
        return message

      })
      )
    })
  }

  markAsUnReadFunc = () => {
    let selectedMessages = this.state.messages.filter(message => message.selected)
    this.setState(prevState => {
      prevState.messages.concat(selectedMessages.map(message => {
        message.read = false
        return message
      })
      )
    })
  }

  toggleRead = (selectedMessage) => {
    selectedMessage.read = !selectedMessage.read
    this.setState({
      messages: [...this.state.messages]
    })
  
    console.log("otherMessages", this.otherMessages)

  }
  toggleStarred = (selectedMessage) => {
    selectedMessage.starred = !selectedMessage.starred
    this.setState({
      messages: [...this.state.messages]
    })
  }

  toggleSelected = (selectedMessage) => {
    selectedMessage.selected = !selectedMessage.selected
    this.setState({
      messages: [...this.state.messages],
    })
  }

  deleteMessage = () => {
    this.setState({
      messages: this.state.messages.filter(message => {
        return !message.selected
      })
    })
  }


  disabledApplyLabelDropDown = () => {
    let selectedMessages = this.state.messages.filter( message => message.selected ).length
    return selectedMessages === 0 ? 'disabled' : ''
  }

  disabledRemoveLabelDropDown = () => {
    let selectedMessages = this.state.messages.filter( message => message.selected ).length
    return selectedMessages === 0 ? 'disabled' : ''    
  }

  applyLabelAction = (label) => {
    if (label === 'Apply label') return
    let selectedMessages = this.state.messages.filter( message => message.selected )

    this.setState( this.state.messages.concat( selectedMessages.map( message => {
      if ( message.labels.includes( label ) ) return message
      message.labels.push(label)
      return message
    } ) ) )
  }

  removeLabelAction = (label) => {
    if (label === 'Remove label') return
    let selectedMessages = this.state.messages.filter( message => message.selected )

    this.setState( prevState => {
      prevState.messages.concat( selectedMessages.map( message => {
      message.labels.splice(label, 1)
      return message
      } ) ) })
  }

  disabledDeleteMessageButton = () => {
    let selectedMessages = this.state.messages.filter( message => message.selected )
    let readStatusArray = selectedMessages.map( message => {
      return message.selected ? true : false
    } )
    return readStatusArray.includes( false ) || readStatusArray.length === 0  ? 'disabled' : ''        
  }  


  deleteMessage = () => {
    this.setState({
      messages: this.state.messages.filter( message => {
        return !message.selected
      } ).map( message => {
        message.selected = false
        return message
      } )
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
          <Toolbar messages={this.state.messages}
            numOfUnreadMessages={numOfUnreadMessages}
            markAsReadFunc={this.markAsReadFunc}
            markAsUnReadFunc={this.markAsUnReadFunc}
            selectedMessages={this.selectedMessages}
            selectedMessagesFunc={this.selectedMessagesFunc}
            numOfSelectedMessages={numOfSelectedMessages}
            applyLabelAction={this.applyLabelAction}
            removeLabelAction={this.removeLabelAction}
            deleteMessage={this.deleteMessage}
            userSelectedMessage={this.userSelectedMessage}
            disabledApplyLabelDropDown={this.disabledApplyLabelDropDown}
            disabledRemoveLabelDropDown={this.disabledRemoveLabelDropDown}
            disabledDeleteMessageButton={this.disabledDeleteMessageButton}
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
