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
import { useHistory } from "react-router-dom";
import { deleteDepartmentAction, loadDepartments } from "../../redux/departmentRedux/actions";

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

const Department = () => {
  const classes = useStyles();
  const buttonClasses = useStylesButton();
  const {departments} = useSelector(state => state.depData);
  let dispatch = useDispatch();
  let history = useHistory();

  useEffect(()=>{
    dispatch(loadDepartments());
  },[]);

  const handelDelete = (id)=>{
    if(window.confirm("Are you sure to delete")){
      dispatch(deleteDepartmentAction(id));
    }
  }
  return (
    <>
    <h2>Department </h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Code</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {departments &&
              departments.map((department) => (
                <StyledTableRow key={department.name}>
                  <StyledTableCell component="th" scope="row">
                    {department.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {department.code}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <div className={buttonClasses.root}>
                      <ButtonGroup
                        variant="contained"
                        aria-label="contained primary button group"
                      >
                        <Button
                          color="secondary"
                          style={{ marginRight: "5px" }}
                          onClick={()=> handelDelete(department.id)}
                        >
                          Delete
                        </Button>
                        <Button color="primary"
                         style={{ marginRight: "5px" }}
                         onClick={()=> history.push("/editDepartment/"+department.id)}
                         >
                          Edit
                        </Button>
                    
                      </ButtonGroup>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={buttonClasses.root}>
        <Button variant="contained" color="primary"
         onClick={()=>history.push("/addDepartment")}
         >
          Add Department
        </Button>
      </div>
    </>
  );
};

export default Department;
