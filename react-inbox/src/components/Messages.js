import React, { Component } from 'react';
import Message from './Message'

class Messages extends Component {



    render() {
console.log("Messages ", this)
    let listOfMessages = this.props.messages.map(message => <Message key={message.id} message={message} /> )

        return (
            <div>
<div class="row toolbar">
  <div class="col-md-12">
    <p class="pull-right">
      <span class="badge badge">2</span>
      unread messages
    </p>

    <button class="btn btn-default">
      <i class="fa fa-check-square-o"></i>
    </button>

    <button class="btn btn-default">
      Mark As Read
    </button>

    <button class="btn btn-default">
      Mark As Unread
    </button>

    <select class="form-control label-select">
      <option>Apply label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <select class="form-control label-select">
      <option>Remove label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <button class="btn btn-default">
      <i class="fa fa-trash-o"></i>
    </button>
  </div>
</div>     
{listOfMessages}  
     </div>
        );
        }
}

export default Messages;