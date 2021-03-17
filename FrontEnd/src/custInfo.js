import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class custInfo extends Component {
    render() {
        return (
            <div className="text-center">
              <Link to={`/nutriplans/`}>
                  <button className="btn btn-primary btn-lg">NutritionPlan-Info</button></Link><br></br><br></br><br></br>
             <Link to={`/dietplans/`}>
                 <button className="btn btn-primary btn-lg">DietPlan-Info</button></Link><br></br><br></br><br></br>
                 <Link to={`/explans/`}>
                 <button className="btn btn-primary btn-lg">Exercise-Info</button></Link>
           </div>
        )
    }
}
