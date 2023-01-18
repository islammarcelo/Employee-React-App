import React, {useState, useEffect} from "react";
import TextField from '@mui/material/TextField';
import Button from "@material-ui/core/Button";
import { useHistory, useParams } from "react-router-dom";
import {useDispatch , useSelector} from "react-redux";
import { updateEmployeeAction, getEmployeeAction } from "../../redux/employeeRedux/actions";
import { getDepartmentAction, updateDepartmentAction } from "../../redux/departmentRedux/actions";


const EditDepartment = () => {
  
  const [state, setState] = useState({
    name: "",
    code: "",
  });

  const [error, setError] = useState("");
  const {name, code}  = state;
  const {department} = useSelector((state) => state.depData);
  let history = useHistory();
  let dispatch = useDispatch();
  let {id} = useParams();


  useEffect(()=>{
    dispatch(getDepartmentAction(id));
  },[]); 

  useEffect(()=>{
    if(department){
        setState({...department});
    }
  },[department]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!name || code == 0){
      setError("Please fill all input");
    }else{
      dispatch(updateDepartmentAction(id,state));
      setError("");
      history.push("/department");
    }
  };
  
  const handleInputChange = (e) =>{
    let{name, value} = e.target;
    setState({...state, [name]: value})
  };

    return (
    <div>
      <h2> Edit Department</h2>
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

export default EditDepartment