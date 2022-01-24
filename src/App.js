import { makeServer } from "./server";
import Employees from "./components/Employees";
import { useState, useEffect } from "react";


if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}


function App() {
  const [employees, setEmployees] = useState([])
   useEffect(() => {
     fetch("api/employees")
        .then((response) => response.json())
        .then((json) => setEmployees(json))
        .catch((error) => {console.log(error)})
   }, [])
   //console.log(employees, "🦋")
   
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


//      <Router> 
//         <Route exact path="/" component={App} />
//         <Route exact path="/employees" render={() => <Employees  employees={employees}/> } />
//         <Route path = "/employees/:id" render = {props => {console.log(props)}}/>
//       </Router> 
