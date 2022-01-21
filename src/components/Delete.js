//import { useState } from "react"
import { Button } from "@material-ui/core"

// DELETES employee on the back end, needs to be reflected/page refresh on the front end
export default function Delete(props) {
    console.log(props, "❌")
    //const [employeeInfo, setEmployeeInfo] = useState([])
    const handleDelete = (e) => {
        fetch(`api/employees/${props.employeeId}`, {method: 'DELETE'})
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    
    }
    return(
        <Button onClick={handleDelete}>
            🗑
        </Button>
    )
}