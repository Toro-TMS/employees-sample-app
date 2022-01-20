import Employee from "./Employee"
//import { useState, useEffect } from "react/cjs/react.development";


// TODO create expand all button
export default function Employees(props) {
    //console.log(props.employees.employees, "props.employees  🐼")
    const employee = props.employees.employees
    
    return(
        <div>
            
            <Employee employee={employee}/>
        </div>
    )
}
