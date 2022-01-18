import { makeServer } from "./server";
//import { useEffect } from "react";
import Employees from "./components/Employees";
import { useState, useEffect } from "react/cjs/react.development";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}


function App() {
  const [employees, setEmployees] = useState([])
   useEffect(() => {
     fetch("api/employees")
        .then((respsonse) => respsonse.json())
        .then((json) => setEmployees(json))
   }, [])
   console.log(employees, "🦋")
   const employeeList = employees.map((employeeData, index) => {
     return(
       <li key = {index}>
          {employeeData.firstName}, {employeeData.lastName}
       </li>
     )
   })
  return (
    <div>
      <header>
        <h1>Employees</h1>
        <ul>
          <li>{employeeList}</li>
        </ul>
      </header>
      <Employees  employees={employees}/>
    </div>
  );
}

export default App;

//response.schema.environment