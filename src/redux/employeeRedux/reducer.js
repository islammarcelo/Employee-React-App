import * as types from "./actionType";

const initialState = {
  employees: [],
  employee: {},
  loading: true,
};

const employesssReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_EMPLOYEES:
      return{
        ...state,
        loading:false,
        employees: action.payload,
      };
      case types.GET_EMPLOYEE:
      return{
        ...state,
        loading:false,
        employee: action.payload,
      };
      case types.ADD_EMPLOYEE:
      case types.DELETE_EMPLOYEE:
      case types.UPDATE_EMPLOYEE:
      case types.ADD_DEPARTMENT_TO_EMPLOYEE:    
        return {
          ...state,
          loading: false,
        }
    default:
      return state;
  }
};

export default employesssReducers;
