import {combineReducers} from 'redux';
import errorsReducer from './errorReducers';
import customerReducer from "./customerReducer";
import NutritionPlanReducer from './NutritionPlanReducer';
import WeightLogReducer from './WeightLogReducer';
import CaloriesLogReducer from './CaloriesLogReducer';
import DietPlanReducer from './DietPlanReducer';
export default combineReducers({
    errors:errorsReducer,
    Customers: customerReducer,
    plans:NutritionPlanReducer,
    weightLogs:WeightLogReducer,
    calorieslogs:CaloriesLogReducer,
    dietplans:DietPlanReducer,
});