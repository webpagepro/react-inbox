import React, { Component } from 'react';

class Message extends Component {


    render() {
let emailBody = this.props.message.body

        return (
            <div>
               <div class="row message read selected">
  <div class="col-xs-1">
    <div class="row">
      <div class="col-xs-2">
        <input type="checkbox" checked="false" />
      </div>
      <div class="col-xs-2">
        <i class="star fa fa-star-o"></i>
      </div>
    </div>
  </div>
  <div class="col-xs-11">
    <a href="#">
{emailBody}    </a>
  </div>
</div>
 
            </div>
        );
    }
}

export default Message;