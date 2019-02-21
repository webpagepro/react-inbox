import React, { Component } from 'react';
import Message from './Message'

class Messages extends Component {

   // selectedIndicator={this.selectedIndicator}
   //         selectedIndicatorFunc={this.selectedIndicatorFunc}

    render() {
console.log("Messages ", this.props.toggleRead)
    let listOfMessages = this.props.messages
    .map(message => {
      return  <Message 
                key={message.id} 
                message={message} 
                toggleRead={this.props.toggleRead}
                toggleStarred={this.props.toggleStarred} 
                toggleSelected={this.props.toggleSelected}  
                numOfUnreadMessages={this.props.numOfUnreadMessages}
                userSelectedMessage={this.props.userSelectedMessage}


                   /> 
      })
    console.log("listOfMessages", this.listOfMessages)


    

        return (
            <div>
   
{listOfMessages}  
     </div>
        );
        }
}

export default Messages;