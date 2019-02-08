import React, { Component } from 'react';
import Message from './Message'

class Messages extends Component {



    render() {
console.log("Messages ", this)
    let listOfMessages = this.props.messages.map(message => <Message key={message.id} message={message} /> )

        return (
            <div>
   
{listOfMessages}  
     </div>
        );
        }
}

export default Messages;