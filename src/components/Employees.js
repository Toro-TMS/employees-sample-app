import Employee from "./Employee"
//import { useState, useEffect } from "react/cjs/react.development";

export default function Employees(props) {
    console.log(props.employees.employees, "props.employees.employees  🐼")
    const employee = props.employees
    return(
        <div>
            <p>one employee</p>
            <Employee employee={employee}/>
        </div>
    )
}
//
//const employee = props.employees
