import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import {useDispatch } from "react-redux";
import { addEmployeeAction } from "../../redux/employeeRedux/actions";
const AddEmployee = () => {
  
  const [state, setState] = useState({
    username: "",
    age: "",
  });
  const [error, setError] = useState("");
  const {username, age}  = state;
  let history = useHistory();
  let dispatch = useDispatch();


  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!username || age == 0){
      setError("Please fill all input");
    }else{
      dispatch(addEmployeeAction(state));
      setError("");
      history.push("/employee");
    }
  };
  
  const handleInputChange = (e) =>{
    let{name, value} = e.target;
    setState({...state, [name]: value})
  };

    return (
    <div>
      <h2> Add Employee</h2>
      {error && <h3 style={{color:"red"}}>{error}</h3>}
      <Button
      style={{width:"100px", marginTop: "30px", marginBottom: "30px"}}
      variant="contained"
      type="submit"
      color="secondary"
      onClick={()=> history.push("/employee")}
      >
       Go Back  
      </Button>
     <form onSubmit={handleSubmit}
      component="form"sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
      noValidate
      autoComplete="off">
      <TextField id="outlined-basic"
        label="Username"
        name="username"
        value={username}
        onChange={handleInputChange}
        type="text"
        style={{marginRight: "10px"}}/>
      <TextField id="outlined-basic"
        label="Age"
        name="age"
        value={age}
        onChange={handleInputChange}
        type="number"
        style={{marginRight: "10px"}}/>


      {/* <SelectDepartment/>  */}
      
      <Button
        style={{width:"100px"}}
        variant="contained"
        type="submit"
        color="primary">
       Submit 
      </Button>
    </form>

    </div>
    );
};

export default AddEmployee