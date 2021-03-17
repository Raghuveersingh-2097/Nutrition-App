import React, { Component } from 'react'
import CreateDietPlanButton from './DietPlan/CreateDietPlanButton';
import NutritionPlanButton from './NutritionPlan/NutritionPlanButton';
import { connect } from "react-redux";
import {getAllCustomers} from '../Actions/ProjectActions';
import { PropTypes } from "prop-types";

class AdminDashboard extends Component {
    componentDidMount() {
        //This lifecyclehook is used to get the customers from redux store's state
        this.props.getAllCustomers();
      }
      tt(){
        window.history.forward();
      }
    render() {
        return (
        <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center align-center">ADMIN</h1>
                        <br />
                        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                        <CreateDietPlanButton/> &nbsp;&nbsp;&nbsp;<NutritionPlanButton/>
                        <br />
                        <hr />
                        <div>
<a href="home" className="btn btn-info btn-lg float-right btn-danger" onClick={this.tt()}> 
            LogOut 
        </a> 
        </div>
                    </div>
                </div>
            </div> 
        </div>
        )
    }
}
AdminDashboard.propTypes = {
    customers: PropTypes.object.isRequired,
    getAllCustomers: PropTypes.func.isRequired,
  };
  const mapStateToProps = (state) => ({
    Customers: state.Customers,
  });
  export default connect(
    mapStateToProps,
    { getAllCustomers }
  )(AdminDashboard);
