import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import {useDispatch } from "react-redux";
import { addDepartmentAction } from "../../redux/departmentRedux/actions";

const AddDepartment = () => {
  
  const [state, setState] = useState({
    name: "",
    code: "",
  });

  const [error, setError] = useState("");
  const {name, code}  = state;
  let history = useHistory();
  let dispatch = useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!name || code == 0){
      setError("Please fill all input");
    }else{
      dispatch(addDepartmentAction(state));
      setError("");
      history.push("/department");
    }
  };
  
  const handleInputChange = (e) =>{
    let{name, value} = e.target;
    setState({...state, [name]: value});
  };

    return (
    <div>
      <h2> Add Department</h2>
      {error && <h3 style={{color:"red"}}>{error}</h3>}
      <Button
      style={{width:"100px", marginTop: "30px", marginBottom: "30px"}}
      variant="contained"
      type="submit"
      color="secondary"
      onClick={()=> history.push("/department")}
      >
       Go Back  
      </Button>
     <form onSubmit={handleSubmit}
      component="form"sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
      noValidate
      autoComplete="off">
      <TextField id="outlined-basic"
        label="Department Name"
        name="name"
        value={name}
        onChange={handleInputChange}
        type="text"
        style={{marginRight: "10px"}}/>
      <TextField id="outlined-basic"
        label="Code"
        name="code"
        value={code}
        onChange={handleInputChange}
        type="number"
        style={{marginRight: "10px"}}/>
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

export default AddDepartment