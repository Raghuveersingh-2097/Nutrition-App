import React, { Component } from 'react'
import './App.css';
 class test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
          items: [],
          isLoaded: false,
        };
      }
      componentDidMount() {
        fetch(`http://localhost:8080/api/customer/all`)
          .then(res => res.json())
          .then(result => {
            this.setState({
              isLoaded: true,
              items: result
            });
          });
      }
    
      render() {
        const { items } = this.state;
          return (
            <ul>
               <p className="display-4 text-center font-italic">OUR CUSTOMERS</p>
            <br></br>
                <table className="table table-bordered table-info">
                <thead>
                  <tr>
                    <th scope="col">NAME</th>
                    <th scope="col">GENDER</th>
                    <th scope="col">DIET-PLAN</th>
                    <th scope="col">NUTRITION-PLAN</th>
                    <th scope="col">EXERCISE-PLAN</th>

                  </tr>
                </thead>
                {items.map(item => (
                     <tr>
                     <td>{item.name}</td>
                     <td>{item.gender}</td>
                     <td>{item.foodType}</td> 
                     <td>{item.planId}</td>  
                     <td>{item.exIdentifier}</td>   
                     </tr>
                     ))}
              </table>
            </ul>
          );
        }
      }
export default test;