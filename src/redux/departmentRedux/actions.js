import axios from "axios";
import * as types from "./actionType";

const getDepartments = (departments) => ({
    type: types.GET_DEPARTMENTS,
    payload: departments,
});

const getDepartment = (department) => ({
    type: types.GET_DEPARTMENT,
    payload: department,
});

const departmentAdded = () => ({
    type: types.ADD_DEPARTMENT,
});

const departmentDeleted = () => ({
    type: types.DELETE_DEPARTMENT,
});

const departmentUpdated = () => ({
    type: types.UPDATE_DEPARTMENT,
});


export const loadDepartments = () => {
    return function(dispatch){
        axios.get('http://localhost:8080/api/department/get-all-departments').then((resp)=>{
        dispatch(getDepartments(resp.data));
    }).catch((error)=>console.log(error));
 }; 
}

export const getDepartmentAction = (id) =>{
  return function(dispatch){
    axios.get('http://localhost:8080/api/department/get-department/'+id).then((resp)=>{
      dispatch(getDepartment(resp.data));
    }).catch((error)=>console.log(error)); 
  };
}

export const addDepartmentAction = (department) =>{
    return function(dispatch){
      axios.post('http://localhost:8080/api/department/add-department',department).then((resp)=>{
        dispatch(departmentAdded());
        dispatch(loadDepartments());
      }).catch((error)=>console.log(error));
    };
  }

  export const deleteDepartmentAction = (id) =>{
    return function(dispatch){
      axios.delete('http://localhost:8080/api/department/delete-department/'+id).then((resp)=>{
        dispatch(departmentDeleted());
        dispatch(loadDepartments());
      }).catch((error)=>console.log(error)); 
    };
  }

  export const updateDepartmentAction = (id,department) =>{
    return function(dispatch){
      axios.put('http://localhost:8080/api/department/update-department/'+id,department).then((resp)=>{
        dispatch(departmentUpdated());
        dispatch(loadDepartments());
      }).catch((error)=>console.log(error)); 
    };
  }