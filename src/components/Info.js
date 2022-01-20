

export default function Info(props) {
    //console.log(props.address, "🦑")
    return(
        <div>
            {props.address.streetAddress} -  {props.address.city}, {props.address.state} {props.address.zipCode}
        </div>
    )
}