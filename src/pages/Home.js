import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const Home = () => {
   let history = useHistory();

    return (
       <div>
         <h2>Home </h2>
        <Button
            style={{width:"200px",  marginRight: "5px"}}
            variant="contained"
            type="submit"
            color="primary"
            onClick={()=> history.push("/employee")}>
               Employee
        </Button>

        <Button
            style={{width:"200px",  marginRight: "5px"}}
            variant="contained"
            type="submit"
            color="primary"
            onClick={()=> history.push("/department")}>
               Department
        </Button>
       </div>     
    );
}

export default Home