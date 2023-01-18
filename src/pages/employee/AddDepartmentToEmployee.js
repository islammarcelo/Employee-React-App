import  React ,  {useState ,useEffect} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { loadDepartments } from '../../redux/departmentRedux/actions';
import {useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { useHistory, useParams } from "react-router-dom";
import { addDepartmentToEmployeeAction } from '../../redux/employeeRedux/actions';


const AddDepartmentToEmployee = () => {

  
  const [dep, setdep] = useState('');
  const [state, setState] = useState({
    username: "",
    department: "",
  });
  let {username} = useParams();
  let history = useHistory();

  const {departments} = useSelector(state => state.depData);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadDepartments());
  },[]);
  
  const handleChange = (event) => {
    console.log(event.target.value);
    setdep(event.target.value);
    setState(state => {return {...state,username: username, department:event.target.value}});
    console.log(state);
  };

  const handleSubmit = () =>{
      console.log("data go to backend")
      console.log(state);
      dispatch(addDepartmentToEmployeeAction(state));
      history.push("/employee");
  };


  return (
   
      <FormControl sx={{ m: 1, minWidth: 120 , marginTop: 5}}>
        <InputLabel id="demo-simple-select-label">Department</InputLabel>
        <Select
          value={dep}
          label="Department"
          onChange={handleChange}
        >
         {departments && departments.map((department)=>(
            <MenuItem value={department.name}>{department.name}</MenuItem>
          ))}
        </Select>
        <Button 
            style={{width:"120px" ,marginTop:5}}
            variant="contained"
            type="submit"
            color="primary"
            onClick = {handleSubmit}
           >
            Submit 
      </Button>
      </FormControl>

      
    
  );

}

export default AddDepartmentToEmployee