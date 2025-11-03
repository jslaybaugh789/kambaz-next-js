import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import {FaTrash } from "react-icons/fa6";
import AssignmentDeleteModal from "./AssignmentDeleteModal";
import { useState } from "react";
export default function AssignmentControlButtons({ assignmentId, deleteAssignment, }: 
  { assignmentId: string; deleteAssignment: (assignmentId: string) => void; 
  } ) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className="float-end">
      <FaTrash className="text-danger me-3 mb-1" onClick={() => handleShow()}/>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <AssignmentDeleteModal show={show} handleClose={handleClose} dialogTitle="Delete Assignment?"
             assignmentId={assignmentId} deleteAssignment={deleteAssignment} />
    </div> );}