import { combineReducers } from "redux";

import employesssReducers from "./employeeRedux/reducer";
import departmentReducer from "./departmentRedux/reducer";
const rootReducer = combineReducers({
  data: employesssReducers,
  depData: departmentReducer,
});

export default rootReducer;
