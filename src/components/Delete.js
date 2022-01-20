import { useState } from "react"

// TODO FINISH DELETE FUNCTION
export default function Delete(props) {
    console.log(props.id, "❌")
    const [employeeInfo, setEmployeeInfo] = useState([])
    const handleDelete = (e) => {
        //DELETE employees/:id
        // async function deleteEvent() {
        // }
        setEmployeeInfo([])
    }
    return(
        <div>
            🗑
        </div>
    )
}