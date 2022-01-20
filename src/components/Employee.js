import Info from "./Info"
import Delete from "./Delete"
//import React, { useState } from "react"
//import styled from "styled-components"



// TODO create expand button for details div
export default function Employee(props){
   //console.log(props.employee, "👾")
   

   const employeeList = props.employee?.map((employeeData, index) => {
    // const remove = () => {
    //     document.getElementsById(`${employeeData.id}`).style.visibility = "hidden";
    //  }
        return(
            <li key = {index} id={employeeData.id}>
                <img className="avatar" src={employeeData.avatar} alt={employeeData.firstName} width="200" height="150"/>
                <b>{employeeData.firstName} {employeeData.lastName}</b> - {employeeData.email} 
                <Delete employeeId={employeeData.id} />
                <Info address={employeeData.address} employeeId={employeeData.id} phone={employeeData.phone} bio={employeeData.bio}/>
                
             </li>
         )
        })
    
        return(
            <div>
        {employeeList}  
        </div>
    )
}

//<Display onClick={displayAll}>View All Details </Display>
//const Display = styled.button`
//        font-size: 1rem;
//`