import React from 'react';
import {Link} from  'react-router-dom';

const NutritionPlanButton = () => {
  return(
   <React.Fragment>
        <Link to="addnutrition" className="btn btn-lg btn-info">
      Add NutritionPlan
        </Link>
   </React.Fragment>
  );  
}
export default  NutritionPlanButton;