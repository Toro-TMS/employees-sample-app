//import Info from "./Info"

export default function Employee(props){
   console.log(props.employee, "👾")
   const employeeList = props.employee?.map((employeeData, index) => {
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
//<Info info={employeeData}/>
//<li>{employeeList}</li>