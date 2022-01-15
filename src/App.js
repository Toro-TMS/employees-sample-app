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
     async function fetchEmployees() {
       try {
         const response = makeServer()
         console.log(response.environment, "👹")
         setEmployees(response.seeds)
       } catch(err) {
         console.log(`${err} 👾`)
       }
     }
     fetchEmployees()
   }, [])
  return (
    <div>
      <header>
        <h1>Employees</h1>
      </header>
      <Employees  info={employees}/>
    </div>
  );
}

export default App;
