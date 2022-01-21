import Info from "./Info"
import Delete from "./Delete"
//import React, { useState } from "react"
//import styled from "styled-components"




export default function Employee(props){
   //console.log(props.employee, "👾")
   const displayDetail = () => {
      let collapse = document.querySelectorAll(".details")
      for (let i = 0; i< collapse.length; i++){
          collapse[i].style.visibility = "visible"
      }
   }

   const employeeList = props.employee?.map((employeeData, index) => {
        return(
            <li key = {index}>
                <img className="avatar" src={employeeData.avatar} alt={employeeData.firstName} width="200" height="150"/>
                <b>{employeeData.firstName} {employeeData.lastName}</b> - {employeeData.email} 
                <Delete employeeId={employeeData.id} />
                <Info address={employeeData.address} employeeId={employeeData.id} phone={employeeData.phone} bio={employeeData.bio}/>
                
             </li>
         )
        })
    
        return(
            <div>
                <button onClick={displayDetail}>View all info </button>
        {employeeList}  
        </div>
    )
}


//id={employeeData.id}