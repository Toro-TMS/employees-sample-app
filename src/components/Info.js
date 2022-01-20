//import React, {useState} from "react";
import styled from "styled-components"

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="down" ref={ref} {...props} />;
//   });
export default function Info(props) {
    //console.log(props.address, "🦑")
    const displayDetail = () => {
        const display = document.getElementById(`${props.employeeId}`)
        display.style.visibility = "hidden" ? display.style.visibility="visible":display.style.visibility = "hidden"
    }
    const closeDetail= () => {
        document.getElementById(`${props.employeeId}`).style.visibility = "hidden";
    }
    return(
        <div>
            <DetailsIcon onClick={displayDetail}> ⬇️ </DetailsIcon>
            <DetailsDiv id={props.employeeId} className="details">
            <button onClick={closeDetail}> ⓧ </button>
            <ul>
           <li> {props.address.streetAddress} -  {props.address.city}, {props.address.state} {props.address.zipCode} </li>
            <li>{props.phone}</li>
            </ul>
            <p>{props.bio}</p>
            </DetailsDiv>
        </div>
    )
}
//<ExitDetail onClick={closeDetail}> ⓧ </ExitDetail>
const DetailsIcon = styled.button`
        font-size: 1rem;

`

const DetailsDiv = styled.div`
        visibility: hidden;
`