import Employee from "./Employee"




export default function Employees(props) {
    //console.log(props.employees.employees, "props.employees  🐼")
    const employee = props.employees.employees
    
    
    return(
        <div>
            
            <Employee employee={employee} />
        </div>
    )
}
