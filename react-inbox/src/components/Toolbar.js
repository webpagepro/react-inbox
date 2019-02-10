import React, { Component } from 'react';
import { Form, FormGroup, Button} from 'reactstrap'
class Toolbar extends Component {

    //          className={`fa fa${ this.props.selectedIndicator() }-square-o`}

    render() {
  


        console.log("Toolbar ", this.props.messages)
        return (
            <div>
           <div className="row toolbar">
  <div className="col-md-12">
    <p className="pull-right">
      <span className="badge badge">{this.props.numOfUnreadMessages}</span>
      unread messages
    </p>

    <button className="btn btn-default">
      <i  onClick={this.props.selectedIndicatorFunc}
    className="fa fa-square-o"

      ></i>
    </button>

    <button onClick={ () => this.props.markAsReadFunc}
     className="btn btn-default"
    >
      Mark As Read
    </button>

    <button  onClick={ () => this.props.markAsUnReadFunc}
    className="btn btn-default">
      Mark As Unread
    </button>

    <select className="form-control label-select">
      <option>Apply label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <select className="form-control label-select">
      <option>Remove label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <button className="btn btn-default">
      <i className="fa fa-trash-o"></i>
    </button>
  </div>
</div>  
            </div>
        );
    }
}

export default Toolbar;