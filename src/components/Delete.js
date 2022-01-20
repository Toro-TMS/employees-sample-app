import { useState } from "react"

export default function Delete() {
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