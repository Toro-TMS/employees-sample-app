import { makeServer } from "./server";
//import { useEffect, useState } from "react";
import Employees from "./components/Employees";
import { useState, useEffect } from "react/cjs/react.development";
//import { ReactDOM } from "react";


if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}


function App() {
  const [employees, setEmployees] = useState([])
   useEffect(() => {
     fetch("api/employees")
        .then((respsonse) => respsonse.json())
        .then((json) => setEmployees(json))
        .catch((error) => {console.log(error)})
   }, [])
   console.log(employees, "🦋")
   
  return (
    <div>
      <header>
        <h1>Employees</h1>
      </header>
      <Employees  employees={employees}/>
    </div>
  );
}

export default App;

//response.schema.environment
//<ul>
// {employees && employees.map((employee) => (
//   <li key={employee.id}>{employee.firstName} {employee.lastName}</li>
// ))}
// </ul>