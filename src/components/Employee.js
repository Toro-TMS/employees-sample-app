import Info from "./Info"
import Delete from "./Delete"

// TODO create expand button for details div
export default function Employee(props){
   //console.log(props.employee, "👾")
   const employeeList = props.employee?.map((employeeData, index) => {
        return(
            <li key = {index}>
                <img className="avatar" src={employeeData.avatar} alt={employeeData.firstName} width="200" height="150"/>
                <b>{employeeData.firstName} {employeeData.lastName}</b> - {employeeData.email}
                <div className="details">
                <p>{employeeData.phone} </p>
                    {employeeData.bio}
                <Info address={employeeData.address} id={employeeData.id}/>
                </div>
                <Delete id={employeeData.id}/>
             </li>
         )
        })
        return(
            <div>
        {employeeList}  
        </div>
    )
}
