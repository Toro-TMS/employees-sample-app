//import Employee from "./Employee"
//import { useState, useEffect } from "react/cjs/react.development";

export default function Employees(props) {
    console.log(props, "🐼")
    const employeeList = props.employees.map((employeeData, index) => {
        return(
          <li key = {index}>
             {employeeData.firstName}, {employeeData.lastName}
          </li>
        )
      })
    return(
        <div>
        <ul className="list">
          <li>{employeeList}</li>
      </ul>
      
            
        </div>
    )
}
//<Employee employee={employeeList}/>