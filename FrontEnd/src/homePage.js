import React, { Component } from 'react';
import FooterComponent from './components/Layout/FooterComponent';
import {Link} from 'react-router-dom';

class homePage extends React.Component {
    render() {
        return (
            <React.Fragment>
            <div>
        <h1 className=" text-danger font-italic"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        NutritionApp</h1>
                <h1 className="text-danger font-italic"><br/><br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Eat the best leave the rest</h1>    

            </div>
           <div className="container text-center"><br></br><br></br>
               <Link to="/bmi"><button className="btn btn-info btn-lg">Calculate BMI</button>
               </Link>
           </div>

            </React.Fragment>
        )
    }
}
export default homePage;