import Info from "./Info"
import Delete from "./Delete"
import { useState } from "react"

// TODO create expand button for details div
export default function Employee(props){
    const [open, setOpen] = useState(true)
   //console.log(props.employee, "👾")
   const hideEmployee = (e) => {
    console.log(e, "is deleted")
}
   const employeeList = props.employee?.map((employeeData, index) => {
        return(
            <li key = {index} >
                <img className="avatar" src={employeeData.avatar} alt={employeeData.firstName} width="200" height="150"/>
                <b>{employeeData.firstName} {employeeData.lastName}</b> - {employeeData.email}
                <div className="details">
                <p>{employeeData.phone} </p>
                    {employeeData.bio}
                <Info address={employeeData.address} id={employeeData.id}/>
                </div>
                <Delete id={employeeData.id} onClick={hideEmployee}/>
             </li>
         )
        })
    
        return(
            <div>
        {employeeList}  
        </div>
    )
}
