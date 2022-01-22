//import { useState } from "react"
import { Button } from "@material-ui/core"

// DELETES employee on the back end, needs to be reflected/page refresh on the front end
export default function Delete(props) {
    //console.log(props.employeeId, "❌")
//    const [employeeInfo, setEmployeeInfo] = useState(props.data)
    // const hideEmployee=() =>{
    //     const employee = document.getElementsByClassName(`${props.employeeId}`)
    //     employee.style.visibility = "hidden";
    // }
    const removeBackend=() =>{
        fetch(`api/employees/${props.employeeId}`, {method: 'DELETE'})
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((error) => console.log(error))
    }
   
    return(
        <Button onClick={removeBackend}>
            🗑
        </Button>
    )
}