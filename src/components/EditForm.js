import React, {useState} from "react"
import { Button } from "@material-ui/core"


export default function EditForm({closeDialog, currentEmployee}) {
    const [employee, setEmployee] = useState(currentEmployee)
    const handleFirstName = (value) => setEmployee({...employee, firstName: value})
    const handleLastName = (value) => setEmployee({...employee, lastName: value})
    const handleEmail = (value) => setEmployee({...employee, email: value})
    
    const UpdateEmployee = (e) =>{
        e.preventDefault()
        fetch(`api/employees/${currentEmployee.id}`, {
            method: 'PUT', 
            body: JSON.stringify({employee})
        })
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((error) => console.log(error, "👹"))
    }
    return(
        <div>
            <Button onClick={closeDialog}>🅇</Button>
            <form>
                <input type="text" placeholder="first name" defaultValue={employee.firstName} onChange={(ev) => handleFirstName(ev.target.value)}/>
                <input type="text" placeholder="last name" defaultValue={employee.lastName} onChange={(ev) => handleLastName(ev.target.value)}/>
                <input type="text" placeholder="email" defaultValue={employee.email} onChange={(ev) => handleEmail(ev.target.value)}/>
            </form>
            <Button onClick={(e) => UpdateEmployee(e)}>💾</Button>
        </div>
    )
}