import  React ,  {useState ,useEffect} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { loadDepartments } from '../../redux/departmentRedux/actions';
import {useDispatch, useSelector } from "react-redux";

const SelectDepartment = () => {

  const [dep, setdep] = useState('');
  const {departments} = useSelector(state => state.depData);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadDepartments());
  },[]);
  
  const handleChange = (event) => {
    setdep(event.target.value);
  };
  console.log(departments)
  return (
   
      <FormControl >
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
      </FormControl>
    
  );
}

export default SelectDepartment

