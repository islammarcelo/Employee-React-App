import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useSelector, useDispatch } from "react-redux";
import { deleteEmployeeAction } from "../../redux/employeeRedux/actions";
import { useHistory } from "react-router-dom";
import { loadEmployees } from "../../redux/employeeRedux/actions";

const useStylesButton = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    marginTop: 100,
    minWidth: 900,
  },
});

const Employee = () => {
  const classes = useStyles();
  const buttonClasses = useStylesButton();
  const {employees} = useSelector(state => state.data);
  let dispatch = useDispatch();
  let history = useHistory();
  const{buttonShow, setButtonShow} = useState(true);

  useEffect(()=>{
    dispatch(loadEmployees());
    console.log(employees);
  },[]);

  const handelDelete = (id)=>{
    if(window.confirm("Are you sure to delete")){
      dispatch(deleteEmployeeAction(id));
    }
  }

  return (
    <>
    <h2>Employee </h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Username</StyledTableCell>
              <StyledTableCell align="center">Age</StyledTableCell>
              <StyledTableCell align="center">Department</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees &&
              employees.map((employee) => (
                <StyledTableRow key={employee.username}>
                  <StyledTableCell component="th" scope="row">
                    {employee.username}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {employee.age}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {employee.department == null ? "" : employee.department.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <div className={buttonClasses.root}>
                      <ButtonGroup
                        variant="contained"
                        aria-label="contained primary button group"
                      >
                        <div> 
                            {employee.department != null ?  null:   <Button
                            color="primary"
                            style={{ marginRight: "5px" }}
                            onClick={()=>  history.push("/addDepartmentToEmployee/"+employee.username)}
                          > Add Department </Button>}
                        </div>
                
                        <Button
                          color="secondary"
                          style={{ marginRight: "5px" }}
                          onClick={()=> handelDelete(employee.id)}
                        > Delete </Button>

                        <Button color="primary"
                         style={{ marginRight: "5px" }}
                         onClick={()=> history.push("/editEmployee/"+employee.id)}
                        >Edit</Button>
                      </ButtonGroup>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={buttonClasses.root}>
        <Button variant="contained" color="primary" onClick={()=>history.push("/addEmployee")}>
          Add Employee
        </Button>
      </div>
    </>
  );
};

export default Employee;
