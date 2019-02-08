import React, { Component } from 'react';

class Message extends Component {
state={
  checked: false
}


_onChangeHandler = e => {
  const {name, value} = e.target
  console.log("onChangeHandler ", name, value)
  this.setState({ 
    checked: true
  }) 
}

_onClick = e => {
  e._onChangeHandler(this.state.checked, e => {
      console.log("e.click ", e)
  })
}
//  alert('onclickddww')
 // console.log("_onClick ", e.target.value)


    render() {
      //console.log("Message state.checked ", this.state.checked)
let emailBody = this.props.message.body
let emailSubject = this.props.message.subject

        return (
            <div>
               <div className={`row message ${this.props.message.read ? 'read' : 'unread'} `}>
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input 
                type="checkbox" 
                checked={this.props.message.selected}
                  name="checked"
                  value={this.state.checked}
                  onChange={this._onChangeHandler}
                />
      </div>
      <div className="col-xs-2">
        <i className={`star fa fa-star${this.props.message.starred ? '' : '-o'}`}></i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
    <a href="#">

{ emailSubject }    </a>
  </div>
</div>
 
            </div>
        );
    }
}

export default Message;