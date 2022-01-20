

export default function Employee(props){
   console.log(props.employee.employees, "👾")
   const employeeList = props.employee.employees.map((employeeData, index) => {
        return(
            <li key = {index}>
                {employeeData.firstName}, {employeeData.lastName}
             </li>
         )
     })
    return(
        <div>
        {employeeList}  
        </div>
    )
}
//<li>{employeeList}</li>