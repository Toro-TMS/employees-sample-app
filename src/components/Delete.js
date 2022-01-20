//import { useState } from "react"
import { Button } from "@material-ui/core"

// TODO FINISH DELETE FUNCTION
export default function Delete(props) {
    console.log(props.id, "❌")
    //const [employeeInfo, setEmployeeInfo] = useState([])
    const handleDelete = (e) => {
        fetch(`api/employees/${props.id}`, {method: 'DELETE'})
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