import React, {useState, useEffect} from "react";
import TextField from '@mui/material/TextField';
import Button from "@material-ui/core/Button";
import { useHistory, useParams } from "react-router-dom";
import {useDispatch , useSelector} from "react-redux";
import { updateEmployeeAction, getEmployeeAction } from "../../redux/employeeRedux/actions";
const EditEmployee = () => {
  
  const [state, setState] = useState({
    username: "",
    age: "",
  });

  const [error, setError] = useState("");
  const {username, age}  = state;
  const {employee} = useSelector((state) => state.data);
  let history = useHistory();
  let dispatch = useDispatch();
  let {id} = useParams();


  useEffect(()=>{
    dispatch(getEmployeeAction(id));
  },[]); 

  useEffect(()=>{
    if(employee){
        setState({...employee});
    }
  },[employee]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!username || age == 0){
      setError("Please fill all input");
    }else{
      dispatch(updateEmployeeAction(id,state));
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
      <h2> Edit Employee</h2>
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

export default EditEmployee