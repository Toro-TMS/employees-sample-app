import Info from "./Info"
import Delete from "./Delete"
//import React, { useState } from "react"
import styled from "styled-components"



// TODO create expand button for details div
export default function Employee(props){
   //console.log(props.employee, "👾")
   const displayAll = () => {
   const section = document.getElementsByClassName("details")
   section.style.visibility = "visible";
}

   const employeeList = props.employee?.map((employeeData, index) => {
        return(
            <li key = {index} >
                <img className="avatar" src={employeeData.avatar} alt={employeeData.firstName} width="200" height="150"/>
                <b>{employeeData.firstName} {employeeData.lastName}</b> - {employeeData.email} <Delete employeeId={employeeData.id}/>
                <Info address={employeeData.address} employeeId={employeeData.id} phone={employeeData.phone} bio={employeeData.bio}/>
                
             </li>
         )
        })
    
        return(
            <div>
                <Display onClick={displayAll}>View All Details </Display>
        {employeeList}  
        </div>
    )
}
const Display = styled.button`
        font-size: 1rem;
`