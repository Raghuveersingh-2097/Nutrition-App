import React from 'react';
import {Link} from 'react-router-dom';

const CreateWeightLogButton=()=>{
    return(
<React.Fragment>
        <Link to="addWeightLog" className=" btn btn-info btn-lg">
        ADD WEIGHTLOG  
    </Link>                 
    </React.Fragment>
    );
}
export default CreateWeightLogButton;


