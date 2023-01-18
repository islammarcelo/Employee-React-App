import * as types from "./actionType"

const initialState = {
    departments: [],
    department: {},
    loading: true,
};

const departmentReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.GET_DEPARTMENTS:
            return {
                ...state,
                loading:false,
                departments: action.payload,
            };
        case types.GET_DEPARTMENT:
            return{
                ...state,
                loading:false,
                department: action.payload,
            };    
        case types.ADD_DEPARTMENT:
        case types.DELETE_DEPARTMENT:
        case types.UPDATE_DEPARTMENT:        
            return{
                ...state,
                loading: false,
            }    
        default:
            return state;
    }
};

export default departmentReducer;