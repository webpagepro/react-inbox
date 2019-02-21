import React, { Component } from 'react';
import { Form, FormGroup, Button } from 'reactstrap'
class Toolbar extends Component {

  //          className={`fa fa${ this.props.selectedIndicator() }-square-o`}
  state = {
    checked: false,
    disabled: true
  }

  _onClickReadHandle = (e) => {
    e.preventDefault();
    this.props.markAsReadFunc();
  }

  _onClickUnReadHandle = (e) => {
    e.preventDefault();
    this.props.markAsUnReadFunc();
  }

  _onChangeHandler = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  _onChangeDisabledHandler = (e) => {
    const { name, value } = e.target
    this.setState({
      checked: true,
      disabled: false
    })
  }


  allSelected = this.props.numOfSelectedMessages

  render() {
    console.log("TOOLBAR ", this.allSelected)
    let someSelected = this.props.numOfSelectedMessages > 0 && this.props.numOfSelectedMessages < this.props.messages.length ? '-minus' : null;

    let noneSelected = this.props.numOfSelectedMessages === 0 ? '' : null;

    console.log("Toolbar ", this.props.messages)

    return (
      <div>
        <div className="row toolbar">
          <div className="col-md-12">
            <a href="#" className="btn btn-danger">
              <i className="fa fa-plus"></i>
            </a>
            <p className="pull-right">
              <span className="badge badge">{this.props.numOfUnreadMessages}</span>
              unread messages
    </p>
            <button className="btn btn-default"
              onClick={() => this.props.selectedMessagesFunc()}
            >
              <i
                className={`fa fa${this.props.selectedMessages()}-square-o`}
              ></i>
            </button>

            <button onClick={this._onClickReadHandle}
              name='markRead'
              disabled={this.props.numOfSelectedMessages.length > 0 ? '' : 'disabled'}
              className={this.props.numOfSelectedMessages.length > 0 ? 'btn-primary' : 'btn-default'}
            >
              Mark As Read
    </button>

            <button onClick={this._onClickUnReadHandle}
              name='markRead'
              disabled={this.props.numOfSelectedMessages.length > 0 ? '' : 'disabled'}
              className={this.props.numOfSelectedMessages.length > 0 ? 'btn-warning' : 'btn-default'}
            >
              Mark As Unread
    </button>

            <select className="form-control label-select"
              //onChange={this._onChangeHandler}
              disabled={`${ this.props.disabledApplyLabelDropDown() }`}
                    onChange={ () => this.props.applyLabelAction( document.querySelectorAll('select')[0].value ) }
              name="selected"
              value="this.state.selected"
              >
              <option>Apply label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <select className="form-control label-select"
              disabled={`${this.props.disabledRemoveLabelDropDown()}`}
              onChange={() => this.props.removeLabelAction(document.querySelectorAll('select')[1].value)}
              >
              <option>Remove label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <button
                    className="btn btn-default"
                    disabled={`${ this.props.disabledDeleteMessageButton() }`}
                >
                <i
                    className="fa fa-trash-o"
                    onClick={ () => this.props.deleteMessage() }
                ></i>
                </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbar;