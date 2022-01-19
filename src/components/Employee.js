

export default function Employee(props){
   console.log(props, "👾")
   const employeeList = props.employees.map((employeeData, index) => {
    return(
      <li key = {index}>
         {employeeData.firstName}, {employeeData.lastName}
      </li>
    )
  })
    return(
        <div>
        <ul className="list">
<li>{employeeList}</li>
</ul>   
        </div>
    )
}