import React, { Component } from 'react';

class Message extends Component {
  state = {
    checked: false,
  }


  _onChangeHandler = e => {
    const { name, value } = e.target
    console.log("onChangeHandler ", value)
    this.setState({
      checked: true
    })
  }
  _onClick = (e)=> {
    e.preventDefault()
   this.props.selectedIndicatorFunc(this.state.message)
  // console.log("checked  ", this.props.selectedIndicatorFun(this.state.message.id))
 
}
 //alert('onclickddww')
//console.log("_onClick ", e.target.value)
//<i className={`star fa fa-star${this.props.message.starred ? '' : '-o'}`}

//      <div className={`row message ${this.props.message.read ? 'read' : 'unread'} `} 



render() {
  //console.log("messageLabels ", this.messageLabel)
  let emailBody = this.props.message.body
  let emailSubject = this.props.message.subject
  
let messageLabel = this.props.message.labels.map(label => {
  return(
    <div key={label.id} className="label label-warning">{label}</div>
  )
}) 
  return (
    <div>
      <div className={`key={this.props.message.id} row message ${this.props.message.read ? 'read' : 'unread'} ${this.props.message.selected ? 'selected' : ''}`}>
        <div className="col-xs-1 ">
          <div className="row">
            <div className="col-xs-2">
              <input
                onClick={(e) => this.props.toggleSelected(this.props.message)} 
                type="checkbox"
                checked={this.props.message.selected} 
                onChange={this._onChangeHandler}
              />
            </div>
            <div className="col-xs-2">
              <i className={`star fa fa-star${this.props.message.starred ? '' : '-o'} `} 
              onClick={ () => this.props.toggleStarred(this.props.message)} 
              onChange={this._onChangeHandler}
              ></i>
            </div>
          </div>
        </div>

        <div class="col-xs-11">
   {messageLabel}
  </div>

        <div
        onClick={ () => this.props.toggleRead(this.props.message)}  
        className={`row message ${this.props.message.read ? '' : 'unread'}`} 
        >
          <a href="#">

            {emailSubject}    </a>
        </div>
      </div>

    </div>
  );
}
}

export default Message;