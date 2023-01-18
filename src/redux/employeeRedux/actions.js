import axios from "axios";
import * as types from "./actionType";;

const getEmployees = (employees) => ({
  type: types.GET_EMPLOYEES,
  payload: employees,
});
const getEmployee = (employee) => ({
  type: types.GET_EMPLOYEE,
  payload: employee,
});
const employeeAdded = () => ({
  type: types.ADD_EMPLOYEE,
});

const employeeDeleted = () => ({
  type: types.DELETE_EMPLOYEE,
});

const employeeUpdated = () => ({
  type: types.UPDATE_EMPLOYEE,
});

const addedDepartmentToEmployee = () => ({
  type: types.ADD_DEPARTMENT_TO_EMPLOYEE,
});

export const loadEmployees = () =>{
  return function(dispatch){
    axios.get('http://localhost:8080/api/employee/get-all-employees').then((resp)=>{
      dispatch(getEmployees(resp.data));
    }).catch((error)=>console.log(error));
  };
}

export const getEmployeeAction = (id) =>{
  return function(dispatch){
    console.log(id);
    axios.get('http://localhost:8080/api/employee/get-employee/'+id).then((resp)=>{
      dispatch(getEmployee(resp.data));
    }).catch((error)=>console.log(error)); 
  };
}

export const addEmployeeAction = (employee) =>{
  return function(dispatch){
    console.log(employee);
    axios.post('http://localhost:8080/api/employee/add-employee',employee).then((resp)=>{
      dispatch(employeeAdded());
      dispatch(loadEmployees());
    }).catch((error)=>console.log(error));
  };
}



export const deleteEmployeeAction = (id) =>{
  return function(dispatch){
    axios.delete('http://localhost:8080/api/employee/delete-employee/'+id).then((resp)=>{
      dispatch(employeeDeleted());
      dispatch(loadEmployees());
    }).catch((error)=>console.log(error)); 
  };
}


export const updateEmployeeAction = (id,employee) =>{
  return function(dispatch){
    axios.put('http://localhost:8080/api/employee/update-employee/'+id,employee).then((resp)=>{
      dispatch(employeeUpdated());
      dispatch(loadEmployees());
    }).catch((error)=>console.log(error)); 
  };
}


export const addDepartmentToEmployeeAction = (employeeDepartment) => {
  return function(dispatch){
    console.log(employeeDepartment.username);
    console.log(employeeDepartment.department);
    axios.post('http://localhost:8080/api/employee/add-department-to-employee',employeeDepartment).then((resp)=>{
      dispatch(addedDepartmentToEmployee());
      dispatch(loadEmployees());
    }).catch((error)=>console.log(error)); 
  };
}
 