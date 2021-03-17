import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import{deleteCustomer} from '../Actions/ProjectActions';
import '/Users/Raghav Singh/nutritionapp/src/App.css';

 class CustomerItem extends Component {
      onDeleteClick = (id)=>{
        this.props.deleteCustomer(id);
     //<Link to="/logOut"className="btn btn-danger btn-lg float-right">LogOut</Link>
     console.log(id);

     }
     tt(){
      window.history.forward();
     } 
    render() {
       const{name1,id1,payId}=this.props;
        return (
            <div>
            <table className="table table-dark table-bordered">
  <thead className="thead-light">
    <tr className="col-sm-1">
      <th scope="col" >ID</th>
      <th scope="col">NAME</th>
      <th scope="col" >UPDATE</th>
      <th scope="col" className="text-center">DELETE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="text-danger text-center">{id1}</td>
      <td className="text-danger text-center">{name1}</td>
      <td>
       <Link to={`/updateCustomer/${id1}`}><button className="btn btn-lg btn-secondary btn-success">Update</button></Link>
    </td>
      <td >
        <div className="text-center">
      <button className="btn btn-lg btn-secondary btn-danger float-left"onClick = {this.onDeleteClick.bind(this,id1)}>
          Delete</button>
          </div>
          </td>
          
      </tr>
  </tbody> 
</table>
<div>
<a href="/logOut" className="btn btn-info btn-lg float-right btn-danger" onClick={this.tt()}> 
            LogOut 
        </a> 
        </div>
        </div>
        )
    }
}
CustomerItem.propTypes = {
    deleteCustomer:PropTypes.func.isRequired
  };
  export default connect(null,{deleteCustomer})(CustomerItem);
