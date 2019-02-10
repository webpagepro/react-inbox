import React, { Component } from 'react';

class Message extends Component {
  state = {
    checked: false,
  }


  _onChangeHandler = e => {
    const { name, value } = e.target
    console.log("onChangeHandler ", name, value)
    this.setState({
      checked: true
    })
  }
  _onClick = (e)=> {
    e.preventDefault()
  //  this.props.selectedIndicatorFun(this.state.message)
   // console.log("checked  ", this.props.selectedIndicatorFun(this.state.message.id))
 
}
//  alert('onclickddww')
// console.log("_onClick ", e.target.value)
//<i className={`star fa fa-star${this.props.message.starred ? '' : '-o'}`}

//      <div className={`row message ${this.props.message.read ? 'read' : 'unread'} `} 
render() {
  
  let emailBody = this.props.message.body
  let emailSubject = this.props.message.subject

  return (
    <div>
      <div className='row message unread'>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input
                onClick={(e) => this.props.toggleRead(this.props.message)} 
                type="checkbox"
                checked={this.props.message.selected} 
                onChange={this._onChangeHandler}
              />
            </div>
            <div 
            >
              <i key={this.props.message.id}  onClick={ () => this.props.toggleStarred(this.props.message)}  
             className={`col-xs-2 star fa fa-star${this.props.message.starred ? '-o': '' } `} 
              ></i>
            </div>
          </div>
        </div>
        <div
        onClick={ () => this.props.toggleRead(this.props.message)}  
        className={`row message ${this.props.message.read ? 'read' : 'unread'} `} 
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