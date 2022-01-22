import { Button } from "@material-ui/core"
import styled from "styled-components"

export default function Info(props) {
    //console.log(props.address, "🦑")
    const displayDetail = () => {
        document.getElementById(`${props.employeeId}`).style.visibility = "visible";
    }
    const closeDetail= () => {
        document.getElementById(`${props.employeeId}`).style.visibility = "hidden";
    }
    return(
        <div>
            <Button onClick={displayDetail}> ⬇️ </Button>
            <DetailsDiv id={props.employeeId} className="details">
            <Button onClick={closeDetail}> ⓧ </Button>
            <ul>
           <li> {props.address.streetAddress} -  {props.address.city}, {props.address.state} {props.address.zipCode} </li>
            <li>{props.phone}</li>
            </ul>
            <p>{props.bio}</p>
            </DetailsDiv>
        </div>
    )
}

const DetailsDiv = styled.div`
        visibility: hidden;
`