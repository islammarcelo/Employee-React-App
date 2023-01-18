import "./App.css";
import { Switch, Route } from "react-router-dom";
import Employee from "./pages/employee/Employee";
import AddEmployee from "./pages/employee/AddEmployee";
import EditEmployee from "./pages/employee/EditEmployee";
import Home from "./pages/Home";
import Department from "./pages/department/Department";
import AddDepartment from "./pages/department/AddDepartment";
import EditDepartment from "./pages/department/EditDepartment";
import AddDepartmentToEmployee from "./pages/employee/AddDepartmentToEmployee";
import { useHistory} from "react-router-dom";
import Button from "@material-ui/core/Button";

function App() {
  let history = useHistory();

  return (

    <div className="App" >
      <div style={{ background : "black",left: 0, right: 0,top: 0,height: 30}}>
        <Button 
            variant="contained"
            type="submit"
            color="primary"
            fullWidth = {true}
            onClick={()=> history.push("/")}
           >
            Home 
      </Button>                                   
        
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/employee" component={Employee} />
        <Route exact path="/addEmployee" component={AddEmployee} />
        <Route exact path="/editEmployee/:id" component={EditEmployee} />
        <Route exact path="/department" component={Department} />
        <Route exact path="/addDepartment" component={AddDepartment} />
        <Route exact path="/editDepartment/:id" component={EditDepartment} />
        <Route exact path="/addDepartmentToEmployee/:username" component={AddDepartmentToEmployee} />
      </Switch>
    </div>
  );
}

export default App;
