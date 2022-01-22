
import { BiEditAlt } from "react-icons/bi";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import EditForm from "./EditForm";
import React, {useState} from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function Edit(props) {
    //console.log(props.data)
    const [person, setPerson] = useState(props.data)
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
        //console.log(props.data, "⛱")
      };
      const handleClose = () => {
        setOpen(false);
       //console.log(props.data, "👁‍🗨")
      };
    return(
        <div>
        <BiEditAlt onClick={handleClickOpen}/>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <EditForm closeDialog={handleClose} currentEmployee={person}/>
        </Dialog>
        </div>
    )
}
//singlePerson={}