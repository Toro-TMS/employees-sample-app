import Info from "./Info"

export default function Employee(props){
   console.log(props.employee, "👾")
   const employeeList = props.employee?.map((employeeData, index) => {
        return(
            <li key = {index}>
                <img className="avatar" src={employeeData.avatar} alt={employeeData.firstName} width="200" height="150"/>
                <b>{employeeData.firstName} {employeeData.lastName}</b> - {employeeData.email}
                <p>{employeeData.phone} </p>
                <div>
                    {employeeData.bio}
                </div>
                <Info address={employeeData.address} id={employeeData.id}/>
             </li>
         )
        })
        return(
            <div>
        {employeeList}  
        </div>
    )
}
